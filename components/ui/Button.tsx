import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
  fullWidthMobile?: boolean;
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  fullWidthMobile = false,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-[0.01em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-px";
  const wide = fullWidthMobile ? "w-full sm:w-auto" : "";
  const styles =
    variant === "primary"
      ? "bg-ink text-white hover:-translate-y-0.5 hover:bg-black focus-visible:ring-black"
      : "border border-current/30 text-current hover:-translate-y-0.5 hover:bg-black/5 focus-visible:ring-white";

  return (
    <button className={`${base} ${wide} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
