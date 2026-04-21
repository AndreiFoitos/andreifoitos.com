export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontSize: "0.8125rem",
            color: "var(--muted)",
          }}
        >
          © {year} Andrei Foitoș
        </span>

        <div style={{ display: "flex", gap: "1.5rem" }}>
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
                fontSize: "0.8125rem",
                color: "var(--muted)",
                transition: "color 200ms ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--muted)")
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