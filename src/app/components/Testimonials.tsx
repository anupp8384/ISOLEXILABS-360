import { motion } from "motion/react";

const TESTIMONIALS = [
  {
    quote: "ISOLEXILABS delivered a product that genuinely impressed our investors. The attention to detail in every interaction made the difference.",
    name: "Arjun Mehta",
    role: "Founder, Fintex",
    initials: "AM",
  },
  {
    quote: "We needed a team that could move fast without breaking things. They shipped our MVP in 6 weeks and it held up under launch traffic.",
    name: "Priya Sharma",
    role: "CTO, Stackwell",
    initials: "PS",
  },
  {
    quote: "The code quality is outstanding. Our in-house team inherited a codebase they were proud to work in — that's rare from an agency.",
    name: "Rahul Nair",
    role: "Engineering Lead, Crux",
    initials: "RN",
  },
];

export function Testimonials() {
  return (
    <section style={{ padding: "100px 0" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "64px" }}
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
              marginBottom: "20px",
            }}
          >
            <span style={{ width: "28px", height: "1px", backgroundColor: "#00D4C0", display: "inline-block" }} />
            Client Stories
          </span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(32px, 4vw, 54px)", lineHeight: 1.08, letterSpacing: "-0.025em", margin: 0 }}>
            <span style={{ color: "#FFFFFF" }}>Words from</span>
            <br />
            <span style={{ color: "#00D4C0" }}>those who shipped.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="liquid-glass"
              style={{
                borderRadius: "20px",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              {/* Quote mark */}
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "48px",
                  lineHeight: 1,
                  color: "#00D4C0",
                  opacity: 0.5,
                }}
              >
                "
              </span>

              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "14px",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.75)",
                  margin: 0,
                  flex: 1,
                }}
              >
                {t.quote}
              </p>

              {/* Attribution */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #00D4C0, #0B2551)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "12px", fontWeight: 700, color: "#fff" }}>
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: "#F0F0F5" }}>
                    {t.name}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.04em" }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
