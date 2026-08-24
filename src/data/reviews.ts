export type Review = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  stars: number;
};

const QUOTE =
  "و ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص";

export const REVIEWS: Review[] = [
  { quote: QUOTE, name: "Jacob Jones", role: "Digital Marketer", avatar: "/assets/reviews/avatar.png", stars: 5 },
  { quote: QUOTE, name: "Jacob Jones", role: "Digital Marketer", avatar: "/assets/reviews/avatar.png", stars: 5 },
  { quote: QUOTE, name: "Jacob Jones", role: "Digital Marketer", avatar: "/assets/reviews/avatar.png", stars: 5 },
];
