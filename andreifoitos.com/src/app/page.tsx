import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Hero has its own padding/max-width built in */}
      <Hero />

      {/* Each section gets the shared .section wrapper:
          max-width, padding, border-top — defined in globals.css */}
      {/* IDs must match the href values in Navbar.tsx:
          #projects, #experience, #skills, #contact
          The IntersectionObserver also relies on these IDs for the active state. */}
      <div id="projects" className="section">
        <FeaturedProjects />
      </div>

      <div id="experience" className="section">
        <Experience />
      </div>

      <div id="skills" className="section">
        <Skills />
      </div>

      {/* Achievements has its own section element with border-top */}
      <Achievements />

      <div id="contact" className="section">
        <Contact />
      </div>
    </>
  );
}