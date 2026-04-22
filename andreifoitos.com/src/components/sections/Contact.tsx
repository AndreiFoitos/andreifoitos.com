"use client";

const links = [
  {
    label: "Email",
    value: "andreifoitos4@gmail.com",
    href: "mailto:andreifoitos4@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/andreifoitos",
    href: "https://github.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/andreifoitos",
    href: "https://linkedin.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        maxWidth: "var(--max-w)",
        margin: "0 auto",
        padding: "8rem 2.5rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Section label */}
      <div className="section-label">
        <span className="section-label-text">Contact</span>
        <div className="section-label-line" />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.035em",
              color: "var(--text)",
              lineHeight: 1.06,
              marginBottom: "1.75rem",
            }}
          >
            Let's build something{" "}
            <em style={{ fontStyle: "italic", color: "var(--muted)" }}>
              remarkable
            </em>
            .
          </h2>

          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "42ch",
              fontFamily: "var(--font-sans)",
              marginBottom: "2.5rem",
            }}
          >
            Open to internships, research opportunities, and freelance projects.
            Particularly interested in applied AI, human-centred systems, and
            cross-disciplinary challenges.
          </p>

          <a
            href="mailto:andreifoitos4@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.8125rem 1.75rem",
              background: "var(--text)",
              color: "var(--bg)",
              fontSize: "0.8125rem",
              fontWeight: 500,
              borderRadius: "var(--radius)",
              transition: "opacity 180ms ease",
              letterSpacing: "0.02em",
              fontFamily: "var(--font-sans)",
              border: "1px solid var(--text)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.72")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            Send an email
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4.5M10 2V7.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Right — links */}
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
        >
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                display: "grid",
                gridTemplateColumns: "5rem 1fr auto",
                alignItems: "center",
                gap: "1.25rem",
                padding: "1.375rem 1.625rem",
                borderBottom:
                  i < links.length - 1 ? "1px solid var(--border)" : "none",
                background: "var(--bg)",
                color: "var(--text)",
                textDecoration: "none",
                transition: "background 180ms ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--surface)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--bg)")
              }
            >
              <span
                style={{
                  fontSize: "0.5625rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--muted-2)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {link.label}
              </span>
              <span
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--text-2)",
                  fontFamily: "var(--font-sans)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {link.value}
              </span>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ flexShrink: 0, color: "var(--muted-2)" }}>
                <path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}