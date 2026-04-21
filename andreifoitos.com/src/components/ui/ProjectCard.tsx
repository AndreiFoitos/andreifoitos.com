type Props = {
  title: string;
  description: string;
  outcome: string;
  tech: string[];
  grade?: string;
  link?: string;
};

export default function ProjectCard({
  title,
  description,
  outcome,
  tech,
  grade,
  link,
}: Props) {
  const Tag = link ? "a" : "div";
  const linkProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      {...linkProps}
      style={{
        display: "block",
        padding: "1.75rem",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        background: "var(--bg)",
        cursor: link ? "pointer" : "default",
        textDecoration: "none",
        transition: "border-color 200ms ease, background 200ms ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--muted)";
        el.style.background = "var(--surface)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.background = "var(--bg)";
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.125rem",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            color: "var(--text)",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>

        {grade && (
          <span
            style={{
              flexShrink: 0,
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "var(--muted)",
              border: "1px solid var(--border)",
              padding: "0.2rem 0.5rem",
              borderRadius: "2px",
              letterSpacing: "0.04em",
            }}
          >
            {grade}
          </span>
        )}
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--muted)",
          lineHeight: 1.65,
          marginBottom: "0.625rem",
        }}
      >
        {description}
      </p>

      {/* Outcome */}
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--text)",
          lineHeight: 1.65,
          marginBottom: "1.25rem",
        }}
      >
        {outcome}
      </p>

      {/* Tech pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
        {tech.map((t) => (
          <span
            key={t}
            style={{
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--muted)",
              background: "var(--surface)",
              padding: "0.25rem 0.625rem",
              borderRadius: "2px",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </Tag>
  );
}