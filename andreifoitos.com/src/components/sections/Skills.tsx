export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "AI & Machine Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "Deep Learning",
      "Reinforcement Learning",
      "Uncertainty Estimation",
      "scikit-learn",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C / C++", "SQL", "Lisp"],
  },
  {
    category: "Web & Backend",
    items: [
      "React",
      "Next.js",
      "Django",
      "REST",
      "JWT",
      "Angular",
      "PrimeNG",
      "Tailwind CSS",
      "HTML / CSS",
    ],
  },
  {
    category: "Tools & Infrastructure",
    items: ["Git", "Docker", "Linux / Ubuntu", "Conda", "Microsoft Office", "Scrum / Agile"],
  },
];