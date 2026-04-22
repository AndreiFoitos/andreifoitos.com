"use client";

import Link from "next/link";

type Project = {
  title: string;
  description: string;
  outcome: string;
  tech: string[];
  grade?: string;
  link?: string;
};

function ProjectCard({
  index,
  title,
  description,
  outcome,
  tech,
  grade,
  link,
}: Project & { index: number }) {
  const Tag = link ? "a" : "div";
  const linkProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      {...linkProps}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1.75rem",
        background: "var(--bg)",
        cursor: link ? "pointer" : "default",
        textDecoration: "none",
        transition: "background 180ms ease",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "var(--surface)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "var(--bg)";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.25rem",
        }}
      >
        <span
          style={{
            fontSize: "0.5rem",
            fontWeight: 600,
            color: "var(--muted-2)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontFamily: "var(--font-sans)",
          }}
        >
          {String(index).padStart(2, "0")}
        </span>
        {grade && (
          <span
            style={{
              fontSize: "0.5rem",
              fontWeight: 600,
              color: "var(--muted)",
              letterSpacing: "0.08em",
              border: "1px solid var(--border)",
              padding: "0.125rem 0.4375rem",
              borderRadius: "2px",
              fontFamily: "var(--font-sans)",
            }}
          >
            {grade}
          </span>
        )}
      </div>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1rem",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          color: "var(--text)",
          lineHeight: 1.3,
          marginBottom: "0.625rem",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: "0.75rem",
          color: "var(--muted)",
          lineHeight: 1.75,
          marginBottom: "0.75rem",
          fontFamily: "var(--font-sans)",
        }}
      >
        {description}
      </p>

      <p
        style={{
          fontSize: "0.75rem",
          color: "var(--text-2)",
          lineHeight: 1.75,
          paddingTop: "0.75rem",
          borderTop: "1px solid var(--border)",
          fontFamily: "var(--font-sans)",
          flexGrow: 1,
        }}
      >
        {outcome}
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.25rem",
          marginTop: "1.25rem",
        }}
      >
        {tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </Tag>
  );
}

const projects: Project[] = [
  {
    title: "Insights Dashboard — Neolook",
    description:
      "Full-stack web application to monitor and analyse data from neonatal intensive care units, built in a collaborative, company-like environment.",
    outcome:
      "Deployed and actively used in production by Neolook in real clinical settings.",
    tech: ["React", "Django", "REST", "JWT"],
  },
  {
    title: "O₃ & NO₂ Air Quality Forecasting",
    description:
      "Forecasting model predicting ozone and nitrogen dioxide concentrations three days ahead, with a user-facing interface based on WHO guidelines.",
    outcome:
      "Residents can check localised air quality forecasts for informed daily decisions.",
    tech: ["Python", "Machine Learning", "Time Series"],
    grade: "9.5 / 10",
  },
  {
    title: "Aleatoric vs Epistemic Uncertainty in Regression",
    description:
      "Bachelor's thesis investigating uncertainty types in face-age recognition using DenseNet121, disentangling what the model doesn't know from inherent data noise.",
    outcome:
      "Published to the University of Groningen repository. Clean separation of uncertainty sources in a real regression task.",
    tech: ["PyTorch", "DenseNet121", "Deep Learning"],
    grade: "9 / 10",
  },
  {
    title: "DQN with Temporal Decay + PER",
    description:
      "Extended a Dueling DQN with Prioritised Experience Replay by introducing an exponential temporal decay factor over transition age.",
    outcome:
      "Demonstrated improved sample efficiency — recent transitions are weighted more, without discarding rare but informative events.",
    tech: ["Reinforcement Learning", "PyTorch", "RL Theory"],
    grade: "8.5 / 10",
  },
  {
    title: "Drum Pattern Generation via FNN",
    description:
      "Designed and trained a Feedforward Neural Network to generate drum sequences conditioned on MIDI seed data.",
    outcome:
      "Produced rhythmically coherent and musically plausible patterns; explored music as a structured sequence prediction problem.",
    tech: ["Python", "Neural Networks", "MIDI", "Music AI"],
    grade: "8 / 10",
  },
];

export default function FeaturedProjects() {
  return (
    <div>
      <div className="section-label">
        <span className="section-label-text">Selected Work</span>
        <div className="section-label-line" />
        <span
          style={{
            fontSize: "0.5625rem",
            letterSpacing: "0.12em",
            color: "var(--muted-2)",
            fontWeight: 500,
            whiteSpace: "nowrap",
            textTransform: "uppercase",
            fontFamily: "var(--font-sans)",
          }}
        >
          {projects.length} Projects
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 400px), 1fr))",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
        }}
      >
        {projects.map((project, i) => (
          <div
            key={project.title}
            style={{
              borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
              borderBottom: i < projects.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            <ProjectCard {...project} index={i + 1} />
          </div>
        ))}
      </div>
    </div>
  );
}