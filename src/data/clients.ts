export type ClientLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  paddingLeft: number;
  paddingRight: number;
  inner?: { width: string; height: string; left: string; top: string };
};

export const CLIENT_LOGOS: ClientLogo[] = [
  { src: "/assets/clients/barq.png", alt: "Barq", width: 66, height: 66, paddingLeft: 97.9, paddingRight: 98.9 },
  { src: "/assets/clients/client-a.png", alt: "عميل", width: 70, height: 70, paddingLeft: 117.5, paddingRight: 118.5 },
  {
    src: "/assets/clients/client-b.png",
    alt: "Thermo Integrated",
    width: 139,
    height: 78,
    paddingLeft: 41.42,
    paddingRight: 37.62,
    inner: { width: "100.54%", height: "133.33%", left: "-0.27%", top: "-16.67%" },
  },
  { src: "/assets/clients/client-c.png", alt: "عميل", width: 150, height: 64, paddingLeft: 95.5, paddingRight: 96.5 },
  { src: "/assets/clients/client-d.png", alt: "عميل", width: 120, height: 43, paddingLeft: 95.5, paddingRight: 95.5 },
  { src: "/assets/clients/client-e.png", alt: "عميل", width: 85, height: 74, paddingLeft: 95.5, paddingRight: 96.5 },
  {
    src: "/assets/clients/tour-guides.png",
    alt: "تعاونية المرشدين السياحيين",
    width: 179,
    height: 55,
    paddingLeft: 41.43,
    paddingRight: 37.62,
  },
  {
    src: "/assets/clients/ibdl.png",
    alt: "IBDL",
    width: 201,
    height: 76,
    paddingLeft: 97.9,
    paddingRight: 98.9,
    inner: { width: "100%", height: "264.06%", left: "0%", top: "-85.57%" },
  },
];
