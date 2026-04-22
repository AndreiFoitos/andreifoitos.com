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
        display: "flex",
        flexDirection: "column",
        padding: "2.25rem",
        background: "var(--bg)",
        cursor: link ? "pointer" : "default",
        textDecoration: "none",
        transition: "background 180ms ease",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "var(--surface)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "var(--bg)";
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.75rem",
        }}
      >
        <span
          style={{
            fontSize: "0.5625rem",
            fontWeight: 600,
            color: "var(--muted-2)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontFamily: "var(--font-sans)",
          }}
        >
          {String(index).padStart(2, "0")}
        </span>

        {grade && (
          <span
            style={{
              fontSize: "0.5625rem",
              fontWeight: 600,
              color: "var(--muted)",
              letterSpacing: "0.08em",
              border: "1px solid var(--border)",
              padding: "0.1875rem 0.5rem",
              borderRadius: "2px",
              fontFamily: "var(--font-sans)",
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
          fontSize: "1.125rem",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          color: "var(--text)",
          lineHeight: 1.28,
          marginBottom: "0.875rem",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "0.8125rem",
          color: "var(--muted)",
          lineHeight: 1.75,
          marginBottom: "1rem",
          fontFamily: "var(--font-sans)",
        }}
      >
        {description}
      </p>

      {/* Outcome */}
      <p
        style={{
          fontSize: "0.8125rem",
          color: "var(--text-2)",
          lineHeight: 1.75,
          paddingTop: "1rem",
          borderTop: "1px solid var(--border)",
          fontFamily: "var(--font-sans)",
          flexGrow: 1,
        }}
      >
        {outcome}
      </p>

      {/* Tech pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.3125rem",
          marginTop: "1.75rem",
        }}
      >
        {tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </Tag>
  );
}