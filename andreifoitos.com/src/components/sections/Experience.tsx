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
    note: "Cluj-Napoca, Romania · Baccalaureate Diploma",
  },
];

const engineering = [
  {
    role: "Full-Stack Developer",
    company: "Neolook",
    period: "2024",
    description:
      "Built a production dashboard for neonatal intensive care data in a collaborative, company-like environment. The application is currently deployed and used in clinical settings.",
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

const work = [
  {
    role: "Bartender",
    company: "Electric Castle Festival",
    period: "2024",
    description:
      "Fast and friendly service in a high-pressure festival environment. Managed transactions, maintained hygiene standards, and kept bar operations smooth under peak load.",
  },
  {
    role: "Event Helper",
    company: "Electric Castle Festival",
    period: "2023",
    description:
      "Assisted with setup, logistics, and vendor coordination at one of Romania's largest music festivals. Strengthened teamwork and communication under pressure.",
  },
  {
    role: "Store Assistant",
    company: "Auchan Retail Romania",
    period: "2017 — 2018",
    description:
      "Part-time role stocking shelves, managing inventory, and assisting customers. Developed attention to detail and time management in a structured retail environment.",
  },
];

const rowStyle = (i: number, total: number): React.CSSProperties => ({
  paddingTop: i > 0 ? "1.5rem" : "0",
  paddingBottom: i < total - 1 ? "1.5rem" : "0",
  borderBottom: i < total - 1 ? "1px solid var(--border)" : "none",
});

export default function Experience() {
  return (
    <div>
      <div className="section-label">
        <span className="section-label-text">Experience & Education</span>
        <div className="section-label-line" />
      </div>

      {/* Engineering + Education */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          marginBottom: "4rem",
          paddingBottom: "4rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* Engineering */}
        <div>
          <p
            style={{
              fontSize: "0.5rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--muted-2)",
              fontWeight: 500,
              fontFamily: "var(--font-sans)",
              marginBottom: "1.5rem",
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
                  marginBottom: "0.1875rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
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
                    fontSize: "0.625rem",
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
                  fontSize: "0.6875rem",
                  color: "var(--muted)",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  fontFamily: "var(--font-sans)",
                  marginBottom: "0.625rem",
                }}
              >
                {item.company}
              </p>

              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  lineHeight: 1.75,
                  fontFamily: "var(--font-sans)",
                  marginBottom: "0.875rem",
                }}
              >
                {item.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
                {item.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <p
            style={{
              fontSize: "0.5rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--muted-2)",
              fontWeight: 500,
              fontFamily: "var(--font-sans)",
              marginBottom: "1.5rem",
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
                  marginBottom: "0.1875rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.9375rem",
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
                    fontSize: "0.625rem",
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
                  fontSize: "0.6875rem",
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

      {/* Work experience */}
      <div className="section-label" style={{ marginBottom: "2rem" }}>
        <span className="section-label-text">Other Work</span>
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
        {work.map((item, i) => (
          <div
            key={item.role + item.period}
            style={{
              padding: "1.5rem",
              borderRight: i < work.length - 1 ? "1px solid var(--border)" : "none",
              background: "var(--bg)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "0.25rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.9375rem",
                  color: "var(--text)",
                  letterSpacing: "-0.02em",
                }}
              >
                {item.role}
              </span>
              <span
                style={{
                  fontSize: "0.5625rem",
                  color: "var(--muted-2)",
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "0.02em",
                }}
              >
                {item.period}
              </span>
            </div>
            <p
              style={{
                fontSize: "0.625rem",
                color: "var(--muted)",
                fontWeight: 500,
                letterSpacing: "0.04em",
                fontFamily: "var(--font-sans)",
                marginBottom: "0.625rem",
                textTransform: "uppercase",
              }}
            >
              {item.company}
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--muted)",
                lineHeight: 1.7,
                fontFamily: "var(--font-sans)",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}