import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 text-sm font-body uppercase tracking-[0.15em] transition-all duration-300";
  const variants = {
    primary:
      "bg-gold text-navy hover:bg-champagne",
    secondary:
      "border border-gold text-gold hover:bg-gold hover:text-navy",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
