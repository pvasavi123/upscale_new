/**
 * Lead handling for the Vercel deployment.
 *
 * SQLite (used by chatbot-production) cannot run here: Vercel's filesystem is
 * read-only and every invocation is ephemeral, so a .db file would be lost.
 * Instead each lead is:
 *   1. written to the function log (visible in the Vercel dashboard), and
 *   2. optionally POSTed to LEAD_WEBHOOK_URL (Zapier / Make / Sheets / your API),
 * while the pre-filled WhatsApp handoff link stays the primary channel.
 */

/** Basic server-side validation mirroring the old express-validator rules. */
export function validateLead(body) {
  const errors = [];
  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const phone = body.phone ? String(body.phone).trim() : null;

  if (!name) errors.push('Name is required.');
  else if (name.length > 100) errors.push('Name cannot exceed 100 characters.');

  if (!email) errors.push('Email is required.');
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('A valid email address is required.');

  if (phone && !/^[+]*[0-9\s-]{10,20}$/.test(phone)) errors.push('Phone number format is invalid.');

  const projectIdea = String(body.projectIdea || '').trim();
  if (projectIdea.length > 2000) errors.push('Project idea description cannot exceed 2000 characters.');

  return {
    errors,
    value: {
      name,
      email,
      phone: phone || null,
      projectIdea,
      answers: body.answers && typeof body.answers === 'object' ? body.answers : {},
      features: Array.isArray(body.features) ? body.features : [],
      technologies: body.technologies && typeof body.technologies === 'object' ? body.technologies : {}
    }
  };
}

/** Records the lead. Never throws - a storage hiccup must not block the handoff. */
export async function recordLead(lead, estimate) {
  const record = {
    receivedAt: new Date().toISOString(),
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    projectType: lead.answers.project_type || 'Other',
    projectIdea: lead.projectIdea,
    answers: lead.answers,
    features: lead.features,
    technologies: lead.technologies,
    estimatedCostMin: estimate.minCost,
    estimatedCostMax: estimate.maxCost,
    estimatedTimeline: `${estimate.weeks} weeks`
  };

  console.log('NEW CHATBOT LEAD:', JSON.stringify(record));

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
      });
      if (!response.ok) console.error('Lead webhook responded with status', response.status);
    } catch (err) {
      console.error('Lead webhook delivery failed:', err.message);
    }
  }

  return record;
}

/** Builds the pre-filled wa.me handoff link. */
export function generateWhatsAppHandoffUrl(lead, estimate) {
  const targetPhone = String(process.env.WHATSAPP_NUMBER || '9063593070').replace(/\D/g, '');
  const answers = lead.answers || {};

  const answersText = [
    `• *Project Type:* ${answers.project_type || 'N/A'}`,
    `• *Target Users:* ${answers.target_users || 'N/A'}`,
    `• *Platform:* ${answers.platform || 'N/A'}`,
    `• *User Scale:* ${answers.scale || 'N/A'}`,
    `• *Key Features Details:* ${answers.key_features || 'N/A'}`,
    `• *Integrations:* ${answers.integrations || 'None'}`,
    `• *Requested Timeline:* ${answers.timeline || 'N/A'}`,
    `• *Approx. Budget Range:* ${answers.budget_range || 'N/A'}`
  ].join('\n');

  const featuresText = lead.features?.length ? lead.features.join(', ') : 'None selected';
  const techText = lead.technologies && Object.keys(lead.technologies).length
    ? Object.entries(lead.technologies).map(([layer, tech]) => `*${layer.toUpperCase()}:* ${tech}`).join(', ')
    : 'None recommended';

  const formattedMin = estimate.minCost.toLocaleString('en-IN');
  const formattedMax = estimate.maxCost.toLocaleString('en-IN');

  const message =
    `*New Lead from Upscale Chatbot*\n\n` +
    `*Contact Info:*\n` +
    `• *Name:* ${lead.name}\n` +
    `• *Email:* ${lead.email}\n` +
    `• *Phone:* ${lead.phone || 'Not provided'}\n\n` +
    `*Project Objective/Idea:*\n${lead.projectIdea}\n\n` +
    `*Discovery Questionnaire Answers:*\n${answersText}\n\n` +
    `*Confirmed Modules:*\n• ${featuresText}\n\n` +
    `*Recommended Tech Stack:*\n• ${techText}\n\n` +
    `*Effort & Budget Estimate:*\n• Budget: ${estimate.currencySymbol}${formattedMin} - ${estimate.currencySymbol}${formattedMax} (~${estimate.weeks} weeks)`;

  const fullPhone = targetPhone.length <= 10 ? `91${targetPhone}` : targetPhone;
  return `https://wa.me/${fullPhone}?text=${encodeURIComponent(message)}`;
}
