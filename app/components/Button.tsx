import Link from "next/link";

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
    "inline-flex items-center justify-center px-6 py-3 font-medium transition-all duration-150 ease-out active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-40 disabled:active:translate-y-0 motion-reduce:transition-colors motion-reduce:active:translate-y-0";

  const variantStyles =
    variant === "primary"
      ? "border-b-[3px] border-primary-dark bg-primary text-white hover:bg-primary-dark"
      : "border border-b-[3px] border-neutral-900/15 text-neutral-900 hover:border-primary/50 hover:text-primary dark:border-white/15 dark:text-white";

  const classes = `${baseStyles} ${variantStyles}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}