# Satyraj Madake — Portfolio

A React + Vite + Tailwind CSS portfolio site, built from resume content, styled as a "systems dashboard."

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

### Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/shmadake/YOUR_REPO_NAME.git
git push -u origin main
```

### Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset: **Vite** (auto-detected).
3. Build command: `npm run build` — Output directory: `dist` (both auto-filled).
4. Add the `GEMINI_API_KEY` environment variable (see "AI chat widget" below — it's free) if you want the chat assistant to work.
5. Click **Deploy**.

## AI chat widget

The "Ask AI" bubble (bottom-right) is a small chatbot grounded in `src/data/resumeData.js` — it can only answer using the facts in that file, not make things up. It's powered by a Vercel Serverless Function at `api/chat.js` that calls the **Google Gemini API** (free tier, no credit card required) server-side, so no key is ever exposed in the browser and there's no billing risk.

**Setup:**
1. Get a free key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey) — sign in with Google, no card needed.
2. In your Vercel project: **Settings → Environment Variables** → add `GEMINI_API_KEY` with that value.
3. Redeploy.

**Local testing:** plain `npm run dev` (Vite) does **not** run the `/api` route. Install the Vercel CLI (`npm i -g vercel`) and run `vercel dev` instead, with a `.env` file containing `GEMINI_API_KEY=...` in the project root — that runs both the frontend and the serverless function together.

**Free tier limits (as of this writing):** Gemini 2.0 Flash's free tier allows roughly 15 requests/minute and 1,500 requests/day — far more than a portfolio site needs. If you ever exceed it, requests just fail gracefully (the widget shows an error message) rather than charging you anything, since the free tier has no billing attached unless you explicitly upgrade the project.

## Editing content

All resume content (skills, experience, projects, achievements, education, contact info) lives in one place:

```
src/data/resumeData.js
```

Edit that file to update anything on the site — no need to touch the components.

## Structure

```
api/
  chat.js        → Vercel Serverless Function proxying chat requests to the Anthropic API
src/
  components/    → one file per section (Hero, About, Skills, Experience, Projects, Achievements, Contact, Nav, Footer, AskAI)
  data/          → resumeData.js — all content
  App.jsx        → composes the page
  index.css      → global styles, Tailwind entry
```
