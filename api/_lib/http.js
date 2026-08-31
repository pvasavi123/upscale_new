/**
 * Small helpers shared by the Vercel serverless functions.
 * Replaces the express/helmet/cors middleware stack used by the standalone
 * chatbot-production server, which cannot run on Vercel.
 */

/** Applies permissive-but-scoped CORS headers. Returns true if the request was a preflight. */
export function applyCors(req, res) {
  const allowed = (process.env.ALLOWED_ORIGINS || '').split(',').map((o) => o.trim()).filter(Boolean);
  const origin = req.headers.origin;

  if (allowed.length === 0) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  } else if (origin && allowed.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return true;
  }
  return false;
}

/** Rejects anything that is not a POST. Returns true if the request was rejected. */
export function rejectNonPost(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    res.status(405).json({ success: false, message: 'Method not allowed.' });
    return true;
  }
  return false;
}

/** Vercel parses JSON bodies automatically, but be defensive about strings/undefined. */
export function readBody(req) {
  const body = req.body;
  if (!body) return {};
  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return body;
}

/** Logs the real error server-side, returns a generic message to the client. */
export function fail(res, err, status = 500) {
  console.error('API ERROR:', err && (err.stack || err.message || err));
  res.status(status).json({
    success: false,
    message: 'An internal server error occurred. Please try again later.'
  });
}
