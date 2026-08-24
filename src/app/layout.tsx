import type { Metadata, Viewport } from "next";
import { Noto_Kufi_Arabic, Plus_Jakarta_Sans, Tajawal } from "next/font/google";
import "./globals.css";

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-kufi",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jakarta-sans",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Transformix Creative — من هوية العلامة إلى التجربة التي يعيشها جمهورك",
  description:
    "نحوّل الاستراتيجية إلى هوية، والهوية إلى محتوى، والمحتوى إلى تجربة متكاملة. هوية بصرية، تصميم تجارب رقمية، تسويق رقمي وإنتاج إبداعي.",
  openGraph: {
    title: "Transformix Creative",
    description:
      "نحوّل الاستراتيجية إلى هوية، والهوية إلى محتوى، والمحتوى إلى تجربة متكاملة.",
    locale: "ar_SA",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${notoKufi.variable} ${jakarta.variable} ${tajawal.variable}`}>
      <body className="bg-canvas text-ink antialiased">{children}</body>
    </html>
  );
}
