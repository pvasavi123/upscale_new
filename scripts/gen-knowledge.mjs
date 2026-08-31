/**
 * Generates api/_lib/knowledge.js from public/chatbot-knowledge.json.
 *
 * Why: Vercel serverless functions cannot reliably read files out of /public at
 * runtime, and this project is ESM ("type": "module"), so a plain JSON import is
 * awkward. Baking the knowledge base into a JS module keeps ONE source of truth
 * (the JSON) while giving the functions a dependency-free import.
 *
 * Runs automatically as part of `npm run build`.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src = resolve(root, 'public/chatbot-knowledge.json');
const out = resolve(root, 'api/_lib/knowledge.js');

const json = JSON.parse(readFileSync(src, 'utf8'));

const banner = `// AUTO-GENERATED FILE - DO NOT EDIT BY HAND.\n// Source: public/chatbot-knowledge.json\n// Regenerate with: npm run gen:knowledge\n\n`;

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, `${banner}const knowledge = ${JSON.stringify(json, null, 2)};\n\nexport default knowledge;\n`, 'utf8');

console.log(`[gen-knowledge] wrote ${out}`);
