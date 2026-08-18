import type { ReactNode } from "react";

import { cn } from "../../utils/cn";
import { ThemeToggle } from "./ThemeToggle";

export type BackgroundVariant = "grid" | "stars";

type PortfolioBackgroundProps = {
  children: ReactNode;
  /** "grid" is Option A; "stars" is Option B. */
  variant?: BackgroundVariant;
  className?: string;
};

function GridBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="aceternity-grid absolute inset-0" />
    </div>
  );
}

function StarBackground() {
  return (
    <div
      aria-hidden="true"
      className="aceternity-stars pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 dark:opacity-100"
    />
  );
}

/**
 * A theme-aware, fixed background layer for the complete portfolio.
 * Use `variant="grid"` for Option A or `variant="stars"` for Option B.
 */
export function PortfolioBackground({
  children,
  variant = "grid",
  className,
}: PortfolioBackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50",
        className,
      )}
    >
      {variant === "grid" ? <GridBackground /> : <StarBackground />}
      <ThemeToggle />
      <main className="relative z-10">{children}</main>
    </div>
  );
}
