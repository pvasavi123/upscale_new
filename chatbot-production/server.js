require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');

// Import Middleware
const { apiLimiter, chatLimiter, leadLimiter } = require('./middleware/rateLimiter');
const { validateChatbot, validateLead } = require('./middleware/validator');

// Import Services
const recommendationService = require('./services/recommendationService');
const estimationService = require('./services/estimationService');
const leadService = require('./services/leadService');

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware: Helmet & CSP
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
        imgSrc: ["'self'", "data:", "https://*"],
        connectSrc: ["'self'"]
      }
    },
    crossOriginEmbedderPolicy: false
  })
);

// CORS configuration - Allow all in development, restrict in production via ALLOWED_ORIGINS
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:5000', 'http://127.0.0.1:5000'];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or same-origin)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV !== 'production') {
        return callback(null, true);
      }
      return callback(new Error('Blocked by CORS policy'));
    },
    credentials: true
  })
);

// Body Parsers with payload size limits to prevent DoS
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Serve frontend static assets securely
app.use(express.static(path.join(__dirname, '..', 'public')));

// Global API rate limiting
app.use('/api', apiLimiter);

/**
 * POST /api/chatbot
 * Communicates with Gemini API securely from the backend.
 * Expects structured JSON response and validates recommended techs/modules.
 */
app.post('/api/chatbot', chatLimiter, validateChatbot, async (req, res, next) => {
  const { step, message, answers } = req.body;
  
  try {
    let result;
    if (step === 'greeting') {
      result = await recommendationService.analyzeIdea(message);
    } else if (step === 'features') {
      result = await recommendationService.suggestFeatures(answers);
    } else if (step === 'tech') {
      result = await recommendationService.recommendTechnologies(answers);
    } else {
      return res.status(400).json({ success: false, message: 'Invalid conversation step.' });
    }

    res.json({
      success: true,
      step,
      data: result
    });
  } catch (err) {
    next(err); // Delegate to safe error handler
  }
});

/**
 * POST /api/estimate
 * Deterministic cost calculation.
 */
app.post('/api/estimate', (req, res, next) => {
  try {
    const { projectType, features } = req.body;
    const estimate = estimationService.calculateEstimate(projectType, features);
    res.json({
      success: true,
      estimate
    });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/leads
 * Saves submitted lead data and returns deterministic pricing & WhatsApp handoff link.
 */
app.post('/api/leads', leadLimiter, validateLead, async (req, res, next) => {
  try {
    const leadData = req.body;
    const { answers, features } = leadData;

    // 1. Deterministically calculate estimate on backend
    const estimate = estimationService.calculateEstimate(answers.project_type, features);

    // 2. Persist lead in database
    const dbResult = await leadService.saveLead(leadData, estimate);

    // 3. Generate secure WhatsApp handoff URL
    const whatsappUrl = leadService.generateWhatsAppHandoffUrl(leadData, estimate);

    res.status(201).json({
      success: true,
      message: 'Lead captured successfully.',
      leadId: dbResult.id,
      estimate,
      whatsappUrl
    });
  } catch (err) {
    next(err); // Delegate to safe error handler
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// 404 Route handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Resource not found.' });
});

// Production Safe Error Handling Middleware
// Never exposes sensitive stack traces or internal configuration details to the client.
app.use((err, req, res, next) => {
  console.error('SERVER ERROR LOG:', err.stack || err.message || err);
  
  res.status(500).json({
    success: false,
    message: 'An internal server error occurred. Please try again later.'
  });
});

// Start Server: Strict local loopback address during development/testing
const host = '127.0.0.1';
app.listen(PORT, host, () => {
  console.log(`Production Chatbot server is running at http://${host}:${PORT}`);
});
