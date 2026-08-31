/**
 * POST /api/chatbot
 * Drives the conversation steps: greeting -> features -> tech.
 * Vercel serverless replacement for the /api/chatbot express route.
 */
import { applyCors, rejectNonPost, readBody, fail } from './_lib/http.js';
import { analyzeIdea, suggestFeatures, recommendTechnologies } from './_lib/recommendation.js';

export default async function handler(req, res) {
  if (applyCors(req, res)) return;
  if (rejectNonPost(req, res)) return;

  const { step, message, answers } = readBody(req);

  if (!['greeting', 'features', 'tech'].includes(step)) {
    return res.status(400).json({ success: false, message: 'Invalid conversation step.' });
  }
  if (step === 'greeting' && (typeof message !== 'string' || message.trim() === '')) {
    return res.status(400).json({ success: false, message: 'A non-empty message is required for the greeting step.' });
  }
  if ((step === 'features' || step === 'tech') && (!answers || typeof answers !== 'object' || Array.isArray(answers))) {
    return res.status(400).json({ success: false, message: 'Answers must be a key-value object for this step.' });
  }

  try {
    let data;
    if (step === 'greeting') data = await analyzeIdea(message.trim().slice(0, 2000));
    else if (step === 'features') data = await suggestFeatures(answers);
    else data = await recommendTechnologies(answers);

    return res.status(200).json({ success: true, step, data });
  } catch (err) {
    return fail(res, err);
  }
}
