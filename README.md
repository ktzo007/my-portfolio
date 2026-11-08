# M Naufal Azaqi — Portfolio

A responsive, dark-first personal portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS v4, and Lucide icons.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Create a Git repository and push this project.
2. Import the repository in Vercel.
3. Keep the framework preset as **Next.js**.
4. Use the default build command (`next build`) and output settings.
5. Deploy.

No environment variables are required.

## Before publishing

- Replace `https://example.com` in `app/layout.tsx` with your real portfolio domain.
- Confirm the email address in `app/page.tsx`.
- Add real project repository/live-demo URLs when you are ready. The current project previews are intentionally visual showcases and do not pretend to link to live demos.
- Add a real profile photo if you want one; the current hero uses a custom typographic monogram.

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
  package.json
  tsconfig.json
  next.config.ts
  postcss.config.mjs
  eslint.config.mjs
  README.md
```
