const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/generative-ai');

// Cache knowledge base file path
const knowledgePath = path.join(__dirname, '..', 'public', 'chatbot-knowledge.json');

/**
 * Loads the chatbot knowledge configuration.
 */
function loadKnowledgeBase() {
  try {
    const data = fs.readFileSync(knowledgePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Failed to load chatbot-knowledge.json in recommendation service:', err);
    throw new Error('Internal recommendation configuration loading failure.');
  }
}

/**
 * Helper to initialize the Gemini client securely.
 * Returns null if the key is not set.
 */
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'your_gemini_api_key_here') {
    return null;
  }
  // Initialize with the standard SDK
  const { GoogleGenerativeAI } = require('@google/generative-ai');
  return new GoogleGenerativeAI(apiKey);
}

/**
 * Analyzes the initial project idea using Gemini or fallback rules.
 */
async function analyzeIdea(idea) {
  const knowledge = loadKnowledgeBase();
  const templates = knowledge.projectTemplates;
  const client = getGeminiClient();

  // Local fallback matcher
  const getFallback = (msg) => {
    const lower = msg.toLowerCase();
    let templateKey = 'portfolio_website';
    if (lower.includes('shop') || lower.includes('store') || lower.includes('e-commerce') || lower.includes('sell')) templateKey = 'ecommerce';
    else if (lower.includes('ai') || lower.includes('gpt') || lower.includes('bot')) templateKey = 'ai_application';
    else if (lower.includes('food') || lower.includes('delivery')) templateKey = 'food_delivery';
    else if (lower.includes('app') || lower.includes('mobile')) templateKey = 'mobile_app';
    else if (lower.includes('learn') || lower.includes('course') || lower.includes('school')) templateKey = 'learning_management';

    const temp = templates[templateKey];
    return {
      projectCategory: temp.name,
      acknowledgement: `That sounds like a great project! An **${temp.name}** is something our team can definitely help you build. To outline the requirements, let's go through a quick questionnaire.`,
      suggestedTemplate: templateKey
    };
  };

  if (!client) {
    console.log('Gemini API key is not configured. Falling back to local rules.');
    return getFallback(idea);
  }

  try {
    const model = client.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.3
      }
    });

    const systemPrompt = `You are a triage assistant for Upscale. Given a project idea, identify the project type and return a JSON matching this schema:
    {
      "projectCategory": "Human-readable project type",
      "acknowledgement": "A polite, friendly, and concise 1-2 sentence response acknowledging the idea.",
      "suggestedTemplate": "One of: 'ecommerce', 'portfolio_website', 'ai_application', 'mobile_app', 'food_delivery', 'learning_management', 'healthcare_app', 'social_media'"
    }`;

    const prompt = `${systemPrompt}\n\nUser project idea: "${idea}"`;
    const response = await model.generateContent(prompt);
    const text = response.response.text();
    const result = JSON.parse(text);

    // Validate suggested template against catalog
    if (!templates[result.suggestedTemplate]) {
      result.suggestedTemplate = 'portfolio_website'; // safe default
    }
    return result;
  } catch (err) {
    console.error('Gemini call failed in analyzeIdea, using fallback:', err.message);
    return getFallback(idea);
  }
}

/**
 * Recommends modules/features based on questionnaire answers.
 */
async function suggestFeatures(answers) {
  const knowledge = loadKnowledgeBase();
  const pricing = knowledge.pricingRules;
  const client = getGeminiClient();

  const getFallback = () => {
    const projectTypeAnswer = answers.project_type || '';
    let match = 'portfolio_website';
    if (projectTypeAnswer.includes('Store') || projectTypeAnswer.includes('Commerce')) match = 'ecommerce';
    else if (projectTypeAnswer.includes('AI')) match = 'ai_application';
    else if (projectTypeAnswer.includes('Mobile')) match = 'mobile_app';
    else if (projectTypeAnswer.includes('Food')) match = 'food_delivery';
    else if (projectTypeAnswer.includes('Learning') || projectTypeAnswer.includes('LMS')) match = 'learning_management';
    else if (projectTypeAnswer.includes('Healthcare')) match = 'healthcare_app';
    else if (projectTypeAnswer.includes('Social')) match = 'social_media';

    const temp = knowledge.projectTemplates[match];
    const features = temp.suggestedFeatures.map(f => {
      const config = pricing.moduleEffort[f];
      return {
        key: f,
        label: config ? config.label : f,
        reason: 'Recommended as a core module for this project type.'
      };
    });

    return {
      introduction: `Based on your answers, we recommend including these core features for your ${temp.name}:`,
      suggestedFeatures: features
    };
  };

  if (!client) {
    return getFallback();
  }

  try {
    const model = client.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.3
      }
    });

    const catalogKeys = Object.keys(pricing.moduleEffort);
    const systemPrompt = `You are the Upscale AI Advisor. Based on these project answers, select 4 to 6 relevant features from our catalog keys only.
    Catalog Keys: ${JSON.stringify(catalogKeys)}
    Return JSON matching this schema:
    {
      "introduction": "Intro sentence recommending features for the project.",
      "suggestedFeatures": [
        {
          "key": "catalog_key_here",
          "reason": "One short sentence explaining why this feature is critical for their specific project."
        }
      ]
    }`;

    const prompt = `${systemPrompt}\n\nProject Discovery Answers: ${JSON.stringify(answers)}`;
    const response = await model.generateContent(prompt);
    const text = response.response.text();
    const result = JSON.parse(text);

    // Validate features against approved catalog keys
    result.suggestedFeatures = result.suggestedFeatures.filter(f => {
      const exists = !!pricing.moduleEffort[f.key];
      if (exists) {
        // Hydrate label from our knowledge base to keep it accurate
        f.label = pricing.moduleEffort[f.key].label;
      }
      return exists;
    });

    // If all were somehow filtered out, use fallback
    if (result.suggestedFeatures.length === 0) {
      return getFallback();
    }

    return result;
  } catch (err) {
    console.error('Gemini suggestFeatures failed, using fallback:', err.message);
    return getFallback();
  }
}

/**
 * Recommends technologies from approved catalog based on questionnaire answers.
 */
async function recommendTechnologies(answers) {
  const knowledge = loadKnowledgeBase();
  const catalog = knowledge.technologyCatalog;
  const client = getGeminiClient();

  const getFallback = () => {
    const projectTypeAnswer = answers.project_type || '';
    let match = 'portfolio_website';
    if (projectTypeAnswer.includes('Store') || projectTypeAnswer.includes('Commerce')) match = 'ecommerce';
    else if (projectTypeAnswer.includes('AI')) match = 'ai_application';
    else if (projectTypeAnswer.includes('Mobile')) match = 'mobile_app';
    else if (projectTypeAnswer.includes('Food')) match = 'food_delivery';
    else if (projectTypeAnswer.includes('Learning') || projectTypeAnswer.includes('LMS')) match = 'learning_management';
    else if (projectTypeAnswer.includes('Healthcare')) match = 'healthcare_app';
    else if (projectTypeAnswer.includes('Social')) match = 'social_media';

    const temp = knowledge.projectTemplates[match];
    return {
      introduction: `For your project architecture, we officially recommend using our verified technology stack:`,
      recommendations: {
        frontend: { name: temp.suggestedTech.frontend, reason: 'Provides a highly responsive, modern interface suitable for this platform.' },
        backend: { name: temp.suggestedTech.backend, reason: 'Ensures robust processing and standard API design.' },
        database: { name: temp.suggestedTech.database, reason: 'Ensures persistent storage and transactional integrity.' }
      }
    };
  };

  if (!client) {
    return getFallback();
  }

  try {
    const model = client.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.3
      }
    });

    const approvedFrontends = catalog.frontend.map(t => t.name);
    const approvedBackends = catalog.backend.map(t => t.name);
    const approvedDatabases = catalog.database.map(t => t.name);

    const systemPrompt = `You are the Upscale AI Advisor. Recommend one frontend, one backend, and one database for the project described in the answers.
    You MUST ONLY choose from these lists:
    Approved Frontends: ${JSON.stringify(approvedFrontends)}
    Approved Backends: ${JSON.stringify(approvedBackends)}
    Approved Databases: ${JSON.stringify(approvedDatabases)}
    Return JSON matching this schema:
    {
      "introduction": "Brief introduction sentence.",
      "recommendations": {
        "frontend": { "name": "approved_frontend_name", "reason": "Reason why it is chosen." },
        "backend": { "name": "approved_backend_name", "reason": "Reason why it is chosen." },
        "database": { "name": "approved_database_name", "reason": "Reason why it is chosen." }
      }
    }`;

    const prompt = `${systemPrompt}\n\nProject Discovery Answers: ${JSON.stringify(answers)}`;
    const response = await model.generateContent(prompt);
    const text = response.response.text();
    const result = JSON.parse(text);

    // Validate recommendations against approved list
    const recs = result.recommendations;
    
    const isValidFrontend = approvedFrontends.includes(recs.frontend.name);
    const isValidBackend = approvedBackends.includes(recs.backend.name);
    const isValidDatabase = approvedDatabases.includes(recs.database.name);

    // If any recommendation is unapproved, replace with default template fallback
    if (!isValidFrontend || !isValidBackend || !isValidDatabase) {
      console.warn('Gemini recommended unapproved tech. Overriding with template default.');
      const fallback = getFallback();
      if (!isValidFrontend) recs.frontend = fallback.recommendations.frontend;
      if (!isValidBackend) recs.backend = fallback.recommendations.backend;
      if (!isValidDatabase) recs.database = fallback.recommendations.database;
    }

    return result;
  } catch (err) {
    console.error('Gemini recommendTechnologies failed, using fallback:', err.message);
    return getFallback();
  }
}

module.exports = {
  analyzeIdea,
  suggestFeatures,
  recommendTechnologies
};
