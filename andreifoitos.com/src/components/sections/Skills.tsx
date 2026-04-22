const skillGroups = [
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
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
        }}
      >
        {skillGroups.map((group, gi) => (
          <div
            key={group.category}
            style={{
              padding: "1.75rem",
              borderRight: gi % 2 === 0 ? "1px solid var(--border)" : "none",
              borderBottom: gi < skillGroups.length - 2 ? "1px solid var(--border)" : "none",
              background: "var(--bg)",
            }}
          >
            <p
              style={{
                fontSize: "0.5rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: "var(--muted-2)",
                fontFamily: "var(--font-sans)",
                marginBottom: "1rem",
              }}
            >
              {group.category}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3125rem" }}>
              {group.items.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}