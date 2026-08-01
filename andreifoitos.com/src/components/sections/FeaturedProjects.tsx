"use client";

import Link from "next/link";
export type Project = {
  title: string;
  description: string;
  outcome: string;
  tech: string[];
  grade?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Insights Dashboard — Neolook",
    description:
      "Full-stack web application to monitor and analyse data from neonatal intensive care units, built in a collaborative, company-like environment.",
    outcome:
      "Deployed and actively used in production by Neolook in real clinical settings.",
    tech: ["React", "Django", "REST", "JWT"],
  },
  {
    title: "Epic Serv CRM",
    description:
      "Internal CRM for a gas-installation company — a document-per-job workflow with file management, role-based access, and cloud document storage. Designed, built, and deployed end to end.",
    outcome:
      "Shipped to production and in daily use. FastAPI + Next.js, Supabase, Google Drive integration, JWT authentication.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Google Drive API"],
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
    title: "Disentangling Uncertainty in Facial Age Estimation",
    description:
      "“Disentangling Model and Human Data Uncertainty in Apparent Facial Age Estimation” — with Ivo de Jong and Matias Valdenegro-Toro (University of Groningen). Trains Bayesian neural networks (MC-DropConnect, Flipout, Deep Ensembles) to separate model uncertainty from human-label noise, and probes it under distribution shift.",
    outcome:
      "Accepted for oral presentation at ANNPR 2026 (IAPR TC3 Workshop), to appear in the Springer LNAI proceedings. Bachelor's thesis graded 9/10.",
    tech: ["PyTorch", "DenseNet121", "Bayesian Neural Networks"],
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

import ProjectCard from "@/components/ui/ProjectCard";

export default function FeaturedProjects() {
  return (
    <div>
      <div className="section-label">
        <span className="section-label-text">Work</span>
        <div className="section-label-line" />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
        }}
      >
        {projects.map((project, i) => (
          <div
            key={project.title}
            style={{
              borderRight: i % 3 < 2 ? "1px solid var(--border)" : "none",
              borderBottom: i < projects.length - (projects.length % 3 || 3) ? "1px solid var(--border)" : "none",
            }}
          >
            <ProjectCard
              index={i + 1}
              title={project.title}
              description={project.description}
              outcome={project.outcome}
              tech={project.tech}
              grade={project.grade}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}