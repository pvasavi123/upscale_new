# Upscale — Website + AI Project Advisor

React + Vite marketing site with the Upscale AI Project Advisor chatbot widget.

## Project layout

```
index.html            Loads the site and the chatbot widget
src/                  React app (hash-based routing)
public/chatbot.js     Chatbot widget (vanilla JS, no build step)
public/chatbot.css    Chatbot styling
public/chatbot-knowledge.json   SINGLE SOURCE OF TRUTH for the chatbot's
                      templates, feature catalog, pricing rules and copy
api/                  Vercel serverless functions (the chatbot backend)
api/_lib/knowledge.js AUTO-GENERATED from chatbot-knowledge.json at build time
scripts/              Build helpers
chatbot-production/   Standalone Express version of the same backend, for
                      local development only. NOT deployed to Vercel.
```

## Deploying to Vercel

1. Push to the connected GitHub repo — Vercel builds automatically.
2. No environment variables are required. The chatbot works out of the box
   using its built-in rule-based logic.
3. Optionally add any of the variables in `.env.example`
   (Vercel → Project → Settings → Environment Variables), then redeploy.

Verify a deployment by opening `https://<your-domain>/api/health` — it should
return `{"status":"OK", ...}`. If that 404s, the serverless functions did not
deploy and the chatbot will fall back to local logic in the browser.

### API endpoints

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/api/chatbot` | POST | Conversation steps: `greeting`, `features`, `tech` |
| `/api/estimate` | POST | Deterministic effort / cost / timeline calculation |
| `/api/leads` | POST | Validates a lead, records it, returns the WhatsApp handoff URL |
| `/api/health` | GET | Deployment check |

### Where leads go

Vercel's filesystem is read-only and ephemeral, so the SQLite database used by
`chatbot-production/` cannot run there. On Vercel each lead is:

1. written to the function logs (Vercel dashboard → Deployment → Functions), and
2. POSTed as JSON to `LEAD_WEBHOOK_URL` if you set that variable
   (Zapier, Make, a Google Apps Script, or your own endpoint).

The pre-filled WhatsApp handoff link remains the primary channel and always works.

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
```

The chatbot degrades gracefully: if no backend is reachable it runs the same
recommendation and pricing rules in the browser, so the full conversation still
completes.

To exercise the real backend locally, either run `vercel dev` (uses the same
serverless functions as production) or start the standalone Express server:

```bash
cd chatbot-production
npm install
npm start            # http://localhost:5000, proxied by vite.config.js
```

## Editing the chatbot's knowledge

Edit `public/chatbot-knowledge.json` only. `api/_lib/knowledge.js` is regenerated
from it on every build; run `npm run gen:knowledge` to refresh it by hand.
