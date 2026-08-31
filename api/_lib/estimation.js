/**
 * Deterministic effort / cost / timeline calculation.
 * Port of chatbot-production/services/estimationService.js for Vercel.
 */
import knowledge from './knowledge.js';

export function calculateEstimate(projectType, selectedFeatures) {
  const pricing = knowledge.pricingRules;
  let featuresToTally = Array.isArray(selectedFeatures) ? selectedFeatures : [];

  // Nothing selected: fall back to the matched template's suggested modules.
  if (featuresToTally.length === 0 && projectType) {
    const lower = String(projectType).toLowerCase();
    let templateKey = 'portfolio_website';
    if (lower.includes('store') || lower.includes('commerce')) templateKey = 'ecommerce';
    else if (lower.includes('food')) templateKey = 'food_delivery';
    else if (lower.includes('learning') || lower.includes('lms')) templateKey = 'learning_management';
    else if (lower.includes('healthcare') || lower.includes('health')) templateKey = 'healthcare_app';
    else if (lower.includes('social')) templateKey = 'social_media';
    else if (lower.includes('ai')) templateKey = 'ai_application';
    else if (lower.includes('mobile')) templateKey = 'mobile_app';

    featuresToTally = knowledge.projectTemplates[templateKey]?.suggestedFeatures || [];
  }

  let totalHours = 0;
  const modules = [];

  featuresToTally.forEach((featKey) => {
    const config = pricing.moduleEffort[featKey];
    if (config) {
      totalHours += config.hours;
      modules.push({ key: featKey, label: config.label, hours: config.hours });
    }
  });

  // Minimum billing safety window.
  if (totalHours === 0) totalHours = 40;

  const rawTotalHours = totalHours;
  totalHours = Math.round(totalHours * (pricing.overheadMultiplier || 1.25));

  return {
    modules,
    rawHours: rawTotalHours,
    totalHours,
    minCost: totalHours * pricing.hourlyRateRange.min,
    maxCost: totalHours * pricing.hourlyRateRange.max,
    // A standard developer week is assumed to be 35 hours.
    weeks: Math.max(2, Math.ceil(totalHours / 35)),
    currency: pricing.currency || 'INR',
    currencySymbol: pricing.currencySymbol || '₹',
    disclaimer: pricing.disclaimer
  };
}
