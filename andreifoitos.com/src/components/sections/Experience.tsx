const education = [
  {
    institution: "University of Groningen",
    degree: "MSc Artificial Intelligence",
    period: "2025 — 2027",
    note: "Faculty of Science and Engineering",
  },
  {
    institution: "University of Groningen",
    degree: "BSc Artificial Intelligence",
    period: "2022 — 2025",
    note: "Faculty of Science and Engineering",
  },
  {
    institution: 'National College "Gheorghe Șincai"',
    degree: "Mathematics & Informatics",
    period: "2018 — 2022",
    note: "Cluj-Napoca, Romania",
  },
];

const engineering = [
  {
    role: "Full-Stack Developer",
    company: "Neolook",
    period: "2024",
    description:
      "Built a production dashboard for neonatal intensive care data. Worked in a collaborative, company-like environment. Application is currently deployed and used in clinical settings.",
    tech: ["React", "Django", "REST", "JWT"],
  },
  {
    role: "AI Research Projects",
    company: "University of Groningen",
    period: "2022 — Present",
    description:
      "Five completed research projects spanning machine learning, uncertainty estimation, reinforcement learning, and music AI. Average grade: 8.8 / 10.",
    tech: ["PyTorch", "Python", "ML Research"],
  },
];

const rowStyle = (i: number, total: number): React.CSSProperties => ({
  paddingTop: i > 0 ? "2rem" : "0",
  paddingBottom: i < total - 1 ? "2rem" : "0",
  borderBottom: i < total - 1 ? "1px solid var(--border)" : "none",
});

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        maxWidth: "var(--max-w)",
        margin: "0 auto",
        padding: "8rem 2.5rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Section label */}
      <div className="section-label">
        <span className="section-label-text">Experience & Education</span>
        <div className="section-label-line" />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
        }}
      >
        {/* Engineering column */}
        <div>
          <p
            style={{
              fontSize: "0.5625rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--muted-2)",
              fontWeight: 500,
              fontFamily: "var(--font-sans)",
              marginBottom: "2rem",
            }}
          >
            Engineering
          </p>

          {engineering.map((item, i) => (
            <div key={item.role} style={rowStyle(i, engineering.length)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "1rem",
                  marginBottom: "0.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.125rem",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "var(--text)",
                    lineHeight: 1.3,
                  }}
                >
                  {item.role}
                </span>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    color: "var(--muted-2)",
                    flexShrink: 0,
                    fontFamily: "var(--font-sans)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.period}
                </span>
              </div>

              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  fontFamily: "var(--font-sans)",
                  marginBottom: "0.75rem",
                }}
              >
                {item.company}
              </p>

              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--muted)",
                  lineHeight: 1.75,
                  fontFamily: "var(--font-sans)",
                  marginBottom: "1rem",
                }}
              >
                {item.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3125rem" }}>
                {item.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education column */}
        <div>
          <p
            style={{
              fontSize: "0.5625rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--muted-2)",
              fontWeight: 500,
              fontFamily: "var(--font-sans)",
              marginBottom: "2rem",
            }}
          >
            Education
          </p>

          {education.map((item, i) => (
            <div key={item.degree} style={rowStyle(i, education.length)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "1rem",
                  marginBottom: "0.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.0625rem",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "var(--text)",
                    lineHeight: 1.3,
                  }}
                >
                  {item.degree}
                </span>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    color: "var(--muted-2)",
                    flexShrink: 0,
                    fontFamily: "var(--font-sans)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.period}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  fontFamily: "var(--font-sans)",
                  lineHeight: 1.5,
                }}
              >
                {item.institution} · {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}