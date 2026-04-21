import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}