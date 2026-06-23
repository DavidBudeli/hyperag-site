import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "blue" | "orange" | "neutral";
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-full border px-3 text-xs font-medium",
        tone === "blue" &&
          "border-primary/30 bg-primary/10 text-blue-100 shadow-[0_0_32px_rgba(37,99,235,0.16)]",
        tone === "orange" &&
          "border-accent/30 bg-accent/10 text-orange-100 shadow-[0_0_32px_rgba(255,107,44,0.14)]",
        tone === "neutral" && "border-white/10 bg-white/10 text-slate-200",
        className,
      )}
      {...props}
    />
  );
}
