const achievements = [
  {
    title: "World Karate Champion",
    years: "2020 · 2021 · 2023",
    detail: "World Karate Federation",
  },
  {
    title: "European Karate Champion",
    years: "2020 · 2021 · 2022 · 2023",
    detail: "European Karate Federation",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{
        maxWidth: "var(--max-w)",
        margin: "0 auto",
        padding: "8rem 2.5rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Section label */}
      <div className="section-label">
        <span className="section-label-text">Achievements</span>
        <div className="section-label-line" />
      </div>

      {/* Achievement rows */}
      <div>
        {achievements.map((item, i) => (
          <div
            key={item.title}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              gap: "2rem",
              padding: "2.25rem 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.625rem, 3vw, 2.5rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  lineHeight: 1.1,
                  marginBottom: "0.3125rem",
                }}
              >
                {item.title}
              </h2>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--muted-2)",
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "0.02em",
                }}
              >
                {item.detail}
              </p>
            </div>

            <span
              style={{
                fontSize: "0.75rem",
                color: "var(--muted)",
                letterSpacing: "0.06em",
                flexShrink: 0,
                fontWeight: 500,
                fontFamily: "var(--font-sans)",
                textAlign: "right",
              }}
            >
              {item.years}
            </span>
          </div>
        ))}
      </div>

      {/* Note */}
      <p
        style={{
          marginTop: "2.5rem",
          fontSize: "0.9375rem",
          color: "var(--muted)",
          maxWidth: "54ch",
          lineHeight: 1.8,
          fontFamily: "var(--font-sans)",
        }}
      >
        Competing at the highest level taught discipline, resilience, and the
        ability to perform under pressure — qualities I bring into every
        engineering challenge.
      </p>
    </section>
  );
}