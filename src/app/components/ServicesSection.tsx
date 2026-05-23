import { useRef } from "react";
import { motion, useInView } from "motion/react";
import globalIcon from "../../imports/global.svg";
import chartIcon from "../../imports/presentation-chart.svg";

const SERVICES = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Fast, scalable websites and web apps built with modern frameworks. From landing pages to complex full-stack platforms, we engineer for performance and longevity.",
    icon: <img src={globalIcon} alt="" width={28} height={28} style={{ filter: "brightness(0) saturate(100%) invert(72%) sepia(43%) saturate(583%) hue-rotate(131deg) brightness(96%) contrast(101%)" }} />,
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Cross-platform mobile and desktop applications that feel native and perform flawlessly. We build with React Native and modern tooling to ship on every surface.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Interfaces grounded in user research and refined through iteration. We design experiences that are intuitive, accessible, and built to convert.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "SEO & Performance",
    description:
      "Technical SEO audits, Core Web Vitals optimisation, and structured data implementation. We make sure the right people find your product — and that it loads fast when they do.",
    icon: <img src={chartIcon} alt="" width={28} height={28} style={{ filter: "brightness(0) saturate(100%) invert(72%) sepia(43%) saturate(583%) hue-rotate(131deg) brightness(96%) contrast(101%)" }} />,
  },
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      className="liquid-glass group relative p-6 md:p-8 cursor-default"
      style={{
        borderRadius: "16px",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
      whileHover={{
        boxShadow: "0 0 32px rgba(0, 212, 192, 0.12)",
        y: -4,
      }}
    >
      {/* Icon */}
      <div
        style={{ color: "#00D4C0", marginBottom: "20px" }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "16px",
          fontWeight: 600,
          color: "#00D4C0",
          marginBottom: "10px",
          letterSpacing: "-0.01em",
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "13px",
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.85)",
        }}
      >
        {service.description}
      </p>

      {/* Hover arrow */}
      <div
        className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ color: "#00D4C0" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      style={{ padding: "100px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section heading */}
        <div ref={headingRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
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
              Services
            </span>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(32px, 4vw, 52px)",
                letterSpacing: "-0.02em",
                color: "#00D4C0",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              <span style={{ color: "#FFFFFF" }}>What we</span> <span style={{ color: "#00D4C0" }}>build</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "14px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.85)",
                maxWidth: "480px",
              }}
            >
              Every engagement starts with understanding. Then we build the
              right thing.
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}