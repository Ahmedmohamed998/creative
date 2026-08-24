export const PX_TO_CQW = 100 / 1440;
export const cqw = (px: number) => `${(px * PX_TO_CQW).toFixed(4)}cqw`;

export const BOARD_W = 1440;
export const BOARD_H = 1024;

export const HERO_HOLDS = [2, 2.02, 2.03, 2.04, 2.05, 2.06, 2.07, 2.08, 2.09];

export const HERO_TRANSITION = 0.3;

export const HERO_CYCLE = Number(
  (
    HERO_HOLDS.reduce((total, hold) => total + hold, 0) +
    HERO_HOLDS.length * HERO_TRANSITION
  ).toFixed(4),
);

export type HeroWaypoint = {
  x: number;
  y: number;
  rot: number;
};

export const ICON_TRANSITION = 0.3;

export const iconCycle = (holds: number[]) =>
  Number(
    (holds.reduce((total, hold) => total + hold, 0) + holds.length * ICON_TRANSITION).toFixed(4),
  );

export type HeroIconFrames = {
  frames: string[];
  holds: number[];
};

export type HeroIcon = {
  src: string;
  alt: string;
  size: number;
  path: HeroWaypoint[];
  anim?: HeroIconFrames;
};

export const HERO_ICONS: HeroIcon[] = [
  {
    src: "/assets/hero/icon-cursor.png",
    alt: "",
    size: 110.55,
    path: [
      { x: 418.28, y: 763.28, rot: 0 },
      { x: 260.82, y: 535.82, rot: 23.68 },
      { x: 301.05, y: 283.05, rot: 58.39 },
      { x: 685.57, y: 131.57, rot: 87.57 },
      { x: 1026.07, y: 288.07, rot: 148.33 },
      { x: 1176.02, y: 502.02, rot: 216.72 },
      { x: 1099.36, y: 778.36, rot: 245.22 },
      { x: 687.12, y: 870.12, rot: 282.76 },
      { x: 404, y: 742, rot: 328.53 },
      { x: 418.28, y: 763.28, rot: 360 },
    ],
  },
  {
    src: "/assets/hero/icon-node.png",
    alt: "",
    size: 145.149,
    path: [
      { x: 254.57, y: 504.57, rot: 0 },
      { x: 262.45, y: 269.45, rot: 32.61 },
      { x: 704, y: 139, rot: 77.92 },
      { x: 1009.15, y: 261.14, rot: 130.15 },
      { x: 1190.14, y: 511.14, rot: 170.01 },
      { x: 1105.66, y: 761.66, rot: 236.67 },
      { x: 745.26, y: 872.26, rot: 283.86 },
      { x: 410.31, y: 745.31, rot: 312.44 },
      { x: 271.12, y: 530.12, rot: 347.62 },
      { x: 254.57, y: 504.57, rot: 360 },
    ],
  },
  {
    src: "/assets/hero/icon-layers.png",
    alt: "",
    size: 86.03,
    anim: {
      frames: [
        "/assets/hero/icon-layers.png",
        "/assets/hero/icon-layers-2.png",
        "/assets/hero/icon-layers-3.png",
      ],
      holds: [0.8, 0.8, 0.8],
    },
    path: [
      { x: 1088.01, y: 776.01, rot: 0 },
      { x: 759.01, y: 869.01, rot: 0 },
      { x: 387.01, y: 704.01, rot: 0 },
      { x: 267.01, y: 533.01, rot: 0 },
      { x: 303.01, y: 274.01, rot: 0 },
      { x: 720.01, y: 141.01, rot: 0 },
      { x: 1026.01, y: 269.01, rot: 0 },
      { x: 1191.01, y: 538.01, rot: 0 },
      { x: 1091.01, y: 775.01, rot: 0 },
      { x: 1088.01, y: 776.01, rot: 0 },
    ],
  },
  {
    src: "/assets/hero/icon-cube.png",
    alt: "",
    size: 159.54,
    anim: {
      frames: [
        "/assets/hero/icon-cube.png",
        "/assets/hero/icon-cube-2.png",
        "/assets/hero/icon-cube-3.png",
      ],
      holds: [0.5, 0.8, 1],
    },
    path: [
      { x: 302.77, y: 265.77, rot: 0 },
      { x: 698.77, y: 135.77, rot: 0 },
      { x: 1067.77, y: 298.77, rot: 0 },
      { x: 1164.77, y: 498.77, rot: 0 },
      { x: 1141.77, y: 725.77, rot: 0 },
      { x: 753.77, y: 861.77, rot: 0 },
      { x: 427.77, y: 762.77, rot: 0 },
      { x: 252.77, y: 527.77, rot: 0 },
      { x: 309.77, y: 255.77, rot: 0 },
      { x: 302.77, y: 265.77, rot: 0 },
    ],
  },
  {
    src: "/assets/hero/icon-grid.png",
    alt: "",
    size: 116.11,
    path: [
      { x: 1174.06, y: 513.06, rot: 0 },
      { x: 1125.06, y: 743.06, rot: 0 },
      { x: 741.06, y: 864.06, rot: 0 },
      { x: 430.06, y: 745.06, rot: 0 },
      { x: 272.06, y: 538.06, rot: 0 },
      { x: 315.06, y: 260.06, rot: 0 },
      { x: 731.06, y: 143.06, rot: 0 },
      { x: 1059.06, y: 293.06, rot: 0 },
      { x: 1172.06, y: 506.06, rot: 0 },
      { x: 1174.06, y: 513.06, rot: 0 },
    ],
  },
  {
    src: "/assets/hero/icon-dots.png",
    alt: "",
    size: 119.17,
    anim: {
      frames: [
        "/assets/hero/icon-dots.png",
        "/assets/hero/icon-dots-2.png",
        "/assets/hero/icon-dots-3.png",
        "/assets/hero/icon-dots-4.png",
        "/assets/hero/icon-dots-5.png",
      ],
      holds: [0.3, 0.3, 0.6, 0.8, 0.8],
    },
    path: [
      { x: 1028.59, y: 277.59, rot: 0 },
      { x: 1172.59, y: 530.59, rot: 0 },
      { x: 1137.59, y: 709.59, rot: 0 },
      { x: 790.59, y: 875.59, rot: 0 },
      { x: 432.59, y: 746.59, rot: 0 },
      { x: 246.59, y: 511.59, rot: 0 },
      { x: 312.59, y: 252.59, rot: 0 },
      { x: 719.59, y: 133.59, rot: 0 },
      { x: 1026.59, y: 265.59, rot: 0 },
      { x: 1028.59, y: 277.59, rot: 0 },
    ],
  },
  {
    src: "/assets/hero/icon-pen.png",
    alt: "",
    size: 83,
    path: [
      { x: 758.5, y: 849.5, rot: 0 },
      { x: 460.5, y: 759.5, rot: 0 },
      { x: 269.5, y: 486.5, rot: 0 },
      { x: 302.5, y: 292.5, rot: 0 },
      { x: 727.5, y: 128.5, rot: 0 },
      { x: 1042.5, y: 253.5, rot: 0 },
      { x: 1172.5, y: 518.5, rot: 0 },
      { x: 1058.5, y: 804.5, rot: 0 },
      { x: 710.5, y: 859.5, rot: 0 },
      { x: 758.5, y: 849.5, rot: 0 },
    ],
  },
  {
    src: "/assets/hero/icon-ai.png",
    alt: "",
    size: 116.11,
    path: [
      { x: 684.06, y: 139.06, rot: 0 },
      { x: 1055.06, y: 301.06, rot: 0 },
      { x: 1155.06, y: 518.06, rot: 0 },
      { x: 1126.06, y: 745.06, rot: 0 },
      { x: 744.06, y: 879.06, rot: 0 },
      { x: 407.06, y: 736.06, rot: 0 },
      { x: 253.06, y: 535.06, rot: 0 },
      { x: 290.06, y: 284.06, rot: 0 },
      { x: 637.06, y: 132.06, rot: 0 },
      { x: 684.06, y: 139.06, rot: 0 },
    ],
  },
];

export type HeroCard = {
  title: string;
  body: string;
};

export const HERO_CARD_A: HeroCard = {
  title: "تجارب رقمية و محتوي بصري",
  body: "نصمم مواقع وتطبيقات سهلة الاستخدام، فيديوهات تحكي قصة البراند",
};

export const HERO_CARD_B: HeroCard = {
  title: "الهوية والتسويق",
  body: "نصمم هويات بصرية وحملات تسويقية تجعل البراند أكثر وضوحًا وتأثيرًا.",
};
