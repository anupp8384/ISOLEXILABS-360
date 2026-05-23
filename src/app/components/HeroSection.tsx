import React, { useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from "motion/react";

const VIDEO_SRC = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4";

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const TICKER_ITEMS = ["Web Development", "App Development", "UI/UX Design", "SEO & Performance", "Clean Code", "Scalable Systems"];

function Ticker() {
  const x = useMotionValue(0);
  useAnimationFrame(() => {
    x.set(x.get() - 0.55);
    if (x.get() < -1200) x.set(0);
  });

  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "12px 0" }}>
      <motion.div style={{ x, display: "flex", gap: "64px", whiteSpace: "nowrap", width: "max-content" }}>
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", display: "flex", alignItems: "center", gap: "24px" }}>
            {item}<span style={{ color: "#00D4C0", fontSize: "7px" }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  const [videoFailed, setVideoFailed] = useState(false);
  const { scrollY } = useScroll();
  const rawY       = useTransform(scrollY, [0, 700], [0, -100]);
  const rawOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const rawScale   = useTransform(scrollY, [0, 700], [1, 0.94]);
  const parallaxY      = useSpring(rawY,       { stiffness: 80, damping: 20 });
  const contentOpacity = useSpring(rawOpacity, { stiffness: 80, damping: 20 });
  const contentScale   = useSpring(rawScale,   { stiffness: 80, damping: 20 });
  const bgY    = useTransform(scrollY, [0, 700], [0, 60]);
  const bgSpring = useSpring(bgY, { stiffness: 60, damping: 20 });

  

  return (
    <section id="work" className="relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: "#0A0A0F" }}>

      {/* SVG noise filter for shiny headline */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="c3-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>
        </defs>
      </svg>

      {/* Full-screen video background */}
      <motion.div className="absolute inset-0" style={{ y: bgSpring, zIndex: 0 }}>
        {!videoFailed && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            onError={() => setVideoFailed(true)}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            src={VIDEO_SRC}
          />
        )}
        {/* Left-to-right gradient — keeps bottom-left text readable */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,15,0.88) 0%, rgba(10,10,15,0.45) 55%, rgba(10,10,15,0.15) 100%)" }} />
        {/* Bottom vignette */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,15,0.98) 0%, rgba(10,10,15,0.3) 40%, transparent 100%)" }} />
        {/* Teal ambient */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 5% 90%, rgba(0,212,192,0.08) 0%, transparent 70%)" }} />
        </motion.div>

      {/* Scroll-driven content */}
      <motion.div className="relative z-10 flex-1 flex flex-col" style={{ y: parallaxY, opacity: contentOpacity, scale: contentScale }}>

        {/* Hero — bottom-left */}
        <div className="flex-1 flex flex-col justify-end max-w-7xl mx-auto w-full px-6 md:px-12 pb-10">
          <div style={{ maxWidth: "600px" }}>

            {/* Eye-brow */}
            <motion.div variants={FADE_UP} initial="hidden" animate="visible" custom={0.1}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#00D4C0", display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
                <span style={{ width: "28px", height: "1px", backgroundColor: "#00D4C0", display: "inline-block" }} />
                Web Development Agency
              </span>
            </motion.div>

            {/* Headline line 1 — white */}
            <motion.h1 variants={FADE_UP} initial="hidden" animate="visible" custom={0.25}
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "#FFFFFF", margin: 0 }}>
              Your vision,
            </motion.h1>

            {/* Headline line 2 — shiny gradient */}
            <motion.h1 variants={FADE_UP} initial="hidden" animate="visible" custom={0.35}
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "28px" }}>
              <span
                className="animate-shiny"
                style={{
                  backgroundImage: "linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                  filter: "url(#c3-noise)",
                  display: "inline-block",
                }}
              >
                our code.
              </span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p variants={FADE_UP} initial="hidden" animate="visible" custom={0.45}
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "15px", lineHeight: 1.7, color: "rgba(255,255,255,0.65)", maxWidth: "480px", marginBottom: "36px" }}>
              We build digital products that are as powerful as they look.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={FADE_UP} initial="hidden" animate="visible" custom={0.55} style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe_VC2LIFAkr9_5gx0Bl2BQn5AqwdhHN5YC0GXukJA0NoREBg/viewform?usp=sharing&ouid=105375545595952233959"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0A0A0F", backgroundColor: "#00D4C0", border: "none", borderRadius: "100px", padding: "14px 28px", cursor: "pointer", fontWeight: 600, textDecoration: "none", display: "inline-block" }}>
                Start your project
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFFFFF", backgroundColor: "rgba(255,255,255,0.07)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "100px", padding: "14px 28px", cursor: "pointer", fontWeight: 600 }}>
                Explore Services →
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div variants={FADE_UP} initial="hidden" animate="visible" custom={0.9}
          className="absolute right-8 md:right-12 bottom-24 flex flex-col items-center gap-2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, #00D4C0, transparent)" }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", writingMode: "vertical-rl" }}>Scroll</span>
        </motion.div>

        {/* Ticker */}
        <div className="relative z-10 mt-auto"><Ticker /></div>
      </motion.div>
    </section>
  );
}
