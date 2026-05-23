import { motion } from "motion/react";

const EXPLORE_LINKS = ["Home", "About", "Process", "Contact"];
const SERVICE_LINKS = ["Web Development", "App Development", "UI/UX Design", "SEO & Performance"];
const CONTACT_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=isolexilabs%40gmail.com";

const SOCIAL_LINKS = [
  {
    name: "Twitter",
    href: "https://x.com/isolexilabs",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/isolexilabs",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/isolexilabs",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/isolexilabs/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{ borderTop: "1px solid #1E1E2E", padding: "64px 0 32px" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-10 mb-16">
          {/* Col 1 — Logo + tagline + socials */}
          <div className="flex flex-col gap-6">
            <div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#00D4C0",
                  marginBottom: "10px",
                  letterSpacing: "-0.01em",
                }}
              >
                ISOLEXILABS
              </div>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "12px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.85)",
                  maxWidth: "200px",
                }}
              >
                Precision-built web development solutions, based in Bangalore.
              </p>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  style={{ color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#00D4C0")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Explore */}
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                marginBottom: "16px",
              }}
            >
              Explore
            </div>
            <nav className="flex flex-col gap-3">
              {EXPLORE_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.85)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left" as const,
                    padding: 0,
                    transition: "color 0.2s",
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4C0")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          {/* Col 3 — Services */}
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                marginBottom: "16px",
              }}
            >
              Services
            </div>
            <nav className="flex flex-col gap-3">
              {SERVICE_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo("services")}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.85)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left" as const,
                    padding: 0,
                    transition: "color 0.2s",
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4C0")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          {/* Col 3 — Email + location */}
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                marginBottom: "16px",
              }}
            >
              Contact
            </div>
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "13px",
                color: "#00D4C0",
                textDecoration: "none",
                display: "block",
                marginBottom: "12px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              isolexilabs@gmail.com
            </a>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.6,
              }}
            >
              Based in Bangalore, India
              <br />
              Working globally
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #1E1E2E",
            paddingTop: "24px",
            display: "flex",
            flexDirection: "row" as const,
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap" as const,
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            © 2025 ISOLEXILABS. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Precision-built
          </span>
        </div>
      </div>
    </footer>
  );
}
