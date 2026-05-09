import { AboutHero } from "@/components/sections/AboutHero";
import { AboutHeader } from "@/components/sections/AboutHeader";
import { Timeline } from "@/components/sections/Timeline";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";

export default function About() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <div className="-mt-20 relative z-20">
        <AboutHeader />
      </div>
      <Timeline />
      <Skills />
      <Achievements />
    </div>
  );
}
