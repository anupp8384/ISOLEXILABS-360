import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const PROJECTS = [
  {
    id: 1,
    name: "WebzerLabs",
    type: "Agency Website",
    image: "https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhZ2VuY3klMjBkYXJrJTIwaW50ZXJmYWNlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3ODAxODMxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#00D4C0",
  },
  {
    id: 2,
    name: "Bookavibe",
    type: "Booking Platform",
    image: "https://images.unsplash.com/photo-1630476387426-52c6e0b14e50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbWluaW1hbCUyMGNvZGUlMjB0ZWNoJTIwc3RhcnR1cCUyMHdlYnNpdGV8ZW58MXx8fHwxNzc4MDE4MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#00D4C0",
  },
  {
    id: 3,
    name: "IsolexisLabs",
    type: "Branding System",
    image: "https://images.unsplash.com/photo-1702479744120-98fffb81bf6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwc3lzdGVtJTIwdHlwb2dyYXBoeSUyMGRhcmt8ZW58MXx8fHwxNzc4MDE4MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#6AFF30",
  },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
      className="group relative overflow-hidden"
      style={{
        borderRadius: "8px",
        border: "1px solid #1E1E2E",
        backgroundColor: "#111118",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <ImageWithFallback
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{
            transform: "scale(1)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: "linear-gradient(to bottom, transparent 50%, #0A0A0F 100%)",
          }}
        />
        {/* Number */}
        <div
          className="absolute top-4 left-4"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.1em",
            color: "rgba(240, 240, 245, 0.4)",
            textTransform: "uppercase",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Card bottom */}
      <div
        className="flex items-end justify-between p-5 md:p-6"
      >
        <div>
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "18px",
              fontWeight: 600,
              color: "#F0F0F5",
              letterSpacing: "-0.01em",
              marginBottom: "4px",
            }}
          >
            {project.name}
          </h3>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#5A5A72",
            }}
          >
            {project.type}
          </span>
        </div>
        <a
          href="#"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "13px",
            color: project.color,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          View →
        </a>
      </div>
    </motion.div>
  );
}

export function WorkSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      style={{ backgroundColor: "#0A0A0F", padding: "120px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div
          ref={headingRef}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
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
              Selected Work
            </span>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(32px, 4vw, 52px)",
                letterSpacing: "-0.02em",
                color: "#F0F0F5",
                lineHeight: 1.1,
              }}
            >
              What we've shipped
            </h2>
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#00D4C0",
              textDecoration: "none",
              borderBottom: "1px solid rgba(0, 212, 192, 0.3)",
              paddingBottom: "2px",
              flexShrink: 0,
              alignSelf: "flex-end",
            }}
          >
            All Projects →
          </motion.a>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}