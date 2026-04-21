const skillGroups = [
  {
    category: "AI & Machine Learning",
    items: ["PyTorch", "TensorFlow", "Deep Learning", "Reinforcement Learning", "Uncertainty Estimation", "scikit-learn"],
  },
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C / C++", "SQL", "Lisp"],
  },
  {
    category: "Web & Backend",
    items: ["React", "Next.js", "Django", "REST", "JWT", "Angular", "PrimeNG", "Tailwind CSS", "HTML / CSS"],
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
        padding: "6rem 2rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Section label */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "1.5rem",
          marginBottom: "3.5rem",
        }}
      >
        <span
          style={{
            fontSize: "0.6875rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--muted)",
            fontWeight: 500,
          }}
        >
          Skills
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "3rem",
        }}
      >
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: "var(--muted)",
                marginBottom: "1rem",
              }}
            >
              {group.category}
            </h3>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {group.items.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text)",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "0.3125rem 0.75rem",
                    borderRadius: "2px",
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