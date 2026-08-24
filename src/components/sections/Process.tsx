import Image from "next/image";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button15 } from "@/components/ui/Button15";
import Reveal from "@/components/ui/Reveal";

export function Process() {
  return (
    <section className="bg-canvas px-5 pt-[64px] sm:px-8 lg:px-0 lg:pb-[8px] lg:pt-[100px]">
      <Reveal
        className="figma-frame mx-auto w-full max-w-[858px] px-0"
        style={{ ["--frame-h" as string]: "180px" }}
      >
        <SectionHeading
          title="من الفكرة إلى التنفيذ بخطوات واضحة"
          body="نتبع مسارًا منظّمًا يبدأ بفهم علامتك وأهدافها، وينتهي بإطلاق تجربة متكاملة وتطويرها بناءً على النتائج."
        />
      </Reveal>

      <Reveal className="mt-[56px] lg:mt-[132px]">
        <ProcessTimeline />
      </Reveal>

      <Reveal className="mt-[72px] flex flex-col items-center gap-[16px] lg:mt-[194px]">
        <h2 className="figma-frame w-full max-w-[825px] text-center text-[30px] font-semibold leading-[normal] text-ink sm:text-[36px] lg:text-[48px]"
          style={{ ["--frame-h" as string]: "81px" }}>
          فكرتك تستحق أن تظهر بأفضل صورة
        </h2>
        <p className="w-full max-w-[1060px] text-center text-[18px] font-medium leading-[normal] text-ink-soft sm:text-[24px] lg:text-[32px]">
          من أول فكرة إلى الإطلاق، نصنع معك هوية وتجربة ومحتوى يعبر عن علامتك ويصنع أثرًا حقيقيًا.
        </p>
        <div className="mt-[24px] lg:mt-[35px]">
          <Button15 href="#contact">ابدأ مشروعك معنا</Button15>
        </div>
      </Reveal>

      <div className="relative mx-auto mt-[32px] h-[120px] w-full max-w-[759px] overflow-hidden sm:h-[180px] lg:mt-[24px] lg:h-[237px]">
        <Image
          src="/assets/media/process-spin.png"
          alt="Transformix"
          fill
          sizes="759px"
          className="animate-spin-slow object-cover"
        />
      </div>
    </section>
  );
}

export default Process;
