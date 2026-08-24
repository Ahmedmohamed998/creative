import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ClientMarquee from "@/components/sections/ClientMarquee";
import Services from "@/components/sections/Services";
import MidCta from "@/components/sections/MidCta";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientMarquee />
        <Services />
        <MidCta />
        <Work />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
