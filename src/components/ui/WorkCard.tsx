import Image from "next/image";
import Link from "next/link";
import CardVideo from "@/components/ui/CardVideo";
import { cn } from "@/lib/cn";
import type { WorkItem } from "@/data/work";

const MEDIA_CLASS =
  "absolute inset-0 size-full object-cover transition-transform duration-700 [transition-timing-function:var(--ease-out-soft)] group-hover:scale-[1.04]";

export function WorkCard({ item }: { item: WorkItem }) {
  const isLead = item.titleSize === 40;

  return (
    <article className="group flex flex-col gap-[16px] lg:gap-[24px]">
      <Link href={item.href} className="flex flex-col items-start gap-[20px] lg:gap-[32px]">
        <div className="flex w-full max-w-[510px] flex-col gap-[10px] lg:gap-[13px]">
          <h3
            className={cn(
              "text-right leading-[normal] text-black",
              isLead
                ? "text-[24px] font-medium sm:text-[32px] lg:text-[40px]"
                : "text-[21px] font-bold sm:text-[26px] lg:text-[32px]",
            )}
          >
            {item.title}
          </h3>
          <p className="w-full max-w-[485px] text-right text-[15px] font-normal leading-[normal] text-black lg:text-[18px]">
            {item.body}
          </p>
        </div>

        <div
          className="relative aspect-[557/362] w-full overflow-hidden lg:aspect-auto lg:h-[362px]"
          style={{ backgroundColor: item.mediaBg }}
        >
          {item.media && (
            <Image
              src={item.media}
              alt=""
              fill
              quality={95}
              sizes="(max-width: 1023px) 92vw, 585px"
              className={MEDIA_CLASS}
            />
          )}
          <CardVideo sources={item.video} className={MEDIA_CLASS} />
        </div>
      </Link>

      <div className="flex w-full items-center justify-between gap-4">
        <ul className="flex flex-wrap items-center gap-[8px] lg:gap-[14px]">
          {item.tags.map((tag) => (
            <li
              key={tag}
              className="flex h-[30.156px] items-center whitespace-nowrap rounded-[1.984px] bg-[#f4f5f7] px-[11.906px] py-[3.969px] text-[12px] leading-[normal] text-black lg:text-[14px]"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Link href={item.href} aria-label={item.title} className="shrink-0">
          <Image
            src="/assets/icons/circle-arrow-left.svg"
            alt=""
            width={46}
            height={46}
            aria-hidden
            className="size-[38px] transition-transform duration-500 [transition-timing-function:var(--ease-out-soft)] group-hover:-translate-x-1.5 lg:size-[46px]"
          />
        </Link>
      </div>
    </article>
  );
}

export default WorkCard;
