import { useState } from "react";
import { motion } from "motion/react";

const PLANS = [
  {
    tier: "Starter",
    desc: "Perfect for early-stage startups and MVPs that need to move fast.",
    monthlyPrice: "₹49K",
    yearlyPrice: "₹39K",
    features: [
      "Up to 5 pages / screens",
      "Responsive design",
      "React + Tailwind codebase",
      "1 revision round",
      "2-week delivery",
      "Basic SEO setup",
    ],
    cta: "Get Started",
    pro: false,
  },
  {
    tier: "Growth",
    desc: "For teams building serious products that need polish and performance.",
    monthlyPrice: "₹99K",
    yearlyPrice: "₹79K",
    features: [
      "Up to 15 pages / screens",
      "Custom animations & interactions",
      "CMS integration",
      "3 revision rounds",
      "4-week delivery",
      "SEO & Core Web Vitals",
      "Analytics setup",
      "Post-launch support (30 days)",
    ],
    cta: "Most Popular",
    pro: true,
  },
  {
    tier: "Pro",
    desc: "Full-scale digital products for funded teams who demand excellence.",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    features: [
      "Unlimited scope",
      "Full-stack development",
      "Design system creation",
      "Unlimited revisions",
      "Dedicated team",
      "Priority support",
      "Performance SLA",
      "Ongoing retainer option",
    ],
    cta: "Let's Talk",
    pro: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="c3-pricing-section" style={{ backgroundColor: "transparent" }}>

      {/* SVG noise filter (reused from hero, but scoped locally) */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="c3-noise-pricing">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>
        </defs>
      </svg>

      {/* Section eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ width: "100%", maxWidth: "1100px", textAlign: "left", marginBottom: "8px" }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#00D4C0",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ width: "28px", height: "1px", backgroundColor: "#00D4C0", display: "inline-block" }} />
          Transparent Pricing
        </span>
      </motion.div>

      {/* Cinematic watermark heading */}
      <div className="c3-watermark-container">
        <motion.div
          className="c3-watermark-main"
          style={{ fontFamily: "'Syne', sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="c3-watermark-line-1">Your vision.</span>
          <span
            className="c3-watermark-line-2 animate-shiny"
            style={{
              backgroundImage: "linear-gradient(to right, #091020 0%, #0B2551 25%, #A4F4FD 65%, #00d2ff 100%)",
              backgroundSize: "200% auto",
            }}
          >
            our code.
          </span>
        </motion.div>
      </div>

      {/* Toggle */}
      <div className="c3-toggle-wrap">
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            color: yearly ? "rgba(255,255,255,0.35)" : "#fff",
            transition: "color 0.3s",
          }}
        >
          Monthly
        </span>
        <button
          className={`c3-toggle${yearly ? " active" : ""}`}
          onClick={() => setYearly(!yearly)}
          aria-label="Toggle billing period"
        >
          <div className="c3-toggle-knob" />
        </button>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            color: yearly ? "#fff" : "rgba(255,255,255,0.35)",
            transition: "color 0.3s",
          }}
        >
          Yearly
          <span
            style={{
              marginLeft: "8px",
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              color: "#00D4C0",
              letterSpacing: "0.06em",
            }}
          >
            save 20%
          </span>
        </span>
      </div>

      {/* Pricing cards */}
      <div className="c3-grid">
        {PLANS.map((plan, i) => (
          <motion.div
            key={plan.tier}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`c3-card${plan.pro ? " c3-card-pro" : ""}`}
          >
            {plan.pro && (
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "#00D4C0",
                  color: "#0A0A0F",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: "100px",
                }}
              >
                Popular
              </div>
            )}

            <div>
              <div className="c3-tier-small" style={{ fontFamily: "'Inter', sans-serif" }}>
                {plan.tier}
              </div>
              <div className="c3-tier-large" style={{ fontFamily: "'Syne', sans-serif" }}>
                {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                {plan.monthlyPrice !== "Custom" && (
                  <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>
                    {" "}/mo
                  </span>
                )}
              </div>
              <div className="c3-desc" style={{ fontFamily: "'DM Mono', monospace" }}>
                {plan.desc}
              </div>
            </div>

            <ul className="c3-list">
              {plan.features.map((f) => (
                <li key={f} style={{ fontFamily: "'Inter', sans-serif" }}>
                  <span className="c3-check">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1" stroke={plan.pro ? "#00D4C0" : "#fff"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className="c3-btn"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                ...(plan.pro
                  ? { background: "#00D4C0", color: "#0A0A0F" }
                  : {}),
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
