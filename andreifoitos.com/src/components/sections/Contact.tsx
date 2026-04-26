"use client";

import { useState, useRef } from "react";

type Status = "idle" | "loading" | "success" | "error";

const links = [
  {
    label: "Email",
    value: "andreifoitos4@gmail.com",
    href: "mailto:andreifoitos4@gmail.com",
  },
  {
    label: "Phone",
    value: "+31 6 81 01 50 71",
    href: "tel:+31681015071",
  },
  {
    label: "GitHub",
    value: "github.com/andreifoitos",
    href: "https://github.com/andreifoitos",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/andreifoitos",
    href: "https://linkedin.com/in/andreifoitos",
  },
];

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.625rem 0.875rem",
  fontSize: "0.8125rem",
  color: "var(--text)",
  background: "var(--bg)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  fontFamily: "var(--font-sans)",
  outline: "none",
  transition: "border-color 180ms ease",
  lineHeight: 1.5,
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  const handleFocus = (el: HTMLInputElement | HTMLTextAreaElement | null) => {
    if (el) el.style.borderColor = "var(--border-2)";
  };
  const handleBlur = (el: HTMLInputElement | HTMLTextAreaElement | null) => {
    if (el) el.style.borderColor = "var(--border)";
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Try again or email directly.");
    }
  }

  return (
    <div>
      <div className="section-label">
        <span className="section-label-text">Contact</span>
        <div className="section-label-line" />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Left — form */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              letterSpacing: "-0.035em",
              color: "var(--text)",
              lineHeight: 1.06,
              marginBottom: "1.375rem",
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
              fontSize: "0.875rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "42ch",
              fontFamily: "var(--font-sans)",
              marginBottom: "2rem",
            }}
          >
            Open to internships, research opportunities, and freelance projects.
            Particularly interested in applied AI, human-centred systems, and
            cross-disciplinary challenges.
          </p>

          {status === "success" ? (
            <div
              style={{
                padding: "1.5rem",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                background: "var(--surface)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.0625rem",
                  color: "var(--text)",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.375rem",
                }}
              >
                Message sent.
              </p>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--muted)",
                  fontFamily: "var(--font-sans)",
                  lineHeight: 1.7,
                }}
              >
                I'll get back to you as soon as I can.{" "}
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    color: "var(--text-2)",
                    fontSize: "0.8125rem",
                    fontFamily: "var(--font-sans)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  Send another?
                </button>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: "block",
                    fontSize: "0.5rem",
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--muted-2)",
                    fontFamily: "var(--font-sans)",
                    marginBottom: "0.375rem",
                  }}
                >
                  Name
                </label>
                <input
                  ref={nameRef}
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => handleFocus(nameRef.current)}
                  onBlur={() => handleBlur(nameRef.current)}
                  placeholder="Your name"
                  required
                  disabled={status === "loading"}
                  style={fieldStyle}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  style={{
                    display: "block",
                    fontSize: "0.5rem",
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--muted-2)",
                    fontFamily: "var(--font-sans)",
                    marginBottom: "0.375rem",
                  }}
                >
                  Email
                </label>
                <input
                  ref={emailRef}
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => handleFocus(emailRef.current)}
                  onBlur={() => handleBlur(emailRef.current)}
                  placeholder="you@example.com"
                  required
                  disabled={status === "loading"}
                  style={fieldStyle}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: "block",
                    fontSize: "0.5rem",
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--muted-2)",
                    fontFamily: "var(--font-sans)",
                    marginBottom: "0.375rem",
                  }}
                >
                  Message
                </label>
                <textarea
                  ref={msgRef}
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => handleFocus(msgRef.current)}
                  onBlur={() => handleBlur(msgRef.current)}
                  placeholder="What are you working on?"
                  required
                  disabled={status === "loading"}
                  rows={5}
                  style={{ ...fieldStyle, resize: "vertical", minHeight: "7rem" }}
                />
              </div>

              {/* Error */}
              {status === "error" && errorMsg && (
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#b91c1c",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {errorMsg}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4375rem",
                  padding: "0.6875rem 1.5rem",
                  background: status === "loading" ? "var(--muted)" : "var(--text)",
                  color: "var(--bg)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  borderRadius: "var(--radius)",
                  border: "none",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  letterSpacing: "0.02em",
                  fontFamily: "var(--font-sans)",
                  transition: "opacity 180ms ease, background 180ms ease",
                  opacity: status === "loading" ? 0.6 : 1,
                }}
                onMouseEnter={(e) => {
                  if (status !== "loading")
                    (e.currentTarget as HTMLElement).style.opacity = "0.72";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity =
                    status === "loading" ? "0.6" : "1";
                }}
              >
                {status === "loading" ? "Sending…" : "Send message"}
                {status !== "loading" && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 10L10 2M10 2H4.5M10 2V7.5"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </form>
          )}
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
              target={
                link.href.startsWith("mailto") || link.href.startsWith("tel")
                  ? undefined
                  : "_blank"
              }
              rel="noopener noreferrer"
              style={{
                display: "grid",
                gridTemplateColumns: "4.5rem 1fr auto",
                alignItems: "center",
                gap: "1rem",
                padding: "1.125rem 1.375rem",
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
                  fontSize: "0.5rem",
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
                  fontSize: "0.75rem",
                  color: "var(--text-2)",
                  fontFamily: "var(--font-sans)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {link.value}
              </span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 11 11"
                fill="none"
                style={{ flexShrink: 0, color: "var(--muted-2)" }}
              >
                <path
                  d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}