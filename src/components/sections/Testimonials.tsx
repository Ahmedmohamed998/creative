import Image from "next/image";
import Link from "next/link";
import { REVIEWS, type Review } from "@/data/reviews";
import Reveal from "@/components/ui/Reveal";

function ReviewCard({ review, elevated }: { review: Review; elevated: boolean }) {
  return (
    <article
      className={[
        "relative flex w-full flex-col rounded-[8px] bg-white px-[28px] pt-[28px] pb-[28px] lg:px-[7.3298%]",
        "lg:h-[300px]",
        elevated ? "shadow-panel" : "",
      ].join(" ")}
    >
      <Image
        src="/assets/reviews/stars.svg"
        alt={`${review.stars} من 5`}
        width={96}
        height={16}
        className="h-[16px] w-[96px] self-start"
      />
      <p className="mt-[34px] w-full text-right font-tajawal text-[16px] leading-[28px] text-gray-900 lg:text-[18px]">
        {review.quote}
      </p>
      <div className="mt-[28px] flex items-center gap-[10px] self-start lg:mt-auto">
        <Image
          src={review.avatar}
          alt=""
          width={43}
          height={43}
          className="size-[43px] shrink-0 rounded-full object-cover"
        />
        <div className="text-right">
          <p className="font-jakarta text-[16px] font-bold leading-[28px] text-gray-900">
            {review.name}
          </p>
          <p className="mt-[4px] font-jakarta text-[14px] font-normal leading-[22px] text-gray-600">
            {review.role}
          </p>
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
  return (
    <section
      aria-label="آراء العملاء"
      className="bg-canvas px-5 py-[64px] sm:px-8 lg:px-0 lg:pb-[100px] lg:pt-[100px]"
    >
      <Reveal>
        <h2 className="mx-auto w-full max-w-[665px] text-center font-tajawal text-[24px] font-bold leading-[1.15] text-gray-900 sm:text-[32px] lg:relative lg:top-[-8px] lg:whitespace-nowrap lg:text-[42px] lg:leading-[48px]">
          تجارب حقيقية مع حلول AI تصنع فرقًا
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-[48px] w-full max-w-[1220px] lg:mt-[73px] lg:h-[451px]">
        <div aria-hidden className="absolute inset-x-0 top-[40px] hidden h-[300px] bg-third lg:block" />
        <div aria-hidden className="absolute left-[18.7705%] top-0 hidden h-[389px] w-[62.4590%] bg-third lg:block" />

        <div className="relative flex flex-col gap-6 px-6 py-10 lg:flex-row lg:gap-[3.0328%] lg:px-0 lg:py-0 lg:pt-[40px]">
          <div aria-hidden className="absolute inset-0 bg-third lg:hidden" />
          {REVIEWS.map((review, i) => (
            <Reveal key={i} delay={i * 110} className="lg:w-[31.3115%] lg:shrink-0">
              <ReviewCard review={review} elevated={i < REVIEWS.length - 1} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:absolute lg:left-[42.5410%] lg:top-[417px] lg:mt-0 lg:block lg:w-[15%]">
          <Link
            href="#"
            className="group inline-flex flex-col items-center font-tajawal text-[16px] font-bold leading-[28px] text-gray-900 lg:w-[183px]"
          >
            <span>رؤية جميع الاراء</span>
            <span
              aria-hidden
              className="mt-[6px] block h-px w-full max-w-[183px] bg-gray-900 transition-opacity duration-300 group-hover:opacity-60"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
