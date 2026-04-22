import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Insights Dashboard — Neolook",
    description:
      "Full-stack web application to monitor and analyse data from neonatal intensive care units.",
    outcome:
      "Currently deployed and used in production by Neolook in real clinical environments.",
    tech: ["React", "Django", "REST", "JWT"],
  },
  {
    title: "O₃ & NO₂ Air Quality Forecasting",
    description:
      "Forecasting model to predict ozone and nitrogen dioxide concentrations three days ahead.",
    outcome:
      "Built a user-friendly interface for residents to check air quality based on WHO guidelines.",
    tech: ["Python", "Machine Learning", "Time Series"],
    grade: "9.5 / 10",
  },
  {
    title: "Aleatoric vs Epistemic Uncertainty in Regression",
    description:
      "Bachelor's thesis investigating uncertainty types in a face-age recognition task using DenseNet121.",
    outcome:
      "Disentangled and visualised aleatoric and epistemic uncertainty in deep regression models.",
    tech: ["PyTorch", "DenseNet121", "Deep Learning"],
    grade: "9 / 10",
  },
  {
    title: "DQN with Temporal Decay + PER",
    description:
      "Enhanced a Dueling DQN with Prioritised Experience Replay by introducing temporal decay.",
    outcome:
      "Exponential decay factor over transition age improved agent learning efficiency.",
    tech: ["Reinforcement Learning", "PyTorch", "RL Theory"],
    grade: "8.5 / 10",
  },
  {
    title: "Drum Pattern Generation via FNN",
    description:
      "Designed and trained a Feedforward Neural Network to generate drum sequences from MIDI data.",
    outcome:
      "Produced rhythmically coherent and musically plausible sequences from seed inputs.",
    tech: ["Python", "Neural Networks", "MIDI", "Music AI"],
    grade: "8 / 10",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      style={{
        maxWidth: "1120px",
        margin: "0 auto",
        padding: "7rem 2rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Section label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          marginBottom: "4rem",
        }}
      >
        <span
          style={{
            fontSize: "0.6875rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--muted)",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          Selected Work
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        <span
          style={{
            fontSize: "0.6875rem",
            letterSpacing: "0.1em",
            color: "var(--muted)",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          {projects.length} Projects
        </span>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 460px), 1fr))",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          overflow: "hidden",
        }}
      >
        {projects.map((project, i) => (
          <div
            key={project.title}
            style={{
              borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
              borderBottom:
                i < projects.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            <ProjectCard {...project} index={i + 1} />
          </div>
        ))}
      </div>
    </section>
  );
}