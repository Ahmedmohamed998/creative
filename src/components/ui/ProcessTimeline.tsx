import {
  PROCESS_CYCLE,
  PROCESS_HOLD,
  PROCESS_LIT,
  PROCESS_RAIL,
  PROCESS_RAIL_STOPS,
  PROCESS_RAIL_VERTICAL,
  PROCESS_STEPS,
  PROCESS_TRANSITION,
  PROCESS_UNLIT,
  type ProcessStep,
} from "@/data/process";

const stateStart = (k: number) => k * (PROCESS_HOLD + PROCESS_TRANSITION);
const stopAt = (seconds: number) =>
  `${((seconds / PROCESS_CYCLE) * 100).toFixed(4)}%`;

const litVars = {
  "--proc-label": PROCESS_LIT.label,
  "--proc-badge": PROCESS_LIT.badge,
  "--proc-number": PROCESS_LIT.number,
  "--proc-body": PROCESS_LIT.body,
} as React.CSSProperties;

const unlitVars = {
  "--proc-label": PROCESS_UNLIT.label,
  "--proc-badge": PROCESS_UNLIT.badge,
  "--proc-number": PROCESS_UNLIT.number,
  "--proc-body": PROCESS_UNLIT.body,
} as React.CSSProperties;

function varBlock(lit: boolean) {
  const set = lit ? PROCESS_LIT : PROCESS_UNLIT;
  return `--proc-label:${set.label};--proc-badge:${set.badge};--proc-number:${set.number};--proc-body:${set.body}`;
}

function timelineKeyframes(): string {
  const lastHoldEnd = stateStart(PROCESS_RAIL_STOPS.length - 1) + PROCESS_HOLD;

  const steps = PROCESS_STEPS.filter((step) => step.activeFrom > 0).map((step) => {
    const unlitEnd = stateStart(step.activeFrom - 1) + PROCESS_HOLD;
    const litStart = stateStart(step.activeFrom);

    return [
      `@keyframes proc-step-${step.n}{`,
      `0%{${varBlock(false)}}`,
      `${stopAt(unlitEnd)}{${varBlock(false)}}`,
      `${stopAt(litStart)}{${varBlock(true)}}`,
      `${stopAt(lastHoldEnd)}{${varBlock(true)}}`,
      `100%{${varBlock(false)}}`,
      `}`,
    ].join("");
  });

  const railStops: string[] = [];
  PROCESS_RAIL_STOPS.forEach((stop, k) => {
    const body = `--rail-a:${stop.a}%;--rail-b:${stop.b}%`;
    railStops.push(`${stopAt(stateStart(k))}{${body}}`);
    railStops.push(`${stopAt(stateStart(k) + PROCESS_HOLD)}{${body}}`);
  });
  railStops.push(
    `100%{--rail-a:${PROCESS_RAIL_STOPS[0].a}%;--rail-b:${PROCESS_RAIL_STOPS[0].b}%}`,
  );

  return [...steps, `@keyframes proc-rail{${railStops.join("")}}`].join("");
}

function stepStyle(step: ProcessStep): React.CSSProperties {
  if (step.activeFrom === 0) return litVars;
  return {
    ...unlitVars,
    animation: `proc-step-${step.n} ${PROCESS_CYCLE}s linear infinite`,
  };
}

const railAnimation = `proc-rail ${PROCESS_CYCLE}s linear infinite`;

function StepHead({ step }: { step: ProcessStep }) {
  return (
    <div className="flex h-[37px] items-center gap-[8px]">
      <span
        className="grid size-[33px] shrink-0 place-items-center overflow-hidden rounded-full"
        style={{ backgroundColor: "var(--proc-badge)" }}
      >
        <span
          className="text-[20px] font-bold leading-none lg:text-[32px]"
          style={{ color: "var(--proc-number)" }}
        >
          {step.n}
        </span>
      </span>
      <span
        className="whitespace-nowrap text-[20px] font-bold leading-[normal] lg:text-[24px]"
        style={{ color: "var(--proc-label)" }}
      >
        {step.label}
      </span>
    </div>
  );
}

export function ProcessTimeline() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: timelineKeyframes() }} />

      <div className="relative hidden h-[189px] lg:ml-[7.4306%] lg:mr-[6.3889%] lg:block">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-[69px] h-[7px]"
          style={{ backgroundImage: PROCESS_RAIL, animation: railAnimation }}
        />
        <ol className="absolute inset-0 flex items-center gap-[4.5931%]">
          {PROCESS_STEPS.map((step) => (
            <li
              key={step.n}
              className="relative flex h-[189px] shrink-0 flex-col gap-[16px]"
              style={{ width: `${(step.width / 1241) * 100}%`, ...stepStyle(step) }}
            >
              <StepHead step={step} />
              <div className="relative h-[120px] pt-[43.656px]">
                <p
                  className="text-right text-[24px] font-medium leading-[normal]"
                  style={{
                    width: `${(step.copyWidth / step.width) * 100}%`,
                    maxWidth: step.copyWidth,
                    color: "var(--proc-body)",
                  }}
                >
                  {step.body}
                </p>
                <span
                  aria-hidden
                  className="absolute right-0 top-[6px] h-[10px] w-[11px]"
                  style={{ backgroundColor: "var(--proc-badge)" }}
                />
              </div>
            </li>
          ))}
        </ol>
      </div>

      <ol className="relative mx-auto flex w-full max-w-[560px] flex-col gap-8 lg:hidden">
        <span
          aria-hidden
          className="absolute bottom-4 right-[16px] top-4 w-[3px] rounded"
          style={{ backgroundImage: PROCESS_RAIL_VERTICAL, animation: railAnimation }}
        />
        {PROCESS_STEPS.map((step) => (
          <li key={step.n} className="relative pr-[52px]" style={stepStyle(step)}>
            <span
              className="absolute right-0 top-0 grid size-[33px] place-items-center rounded-full"
              style={{ backgroundColor: "var(--proc-badge)" }}
            >
              <span
                className="text-[18px] font-bold leading-none"
                style={{ color: "var(--proc-number)" }}
              >
                {step.n}
              </span>
            </span>
            <p
              className="text-[19px] font-bold leading-[normal]"
              style={{ color: "var(--proc-label)" }}
            >
              {step.label}
            </p>
            <p
              className="mt-2 text-[15px] font-medium leading-[1.5]"
              style={{ color: "var(--proc-body)" }}
            >
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}

export default ProcessTimeline;
