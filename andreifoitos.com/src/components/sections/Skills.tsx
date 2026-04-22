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
    items: ["Git", "Docker", "Linux / Ubuntu", "Conda", "Scrum / Agile"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
          Skills
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
          gap: "0",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          overflow: "hidden",
        }}
      >
        {skillGroups.map((group, gi) => (
          <div
            key={group.category}
            style={{
              padding: "2rem",
              borderRight:
                gi % 2 === 0 ? "1px solid var(--border)" : "none",
              borderBottom:
                gi < skillGroups.length - 2 ? "1px solid var(--border)" : "none",
            }}
          >
            <h3
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: "var(--muted)",
                marginBottom: "1.25rem",
              }}
            >
              {group.category}
            </h3>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {group.items.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text)",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "0.3125rem 0.75rem",
                    borderRadius: "2px",
                    transition: "border-color 150ms ease",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}