import Link from "next/link";
import { ReactNode } from "react";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

// Every answer here summarizes a page that already exists on the site rather
// than introducing new claims — see the linked page for the full version.
export const faqItems: FaqItem[] = [
  {
    question: "Do I need to be good at math to be an engineer?",
    answer: (
      <>
        It depends a lot on the field — math intensity varies field to field (check any field&apos;s
        &quot;At a Glance&quot; box). It matters to some degree for all of them, but you don&apos;t
        need to already be great at it. The{" "}
        <Link href="/math" className="text-primary hover:underline">
          full course roadmap
        </Link>{" "}
        breaks down exactly what classes matter, including AP/IB options and where to find extra
        help if you&apos;re behind.
      </>
    ),
  },
  {
    question: "I don't know which field is right for me — where do I start?",
    answer: (
      <>
        Take the{" "}
        <Link href="/quiz" className="text-primary hover:underline">
          interest quiz
        </Link>{" "}
        (about 5 minutes), or browse{" "}
        <Link href="/curious" className="text-primary hover:underline">
          What Are You Into?
        </Link>{" "}
        to see which fields connect to things you already like. Neither one tells you what to
        become — they&apos;re just a starting point for what to look into further.
      </>
    ),
  },
  {
    question: "Can I switch engineering fields or majors later?",
    answer: (
      <>
        At most universities, yes — many engineering majors share the same foundational math and
        physics courses in the first year or two, which is part of why the{" "}
        <Link href="/math" className="text-primary hover:underline">
          course roadmap
        </Link>{" "}
        focuses on those shared basics first. How easy a specific switch is depends entirely on
        your school&apos;s program, so it&apos;s worth asking an academic advisor early rather
        than assuming.
      </>
    ),
  },
  {
    question: "Does this site track or save what I do?",
    answer: (
      <>
        No accounts, no ads. Two small features — bookmarking a field, and a day-streak counter —
        save a little information, but only in your own browser&apos;s local storage, never sent
        to us or anyone else. The site also uses anonymous traffic analytics (total visits, which
        pages are popular) that can&apos;t identify an individual visitor. Full breakdown on the{" "}
        <Link href="/parents-and-teachers" className="text-primary hover:underline">
          Parents &amp; Teachers
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    question: "What's the difference between an engineer and a mechanic, electrician, or scientist?",
    answer: (
      <>
        It&apos;s one of the most common mix-ups, and the answer&apos;s a little different for
        each comparison. See the full{" "}
        <Link href="/vs" className="text-primary hover:underline">
          Engineering vs. Other Careers
        </Link>{" "}
        breakdown for exactly how an engineer&apos;s role and typical path differ from the careers
        people confuse it with most.
      </>
    ),
  },
  {
    question: "Why does this site talk about the downsides of engineering too?",
    answer: (
      <>
        Because most career content online leans on hype — impressive titles, big salary numbers,
        no mention of the boring or frustrating parts. This site&apos;s whole philosophy is
        &quot;real engineering, no hype,&quot; so every field page includes its actual
        misconceptions, challenges, and what people genuinely dislike about the work, not just the
        highlight reel. See{" "}
        <Link href="/about" className="text-primary hover:underline">
          About
        </Link>{" "}
        for why.
      </>
    ),
  },
  {
    question: "Are the salary numbers on this site accurate for where I live?",
    answer: (
      <>
        Not necessarily. Every salary figure is a U.S. national median from the Bureau of Labor
        Statistics, clearly dated and sourced on each field&apos;s page — but actual pay varies a
        lot by region, industry, and experience, and even more if you&apos;re outside the U.S. See{" "}
        <Link href="/sources" className="text-primary hover:underline">
          Sources &amp; Methodology
        </Link>{" "}
        for exactly how these numbers were pulled.
      </>
    ),
  },
  {
    question: "Do I have to pick a field right now?",
    answer:
      "No. This site exists for exploring, not deciding — there's no pressure to lock in a field this early. Come back anytime as your interests change.",
  },
];
