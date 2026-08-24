import Image from "next/image";
import Link from "next/link";
import { FOOTER_CONTACT, FOOTER_LINKS, FOOTER_SOCIALS } from "@/data/footer";

export function Footer() {
  return (
    <footer id="contact" className="relative bg-purple-darker text-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-8 pt-12 sm:px-8 lg:h-[335px] lg:px-0 lg:pb-0 lg:pt-0">
        <div className="flex flex-col items-center gap-10 lg:block">
          <div className="flex flex-col items-center gap-3 lg:absolute lg:right-[7.2917%] lg:top-[71px] lg:items-end lg:gap-0">
            <Image
              src="/assets/brand/logo.svg"
              alt="Transformix Creative"
              width={133}
              height={85}
              className="h-[62px] w-auto brightness-0 invert lg:h-[85px] lg:w-[133px]"
            />
            <p className="w-[187px] text-center font-tajawal text-[16px] leading-[1.6] text-shell lg:mt-[22px] lg:text-right lg:text-[18px]">
              دليلك الذكي لنمو شركتك
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-10 text-center sm:flex-row sm:items-start sm:justify-center sm:gap-16 sm:text-right lg:absolute lg:right-[26.8056%] lg:top-[78px] lg:w-[52.9167%] lg:justify-start lg:gap-[17.7165%]">
            <nav aria-label="روابط سريعة" className="flex flex-col gap-[16px] lg:w-[30.7087%]">
              <p className="font-tajawal text-[18px] font-bold leading-[1.6] text-white">
                الروابط سريعة
              </p>
              <ul className="flex flex-col gap-[8px] opacity-90">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-tajawal text-[18px] leading-[1.6] text-shell transition-opacity duration-200 hover:opacity-70"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-[16px] lg:w-[17.8478%]">
              <p className="font-tajawal text-[18px] font-bold leading-[1.6] text-white">
                تواصل معنا
              </p>
              <ul className="flex flex-col gap-[7px] px-[8px] pb-[8px]">
                {FOOTER_CONTACT.map((item) => (
                  <li key={item.icon} className="flex items-center justify-center gap-[8px] sm:justify-end">
                    <span className="font-tajawal text-[18px] leading-[1.6] text-shell">
                      {item.label}
                    </span>
                    <Image src={item.icon} alt="" width={20} height={20} aria-hidden className="size-[20px]" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center gap-[16px] lg:w-[16.0105%]">
              <p className="w-[88px] text-center font-tajawal text-[18px] font-bold leading-[1.6] text-white sm:text-right">
                تابعنا على
              </p>
              <ul className="flex items-center gap-[25px]">
                {FOOTER_SOCIALS.map((social) => (
                  <li key={social.label}>
                    <Link href={social.href} aria-label={social.label}>
                      <Image
                        src={social.icon}
                        alt=""
                        width={24}
                        height={24}
                        aria-hidden
                        className="size-[24px] transition-opacity duration-200 hover:opacity-70"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:absolute lg:inset-x-0 lg:mt-0">
          <div className="mx-auto h-px w-full max-w-[1241px] bg-white/20 lg:absolute lg:left-[6.5278%] lg:top-[250px] lg:w-[86.1806%]" />
          <p className="mt-6 text-center font-tajawal text-[14px] leading-[1.6] text-white lg:absolute lg:top-[279px] lg:mt-0 lg:w-full">
            جمع الحقوق محفوظة Transformix
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
