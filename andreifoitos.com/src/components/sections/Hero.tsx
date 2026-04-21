export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        paddingTop: "10rem",
        paddingBottom: "7rem",
        maxWidth: "1120px",
        margin: "0 auto",
        padding: "10rem 2rem 7rem",
      }}
    >
      {/* Status badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "2.5rem",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "#22C55E",
          }}
        />
        <span
          style={{
            fontSize: "0.75rem",
            color: "var(--muted)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Available for opportunities
        </span>
      </div>

      {/* Main heading */}
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3rem, 6vw, 5.5rem)",
          fontWeight: 400,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          color: "var(--text)",
          maxWidth: "16ch",
        }}
      >
        Building intelligent{" "}
        <em style={{ fontStyle: "italic", color: "var(--muted)" }}>systems</em>
        <br />
        that work in practice.
      </h1>

      {/* Descriptor row */}
      <div
        style={{
          marginTop: "2.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          {["AI Engineer", "Full-Stack Developer", "MSc AI · Groningen"].map(
            (tag, i) => (
              <span
                key={tag}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontSize: "0.875rem",
                  color: "var(--muted)",
                }}
              >
                {i > 0 && (
                  <span style={{ color: "var(--border)", fontSize: "1rem" }}>
                    /
                  </span>
                )}
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      {/* Bio */}
      <p
        style={{
          marginTop: "2rem",
          fontSize: "1.0625rem",
          color: "var(--muted)",
          lineHeight: 1.75,
          maxWidth: "52ch",
        }}
      >
        MSc Artificial Intelligence student at the University of Groningen.
        Focused on machine learning, reinforcement learning, and shipping
        real-world applications that make a difference.
      </p>

      {/* CTA row */}
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1.5rem",
            background: "var(--text)",
            color: "var(--bg)",
            fontSize: "0.875rem",
            fontWeight: 500,
            borderRadius: "var(--radius)",
            transition: "opacity 200ms ease",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "0.8")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "1")
          }
        >
          View Work
          <span aria-hidden>→</span>
        </a>

        <a
          href="mailto:andreifoitos4@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.75rem 1.5rem",
            background: "transparent",
            color: "var(--text)",
            fontSize: "0.875rem",
            fontWeight: 400,
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            transition: "border-color 200ms ease, background 200ms ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--surface)";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--muted)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
          }}
        >
          Get in touch
        </a>
      </div>

      {/* Thin bottom rule */}
      <div
        style={{
          marginTop: "6rem",
          borderTop: "1px solid var(--border)",
        }}
      />
    </section>
  );
}