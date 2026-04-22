export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        maxWidth: "var(--max-w)",
        margin: "0 auto",
        padding: "calc(var(--nav-h) + 6rem) 2.5rem 7rem",
        position: "relative",
      }}
    >
      {/* Availability badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "3.5rem",
          padding: "0.3125rem 0.75rem",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          background: "var(--surface)",
        }}
      >
        <span
          style={{
            display: "block",
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "#16A34A",
            flexShrink: 0,
            boxShadow: "0 0 0 2px rgba(22,163,74,0.2)",
          }}
        />
        <span
          style={{
            fontSize: "0.625rem",
            color: "var(--muted)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 500,
            fontFamily: "var(--font-sans)",
          }}
        >
          Available for opportunities
        </span>
      </div>

      {/* Heading */}
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3.25rem, 6.5vw, 5.75rem)",
          fontWeight: 400,
          letterSpacing: "-0.04em",
          lineHeight: 1.02,
          color: "var(--text)",
          maxWidth: "16ch",
          marginBottom: "3rem",
        }}
      >
        Building{" "}
        <em style={{ fontStyle: "italic", color: "var(--muted)" }}>
          intelligent
        </em>{" "}
        systems that work in practice.
      </h1>

      {/* Meta strip */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          overflow: "hidden",
          marginBottom: "3rem",
        }}
      >
        {[
          { label: "Role", value: "AI Engineer & Full-Stack Developer" },
          { label: "Location", value: "Groningen, Netherlands" },
          { label: "Study", value: "MSc Artificial Intelligence" },
        ].map((item, i) => (
          <div
            key={item.label}
            style={{
              padding: "1.25rem 1.5rem",
              borderLeft: i > 0 ? "1px solid var(--border)" : "none",
              background: "var(--bg)",
            }}
          >
            <div
              style={{
                fontSize: "0.5625rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--muted-2)",
                fontWeight: 500,
                fontFamily: "var(--font-sans)",
                marginBottom: "0.4375rem",
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontSize: "0.875rem",
                color: "var(--text-2)",
                fontWeight: 400,
                fontFamily: "var(--font-sans)",
                lineHeight: 1.4,
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* Bio */}
      <p
        style={{
          fontSize: "1.0625rem",
          color: "var(--muted)",
          lineHeight: 1.8,
          maxWidth: "52ch",
          marginBottom: "2.75rem",
          fontFamily: "var(--font-sans)",
        }}
      >
        MSc Artificial Intelligence student at the University of Groningen.
        Focused on machine learning, reinforcement learning, and shipping
        real-world applications — from neonatal ICU dashboards to music AI.
      </p>

      {/* CTAs */}
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <a
          href="#projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1.625rem",
            background: "var(--text)",
            color: "var(--bg)",
            fontSize: "0.8125rem",
            fontWeight: 500,
            borderRadius: "var(--radius)",
            border: "1px solid var(--text)",
            transition: "opacity 180ms ease",
            letterSpacing: "0.02em",
            fontFamily: "var(--font-sans)",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "0.72")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "1")
          }
        >
          View Work
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        <a
          href="mailto:andreifoitos4@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.75rem 1.625rem",
            background: "transparent",
            color: "var(--text-2)",
            fontSize: "0.8125rem",
            fontWeight: 400,
            border: "1px solid var(--border-2)",
            borderRadius: "var(--radius)",
            transition: "background 180ms ease, border-color 180ms ease",
            letterSpacing: "0.02em",
            fontFamily: "var(--font-sans)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "var(--surface)";
            el.style.borderColor = "var(--border-2)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "transparent";
            el.style.borderColor = "var(--border-2)";
          }}
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}