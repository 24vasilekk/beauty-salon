import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  className?: string;
};

export default function SectionHeading({ eyebrow, title, className = "" }: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="font-accent text-xs uppercase tracking-[0.2em] text-black/45">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
    </div>
  );
}
