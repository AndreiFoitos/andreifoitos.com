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
    degree: "Mathematics & Informatics · Baccalaureate",
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

export default function Experience() {
  return (
    <section
      id="experience"
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
          Experience & Education
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
        }}
      >
        {/* Engineering */}
        <div>
          <h3
            style={{
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--muted)",
              fontWeight: 500,
              marginBottom: "2rem",
            }}
          >
            Engineering
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {engineering.map((item, i) => (
              <div
                key={item.role}
                style={{
                  paddingTop: i > 0 ? "2rem" : "0",
                  paddingBottom: i < engineering.length - 1 ? "2rem" : "0",
                  borderBottom:
                    i < engineering.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "0.375rem",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.125rem",
                      fontWeight: 400,
                      letterSpacing: "-0.015em",
                      color: "var(--text)",
                    }}
                  >
                    {item.role}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--muted)",
                      flexShrink: 0,
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--muted)",
                    marginBottom: "0.25rem",
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                  }}
                >
                  {item.company}
                </p>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--muted)",
                    lineHeight: 1.7,
                    marginTop: "0.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  {item.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 500,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "2px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3
            style={{
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--muted)",
              fontWeight: 500,
              marginBottom: "2rem",
            }}
          >
            Education
          </h3>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {education.map((item, i) => (
              <div
                key={item.degree}
                style={{
                  paddingTop: i > 0 ? "1.75rem" : "0",
                  paddingBottom: i < education.length - 1 ? "1.75rem" : "0",
                  borderBottom:
                    i < education.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "1rem",
                    marginBottom: "0.3rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.0625rem",
                      fontWeight: 400,
                      letterSpacing: "-0.015em",
                      color: "var(--text)",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.degree}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: "0.75rem",
                      color: "var(--muted)",
                    }}
                  >
                    {item.period}
                  </span>
                </div>
                <p style={{ fontSize: "0.8125rem", color: "var(--muted)" }}>
                  {item.institution} · {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}