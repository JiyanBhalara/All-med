"use client";

import { useState, useId, KeyboardEvent } from "react";
import { Star } from "lucide-react";

type StarRatingProps = {
  value: number;
  onChange: (value: number) => void;
  size?: "md" | "lg";
  disabled?: boolean;
};

const RATING_LABELS = [
  "",
  "Poor",
  "Fair",
  "Good",
  "Very Good",
  "Excellent",
] as const;

export default function StarRating({
  value,
  onChange,
  size = "lg",
  disabled = false,
}: StarRatingProps) {
  const [hover, setHover] = useState(0);
  const groupId = useId();
  const display = hover || value;

  const starSize = size === "lg" ? "h-12 w-12" : "h-8 w-8";

  function handleKey(e: KeyboardEvent<HTMLDivElement>) {
    if (disabled) return;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      onChange(Math.min(5, (value || 0) + 1));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      onChange(Math.max(1, (value || 1) - 1));
    } else if (e.key >= "1" && e.key <= "5") {
      e.preventDefault();
      onChange(Number(e.key));
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        role="radiogroup"
        aria-label="Rating"
        aria-describedby={`${groupId}-label`}
        tabIndex={0}
        onKeyDown={handleKey}
        className="flex items-center gap-1 sm:gap-2 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
      >
        {[1, 2, 3, 4, 5].map((n) => {
          const filled = n <= display;
          return (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={value === n}
              aria-label={`${n} star${n > 1 ? "s" : ""}`}
              disabled={disabled}
              onClick={() => onChange(n)}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              className="p-1 rounded-md transition-transform duration-150 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Star
                className={`${starSize} transition-colors duration-200 ${
                  filled
                    ? "fill-accent text-accent drop-shadow-sm"
                    : "fill-transparent text-border"
                }`}
                strokeWidth={1.5}
              />
            </button>
          );
        })}
      </div>
      <p
        id={`${groupId}-label`}
        className={`text-base font-medium transition-colors min-h-[1.5rem] ${
          display ? "text-foreground" : "text-muted"
        }`}
      >
        {display ? RATING_LABELS[display] : "Tap a star to rate"}
      </p>
    </div>
  );
}
