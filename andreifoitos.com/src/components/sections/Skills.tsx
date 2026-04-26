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
export default function Skills() {
  return (
    <div>
      <div className="section-label">
        <span className="section-label-text">Skills</span>
        <div className="section-label-line" />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "0",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
        }}
      >
        {skillGroups.map((group, i) => (
          <div
            key={group.category}
            style={{
              padding: "2rem",
              borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
              borderBottom: i < skillGroups.length - 2 ? "1px solid var(--border)" : "none",
              background: "var(--bg)",
            }}
          >
            <p
              style={{
                fontSize: "0.5rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--muted-2)",
                fontWeight: 600,
                fontFamily: "var(--font-sans)",
                marginBottom: "1.25rem",
              }}
            >
              {group.category}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}