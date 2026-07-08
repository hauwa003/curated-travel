interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export default function SectionLabel({
  children,
  className = "",
  align = "left",
}: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""} ${className}`}>
      <div className="h-px w-8 bg-gold" />
      <span className="text-xs font-body uppercase tracking-[0.2em] text-gold">
        {children}
      </span>
    </div>
  );
}
