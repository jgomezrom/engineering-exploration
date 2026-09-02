type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="group relative border border-neutral-900/10 bg-white p-6 transition-colors hover:border-primary/40 dark:border-white/10 dark:bg-neutral-900">
      <span className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary opacity-0 transition-opacity group-hover:opacity-100" />
      <span className="absolute -right-px -bottom-px h-3 w-3 border-b-2 border-r-2 border-primary opacity-0 transition-opacity group-hover:opacity-100" />
      {children}
    </div>
  );
}