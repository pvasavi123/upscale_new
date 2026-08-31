/**
 * GET /api/health - quick check that the serverless functions deployed correctly.
 */
export default function handler(req, res) {
  res.status(200).json({
    status: 'OK',
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY),
    leadWebhookConfigured: Boolean(process.env.LEAD_WEBHOOK_URL),
    timestamp: new Date().toISOString()
  });
}
