const rateLimit = require('express-rate-limit');

/**
 * Standard configuration for rate limit handlers.
 * Sends structured JSON rather than default HTML responses.
 */
const rateLimitHandler = (message) => {
  return (req, res) => {
    res.status(429).json({
      success: false,
      message: message || 'Too many requests from this IP. Please try again later.'
    });
  };
};

/**
 * General rate limiter for all API endpoints.
 * Limits each IP to 100 requests per 15 minutes.
 */
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  handler: rateLimitHandler('Too many API requests. Please try again in 15 minutes.')
});

/**
 * Limiter for the chatbot AI interaction endpoint.
 * Limits each IP to 30 interactions per 15 minutes.
 */
const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30,
  handler: rateLimitHandler('Too many project advisor queries. Please pause and try again in 15 minutes.')
});

/**
 * Strict limiter for lead creation submissions to prevent spam.
 * Limits each IP to 5 submissions per 15 minutes.
 */
const leadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  handler: rateLimitHandler('Lead submission rate limit exceeded. Please try again in 15 minutes.')
});

module.exports = {
  apiLimiter,
  chatLimiter,
  leadLimiter
};
