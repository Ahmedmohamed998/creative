import Image from "next/image";
import { Button15 } from "@/components/ui/Button15";
import {
  BOARD_H,
  BOARD_W,
  HERO_CARD_A,
  HERO_CARD_B,
  HERO_CYCLE,
  HERO_HOLDS,
  HERO_ICONS,
  HERO_TRANSITION,
  ICON_TRANSITION,
  cqw,
  iconCycle,
  type HeroCard,
  type HeroWaypoint,
} from "@/data/hero";

function cardWash(radiusXpx: number, radiusYpx: number) {
  const stops = [
    "#ffffff 30%",
    "rgba(253,253,251,0.75) 40%",
    "rgba(251,250,247,0.5) 50%",
    "rgba(249,248,242,0.25) 60%",
    "rgba(247,245,238,0) 70%",
  ].join(", ");
  return `radial-gradient(ellipse ${cqw(radiusXpx)} ${cqw(radiusYpx)} at 50% 50%, ${stops})`;
}

function orbitKeyframes(): string {
  const stopAt = (seconds: number) =>
    `${((seconds / HERO_CYCLE) * 100).toFixed(4)}%`;

  return HERO_ICONS.map((icon, index) => {
    const origin = icon.path[0];
    const frame = (point: HeroWaypoint) =>
      `transform:translate(-50%,-50%) translate(${cqw(point.x - origin.x)},${cqw(point.y - origin.y)}) rotate(${point.rot}deg)`;

    const stops: string[] = [];
    let elapsed = 0;

    HERO_HOLDS.forEach((hold, step) => {
      const body = frame(icon.path[step]);
      stops.push(`${stopAt(elapsed)}{${body}}`);
      stops.push(`${stopAt(elapsed + hold)}{${body}}`);
      elapsed += hold + HERO_TRANSITION;
    });

    stops.push(`100%{${frame(icon.path[HERO_HOLDS.length])}}`);

    return `@keyframes hero-orbit-${index}{${stops.join("")}}`;
  }).join("");
}

function iconFrameKeyframes(): string {
  return HERO_ICONS.flatMap((icon, index) => {
    if (!icon.anim) return [];

    const { holds } = icon.anim;
    const cycle = iconCycle(holds);
    const stopAt = (seconds: number) => `${((seconds / cycle) * 100).toFixed(4)}%`;
    const startOf = (k: number) =>
      holds.slice(0, k).reduce((total, hold) => total + hold, 0) + k * ICON_TRANSITION;

    return holds.slice(1).map((_, offset) => {
      const k = offset + 1;
      const last = k === holds.length - 1;

      const stops = [
        `0%{opacity:0}`,
        `${stopAt(startOf(k - 1) + holds[k - 1])}{opacity:0}`,
        `${stopAt(startOf(k))}{opacity:1}`,
        `${stopAt(startOf(k) + holds[k])}{opacity:1}`,
      ];

      if (last) {
        stops.push(`100%{opacity:0}`);
      } else {
        const handover = startOf(k + 1);
        stops.push(`${stopAt(handover)}{opacity:1}`);
        stops.push(`${stopAt(handover + 0.001)}{opacity:0}`);
        stops.push(`100%{opacity:0}`);
      }

      return `@keyframes hero-frame-${index}-${k}{${stops.join("")}}`;
    });
  }).join("");
}

function CardText({ card, gap = 0 }: { card: HeroCard; gap?: number }) {
  return (
    <div
      className="flex flex-col items-center text-center text-ink-pure"
      style={{ gap: gap ? cqw(gap) : undefined }}
    >
      <p className="w-full font-bold" style={{ fontSize: cqw(32), lineHeight: "normal" }}>
        {card.title}
      </p>
      <p className="w-full font-medium" style={{ fontSize: cqw(18), lineHeight: "normal" }}>
        {card.body}
      </p>
    </div>
  );
}

function DesktopScene() {
  return (
    <div
      className="relative mx-auto hidden w-full max-w-[1440px] lg:block"
      style={{ containerType: "inline-size", aspectRatio: "1440 / 1024" }}
    >
      <style dangerouslySetInnerHTML={{ __html: orbitKeyframes() + iconFrameKeyframes() }} />

      <div
        aria-hidden
        className="absolute left-1/2 top-1/2"
        style={{
          width: cqw(971.467),
          height: cqw(725.35),
          transform: "translate(-50%, -50%) rotate(15.62deg) skewX(1.21deg)",
        }}
      >
        <Image src="/assets/hero/orbit-path.svg" alt="" fill priority className="select-none" />
      </div>

      {HERO_ICONS.map((icon, index) => {
        const rest = icon.path[0];
        const frames = icon.anim ? icon.anim.frames : [icon.src];
        const frameCycle = icon.anim ? iconCycle(icon.anim.holds) : 0;
        return (
          <div
            key={icon.src}
            aria-hidden
            className="absolute"
            style={{
              left: `${(rest.x / BOARD_W) * 100}%`,
              top: `${(rest.y / BOARD_H) * 100}%`,
              width: cqw(icon.size),
              height: cqw(icon.size),
              transform: "translate(-50%,-50%)",
              animation: `hero-orbit-${index} ${HERO_CYCLE}s linear infinite`,
            }}
          >
            {frames.map((frame, k) => (
              <Image
                key={frame}
                src={frame}
                alt={icon.alt}
                fill
                sizes="12vw"
                className="object-contain"
                priority={k === 0}
                style={
                  k === 0
                    ? undefined
                    : {
                        opacity: 0,
                        animation: `hero-frame-${index}-${k} ${frameCycle}s linear infinite`,
                      }
                }
              />
            ))}
          </div>
        );
      })}

      <div
        className="absolute"
        style={{
          left: "3.13%",
          top: "15.72%",
          width: cqw(515),
          height: cqw(234),
          backgroundImage: cardWash(364.16, 165.46),
        }}
      >
        <div
          className="absolute"
          style={{
            left: cqw(8),
            top: cqw(28),
            width: cqw(515),
            height: cqw(206),
            backgroundImage: cardWash(364.16, 145.66),
          }}
        >
          <div
            className="absolute"
            style={{ left: cqw(29.71), top: cqw(36), width: cqw(440) }}
          >
            <CardText card={HERO_CARD_A} gap={11} />
          </div>
        </div>
      </div>

      <div
        className="absolute"
        style={{
          left: "62.78%",
          top: "41.02%",
          width: cqw(515),
          height: cqw(189),
          backgroundImage: cardWash(364.16, 133.64),
        }}
      >
        <div className="absolute" style={{ left: cqw(74), top: cqw(38), width: cqw(379) }}>
          <CardText card={HERO_CARD_B} />
        </div>
      </div>

      <div className="absolute" style={{ left: "43.19%", top: "47.46%" }}>
        <Button15 href="#services" fontSize={cqw(18)}>
          استكشف المزيد
        </Button15>
      </div>
    </div>
  );
}

function MobileScene() {
  const cards = [HERO_CARD_A, HERO_CARD_B];
  return (
    <div className="relative mx-auto w-full max-w-[560px] px-5 pb-14 pt-[132px] sm:px-8 lg:hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[115%] w-[135%] -translate-x-1/2 -translate-y-1/2 rotate-[15.62deg] opacity-70">
          <Image src="/assets/hero/orbit-path.svg" alt="" fill className="object-contain" />
        </div>
        {HERO_ICONS.slice(0, 6).map((icon, i) => (
          <div
            key={icon.src}
            className="absolute animate-orbit-float"
            style={{
              left: `${[3, 80, 0, 85, 4, 82][i]}%`,
              top: `${[16, 19, 45, 52, 74, 78][i]}%`,
              width: `${[46, 48, 54, 46, 42, 38][i]}px`,
              height: `${[46, 48, 54, 46, 42, 38][i]}px`,
              animationDelay: `${i * 300}ms`,
            }}
          >
            <Image src={icon.src} alt="" fill sizes="60px" className="object-contain" />
          </div>
        ))}
      </div>

      <div className="relative flex flex-col items-center gap-9">
        {cards.map((card) => (
          <div
            key={card.title}
            className="w-full rounded-[28px] bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,#ffffff_30%,rgba(247,245,238,0)_75%)] px-4 py-5 text-center text-ink-pure"
          >
            <p className="text-[22px] font-bold leading-tight sm:text-[26px]">{card.title}</p>
            <p className="mt-3 text-[14px] font-medium leading-relaxed sm:text-[16px]">{card.body}</p>
          </div>
        ))}
        <Button15 href="#services">استكشف المزيد</Button15>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-canvas">
      <div className="lg:pt-[89px]">
        <DesktopScene />
        <MobileScene />
      </div>
    </section>
  );
}

export default Hero;
