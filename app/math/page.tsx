import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../components/FadeIn";
import { fields } from "../data/fields";
import { middleSchoolSubjects, highSchoolSubjects, fieldCourseFocus, tutoringResources } from "../data/courseGuide";
import { CourseSubject, TutoringResourceType } from "../data/types";

export const metadata: Metadata = {
  title: "Do I Have to Be Good at Math? | Engineering Exploration",
  description:
    "An honest answer, plus a real course roadmap — what classes to take in middle and high school, AP and IB options, what matters most per field, and where to find extra help.",
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="max-w-2xl space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SubjectBlock({ subject }: { subject: CourseSubject }) {
  return (
    <div className="border border-neutral-900/10 p-5 dark:border-white/10">
      <h3 className="text-base font-semibold text-neutral-900 dark:text-white">{subject.subject}</h3>
      <div className="mt-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
          Standard courses
        </span>
        <div className="mt-2">
          <BulletList items={subject.standard} />
        </div>
      </div>
      {subject.advanced.length > 0 && (
        <div className="mt-4">
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            AP / IB options, if offered
          </span>
          <div className="mt-2">
            <BulletList items={subject.advanced} />
          </div>
        </div>
      )}
      {subject.note && (
        <p className="mt-4 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">{subject.note}</p>
      )}
    </div>
  );
}

const RESOURCE_TYPE_ORDER: TutoringResourceType[] = ["Free", "Low-cost or paid", "Competition & enrichment"];

export default function MathPage() {
  const highMath = fields.filter((f) => f.stats.mathIntensity === "High");
  const mediumMath = fields.filter((f) => f.stats.mathIntensity === "Medium");

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        The question everyone asks
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        Do I Have to Be Good at Math?
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
        The honest answer, and then the part most sites skip — an actual roadmap of which classes
        to take, in middle and high school, and where to get help if you&apos;re stuck.
      </p>

      <FadeIn as="section" className="mt-12">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">The honest answer</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          It depends on the field, and it depends less than you probably think. On this site&apos;s{" "}
          <Link href="/compare" className="font-medium text-primary hover:underline">
            comparison page
          </Link>
          , {highMath.length} of the {fields.length} fields — {highMath.map((f) => f.name.replace(" Engineering", "")).join(", ")} —
          rate &ldquo;High&rdquo; for math intensity. The other {mediumMath.length} —{" "}
          {mediumMath.map((f) => f.name.replace(" Engineering", "")).join(", ")} — rate
          &ldquo;Medium.&rdquo; None rate &ldquo;Low.&rdquo; So no, math doesn&apos;t disappear
          no matter which field you pick — but how central it is to your day-to-day work varies
          for real, and it&apos;s worth choosing with that in mind rather than assuming every
          field demands the same thing.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          What matters more than most people expect: math ability in engineering isn&apos;t a
          fixed trait you either have or don&apos;t. It&apos;s built the same way any other skill
          is — through repeated, structured practice over years, not a talent you&apos;re born
          with. Several fields on this site say this directly about hands-on skill, and it applies
          just as much to math: most of the comfort engineers have with math is learned during
          their education, not something they walked in already having.
        </p>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Building your course schedule
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          This is the part we wish existed when we were figuring this out — a real list of what
          classes actually help, at every level your school might offer them. Course names and
          AP/IB availability vary a lot by school, so treat this as a menu, not a checklist you
          need to complete perfectly.
        </p>

        <h3 className="mt-8 font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
          Middle School
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {middleSchoolSubjects.map((subject) => (
            <SubjectBlock key={subject.subject} subject={subject} />
          ))}
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          Worth looking into if available: <strong>MATHCOUNTS</strong> (a national math
          competition specifically for middle schoolers), a school robotics or Science Olympiad
          club, or a FIRST LEGO League team.
        </p>

        <h3 className="mt-10 font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
          High School
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {highSchoolSubjects.map((subject) => (
            <SubjectBlock key={subject.subject} subject={subject} />
          ))}
        </div>

        <div className="mt-8 border border-neutral-900/10 bg-neutral-50 p-5 dark:border-white/10 dark:bg-neutral-900">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
            Not in the U.S.?
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            AP is specifically a U.S. College Board program, and IB, while international, still
            isn&apos;t offered at every school. Many countries have their own advanced coursework
            or exam systems that serve the same purpose — A-Levels in the U.K. and many
            Commonwealth countries, the Abitur in Germany, the Baccalauréat in France, the WASSCE
            (administered by WAEC) in Nigeria and other West African countries, the ENEM in
            Brazil, Vietnam&apos;s national high school graduation exam, and many others. The
            specific program name matters far less than the underlying principle: take the most
            advanced math and physics your school actually offers, especially anything that
            reaches calculus.
          </p>
        </div>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          What matters most, by field
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          If you already have a field or two in mind, here&apos;s what to prioritize when you
          can&apos;t take everything.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {fieldCourseFocus.map((focus) => {
            const field = fields.find((f) => f.slug === focus.fieldSlug);
            if (!field) return null;
            return (
              <div key={focus.fieldSlug} className="border border-neutral-900/10 p-5 dark:border-white/10">
                <Link
                  href={`/engineering/${field.slug}`}
                  className="text-base font-semibold text-neutral-900 hover:text-primary dark:text-white"
                >
                  {field.name}
                </Link>
                <div className="mt-3">
                  <BulletList items={focus.priorityCourses} />
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          If you need extra help
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          Struggling with a class doesn&apos;t mean engineering isn&apos;t for you — it usually
          just means you haven&apos;t found the explanation that clicks for you yet. None of these
          are required. Cost and availability vary a lot by where you live.
        </p>

        <div className="mt-6 space-y-8">
          {RESOURCE_TYPE_ORDER.map((type) => (
            <div key={type}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
                {type}
              </h3>
              <div className="mt-3 space-y-4">
                {tutoringResources
                  .filter((r) => r.type === type)
                  .map((r) => (
                    <div key={r.name}>
                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">{r.name}</h4>
                      <p className="mt-1 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {r.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          None of this is a checklist you need to complete perfectly. Schools differ enormously in
          what they offer, and plenty of working engineers got where they are without taking a
          single AP or IB class. What actually matters is taking the most advanced math and
          science available to you — and not ruling yourself out of engineering because you
          assume you&apos;d need to already be &ldquo;a math person&rdquo; before you even start.
        </p>
      </FadeIn>
    </main>
  );
}
