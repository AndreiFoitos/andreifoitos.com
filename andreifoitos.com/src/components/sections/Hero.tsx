export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        maxWidth: "1120px",
        margin: "0 auto",
        padding: "14rem 2rem 8rem",
      }}
    >
      {/* Status */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.625rem",
          marginBottom: "3rem",
          padding: "0.375rem 0.875rem",
          border: "1px solid var(--border)",
          borderRadius: "2px",
        }}
      >
        <span
          style={{
            display: "block",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#22C55E",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: "0.6875rem",
            color: "var(--muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Available for opportunities
        </span>
      </div>

      {/* Heading */}
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3.5rem, 7vw, 6.25rem)",
          fontWeight: 400,
          letterSpacing: "-0.035em",
          lineHeight: 1.02,
          color: "var(--text)",
          maxWidth: "15ch",
          marginBottom: "2.5rem",
        }}
      >
        Building intelligent{" "}
        <em style={{ fontStyle: "italic", color: "var(--muted)" }}>systems</em>
        {" "}that work in practice.
      </h1>

      {/* Meta row */}
      <div
        style={{
          display: "flex",
          gap: "0",
          marginBottom: "2rem",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
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
              flex: 1,
              padding: "1.25rem 1.5rem",
              borderLeft: i > 0 ? "1px solid var(--border)" : "none",
            }}
          >
            <div
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted)",
                fontWeight: 500,
                marginBottom: "0.375rem",
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontSize: "0.875rem",
                color: "var(--text)",
                fontWeight: 400,
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
          lineHeight: 1.75,
          maxWidth: "54ch",
          marginBottom: "3rem",
        }}
      >
        MSc Artificial Intelligence student at the University of Groningen.
        Focused on machine learning, reinforcement learning, and shipping
        real-world applications — from neonatal ICU dashboards to music AI.
      </p>

      {/* CTAs */}
      <div
        style={{
          display: "flex",
          gap: "0.875rem",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.8125rem 1.75rem",
            background: "var(--text)",
            color: "var(--bg)",
            fontSize: "0.875rem",
            fontWeight: 500,
            borderRadius: "var(--radius)",
            transition: "opacity 200ms ease",
            letterSpacing: "0.01em",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "0.78")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "1")
          }
        >
          View Work
          <span aria-hidden style={{ fontFamily: "var(--font-sans)" }}>→</span>
        </a>

        <a
          href="mailto:andreifoitos4@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.8125rem 1.75rem",
            background: "transparent",
            color: "var(--text)",
            fontSize: "0.875rem",
            fontWeight: 400,
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            transition: "border-color 200ms ease, background 200ms ease",
            letterSpacing: "0.01em",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "var(--surface)";
            el.style.borderColor = "var(--muted)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "transparent";
            el.style.borderColor = "var(--border)";
          }}
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}