"use client";

import Link from "next/link";

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
          Open to research & engineering roles
        </span>
      </div>

      {/* Name + identity */}
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3.25rem, 6.5vw, 5.75rem)",
          fontWeight: 400,
          letterSpacing: "-0.04em",
          lineHeight: 1.02,
          color: "var(--text)",
          marginBottom: "2rem",
        }}
      >
        Andrei Foitoș
      </h1>

      {/* Role line */}
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          color: "var(--muted)",
          fontStyle: "italic",
          marginBottom: "3rem",
          lineHeight: 1.4,
        }}
      >
        AI Engineer and Full-Stack Developer.
      </p>

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
          { label: "Focus", value: "ML, Reinforcement Learning, Uncertainty" },
          { label: "Location", value: "Groningen, Netherlands" },
          { label: "Currently", value: "MSc AI @ University of Groningen" },
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
          maxWidth: "54ch",
          marginBottom: "2.75rem",
          fontFamily: "var(--font-sans)",
        }}
      >
        I study AI at Groningen and ship real software with it — from a
        neonatal-ICU dashboard and a production CRM to a peer-reviewed paper on
        uncertainty in deep learning. I'm also a three-time World Karate
        Champion, which taught me something research later confirmed: the gap
        between theory and performance is where the real work happens.
      </p>

      {/* CTAs */}
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link
          href="/work"
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
            textDecoration: "none",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "0.72")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "1")
          }
        >
          View Research & Work
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        <Link
          href="/builds"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
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
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "var(--surface)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "transparent";
          }}
        >
          What I'm building
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

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
            transition: "background 180ms ease",
            letterSpacing: "0.02em",
            fontFamily: "var(--font-sans)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--surface)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
          }}
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}