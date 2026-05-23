import { motion } from "motion/react";

const LOGOS = [
  { name: "React", symbol: "⚛" },
  { name: "TypeScript", symbol: "TS" },
  { name: "Next.js", symbol: "N" },
  { name: "Figma", symbol: "◈" },
  { name: "Tailwind", symbol: "◇" },
  { name: "Vercel", symbol: "▲" },
  { name: "Supabase", symbol: "⬡" },
  { name: "Stripe", symbol: "S" },
];

export function LogoCloud() {
  return (
    <section style={{ padding: "80px 0 60px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          Built with the stack that ships
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {LOGOS.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "32px 20px",
                background: "rgba(255,255,255,0.01)",
                transition: "background 0.2s ease",
              }}
            >
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                {logo.symbol}
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
