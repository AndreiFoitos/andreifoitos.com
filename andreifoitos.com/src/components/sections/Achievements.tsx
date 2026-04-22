const achievements = [
  { title: "World Karate Champion", years: "2020 · 2021 · 2023" },
  { title: "European Karate Champion", years: "2020 · 2021 · 2022 · 2023" },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
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
          Achievements
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
      </div>

      {/* Achievement rows */}
      <div>
        {achievements.map((item) => (
          <div
            key={item.title}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              padding: "2rem 0",
              borderBottom: "1px solid var(--border)",
              gap: "2rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                color: "var(--text)",
                lineHeight: 1.1,
              }}
            >
              {item.title}
            </h2>

            <span
              style={{
                fontSize: "0.8125rem",
                color: "var(--muted)",
                letterSpacing: "0.06em",
                flexShrink: 0,
                fontWeight: 400,
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
          marginTop: "2rem",
          fontSize: "0.9375rem",
          color: "var(--muted)",
          maxWidth: "56ch",
          lineHeight: 1.75,
        }}
      >
        Competing at the highest level taught discipline, resilience, and the
        ability to perform under pressure — qualities I bring into every
        engineering challenge.
      </p>
    </section>
  );
}