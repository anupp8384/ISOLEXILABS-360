import { useRef } from "react";
import { motion, useInView } from "motion/react";

const PARAGRAPHS = [
  "ISOLEXILABS is a web development agency built on precision and purpose. We engineer digital products — from architecture to interface — for brands that refuse to settle for average.",
  "Founded by builders who care about craft, we combine clean code, sharp design, and strategic thinking to deliver systems that work as good as they look.",
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "100px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Large quote */}
          <div className="relative overflow-hidden">
            {/* Large decorative quote mark */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "140px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.12)",
                lineHeight: 1,
                position: "absolute",
                top: "-40px",
                left: "-12px",
                userSelect: "none",
              }}
            >
              "
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(22px, 2.5vw, 32px)",
                fontWeight: 600,
                lineHeight: 1.35,
                letterSpacing: "-0.02em",
                color: "#00D4C0",
                paddingTop: "40px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Building digital systems,<br />not just websites.
            </motion.blockquote>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              style={{
                height: "1px",
                backgroundColor: "#1E1E2E",
                marginTop: "40px",
                marginBottom: "32px",
                transformOrigin: "left",
              }}
            />

            {/* Subtle metric */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-8"
            >
              {[
                { label: "Founded", value: "2026" },
                { label: "Location", value: "Bangalore, IN" },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.85)",
                      marginBottom: "4px",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "14px",
                      color: "#00D4C0",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Body copy */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#00D4C0",
                  display: "block",
                  marginBottom: "24px",
                }}
              >
                About
              </span>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 3vw, 36px)",
                  letterSpacing: "-0.02em",
                  color: "#00D4C0",
                  lineHeight: 1.2,
                  marginBottom: "32px",
                }}
              >
                <span style={{ color: "#FFFFFF" }}>Designed to scale.</span><br />Engineered to last.
              </h2>
            </motion.div>

            {PARAGRAPHS.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "13px",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}