"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(249,248,245,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Wordmark */}
        <a
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            letterSpacing: "-0.02em",
            color: "var(--text)",
          }}
        >
          Andrei Foitoș
        </a>

        {/* Nav links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.8125rem",
                fontWeight: 400,
                color: "var(--muted)",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
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

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "var(--bg)",
              background: "var(--text)",
              padding: "0.5rem 1.125rem",
              borderRadius: "var(--radius)",
              letterSpacing: "0.01em",
              transition: "opacity 200ms ease",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.opacity = "0.8")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.opacity = "1")
            }
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}