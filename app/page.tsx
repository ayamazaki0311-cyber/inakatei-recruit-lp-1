import { About } from "@/components/lp/About";
import { Atmosphere } from "@/components/lp/Atmosphere";
import { CTA } from "@/components/lp/CTA";
import { FAQ } from "@/components/lp/FAQ";
import { Features } from "@/components/lp/Features";
import { Flow } from "@/components/lp/Flow";
import { Footer } from "@/components/lp/Footer";
import { Gallery } from "@/components/lp/Gallery";
import { Hero } from "@/components/lp/Hero";
import { JobDescription } from "@/components/lp/JobDescription";
import { Problem } from "@/components/lp/Problem";
import { Requirements } from "@/components/lp/Requirements";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <About />
      <Gallery />
      <Features />
      <JobDescription />
      <Requirements />
      <Atmosphere />
      <Flow />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
