const achievements = [
  { title: "World Karate Champion", years: "2020, 2021, 2023" },
  { title: "European Karate Champion", years: "2020, 2021, 2022, 2023" },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
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
          Achievements
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0",
        }}
      >
        {achievements.map((item, i) => (
          <div
            key={item.title}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              padding: "1.5rem 0",
              borderBottom: "1px solid var(--border)",
              borderTop: i === 0 ? "1px solid var(--border)" : "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "var(--text)",
              }}
            >
              {item.title}
            </span>

            <span
              style={{
                fontSize: "0.875rem",
                color: "var(--muted)",
                letterSpacing: "0.02em",
              }}
            >
              {item.years}
            </span>
          </div>
        ))}
      </div>

      <p
        style={{
          marginTop: "1.5rem",
          fontSize: "0.875rem",
          color: "var(--muted)",
          maxWidth: "48ch",
          lineHeight: 1.65,
        }}
      >
        Competing at the highest level in sport taught discipline, resilience,
        and the ability to perform under pressure — qualities I bring into
        every engineering challenge.
      </p>
    </section>
  );
}