type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
};

export default function Button({ children, variant = "primary", href }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-colors";

  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-dark"
      : "bg-neutral-100 text-neutral-900 hover:bg-neutral-50";

  const classes = `${baseStyles} ${variantStyles}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}