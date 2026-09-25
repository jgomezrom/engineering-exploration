# Engineering Exploration

A website to help students figure out which engineering field might actually fit them, built as a personal project by **Jaime Gomez**, a student at MSU.

**Live site:** https://engineering-exploration-two.vercel.app

## Why this exists

Back in high school I remember looking at a long list of engineering majors and having no real idea what any of them actually meant day to day. Most of what I could find online was either a thin list of job titles or straight-up recruiting copy. This site is my attempt to build the resource I wish I'd had: honest, specific, no-hype descriptions of what these fields are actually like, including the parts that aren't glamorous.

## What's on the site

- **23 engineering fields**, each with a real day-to-day description, an hour-by-hour "day in the life", common misconceptions as myth/reality pairs, career paths, advantages and challenges, job outlook, and a self-reflection checklist
- **A stat sheet per field** — math intensity, hands-on vs. desk work, regulatory burden, job-market uncertainty and six more axes, each rated from that field's own written content with the source sentence cited in a code comment, not a made-up score
- **Sourced median salary data** for the 17 fields the U.S. Bureau of Labor Statistics tracks as their own occupation, each with the source, the period, and the date it was last checked. The other 6 show **no figure at all** — they say which BLS occupation actually counts that job and point there, rather than borrowing a number that isn't about them
- **9 interactive simulations** — levers, circuits, beams, gears, buoyancy, logic gates, projectiles, pendulums and heat conduction
- **A 28-question interest quiz** scoring a percentage against all 23 fields, with a radar chart, plus a shorter bonus quiz for the less familiar majors
- **12 hands-on challenges** with real materials lists, costs, time estimates and step-by-step instructions
- **Fully bilingual (English/Spanish)** — every page, every simulation, every field
- 64 pages, all statically generated
- Custom illustrations, icons and charts are hand-built SVG — no stock photos, no icon library, no charting library
- Accessible: real focus management on dialogs, keyboard traps where modals need them, checked contrast and heading structure, and `prefers-reduced-motion` respected
- Responsive from 375px phones up through ultra-wide monitors

## The engineering inside

Three of the simulations don't substitute into a textbook formula — they solve the problem numerically, the way an analysis tool does, and then check themselves against an exact answer. The error is printed on screen.

| Simulation | How it's solved | Checked against |
| --- | --- | --- |
| **Beam** (`app/lib/beamAnalysis.ts`) | Reactions from static equilibrium; shear as the running sum of loads; moment, slope and deflection each integrated from the station before it, with the far support's boundary condition enforced by correcting the starting slope | The closed-form solution — agrees to <0.001% |
| **Pendulum** (`app/lib/pendulumMotion.ts`) | Fourth-order Runge-Kutta on `θ'' = −(g/L)·sin θ`, the equation the small-angle approximation comes from | The exact period, computed from a complete elliptic integral via the arithmetic-geometric mean — agrees to <0.001% |
| **Projectile** (`app/lib/projectileMotion.ts`) | RK4 with quadratic drag, `F = ½·ρ·C_d·A·|v|²`, which couples the horizontal and vertical motion so no closed form exists | The same solver with drag disabled, against `R = v²sin(2θ)/g` — agrees to <0.001% |

The beam page draws shear and bending moment diagrams alongside the deflected shape. The pendulum plots its real motion against the textbook formula's cosine, so you can watch them drift apart — at a 45° release the textbook period is **3.84%** short, which for a pendulum clock would be about an hour a day. The projectile draws the drag path against the vacuum parabola; a 45 m/s throw of a 150 g ball loses roughly half its range to the air.

Every simulation states its assumptions on the page — Euler-Bernoulli beam theory, small deflections, no spin on the ball — because a number without its assumptions isn't worth much.

## Tests

```bash
npm test
```

22 tests covering the three solvers, using Node's built-in test runner — **no test framework added as a dependency**. They check the beam against `Pab/L` and `PL³/48EI`, the pendulum against published elliptic-integral period ratios, and the projectile's drag solution against a second integrator written independently inside the test, since agreeing with a different method is a real check while agreeing with itself is not. They also check things that must be true regardless: equilibrium holds, moment returns to zero at both supports, amplitude doesn't decay in a frictionless swing, and air never adds range.

## Tech stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS v4** for styling
- No backend, no database — it's a fully static site, generated at build time
- No UI kit, no charting library, no physics library, no test framework — the solvers, the radar chart and every illustration are hand-written
- `app/lib/` holds the numerical solvers as plain functions, separate from the UI, which is what makes them testable

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
- That a numerical answer nobody has checked isn't really an answer — every solver here gets compared against an exact solution wherever one exists, and the error goes on the page instead of staying in my head

## Running it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm test          # run the solver tests
npm run lint      # eslint
npm run build     # production build
```

## Known limitations

- Salary data is U.S.-only and reflects national medians, not entry-level pay or any specific region. Six of the 23 fields have no figure at all, because BLS doesn't publish one for them — those pages say so instead of guessing
- 12 hands-on challenges exist so far, so most of the 23 fields don't have one of their own yet
- The field "stat sheet" ratings (math intensity, hands-on work, etc.) are my own qualitative read of the written content, not an independent measurement — each field page shows the reasoning behind its own ratings
- The simulations are deliberately simplified and each page says how: the beam assumes Euler-Bernoulli theory and small deflections, the pendulum ignores air and pivot friction, and the projectile models a smooth sphere with no spin — which is most of why a real golf ball carries so much further than this would predict
- The tests cover the numerical solvers, not the UI. Rendering, layout and the animated simulations are checked by hand in the browser
