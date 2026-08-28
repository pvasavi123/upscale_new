# Production-Ready Upscale AI Project Advisor Chatbot

A secure, modular, and production-ready chatbot widget for Upscale. It includes a frontend chat UI and a secure Node.js Backend-for-Frontend (BFF) to interact with the Gemini AI model without exposing API keys to the browser.

## Features

1.  **Isolated & Modular Architecture**: The chatbot widget is completely self-contained in this folder.
2.  **Secure Backend Proxy (BFF)**: Browser clients never call Gemini directly. The Gemini API key resides solely in server environment variables.
3.  **Deterministic Pricing Engine**: Pricing and timelines are calculated server-side using predefined configurations inside `chatbot-knowledge.json`, preventing AI hallucination of budgets.
4.  **Technology Catalog Validation**: Recommends technologies directly from the approved catalog and filters out unapproved options proposed by Gemini.
5.  **Safe SQL Lead Storage**: Collects customer leads and stores them in a local SQLite database using parameterized queries to prevent SQL injections.
6.  **WhatsApp Handoff Redirect**: Dynamically creates pre-formatted WhatsApp messages from captured leads.
7.  **Rate Limiting**: Defends endpoints against spamming/abuse.
8.  **XSS Protection**: Uses vanilla JavaScript element creation and text nodes to escape user/AI outputs.

---

## Folder Structure

```text
chatbot-production/
├── db/
│   └── database.js               # SQLite setup & schema definition
├── middleware/
│   ├── rateLimiter.js            # Express API rate limiters
│   └── validator.js              # Request body sanitizers and validators
├── public/
│   ├── chatbot-knowledge.json    # Approved tech catalog & pricing config
│   ├── chatbot.css               # Isolated style rules for UI widget
│   ├── chatbot.js                # State machine & REST client
│   └── index.html                # Sandbox testing HTML page
├── services/
│   ├── estimationService.js      # Pricing and timeline effort calculations
│   ├── leadService.js            # SQLite Lead persistence & WhatsApp URLs
│   └── recommendationService.js  # Gemini SDK integration & fallback matching
├── .env.example                  # Environment template
├── .gitignore                    # Git file exclusions
├── package.json                  # NPM packages config
├── server.js                     # Express server setup
└── README.md                     # Documentation (this file)
```

---

## Installation & Setup

### Prerequisites

*   Node.js (version 18 or above recommended)
*   npm (comes packaged with Node.js)

### Step 1: Install Dependencies

Navigate to the `chatbot-production` directory and install the packages:

```bash
cd chatbot-production
npm install
```

### Step 2: Configure Environment Variables

Create a `.env` file in the `chatbot-production` root directory (or copy `.env.example`):

```bash
cp .env.example .env
```

Open the `.env` file and set your credentials:

```ini
PORT=5000
GEMINI_API_KEY=your_actual_gemini_api_key
WHATSAPP_NUMBER=6304192151
```

*Note: If no `GEMINI_API_KEY` is provided, the server will log a message and fall back to local rule-based mock matching.*

---

## Running the Application

### Development Mode

Run the server with automatic file reloading:

```bash
npm run dev
```

The server will initialize the database and run at: `http://127.0.0.1:5000`. 
Open this address in your browser to interact with the sandbox chat widget.

### Production Startup

Run the application in production:

```bash
npm start
```

---

## Database Configuration

The system uses an embedded **SQLite** database file (`leads.db`) in the root of the folder.
*   **Initialization**: The database file and `leads` table are automatically created on startup if they do not exist.
*   **Accessing Data**: To view lead entries, you can use any SQLite browser (such as DB Browser for SQLite) or query it via CLI:
    ```bash
    sqlite3 leads.db "SELECT * FROM leads;"
    ```

---

## API Documentation

### 1. POST `/api/chatbot`
Processes the conversation stage.
*   **Rate Limit**: 30 requests / 15 minutes / IP.
*   **Headers**: `Content-Type: application/json`
*   **Request Body**:
    ```json
    {
      "step": "greeting" | "features" | "tech",
      "message": "Project description text (Required for greeting)",
      "answers": { "project_type": "...", ... } // (Required for features/tech)
    }
    ```
*   **Response (200 OK)**:
    ```json
    {
      "success": true,
      "step": "greeting",
      "data": {
        "projectCategory": "E-Commerce",
        "acknowledgement": "Acknowledge text...",
        "suggestedTemplate": "ecommerce"
      }
    }
    ```

### 2. POST `/api/estimate`
Calculates efforts, costs, and timeline parameters on backend.
*   **Headers**: `Content-Type: application/json`
*   **Request Body**:
    ```json
    {
      "projectType": "ecommerce",
      "features": ["authentication", "payment_integration"]
    }
    ```
*   **Response (200 OK)**:
    ```json
    {
      "success": true,
      "estimate": {
        "modules": [ { "key": "authentication", "label": "...", "hours": 20 } ],
        "rawHours": 20,
        "totalHours": 25,
        "minCost": 12500,
        "maxCost": 37500,
        "weeks": 2,
        "currency": "INR",
        "currencySymbol": "₹"
      }
    }
    ```

### 3. POST `/api/leads`
Saves lead data and constructs WhatsApp handoff redirects.
*   **Rate Limit**: 5 requests / 15 minutes / IP.
*   **Headers**: `Content-Type: application/json`
*   **Request Body**:
    ```json
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "phone": "+919876543210",
      "projectIdea": "I want to build a store",
      "answers": { "project_type": "E-Commerce / Online Store", "platform": "Web" },
      "features": ["authentication", "payment_integration"],
      "technologies": { "frontend": "React.js", "backend": "Node.js", "database": "MySQL" }
    }
    ```
*   **Response (201 Created)**:
    ```json
    {
      "success": true,
      "message": "Lead captured successfully.",
      "leadId": 1,
      "estimate": { ... },
      "whatsappUrl": "https://wa.me/916304192151?text=..."
    }
    ```

---

## Security Considerations

*   **API Key Protection**: The Gemini API key is loaded only inside `process.env`. It is never written to log files, cached, or returned to clients in any payload.
*   **SQL Injection prevention**: Raw SQL template literals are strictly avoided. All database queries execute via parameterized SQLite bindings.
*   **Cross-Site Scripting (XSS)**:
    *   **Backend**: Input string variables are parsed and escaped in `middleware/validator.js` via `express-validator`.
    *   **Frontend**: All message formatting is built dynamically using `document.createElement`, inserting text via `.textContent` or `.createTextNode`.
*   **Network Security Headers**: Enforces strict security configuration using `helmet` to set CSP, Frame-Options (anti-clickjacking), and Sniff blockers.
*   **Production Error Handling**: Stack traces are hidden from users. General server issues return a generic HTTP 500 error, while details are outputted to the server logs.

---

## Production Deployment Guidelines

1.  **SSL/TLS**: Ensure the server runs behind a reverse proxy (like Nginx) or a hosting provider (like AWS, Heroku, or Render) that terminates SSL/TLS, ensuring all requests are encrypted.
2.  **Allowed Origins**: Update the `ALLOWED_ORIGINS` environment variable in production to only whitelist your production site:
    ```env
    ALLOWED_ORIGINS=https://upscaleitservices.com
    ```
3.  **Process Manager**: Use a Node process manager like **PM2** to run the server in the background:
    ```bash
    npm install -g pm2
    pm2 start server.js --name "upscale-chatbot"
    ```
4.  **Database Backup**: Ensure the `leads.db` file is regularly backed up or consider migrating database connections to PostgreSQL/MySQL if horizontal server scaling is introduced.
