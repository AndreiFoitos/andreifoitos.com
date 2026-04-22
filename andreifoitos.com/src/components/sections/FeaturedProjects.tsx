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