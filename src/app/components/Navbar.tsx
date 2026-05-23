import { useState, useEffect } from "react";
import { motion } from "motion/react";
import logoImg2 from "../../imports/Isolexilabs_High_resolution-13__1_.png";

const NAV_LINKS = ["Work", "Services", "About", "Contact"];
const CONTACT_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=isolexilabs%40gmail.com";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled ? "rgba(0,212,192,0.15)" : "rgba(0,212,192,0.06)",
        backdropFilter: "blur(20px) saturate(160%)",
        WebkitBackdropFilter: "blur(20px) saturate(160%)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(255,255,255,0.04)",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.3)" : "none",
        transition: "background-color 0.4s ease, box-shadow 0.4s ease",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
          aria-label="ISOLEXILABS Home"
        >
          <img
            src={logoImg2}
            alt=""
            style={{ height: "32px", objectFit: "contain" }}
          />
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              color: "#00D4C0",
              letterSpacing: "-0.01em",
            }}
          >
            ISOLEXILABS
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: "#5A5A72",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s ease",
                padding: "4px 0",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F0F5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5A5A72")}
            >
              {link}
            </button>
          ))}
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "#0A0A0F",
              backgroundColor: "#00D4C0",
              border: "none",
              borderRadius: "4px",
              padding: "8px 16px",
              cursor: "pointer",
              transition: "opacity 0.2s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1px",
              backgroundColor: "#F0F0F5",
              transition: "transform 0.2s",
              transform: mobileOpen ? "rotate(45deg) translateY(4px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1px",
              backgroundColor: "#F0F0F5",
              opacity: mobileOpen ? 0 : 1,
              transition: "opacity 0.2s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1px",
              backgroundColor: "#F0F0F5",
              transition: "transform 0.2s",
              transform: mobileOpen ? "rotate(-45deg) translateY(-4px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          style={{
            backgroundColor: "rgba(10, 10, 15, 0.98)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid #1E1E2E",
            padding: "24px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left" as const,
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: "#5A5A72",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "12px 0",
                borderBottom: "1px solid #1E1E2E",
              }}
            >
              {link}
            </button>
          ))}
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              width: "100%",
              textAlign: "left" as const,
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "#00D4C0",
              textDecoration: "none",
              padding: "12px 0",
              borderBottom: "1px solid #1E1E2E",
            }}
          >
            Get in touch
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
