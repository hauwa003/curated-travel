"use client";

import { useState } from "react";

interface PremiumInputProps {
  label: string;
  type?: "text" | "email";
  placeholder?: string;
  name?: string;
  textarea?: boolean;
  rows?: number;
}

export default function PremiumInput({
  label,
  type = "text",
  placeholder,
  name,
  textarea = false,
  rows = 4,
}: PremiumInputProps) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const isActive = focused || value.length > 0;

  const baseInputClass =
    "peer w-full border-0 border-b border-text/15 bg-transparent pt-5 pb-2 font-sans text-base text-text transition-all duration-300 focus:border-transparent focus:bg-text/[0.03]";

  return (
    <div className="input-underline relative">
      {/* Floating label */}
      <label
        className={`pointer-events-none absolute left-0 font-sans uppercase tracking-[0.15em] transition-all duration-300 ${
          isActive
            ? "top-0 text-[10px] text-muted"
            : "top-5 text-xs text-text/50"
        }`}
      >
        {label}
      </label>

      {textarea ? (
        <textarea
          name={name}
          rows={rows}
          placeholder={isActive ? placeholder : undefined}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          className={`${baseInputClass} resize-none placeholder:text-text/30`}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={isActive ? placeholder : undefined}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          className={`${baseInputClass} placeholder:text-text/30`}
        />
      )}
    </div>
  );
}
