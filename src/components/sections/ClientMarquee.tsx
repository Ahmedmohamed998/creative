import Image from "next/image";
import { CLIENT_LOGOS, type ClientLogo } from "@/data/clients";

const MOBILE_MARK_MAX = 120;

function LogoCell({ logo }: { logo: ClientLogo }) {
  const scale = Math.min(1, MOBILE_MARK_MAX / logo.width);

  return (
    <div
      className="logo-cell flex h-[104px] min-w-[168px] shrink-0 items-center justify-center border-l border-white bg-white px-[24px] py-[24px]"
      style={
        {
          "--pad-l": `${logo.paddingLeft}px`,
          "--pad-r": `${logo.paddingRight}px`,
        } as React.CSSProperties
      }
    >
      <div
        className="logo-mark relative shrink-0 overflow-hidden"
        style={
          {
            "--mw": `${logo.width}px`,
            "--mh": `${logo.height}px`,
            "--mw-sm": `${logo.width * scale}px`,
            "--mh-sm": `${logo.height * scale}px`,
          } as React.CSSProperties
        }
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          sizes="220px"
          className="absolute max-w-none object-cover"
          style={
            logo.inner
              ? {
                  width: logo.inner.width,
                  height: logo.inner.height,
                  left: logo.inner.left,
                  top: logo.inner.top,
                }
              : { width: "100%", height: "100%", left: 0, top: 0, objectFit: "contain" }
          }
        />
      </div>
    </div>
  );
}

export function ClientMarquee() {
  return (
    <section aria-label="عملاؤنا" className="h-[108px] w-full overflow-hidden bg-white">
      <div className="marquee-mask relative flex h-[104px] w-full overflow-hidden">
        <div className="flex w-max animate-marquee-rtl gap-px hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-px" aria-hidden={copy === 1}>
              {CLIENT_LOGOS.map((logo) => (
                <LogoCell key={`${copy}-${logo.src}`} logo={logo} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientMarquee;
