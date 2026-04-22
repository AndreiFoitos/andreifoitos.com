import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";

export const metadata = {
  title: "Experience — Andrei Foitoș",
};

export default function ExperiencePage() {
  return (
    <div className="page-wrap">
      <Experience />
      <Achievements />
    </div>
  );
}