import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      {/* Additional sections can be added here if needed, 
          though the prompt mostly focuses on Hero for the home page 
          and other details on About/Activities pages. */}
    </div>
  );
}
