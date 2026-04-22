type Props = {
  index: number;
  title: string;
  description: string;
  outcome: string;
  tech: string[];
  grade?: string;
  link?: string;
};

export default function ProjectCard({
  index,
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
        padding: "2rem",
        background: "var(--bg)",
        cursor: link ? "pointer" : "default",
        textDecoration: "none",
        transition: "background 200ms ease",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "var(--surface)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "var(--bg)";
      }}
    >
      {/* Index + grade */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <span
          style={{
            fontSize: "0.6875rem",
            fontWeight: 500,
            color: "var(--muted)",
            letterSpacing: "0.1em",
            fontFamily: "var(--font-sans)",
          }}
        >
          {String(index).padStart(2, "0")}
        </span>

        {grade && (
          <span
            style={{
              fontSize: "0.6875rem",
              fontWeight: 500,
              color: "var(--muted)",
              letterSpacing: "0.06em",
              border: "1px solid var(--border)",
              padding: "0.2rem 0.5rem",
              borderRadius: "2px",
            }}
          >
            {grade}
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.1875rem",
          fontWeight: 400,
          letterSpacing: "-0.015em",
          color: "var(--text)",
          lineHeight: 1.25,
          marginBottom: "1rem",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--muted)",
          lineHeight: 1.7,
          marginBottom: "0.75rem",
        }}
      >
        {description}
      </p>

      {/* Outcome */}
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--text)",
          lineHeight: 1.7,
          marginBottom: "1.75rem",
          paddingTop: "0.75rem",
          borderTop: "1px solid var(--border)",
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
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "var(--muted)",
              background: "var(--surface)",
              padding: "0.25rem 0.625rem",
              borderRadius: "2px",
              border: "1px solid var(--border)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </Tag>
  );
}