type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  disabled,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-200 ease-out active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40 disabled:active:scale-100 motion-reduce:transition-colors motion-reduce:active:scale-100";

  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-dark hover:shadow-[0_6px_20px_-6px_rgba(59,91,219,0.5)]"
      : "bg-neutral-100 text-neutral-900 hover:bg-neutral-50 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800";

  const classes = `${baseStyles} ${variantStyles}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}