import Image from "next/image";
import Link from "next/link";
import CardVideo from "@/components/ui/CardVideo";
import type { Service } from "@/data/services";

const MEDIA_SHADOW = [
  "0px 237px 66px 0px rgba(25,23,28,0)",
  "0px 152px 61px 0px rgba(25,23,28,0.01)",
  "0px 85px 51px 0px rgba(25,23,28,0.05)",
  "0px 38px 38px 0px rgba(25,23,28,0.09)",
  "0px 9px 21px 0px rgba(25,23,28,0.1)",
].join(", ");

const MEDIA_CLASS =
  "absolute top-0 h-full max-w-none object-cover transition-transform duration-700 [transition-timing-function:var(--ease-out-soft)] group-hover:scale-[1.04]";
const MEDIA_STYLE: React.CSSProperties = { width: "130.22%", left: "-21.33%" };

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="group block rounded-[40px] bg-[#f2f1f3] transition-transform duration-500 [transition-timing-function:var(--ease-out-soft)] hover:-translate-y-1.5"
    >
      <article className="flex flex-col pt-[52px] sm:pt-[80px] lg:pt-[108px] pb-[24px] lg:pb-[35px]">
        <div className="relative mr-[32px] ml-[30px] sm:mr-[56px] sm:ml-[52px] lg:mr-[13.2450%] lg:ml-[12.2517%]">
          <div className="relative aspect-[450/330] w-full">
            <div className="absolute inset-0 overflow-hidden bg-[#e5e4e7]" style={{ boxShadow: MEDIA_SHADOW }}>
              <Image
                src={service.media}
                alt=""
                width={1280}
                height={720}
                sizes="(max-width: 1023px) 90vw, 450px"
                className={MEDIA_CLASS}
                style={MEDIA_STYLE}
              />
              <CardVideo sources={service.video} className={MEDIA_CLASS} style={MEDIA_STYLE} />
            </div>
          </div>
        </div>

        <ul className="relative mt-[17px] flex flex-wrap items-start justify-between gap-[10px] mr-[32px] ml-[30px] sm:mr-[56px] sm:ml-[52px] lg:min-h-[46px] lg:flex-nowrap lg:gap-0 lg:mr-[13.2450%] lg:ml-[13.0795%]">
          {service.tags.map((tag) => (
            <li
              key={tag}
              className="flex h-[30.156px] shrink-0 items-center whitespace-nowrap rounded-[1.984px] bg-[#f4f5f7] px-[11.906px] py-[3.969px] text-[12px] leading-[normal] text-black lg:text-[14px]"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="relative mt-[36px] flex h-[46px] items-center justify-between mr-[32px] ml-[30px] sm:mr-[56px] sm:ml-[52px] lg:mt-[64px] lg:mr-[13.2450%] lg:ml-[12.2517%]">
          <h3 className="text-[16px] font-semibold leading-[normal] text-[#19171c] lg:text-[18px]">
            {service.title}
          </h3>
          <Image
            src="/assets/icons/circle-arrow-left.svg"
            alt=""
            width={46}
            height={46}
            aria-hidden
            className="size-[38px] shrink-0 transition-transform duration-500 [transition-timing-function:var(--ease-out-soft)] group-hover:-translate-x-1.5 lg:size-[46px]"
          />
        </div>
      </article>
    </Link>
  );
}

export default ServiceCard;
