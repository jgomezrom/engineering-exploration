import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Finding Opportunities Near You | Engineering Exploration",
  description:
    "This site doesn't know where you live, and won't ask. Here's how to actually search for clubs, competitions, and programs in your own area.",
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="max-w-2xl space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-neutral-600 dark:text-neutral-400">
          <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function OpportunitiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        Beyond this website
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        Finding Opportunities Near You
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
        This site doesn&apos;t know where you live, and it&apos;s not going to ask — there&apos;s
        no location feature here, on purpose. What it can do is tell you exactly what to search
        for and where to look, so you can find what&apos;s actually near you yourself.
      </p>

      <FadeIn as="section" className="mt-12">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          What to actually search for
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          Most of these are already mentioned across this site, gathered here in one place with
          exactly how to look for them:
        </p>
        <div className="mt-4">
          <BulletList
            items={[
              "Your school's clubs list — a STEM club, robotics team, or Science Olympiad team may already exist and just not be widely advertised. Ask a science or math teacher directly, not just the school website.",
              "\"FIRST Robotics,\" \"FIRST Tech Challenge,\" or \"FIRST LEGO League\" plus your city or region — FIRST LEGO League alone runs in about 110 countries, and FIRST Robotics Competition in around 30, so this is one of the few searches on this list likely to work outside the U.S. too.",
              "\"MATHCOUNTS\" plus your school district — a national middle school math competition, usually run through schools (U.S.-specific).",
              "\"[a nearby university] pre-college program\" or \"[a nearby university] summer engineering\" — many universities run summer programs for high schoolers, some free or low-cost.",
              "Your local library's website or a community bulletin board — some libraries and maker spaces run free STEM or electronics workshops.",
              "\"[a nearby hospital] teen volunteer program\" — a real way to get exposure to a medical setting if biomedical engineering interests you.",
              "Your local community college's dual-enrollment page — a real way to take a college-level math or science class while still in high school, sometimes at reduced cost (a U.S.-specific institution; ask a school counselor what your country's equivalent looks like).",
            ]}
          />
        </div>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Not in the U.S.?</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          Most of this site&apos;s specific program names — MATHCOUNTS, AMC, &quot;community
          college&quot; — are U.S. institutions, because that&apos;s the schooling system this
          site&apos;s author actually knows firsthand. FIRST&apos;s programs are a real exception:
          FIRST LEGO League operates in roughly 110 countries and FIRST Robotics Competition in
          around 30, so that search is worth trying wherever you are. Beyond that, the honest
          answer is that a school counselor or science teacher in your own country will know your
          local equivalents far better than this site can guess at — the underlying advice
          (&quot;look for a robotics team, a math competition, a university outreach program&quot;)
          applies everywhere, even where the specific names don&apos;t.
        </p>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          If your area doesn&apos;t have much
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          Availability varies enormously by where you live, and that&apos;s not a reflection of
          you or your effort. A few things that don&apos;t depend on location:
        </p>
        <div className="mt-4">
          <BulletList
            items={[
              "The hands-on challenges on this site — no lab or club required.",
              "Free online resources like Khan Academy and PhET simulations, both already linked from this site's math and concepts pages.",
              "AMC (American Mathematics Competitions), which many schools can administer even without an existing math team.",
              "Asking a teacher directly whether they'd help start a club — sometimes one just needs a first student to ask.",
            ]}
          />
        </div>
      </FadeIn>

      <div className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <Link href="/explore" className="text-sm font-medium text-primary hover:underline">
          ← Back to Explore Fields
        </Link>
      </div>
    </main>
  );
}
