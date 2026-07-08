interface DividerProps {
  className?: string;
  width?: string;
}

export default function Divider({ className = "", width = "w-16" }: DividerProps) {
  return <div className={`h-px bg-gold/40 ${width} ${className}`} />;
}
