export type NavLink = {
  label: string;
  href: string;
  hasChevron?: boolean;
  active?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { label: "الرئيسية", href: "#top", active: true },
  { label: "الخدمات", href: "#services", hasChevron: true },
  { label: "أعمالنا", href: "#work" },
  { label: "تواصل معنا", href: "#contact" },
];
