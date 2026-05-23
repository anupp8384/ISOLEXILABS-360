import { useRef } from "react";
import { motion, useInView } from "motion/react";

const STEPS = [
  {
    number: "01",
    label: "Discover",
    description:
      "We map your problem space before writing a single line of code. Stakeholder alignment, technical audit, constraint definition.",
  },
  {
    number: "02",
    label: "Architect",
    description:
      "System design, information architecture, tech stack selection. We build the blueprint that holds everything else together.",
  },
  {
    number: "03",
    label: "Build",
    description:
      "Precision-first execution. We ship iteratively, test continuously, and document everything as we go.",
  },
  {
    number: "04",
    label: "Ship",
    description:
      "Deployment, performance audits, handoff. We don't consider a project done until it performs in the real world.",
  },
];

function StepCard({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      key={step.number}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={[
        "relative pb-8 lg:pb-0",
        index > 0 ? "lg:pl-10" : "",
        index < STEPS.length - 1 ? "lg:pr-10 lg:border-r lg:border-white/10" : "",
      ].join(" ")}
    >
      {/* Large faint number */}
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "72px",
          fontWeight: 700,
          color: "rgba(255,255,255,0.12)",
          lineHeight: 1,
          marginBottom: "16px",
          userSelect: "none",
        }}
      >
        {step.number}
      </div>

      {/* Label */}
      <h3
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "18px",
          fontWeight: 600,
          color: "#00D4C0",
          letterSpacing: "-0.01em",
          marginBottom: "12px",
        }}
      >
        {step.label}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "12px",
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.85)",
        }}
      >
        {step.description}
      </p>
    </motion.div>
  );
}

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      style={{ padding: "100px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div ref={ref} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#00D4C0",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Process
            </span>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(32px, 4vw, 52px)",
                letterSpacing: "-0.02em",
                color: "#00D4C0",
                lineHeight: 1.1,
              }}
            >
              <span style={{ color: "#FFFFFF" }}>How we</span> <span style={{ color: "#00D4C0" }}>work</span>
            </h2>
          </motion.div>
        </div>

        {/* Steps — horizontal desktop, vertical mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {STEPS.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}