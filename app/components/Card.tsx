type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="group relative border border-neutral-900/10 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_8px_24px_-12px_rgba(59,91,219,0.25)] motion-reduce:transition-colors motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-neutral-900 dark:hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]">
      <span className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute -right-px -bottom-px h-3 w-3 border-b-2 border-r-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </div>
  );
}