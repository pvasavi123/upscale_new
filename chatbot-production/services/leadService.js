const db = require('../db/database');

/**
 * Saves a validated lead payload securely to the SQLite database.
 * Uses parameterized queries to eliminate SQL injection risks.
 * 
 * @param {object} leadData - Lead data from the client request
 * @param {object} estimate - Deterministic estimation calculated by the backend
 * @returns {Promise<object>} Database insertion results (e.g. lead ID)
 */
function saveLead(leadData, estimate) {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO leads (
        name, email, phone, project_type, project_idea,
        answers, features, technologies,
        estimated_cost_min, estimated_cost_max, estimated_timeline
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const params = [
      leadData.name,
      leadData.email,
      leadData.phone || null,
      leadData.projectType || leadData.answers['project_type'] || 'Other',
      leadData.projectIdea,
      JSON.stringify(leadData.answers || {}),
      JSON.stringify(leadData.features || []),
      JSON.stringify(leadData.technologies || {}),
      estimate.minCost,
      estimate.maxCost,
      `${estimate.weeks} weeks`
    ];

    db.run(query, params, function (err) {
      if (err) {
        console.error('SQLite insertion error:', err.message);
        return reject(new Error('Failed to save lead to the database.'));
      }
      resolve({ id: this.lastID });
    });
  });
}

/**
 * Generates the pre-filled WhatsApp handoff link.
 * 
 * @param {object} leadData - Lead contact details and scoping
 * @param {object} estimate - Deterministic budget estimation metrics
 * @returns {string} Encoded WhatsApp wa.me redirect link
 */
function generateWhatsAppHandoffUrl(leadData, estimate) {
  const rawPhone = process.env.WHATSAPP_NUMBER || '9063593070';
  // Strip non-digits from target phone number
  const targetPhone = rawPhone.replace(/\D/g, '');

  const answers = leadData.answers || {};
  const answersText = [
    `• *Project Type:* ${answers['project_type'] || 'N/A'}`,
    `• *Target Users:* ${answers['target_users'] || 'N/A'}`,
    `• *Platform:* ${answers['platform'] || 'N/A'}`,
    `• *User Scale:* ${answers['scale'] || 'N/A'}`,
    `• *Key Features Details:* ${answers['key_features'] || 'N/A'}`,
    `• *Integrations:* ${answers['integrations'] || 'None'}`,
    `• *Requested Timeline:* ${answers['timeline'] || 'N/A'}`,
    `• *Approx. Budget Range:* ${answers['budget_range'] || 'N/A'}`
  ].join('\n');

  const featuresText = leadData.features && leadData.features.length > 0
    ? leadData.features.join(', ')
    : 'None selected';

  const techText = leadData.technologies
    ? Object.entries(leadData.technologies)
        .map(([layer, tech]) => `*${layer.toUpperCase()}:* ${tech}`)
        .join(', ')
    : 'None recommended';

  const formattedMin = estimate.minCost.toLocaleString('en-IN');
  const formattedMax = estimate.maxCost.toLocaleString('en-IN');
  const estimateText = `Budget: ${estimate.currencySymbol}${formattedMin} - ${estimate.currencySymbol}${formattedMax} (~${estimate.weeks} weeks)`;

  const whatsappMessage = `*New Lead from Upscale Chatbot*\n\n` +
    `*Contact Info:*\n` +
    `• *Name:* ${leadData.name}\n` +
    `• *Email:* ${leadData.email}\n` +
    `• *Phone:* ${leadData.phone || 'Not provided'}\n\n` +
    `*Project Objective/Idea:*\n` +
    `${leadData.projectIdea}\n\n` +
    `*Discovery Questionnaire Answers:*\n` +
    `${answersText}\n\n` +
    `*Confirmed Modules:*\n` +
    `• ${featuresText}\n\n` +
    `*Recommended Tech Stack:*\n` +
    `• ${techText}\n\n` +
    `*Effort & Budget Estimate:*\n` +
    `• ${estimateText}`;

  const encodedMsg = encodeURIComponent(whatsappMessage);
  
  // If targetPhone starts with country code, use it. Otherwise assume India code (+91)
  const fullPhone = targetPhone.length <= 10 ? `91${targetPhone}` : targetPhone;
  return `https://wa.me/${fullPhone}?text=${encodedMsg}`;
}

module.exports = {
  saveLead,
  generateWhatsAppHandoffUrl
};
