import Image from "next/image";
import Hero from "@/components/Hero";
import Camps from "@/components/Camps";
import Guide from "@/components/Guide";
import Feature from "@/components/Feature";
import CTA from "@/components/Cta";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div>
      <Hero />
      <Camps />
      <Guide/>
      <Feature/>
      <CTA/>
      <FAQ/>
    </div>
  );
}
