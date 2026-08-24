import Link from "next/link";
import { cn } from "@/lib/cn";

type Bar = { left: number; width: number; height: number; top: number; radius: number };

const UPPER: Bar[] = [
  { left: 17.71, width: 21.287, height: 41.141, top: -58.61, radius: 7 },
  { left: 40, width: 21.287, height: 41.141, top: -55.67, radius: 7 },
  { left: 62.28, width: 21.287, height: 41.141, top: -55.67, radius: 7 },
  { left: 84.57, width: 30, height: 47.249, top: -57.26, radius: 9 },
  { left: 115.57, width: 30, height: 47.249, top: -57.26, radius: 9 },
  { left: 146.57, width: 21.287, height: 41.141, top: -55.67, radius: 7 },
  { left: 168.86, width: 21.287, height: 41.141, top: -55.67, radius: 7 },
  { left: 191.14, width: 21.287, height: 41.141, top: -58.61, radius: 7 },
];

const LOWER: Bar[] = [
  { left: 17.71, width: 21.287, height: 41.141, top: 69.05, radius: 7 },
  { left: 40, width: 21.287, height: 41.141, top: 66.11, radius: 7 },
  { left: 62.28, width: 21.287, height: 41.141, top: 66.11, radius: 7 },
  { left: 84.57, width: 30, height: 47.249, top: 61.59, radius: 9 },
  { left: 115.57, width: 30, height: 47.249, top: 61.59, radius: 9 },
  { left: 146.57, width: 21.287, height: 41.141, top: 66.11, radius: 7 },
  { left: 168.86, width: 21.287, height: 41.141, top: 66.11, radius: 7 },
  { left: 191.14, width: 21.287, height: 41.141, top: 69.05, radius: 7 },
];

const BASE = 18;
const em = (px: number) => `${(px / BASE).toFixed(5)}em`;

const DELAYS = [140, 100, 60, 0, 0, 60, 100, 140];

function BarRow({ bars, direction }: { bars: Bar[]; direction: "up" | "down" }) {
  const travel = direction === "down" ? em(70) : `-${em(70)}`;
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0">
      {bars.map((bar, i) => (
        <span
          key={`${direction}-${bar.left}`}
          className={cn(
            "absolute block bg-third transition-transform duration-[520ms]",
            "[transition-timing-function:var(--ease-out-soft)]",
            direction === "down"
              ? "group-hover:translate-y-[var(--travel)] group-focus-visible:translate-y-[var(--travel)]"
              : "group-hover:translate-y-[var(--travel)] group-focus-visible:translate-y-[var(--travel)]",
          )}
          style={
            {
              left: em(bar.left),
              top: em(bar.top),
              width: em(bar.width),
              height: em(bar.height),
              borderRadius: em(bar.radius),
              transform: direction === "up" ? "scaleY(-1)" : undefined,
              transitionDelay: `${DELAYS[i]}ms`,
              "--travel": travel,
            } as React.CSSProperties
          }
        />
      ))}
    </span>
  );
}

export type Button15Props = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  fontSize?: string;
};

export function Button15({ children, href = "#", className, fontSize }: Button15Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative isolate grid place-items-center overflow-hidden",
        "border-solid border-ink bg-canvas shadow-btn",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-third",
        className,
      )}
      style={{
        fontSize: fontSize ?? `${BASE}px`,
        width: em(220),
        height: em(52),
        borderRadius: em(32),
        borderWidth: em(2),
      }}
    >
      <BarRow bars={UPPER} direction="down" />
      <BarRow bars={LOWER} direction="up" />
      <span
        className={cn(
          "relative z-10 whitespace-nowrap font-normal text-ink",
          "transition-colors duration-300 [transition-delay:180ms]",
          "group-hover:text-white group-focus-visible:text-white",
        )}
        style={{ fontSize: "1em", lineHeight: 1 }}
      >
        {children}
      </span>
    </Link>
  );
}

export default Button15;
