import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/sources", label: "Sources & Methodology" },
  { href: "/parents-and-teachers", label: "Parents & Teachers" },
  { href: "/resources", label: "Resources" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-100 bg-white dark:border-white/10 dark:bg-black">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-neutral-600 dark:text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Engineering Exploration. A student project.</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
