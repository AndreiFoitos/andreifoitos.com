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

export default function Experience() {
  return (
    <section
      id="experience"
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
          Experience & Education
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
        }}
      >
        {/* Left — Project experience */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.375rem",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: "2rem",
            }}
          >
            Engineering
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "var(--text)",
                  }}
                >
                  Full-Stack Developer
                </span>
                <span style={{ fontSize: "0.8125rem", color: "var(--muted)" }}>
                  Neolook
                </span>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.65 }}>
                Built a production dashboard for neonatal intensive care data.
                Worked in a collaborative, company-like environment.
                Application is currently deployed and used in clinical settings.
              </p>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "var(--text)",
                  }}
                >
                  AI Research Projects
                </span>
                <span style={{ fontSize: "0.8125rem", color: "var(--muted)" }}>
                  University of Groningen
                </span>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.65 }}>
                Five completed research projects spanning machine learning,
                uncertainty estimation, reinforcement learning, and music AI.
                Average grade: 8.8 / 10.
              </p>
            </div>
          </div>
        </div>

        {/* Right — Education */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.375rem",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: "2rem",
            }}
          >
            Education
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {education.map((item, i) => (
              <div
                key={item.degree}
                style={{
                  paddingBottom: i < education.length - 1 ? "1.75rem" : 0,
                  marginBottom: i < education.length - 1 ? "1.75rem" : 0,
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
                    marginBottom: "0.25rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: "var(--text)",
                    }}
                  >
                    {item.degree}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: "0.8125rem",
                      color: "var(--muted)",
                    }}
                  >
                    {item.period}
                  </span>
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--muted)" }}>
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