import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="px-6 md:px-12 lg:px-24">
      <Hero />
      <FeaturedProjects />
      <Experience />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  );
}