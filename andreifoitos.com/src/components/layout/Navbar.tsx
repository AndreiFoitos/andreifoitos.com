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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "var(--nav-h)",
        background: scrolled ? "rgba(246,245,241,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 400ms ease, border-color 400ms ease",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          padding: "0 2.5rem",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Wordmark */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            color: "var(--text)",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "26px",
              height: "26px",
              border: "1px solid var(--border-2)",
              borderRadius: "2px",
              fontSize: "0.5625rem",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "var(--muted)",
              flexShrink: 0,
            }}
          >
            AF
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              letterSpacing: "-0.025em",
              color: "var(--text)",
            }}
          >
            Andrei Foitoș
          </span>
        </a>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  padding: "0.375rem 0.875rem",
                  fontSize: "0.75rem",
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? "var(--text)" : "var(--muted)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  borderRadius: "var(--radius)",
                  background: isActive ? "var(--surface)" : "transparent",
                  border: isActive ? "1px solid var(--border)" : "1px solid transparent",
                  transition: "color 200ms ease, background 200ms ease, border-color 200ms ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "var(--text)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                  }
                }}
              >
                {link.label}
              </a>
            );
          })}

          <div
            style={{
              width: "1px",
              height: "18px",
              background: "var(--border)",
              margin: "0 0.5rem",
              flexShrink: 0,
            }}
          />

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3125rem",
              padding: "0.4375rem 1rem",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.05em",
              color: "var(--bg)",
              background: "var(--text)",
              borderRadius: "var(--radius)",
              border: "1px solid var(--text)",
              transition: "opacity 180ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.72";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }}
          >
            CV
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}