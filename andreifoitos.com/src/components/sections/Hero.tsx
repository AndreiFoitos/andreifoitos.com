import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="pt-32 pb-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm text-neutral-500 mb-6">
            AI Engineer · Full-Stack Developer
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
            Building intelligent systems
            <br />
            that work in practice.
          </h1>

          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            MSc Artificial Intelligence student at the University of Groningen.
            Focused on machine learning, reinforcement learning, and real-world
            applications.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-black text-white rounded-lg text-sm font-medium hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="/cv.pdf"
              className="px-6 py-3 border border-neutral-300 rounded-lg text-sm font-medium hover:bg-neutral-100 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
