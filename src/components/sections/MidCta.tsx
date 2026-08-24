import Image from "next/image";
import { Button15 } from "@/components/ui/Button15";
import Reveal from "@/components/ui/Reveal";

export function MidCta() {
  return (
    <section className="bg-canvas px-5 py-[64px] sm:px-8 lg:px-[100px] lg:py-[120px]">
      <Reveal className="mx-auto flex w-full max-w-[1240px] flex-col-reverse items-center gap-10 lg:flex-row lg:gap-[98px]">
        <div className="flex w-full flex-col items-center gap-[24px] lg:w-[860px] lg:items-start lg:gap-[32px]">
          <div className="flex w-full flex-col gap-[16px] text-center text-ink lg:h-[197px] lg:text-right">
            <h2 className="text-[26px] font-medium leading-[normal] sm:text-[32px] lg:text-[40px]">
              جاهز تحوّل فكرتك إلى علامة يتذكرها الناس؟
            </h2>
            <p className="text-[16px] font-normal leading-[normal] sm:text-[19px] lg:text-[24px]">
              دعنا نبني معك هوية وتجربة ومحتوى يعبر عن رؤيتك ويمنح علامتك حضورًا أكثر وضوحًا
              وتأثيرًا.
            </p>
          </div>
          <Button15 href="#contact">ابدأ مشروعك معنا</Button15>
        </div>

        <Image
          src="/assets/media/cta-orb.png"
          alt=""
          width={282}
          height={263}
          quality={95}
          sizes="(max-width: 1023px) 220px, 282px"
          className="h-auto w-[200px] shrink-0 sm:w-[240px] lg:w-[282px]"
        />
      </Reveal>
    </section>
  );
}

export default MidCta;
