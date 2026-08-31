/**
 * Project analysis / feature & tech recommendation.
 * Port of chatbot-production/services/recommendationService.js for Vercel.
 *
 * Gemini is OPTIONAL: without GEMINI_API_KEY set, every function falls back to
 * the deterministic rules driven by public/chatbot-knowledge.json, so the
 * chatbot works on a fresh deploy with zero environment configuration.
 */
import knowledge from './knowledge.js';

/** Maps free text to one of the knowledge-base project templates. */
function matchTemplateKey(text) {
  const lower = String(text || '').toLowerCase();
  if (/(shop|store|e-?commerce|sell|cart|retail)/.test(lower)) return 'ecommerce';
  if (/(food|delivery|restaurant|grocery)/.test(lower)) return 'food_delivery';
  if (/(learn|course|school|lms|education|student)/.test(lower)) return 'learning_management';
  if (/(health|clinic|doctor|hospital|medical|patient)/.test(lower)) return 'healthcare_app';
  if (/(social|community|feed|network|forum)/.test(lower)) return 'social_media';
  if (/(\bai\b|gpt|chatbot|\bbot\b|machine learning|\bml\b|llm)/.test(lower)) return 'ai_application';
  if (/(mobile|android|ios|\bapp\b)/.test(lower)) return 'mobile_app';
  if (/(portfolio|website|landing|blog|company site)/.test(lower)) return 'portfolio_website';
  return 'portfolio_website';
}

/** Loads the Gemini client, or null when no usable key is configured. */
async function getModel() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'your_gemini_api_key_here') return null;

  try {
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    const client = new GoogleGenerativeAI(apiKey);
    return client.getGenerativeModel({
      model: process.env.GEMINI_MODEL || 'gemini-1.5-flash',
      generationConfig: { responseMimeType: 'application/json', temperature: 0.3 }
    });
  } catch (err) {
    console.warn('Gemini SDK unavailable, using rule-based replies:', err.message);
    return null;
  }
}

async function askGemini(prompt) {
  const model = await getModel();
  if (!model) return null;
  const response = await model.generateContent(prompt);
  return JSON.parse(response.response.text());
}

/** Step 1: acknowledge the user's idea and categorise it. */
export async function analyzeIdea(idea) {
  const templates = knowledge.projectTemplates;

  const fallback = () => {
    const key = matchTemplateKey(idea);
    const temp = templates[key];
    return {
      projectCategory: temp.name,
      acknowledgement: `That sounds like a great project! A **${temp.name}** is something our team can definitely help you build. To outline the requirements, let's go through a quick questionnaire.`,
      suggestedTemplate: key
    };
  };

  try {
    const systemPrompt = `You are a triage assistant for Upscale. Given a project idea, identify the project type and return a JSON matching this schema:
{
  "projectCategory": "Human-readable project type",
  "acknowledgement": "A polite, friendly, concise 1-2 sentence response acknowledging the idea.",
  "suggestedTemplate": "One of: ${Object.keys(templates).map((k) => `'${k}'`).join(', ')}"
}`;
    const result = await askGemini(`${systemPrompt}\n\nUser project idea: "${idea}"`);
    if (!result) return fallback();

    if (!templates[result.suggestedTemplate]) result.suggestedTemplate = matchTemplateKey(idea);
    if (!result.acknowledgement) return fallback();
    return result;
  } catch (err) {
    console.error('Gemini analyzeIdea failed, using fallback:', err.message);
    return fallback();
  }
}

/** Resolves the template key from stored questionnaire answers. */
function templateKeyFromAnswers(answers) {
  return matchTemplateKey(
    [answers?.project_type, answers?.key_features, answers?.platform, answers?.target_users]
      .filter(Boolean)
      .join(' ')
  );
}

/** Step 2: recommend feature modules. */
export async function suggestFeatures(answers) {
  const pricing = knowledge.pricingRules;

  const fallback = () => {
    const temp = knowledge.projectTemplates[templateKeyFromAnswers(answers)];
    return {
      introduction: `Based on your answers, we recommend including these core features for your ${temp.name}:`,
      suggestedFeatures: temp.suggestedFeatures.map((key) => ({
        key,
        label: pricing.moduleEffort[key]?.label || key,
        reason: 'Recommended as a core module for this project type.'
      }))
    };
  };

  try {
    const catalogKeys = Object.keys(pricing.moduleEffort);
    const systemPrompt = `You are the Upscale AI Advisor. Based on these project answers, select 4 to 6 relevant features from our catalog keys only.
Catalog Keys: ${JSON.stringify(catalogKeys)}
Return JSON matching this schema:
{
  "introduction": "Intro sentence recommending features for the project.",
  "suggestedFeatures": [{ "key": "catalog_key_here", "reason": "One short sentence on why this feature matters for their project." }]
}`;
    const result = await askGemini(`${systemPrompt}\n\nProject Discovery Answers: ${JSON.stringify(answers)}`);
    if (!result) return fallback();

    // Only ever return keys that exist in our priced catalog.
    result.suggestedFeatures = (result.suggestedFeatures || [])
      .filter((f) => f && pricing.moduleEffort[f.key])
      .map((f) => ({ ...f, label: pricing.moduleEffort[f.key].label }));

    if (result.suggestedFeatures.length === 0) return fallback();
    if (!result.introduction) result.introduction = fallback().introduction;
    return result;
  } catch (err) {
    console.error('Gemini suggestFeatures failed, using fallback:', err.message);
    return fallback();
  }
}

/** Step 3: recommend the technology stack. */
export async function recommendTechnologies(answers) {
  const catalog = knowledge.technologyCatalog;

  const fallback = () => {
    const temp = knowledge.projectTemplates[templateKeyFromAnswers(answers)];
    return {
      introduction: 'For your project architecture, we officially recommend using our verified technology stack:',
      recommendations: {
        frontend: { name: temp.suggestedTech.frontend, reason: 'Provides a highly responsive, modern interface suitable for this platform.' },
        backend: { name: temp.suggestedTech.backend, reason: 'Ensures robust processing and standard API design.' },
        database: { name: temp.suggestedTech.database, reason: 'Ensures persistent storage and transactional integrity.' }
      }
    };
  };

  try {
    const approved = {
      frontend: catalog.frontend.map((t) => t.name),
      backend: catalog.backend.map((t) => t.name),
      database: catalog.database.map((t) => t.name)
    };
    const systemPrompt = `You are the Upscale AI Advisor. Recommend one frontend, one backend, and one database for the project described in the answers.
You MUST ONLY choose from these lists:
Approved Frontends: ${JSON.stringify(approved.frontend)}
Approved Backends: ${JSON.stringify(approved.backend)}
Approved Databases: ${JSON.stringify(approved.database)}
Return JSON matching this schema:
{
  "introduction": "Brief introduction sentence.",
  "recommendations": {
    "frontend": { "name": "approved_frontend_name", "reason": "Why it is chosen." },
    "backend": { "name": "approved_backend_name", "reason": "Why it is chosen." },
    "database": { "name": "approved_database_name", "reason": "Why it is chosen." }
  }
}`;
    const result = await askGemini(`${systemPrompt}\n\nProject Discovery Answers: ${JSON.stringify(answers)}`);
    if (!result || !result.recommendations) return fallback();

    // Replace any unapproved pick with the deterministic template default.
    const defaults = fallback();
    for (const layer of ['frontend', 'backend', 'database']) {
      const rec = result.recommendations[layer];
      if (!rec || !rec.name || !approved[layer].includes(rec.name)) {
        result.recommendations[layer] = defaults.recommendations[layer];
      }
    }
    if (!result.introduction) result.introduction = defaults.introduction;
    return result;
  } catch (err) {
    console.error('Gemini recommendTechnologies failed, using fallback:', err.message);
    return fallback();
  }
}
