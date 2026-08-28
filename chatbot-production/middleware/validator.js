const { body, validationResult } = require('express-validator');

/**
 * Chatbot request validation rules.
 * Handles inputs for greeting, feature discovery, and tech recommendation stages.
 */
const validateChatbot = [
  body('step')
    .isIn(['greeting', 'features', 'tech'])
    .withMessage('Step must be one of greeting, features, or tech.'),
  
  body('message')
    .custom((value, { req }) => {
      if (req.body.step === 'greeting') {
        if (!value || typeof value !== 'string' || value.trim() === '') {
          throw new Error('Message is required and must be a non-empty string for the greeting step.');
        }
      }
      return true;
    })
    .trim()
    .escape(),
  
  body('answers')
    .custom((value, { req }) => {
      if (req.body.step === 'features' || req.body.step === 'tech') {
        if (!value || typeof value !== 'object' || Array.isArray(value)) {
          throw new Error('Answers must be a valid key-value object for this step.');
        }
      }
      return true;
    }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed.',
        errors: errors.array()
      });
    }
    next();
  }
];

/**
 * Lead creation validation rules.
 * Enforces fields, formats, and sanitizes input data.
 */
const validateLead = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required and cannot be empty.')
    .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters.')
    .escape(),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required.')
    .isEmail().withMessage('A valid email address is required.')
    .normalizeEmail(),

  body('phone')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ min: 10, max: 20 }).withMessage('Phone number must be between 10 and 20 digits.')
    .matches(/^[+]*[0-9\s-]*$/).withMessage('Phone number format is invalid.')
    .escape(),

  body('projectIdea')
    .trim()
    .notEmpty().withMessage('Project idea is required.')
    .isLength({ max: 2000 }).withMessage('Project idea description cannot exceed 2000 characters.')
    .escape(),

  body('answers')
    .isObject().withMessage('Discovery answers must be an object.'),

  body('features')
    .isArray().withMessage('Features must be an array of selected module keys.'),

  body('technologies')
    .isObject().withMessage('Technologies must be a key-value object mapping layers (frontend, backend, database) to recommendations.'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed.',
        errors: errors.array()
      });
    }
    next();
  }
];

module.exports = {
  validateChatbot,
  validateLead
};
