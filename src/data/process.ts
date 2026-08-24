export type ProcessStep = {
  n: number;
  label: string;
  body: string;
  width: number;
  copyWidth: number;
  activeFrom: number;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    n: 1,
    label: "نكتشف",
    body: "نفهم العلامة، الجمهور، السوق والأهداف.",
    width: 286,
    copyWidth: 308,
    activeFrom: 0,
  },
  {
    n: 2,
    label: "نخطط",
    body: "نحدد الاتجاه الإبداعي وخطة التنفيذ.",
    width: 233,
    copyWidth: 235,
    activeFrom: 1,
  },
  {
    n: 3,
    label: "نحول",
    body: "نحوّل الأفكار إلى هوية وتجربة ومحتوى.",
    width: 233,
    copyWidth: 246,
    activeFrom: 2,
  },
  {
    n: 4,
    label: "نطلق",
    body: "نجهز المشروع للظهور أمام الجمهور عبر القنوات المناسبة.",
    width: 318,
    copyWidth: 328,
    activeFrom: 3,
  },
];

export const PROCESS_HOLD = 1.6;

export const PROCESS_TRANSITION = 0.3;

export const PROCESS_CYCLE = Number(
  (PROCESS_STEPS.length * (PROCESS_HOLD + PROCESS_TRANSITION)).toFixed(4),
);

export const PROCESS_RAIL_STOPS = [
  { a: 71.162, b: 74.047 },
  { a: 48.564, b: 48.574 },
  { a: 24.524, b: 24.534 },
  { a: 0, b: 0.01 },
];

export const PROCESS_LIT = {
  label: "#5b3379",
  badge: "#5b3379",
  number: "#ffffff",
  body: "#1a1a1a",
} as const;

export const PROCESS_UNLIT = {
  label: "#57585b",
  badge: "#57585b",
  number: "#9d9e9f",
  body: "#57585b",
} as const;

export const PROCESS_RAIL =
  "linear-gradient(to right, #b9bcc1 var(--rail-a), #75598d var(--rail-b), #5b3379 100%)";

export const PROCESS_RAIL_VERTICAL =
  "linear-gradient(to bottom, #5b3379 0%, #75598d calc(100% - var(--rail-b)), #b9bcc1 calc(100% - var(--rail-a)))";
