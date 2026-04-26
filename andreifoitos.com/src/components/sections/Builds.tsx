"use client";

export type Build = {
  title: string;
  tagline: string;
  description: string;
  status: "in-development" | "early-prototype" | "live";
  tech: string[];
  link?: string;
};

export const builds: Build[] = [
  {
    title: "Yardly",
    tagline: "Booking.com for luxury backyard projects.",
    description:
      "Homeowners upload their address, define their yard on a satellite map, and get an instant AI-assisted pool or outdoor kitchen layout — dimensions, cost estimate, permit checklist included. The real product is on the other side: a qualified lead marketplace where builders pay per warm, budget-ready introduction. Targeting the European market where this category is still wide open.",
    status: "early-prototype",
    tech: ["Next.js", "Python", "Turf.js", "Google Maps API", "Three.js"],
  },
  {
    title: "Mise",
    tagline: "AI stock brain for small HoReCa.",
    description:
      "A food waste and inventory management tool built for restaurants, cafés, and small catering businesses in Romania. Every sale automatically deducts ingredients from stock using a built-in recipe engine. The AI layer watches consumption trends and tells you exactly what to order, how much, and when — before you run out or over-buy. Comes with a sales dashboard, waste tracking, and supplier cost analysis. Built for owners who run the place themselves and can't afford a waste consultant.",
    status: "in-development",
    tech: ["Next.js", "Django", "PostgreSQL", "Python", "AI/ML"],
  },
];

const statusLabel: Record<Build["status"], string> = {
  "in-development": "In development",
  "early-prototype": "Early prototype",
  live: "Live",
};

const statusColor: Record<Build["status"], string> = {
  "in-development": "var(--muted-2)",
  "early-prototype": "var(--muted-2)",
  live: "#16A34A",
};

function BuildCard({ build, index }: { build: Build; index: number }) {
  const Tag = build.link ? "a" : "div";
  const linkProps = build.link
    ? { href: build.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      {...linkProps}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2.25rem",
        background: "var(--bg)",
        textDecoration: "none",
        transition: "background 180ms ease",
        height: "100%",
        cursor: build.link ? "pointer" : "default",
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

        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            fontSize: "0.5625rem",
            fontWeight: 600,
            color: statusColor[build.status],
            letterSpacing: "0.08em",
            border: "1px solid var(--border)",
            padding: "0.1875rem 0.5rem",
            borderRadius: "2px",
            fontFamily: "var(--font-sans)",
          }}
        >
          {build.status === "live" && (
            <span
              style={{
                display: "block",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#16A34A",
                flexShrink: 0,
              }}
            />
          )}
          {statusLabel[build.status]}
        </span>
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
          marginBottom: "0.375rem",
        }}
      >
        {build.title}
      </h3>

      {/* Tagline */}
      <p
        style={{
          fontSize: "0.8125rem",
          color: "var(--text-2)",
          fontStyle: "italic",
          fontFamily: "var(--font-display)",
          marginBottom: "0.875rem",
          letterSpacing: "-0.01em",
        }}
      >
        {build.tagline}
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: "0.8125rem",
          color: "var(--muted)",
          lineHeight: 1.75,
          fontFamily: "var(--font-sans)",
          flexGrow: 1,
        }}
      >
        {build.description}
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
        {build.tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </Tag>
  );
}

export default function Builds() {
  const isEmpty = builds.length === 0;

  return (
    <div>
      <div className="section-label">
        <span className="section-label-text">Lab</span>
        <div className="section-label-line" />
      </div>

      {/* Intro */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "end",
          marginBottom: "4rem",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              letterSpacing: "-0.035em",
              color: "var(--text)",
              lineHeight: 1.06,
              marginBottom: "1.25rem",
            }}
          >
            Things I'm building{" "}
            <em style={{ fontStyle: "italic", color: "var(--muted)" }}>
              for myself.
            </em>
          </h2>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "44ch",
              fontFamily: "var(--font-sans)",
            }}
          >
            Solo projects — ideas turned into prototypes. Not client work, not
            coursework. Just things I wanted to exist and decided to build.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            alignSelf: "end",
          }}
        >
          {[
            { label: "Approach", value: "Design, build, and ship alone" },
            { label: "Stage", value: "Active development" },
            { label: "Goal", value: "Products people actually use" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                padding: "0.625rem 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span
                style={{
                  fontSize: "0.5625rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--muted-2)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--text-2)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid or empty state */}
      {isEmpty ? (
        <div
          style={{
            border: "1px dashed var(--border-2)",
            borderRadius: "var(--radius-lg)",
            padding: "5rem 2.5rem",
            textAlign: "center",
            background: "var(--bg)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.25rem",
              color: "var(--muted)",
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            Building in progress.
          </p>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--muted-2)",
              fontFamily: "var(--font-sans)",
              lineHeight: 1.7,
              maxWidth: "38ch",
              margin: "0 auto",
            }}
          >
            Projects are in development. Check back soon — or{" "}
            <a
              href="mailto:andreifoitos4@gmail.com"
              style={{
                color: "var(--text-2)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              get in touch
            </a>{" "}
            if you want to follow along.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
        >
          {builds.map((build, i) => (
            <div
              key={build.title}
              style={{
                borderRight: i % 3 < 2 ? "1px solid var(--border)" : "none",
                borderBottom:
                  i < builds.length - (builds.length % 3 || 3)
                    ? "1px solid var(--border)"
                    : "none",
              }}
            >
              <BuildCard build={build} index={i + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}