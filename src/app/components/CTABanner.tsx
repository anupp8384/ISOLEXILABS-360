import { useRef } from "react";
import { motion, useInView } from "motion/react";

const CONTACT_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=isolexilabs%40gmail.com";

export function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" style={{ padding: "60px 0 100px" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12" ref={ref}>
        {/* Liquid-glass container */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="liquid-glass"
          style={{
            borderRadius: "28px",
            padding: "80px 48px",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {/* Radial glow */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "600px",
              height: "300px",
              background: "radial-gradient(ellipse at center, rgba(0,212,192,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#00D4C0",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "24px",
            }}
          >
            <span style={{ width: "28px", height: "1px", backgroundColor: "#00D4C0", display: "inline-block" }} />
            Let's work together
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 64px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              marginBottom: "24px",
            }}
          >
            <span style={{ color: "#FFFFFF" }}>Ready to build</span>
            <br />
            <span style={{ color: "#00D4C0" }}>something precise?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "14px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.65)",
              marginBottom: "44px",
              maxWidth: "480px",
              margin: "0 auto 44px",
            }}
          >
            Tell us what you're building. We'll tell you how we'd build it better.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#0A0A0F",
                backgroundColor: "#00D4C0",
                border: "none",
                borderRadius: "100px",
                padding: "14px 32px",
                cursor: "pointer",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Get in touch →
            </motion.a>
            <motion.a
              href="https://www.instagram.com/isolexilabs/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                backgroundColor: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "100px",
                padding: "14px 32px",
                cursor: "pointer",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
                storyline
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
