import { SERVICES } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button15 } from "@/components/ui/Button15";
import Reveal from "@/components/ui/Reveal";

export function Services() {
  return (
    <section id="services" className="bg-canvas px-5 py-[64px] sm:px-8 lg:px-[6.9444%] lg:py-[91px]">
      <div className="mx-auto w-full max-w-[1240px]">
        <Reveal className="mx-auto flex max-w-[872px] flex-col items-center gap-[32px]">
          <SectionHeading
            title="من هوية العلامة إلى التجربة التي يعيشها جمهورك"
            body="نحوّل الاستراتيجية إلى هوية، والهوية إلى محتوى، والمحتوى إلى تجربة متكاملة."
          />
          <Button15 href="#work">استكشف المزيد</Button15>
        </Reveal>

        <div className="mt-[48px] grid grid-cols-1 gap-[32px] lg:mt-[81px] lg:grid-cols-2 lg:gap-x-[32px] lg:gap-y-[58px]">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 90}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
