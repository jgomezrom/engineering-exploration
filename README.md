# Engineering Exploration

A website to help students figure out which engineering field might actually fit them, built as a personal project by **Jaime Gomez**, a student at MSU.

**Live site:** https://engineering-exploration-two.vercel.app

## Why this exists

Back in high school I remember looking at a long list of engineering majors and having no real idea what any of them actually meant day to day. Most of what I could find online was either a thin list of job titles or straight-up recruiting copy. This site is my attempt to build the resource I wish I'd had: honest, specific, no-hype descriptions of what these fields are actually like, including the parts that aren't glamorous.

## What's on the site

- **5 engineering fields** (mechanical, electrical, civil, biomedical, software), each with a real day-to-day description, common misconceptions, career paths, advantages and challenges, and a self-reflection checklist
- **A stat sheet per field** — math/physics intensity, hands-on vs. desk work, regulatory burden, and job-market uncertainty, each rated from that field's own written content, with the reasoning shown, not just a made-up score
- **Sourced median salary data** per field, pulled from the U.S. Bureau of Labor Statistics with the exact source and date cited, plus a caveat that it's a national median, not a promise
- **A side-by-side comparison page** across all 5 fields
- **An 18-question interest quiz** with percentage-based scoring per field (not a single forced answer) and a radar chart showing how you compare across all 5
- **3 hands-on challenges** (a catapult, a spaghetti bridge load test, a basic LED circuit) with real materials lists and step-by-step instructions
- Custom illustrations, icons, and the radar chart are all hand-built SVG — no stock photos, no icon library
- Accessible: checked color contrast, heading structure, and keyboard focus states, not just eyeballed
- Responsive from 375px phones up through ultra-wide monitors

## Tech stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS v4** for styling
- No backend, no database — it's a fully static site, generated at build time
- No UI kit or charting library — the radar chart and every illustration are plain SVG built by hand

## How this was actually built

I built this using **Claude Code**, Anthropic's AI coding assistant, as a pair-programming tool. To be straightforward about the split: Claude wrote most of the actual code from my direction. What I did was drive the whole process — deciding what to build and in what order, reviewing every diff before committing, testing every feature myself in the browser (including on mobile and in dark mode), catching things that felt off or too generic, making the calls Claude flagged as needing a real decision (data accuracy, tone, design direction), and deploying and debugging the live site on Vercel myself.

I didn't type most of these lines of code. But I know why every part of this site exists, what tradeoff each decision involved, and how to debug it when something breaks, because I was the one steering it the whole way through. That's the part I actually learned.

## What I learned

- How Next.js's App Router actually works: routing, layouts, `generateStaticParams` for pre-building pages, and why a Client Component (like the interactive quiz) can't export its own page metadata and needs a separate layout file to carry it
- How to think about accessibility as something you actually test, not just something that looks fine — measuring real color contrast ratios, checking heading hierarchy, and confirming keyboard focus works, instead of assuming it does
- A real CSS bug that took actual debugging: a wide comparison table was blowing out the entire page's width on mobile, traced back to how flex containers handle `min-width` by default
- Why sourcing matters: I had this project verify salary numbers against the actual BLS pages instead of trusting a search summary, and it caught an earlier mistake where a sitemap pointed at the wrong domain because a similarly-named site already existed
- That it's easy to accidentally write "advertising" language even when you're trying to be honest, and worth specifically reviewing your own content for it
- The basics of deploying to Vercel, environment variables, and why a sitemap needs to know its own real production URL to be useful at all

## Running it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Known limitations

- Salary data is U.S.-only and reflects national medians, not entry-level pay or any specific region
- Only 3 hands-on challenges exist so far, covering mechanical, civil, and electrical engineering — biomedical and software don't have one yet
- The field "stat sheet" ratings (math intensity, hands-on work, etc.) are my own qualitative read of the written content, not an independent measurement — each field page shows the reasoning behind its own ratings
