/**
 * POST /api/leads
 * Validates the lead, recalculates the estimate server-side, records the lead
 * and returns the pre-filled WhatsApp handoff URL.
 */
import { applyCors, rejectNonPost, readBody, fail } from './_lib/http.js';
import { calculateEstimate } from './_lib/estimation.js';
import { validateLead, recordLead, generateWhatsAppHandoffUrl } from './_lib/lead.js';

export default async function handler(req, res) {
  if (applyCors(req, res)) return;
  if (rejectNonPost(req, res)) return;

  try {
    const { errors, value } = validateLead(readBody(req));
    if (errors.length > 0) {
      return res.status(400).json({ success: false, message: 'Validation failed.', errors });
    }

    const estimate = calculateEstimate(value.answers.project_type, value.features);
    const whatsappUrl = generateWhatsAppHandoffUrl(value, estimate);

    // Recording must never block the handoff, so failures are swallowed and logged.
    await recordLead(value, estimate).catch((err) => console.error('recordLead failed:', err.message));

    return res.status(201).json({
      success: true,
      message: 'Lead captured successfully.',
      estimate,
      whatsappUrl
    });
  } catch (err) {
    return fail(res, err);
  }
}
