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
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40";

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

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}