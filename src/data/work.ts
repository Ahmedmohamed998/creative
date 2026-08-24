import { clip, type VideoSource } from "@/data/media";

export type WorkItem = {
  title: string;
  body: string;
  tags: string[];
  media?: string;
  mediaBg: string;
  video?: VideoSource[];
  href: string;
  column: "right" | "left";
  titleSize: 40 | 32;
  titleWeight: "medium" | "bold";
};

const BRAND_BODY =
  "من الشعارات إلى التغليف – نصمم نظمًا بصرية موحدة مصممة خصيصًا لعلامتك التجارية.";

export const WORK_ITEMS: WorkItem[] = [
  {
    title: "بناء العلامات التجارية",
    body: BRAND_BODY,
    tags: ["الهوية البصرية", "تصميم شعارات", "عروض تقديمية"],
    media: "/assets/media/brand-still.png",
    mediaBg: "#e5e4e7",
    video: clip("brand-guidelines"),
    href: "#work",
    column: "right",
    titleSize: 40,
    titleWeight: "medium",
  },
  {
    title: "تصميم وجهات وتجربة المستخدم",
    body: BRAND_BODY,
    tags: ["تصميم تطبيق ويب", "تصميم تطبيقات الموبيل"],
    media: "/assets/media/work-2.png",
    mediaBg: "#020202",
    video: clip("mobile-ux"),
    href: "#work",
    column: "right",
    titleSize: 32,
    titleWeight: "bold",
  },
  {
    title: "تصميم المواقع الالكترونية",
    body: "مواقع عالية التحويل قابلة للتوسع وتحقق المبيعات، من صفحات الترويج إلى منصات التجارة الإلكترونية الكاملة.",
    tags: ["مواقع الشركات", "التجارة الإلكترونية", "صفحات الهبوط"],
    mediaBg: "#ffffff",
    video: clip("website-promo"),
    href: "#work",
    column: "left",
    titleSize: 32,
    titleWeight: "bold",
  },
  {
    title: "انتاج و صناعة الفديوهات",
    body: "من كتابة السيناريو إلى الإنتاج النهائي – نصنع محتوى بصريًا يعبر عن علامتك ويلفت انتباه جمهورك.",
    tags: ["الموشن جرافيك", "تصوير الفيديو", " مونتاج الفيديو"],
    mediaBg: "#b701f7",
    video: clip("video-production"),
    href: "#work",
    column: "left",
    titleSize: 32,
    titleWeight: "bold",
  },
];
