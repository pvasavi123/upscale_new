const fs = require('fs');
const path = require('path');

// Cache knowledge base file path
const knowledgePath = path.join(__dirname, '..', 'public', 'chatbot-knowledge.json');

/**
 * Loads and returns the chatbot knowledge configurations.
 */
function loadKnowledgeBase() {
  try {
    const data = fs.readFileSync(knowledgePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Failed to load chatbot-knowledge.json from service:', err);
    throw new Error('Internal estimation configuration loading failure.');
  }
}

/**
 * Deterministically calculates project cost and timeline bounds.
 * Calculations are performed server-side based on rules in chatbot-knowledge.json.
 * 
 * @param {string} projectType - Selected project type template
 * @param {string[]} selectedFeatures - List of feature module keys
 * @returns {object} Calculated effort, cost and timeline metrics
 */
function calculateEstimate(projectType, selectedFeatures) {
  const knowledge = loadKnowledgeBase();
  const pricing = knowledge.pricingRules;
  
  let featuresToTally = selectedFeatures || [];
  
  // If no features selected, default to the matched template suggested features
  if (featuresToTally.length === 0 && projectType) {
    const templates = knowledge.projectTemplates;
    let templateKey = 'portfolio_website';
    
    const lowerType = projectType.toLowerCase();
    if (lowerType.includes('store') || lowerType.includes('commerce')) templateKey = 'ecommerce';
    else if (lowerType.includes('ai')) templateKey = 'ai_application';
    else if (lowerType.includes('mobile')) templateKey = 'mobile_app';
    else if (lowerType.includes('food')) templateKey = 'food_delivery';
    else if (lowerType.includes('learning') || lowerType.includes('lms')) templateKey = 'learning_management';
    else if (lowerType.includes('healthcare')) templateKey = 'healthcare_app';
    else if (lowerType.includes('social')) templateKey = 'social_media';

    if (templates[templateKey]) {
      featuresToTally = templates[templateKey].suggestedFeatures;
    }
  }

  let totalHours = 0;
  const modules = [];

  featuresToTally.forEach(featKey => {
    const config = pricing.moduleEffort[featKey];
    if (config) {
      totalHours += config.hours;
      modules.push({
        key: featKey,
        label: config.label,
        hours: config.hours
      });
    }
  });

  // Minimum billing safety window
  if (totalHours === 0) {
    totalHours = 40;
  }

  // Apply project overhead factor
  const overheadMultiplier = pricing.overheadMultiplier || 1.25;
  const rawTotalHours = totalHours;
  totalHours = Math.round(totalHours * overheadMultiplier);

  const minRate = pricing.hourlyRateRange.min;
  const maxRate = pricing.hourlyRateRange.max;

  const minCost = totalHours * minRate;
  const maxCost = totalHours * maxRate;

  // Assuming a standard developer week is 35 hours
  const estimatedWeeks = Math.max(2, Math.ceil(totalHours / 35));

  return {
    modules,
    rawHours: rawTotalHours,
    totalHours,
    minCost,
    maxCost,
    weeks: estimatedWeeks,
    currency: pricing.currency || 'INR',
    currencySymbol: pricing.currencySymbol || '₹',
    disclaimer: pricing.disclaimer
  };
}

module.exports = {
  calculateEstimate
};
