import { WORK_ITEMS } from "@/data/work";
import WorkCard from "@/components/ui/WorkCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button15 } from "@/components/ui/Button15";
import Reveal from "@/components/ui/Reveal";

export function Work() {
  const right = WORK_ITEMS.filter((w) => w.column === "right");
  const left = WORK_ITEMS.filter((w) => w.column === "left");

  return (
    <section id="work" className="bg-canvas px-5 py-[64px] sm:px-8 lg:px-0 lg:pb-[80px] lg:pt-[100px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal className="mx-auto flex max-w-[823px] flex-col items-center gap-[32px] lg:px-0">
          <SectionHeading
            title="أعمال تحكي كيف نفكر"
            body="مجموعة مختارة من المشاريع التي جمعنا فيها بين الاستراتيجية، الهوية، التصميم والمحتوى لصناعة تجارب متكاملة."
          />
          <Button15 href="#contact">استكشف المزيد</Button15>
        </Reveal>

        <div className="mt-[56px] flex flex-col gap-[56px] lg:mt-[80px] lg:mr-[9.0278%] lg:ml-[6.9444%] lg:grid lg:grid-cols-[46.0331%_48.3471%] lg:gap-x-[5.6198%] lg:gap-y-0">
          <div className="flex flex-col gap-[56px] lg:gap-[100px]">
            {right.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <WorkCard item={item} />
              </Reveal>
            ))}
          </div>
          <div className="flex flex-col gap-[56px] lg:mt-[295px] lg:gap-[100px]">
            {left.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <WorkCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
