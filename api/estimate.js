/**
 * POST /api/estimate
 * Deterministic effort and budget calculation.
 */
import { applyCors, rejectNonPost, readBody, fail } from './_lib/http.js';
import { calculateEstimate } from './_lib/estimation.js';

export default async function handler(req, res) {
  if (applyCors(req, res)) return;
  if (rejectNonPost(req, res)) return;

  try {
    const { projectType, features } = readBody(req);
    return res.status(200).json({ success: true, estimate: calculateEstimate(projectType, features) });
  } catch (err) {
    return fail(res, err);
  }
}
