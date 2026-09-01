export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-100 bg-white dark:bg-black">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-neutral-600 dark:text-neutral-400">
        <p>© {new Date().getFullYear()} Engineering Exploration. A student project.</p>
      </div>
    </footer>
  );
}
