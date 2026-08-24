"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/data/navigation";
import { Button15 } from "@/components/ui/Button15";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:h-[102px] lg:px-0">
        <Link href="#top" aria-label="Transformix Creative" className="shrink-0">
          <Image
            src="/assets/brand/logo.svg"
            alt="Transformix Creative"
            width={85}
            height={54}
            priority
            className="h-[38px] w-auto lg:h-[54.355px] lg:w-[85.14px]"
          />
        </Link>

        <nav aria-label="التنقل الرئيسي" className="hidden lg:block lg:w-[672px]">
          <ul className="flex items-center justify-center">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    "group flex items-center gap-[4px] pt-[20.5px] pr-[8px] pb-[21px] pl-[16px]",
                    "text-[18px] leading-none text-ink transition-colors duration-200 hover:text-third",
                    link.active ? "font-bold" : "font-normal",
                  )}
                >
                  {link.hasChevron && (
                    <Image
                      src="/assets/icons/chevron-down.svg"
                      alt=""
                      width={16}
                      height={16}
                      aria-hidden
                      className="size-[16px] object-contain transition-transform duration-200 group-hover:translate-y-[2px]"
                    />
                  )}
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button15 href="#contact">تواصل معنا</Button15>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          className="relative z-50 grid size-11 place-items-center rounded-full border-2 border-ink bg-canvas shadow-btn lg:hidden"
        >
          <span className="relative block h-[14px] w-[20px]">
            <span
              className={cn(
                "absolute inset-x-0 top-0 h-[2px] rounded bg-ink transition-transform duration-300",
                open && "top-1/2 -translate-y-1/2 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rounded bg-ink transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute inset-x-0 bottom-0 h-[2px] rounded bg-ink transition-transform duration-300",
                open && "bottom-1/2 translate-y-1/2 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-40 bg-canvas/98 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav aria-label="التنقل للجوال" className="flex h-full flex-col items-center justify-center gap-7 px-6">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-[26px] leading-none text-ink transition-all duration-500",
                link.active ? "font-bold" : "font-normal",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
              style={{ transitionDelay: open ? `${90 + i * 70}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <div
            className={cn(
              "mt-4 transition-all duration-500",
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
            style={{ transitionDelay: open ? `${90 + NAV_LINKS.length * 70}ms` : "0ms" }}
          >
            <Button15 href="#contact">تواصل معنا</Button15>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
