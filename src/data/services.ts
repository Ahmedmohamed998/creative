import { clip, type VideoSource } from "@/data/media";

export type Service = {
  title: string;
  tags: string[];
  href: string;
  media: string;
  video?: VideoSource[];
};

export const SERVICES: Service[] = [
  {
    title: "الهوية التجارية",
    tags: ["دليل الهوية البصرية", "استراتيجية العلامة التجارية", "تموضع العلامة"],
    href: "#work",
    media: "/assets/media/brand-still.png",
    video: clip("brand-guidelines"),
  },
  {
    title: "تصميم التجارب الرقمية",
    tags: ["التصميم المتجاوب", "التجارب التفاعلية", "أبحاث تجربة المستخدم"],
    href: "#work",
    media: "/assets/media/brand-still.png",
    video: clip("brand-guidelines"),
  },
  {
    title: "الإنتاج الإبداعي",
    tags: ["إنتاج الفيديو", "موشن جرافيك", "محتوى الحملات"],
    href: "#work",
    media: "/assets/media/brand-still.png",
    video: clip("brand-guidelines"),
  },
  {
    title: "التسويق الرقمي",
    tags: ["إدارة المحتوى", "الحملات الإعلانية", "تحليل الأداء"],
    href: "#work",
    media: "/assets/media/brand-still.png",
    video: clip("brand-guidelines"),
  },
];
