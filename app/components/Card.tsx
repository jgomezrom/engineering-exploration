type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-neutral-900">
      {children}
    </div>
  );
}
