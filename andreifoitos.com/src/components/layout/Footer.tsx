"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-warm)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          padding: "1.75rem 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            color: "var(--muted-2)",
            fontFamily: "var(--font-sans)",
            letterSpacing: "0.02em",
          }}
        >
          © {year} Andrei Foitoș
        </span>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {[
            { label: "Email", href: "mailto:andreifoitos4@gmail.com" },
            { label: "GitHub", href: "https://github.com" },
            { label: "LinkedIn", href: "https://linkedin.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                fontSize: "0.75rem",
                color: "var(--muted-2)",
                fontFamily: "var(--font-sans)",
                letterSpacing: "0.02em",
                transition: "color 180ms ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--muted-2)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}