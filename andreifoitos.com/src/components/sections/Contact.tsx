const links = [
  { label: "Email", href: "mailto:andreifoitos4@gmail.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Contact() {
  return (
    <section
      id="contact"
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
          Contact
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "end",
        }}
      >
        {/* Left — heading + CTA */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              lineHeight: 1.06,
              marginBottom: "2rem",
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
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.75,
              maxWidth: "44ch",
              marginBottom: "2.5rem",
            }}
          >
            Open to internships, research opportunities, and freelance projects.
            I'm particularly interested in applied AI, human-centred systems,
            and cross-disciplinary challenges.
          </p>

          <a
            href="mailto:andreifoitos4@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 1.875rem",
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
            andreifoitos4@gmail.com
            <span aria-hidden>↗</span>
          </a>
        </div>

        {/* Right — links */}
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
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
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.25rem 1.5rem",
                  borderBottom:
                    i < links.length - 1 ? "1px solid var(--border)" : "none",
                  background: "var(--bg)",
                  color: "var(--text)",
                  fontSize: "0.9375rem",
                  fontWeight: 400,
                  transition: "background 200ms ease",
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
                <span>{link.label}</span>
                <span style={{ color: "var(--muted)", fontSize: "0.875rem" }}>
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}