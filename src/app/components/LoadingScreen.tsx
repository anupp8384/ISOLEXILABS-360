import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const WORDS = ["Design", "Create", "Inspire"];
const BRAND_WORDS = ["ISOLEXILABS"];
const BRAND_DURATION = 2700; // ms total for counter
const BRAND_MORPH_INTERVAL = 900; // 900ms per word
const EASE = [0.16, 1, 0.3, 1] as const;
const EASE_SMOOTH = [0.4, 0, 0.2, 1] as const;

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [brandIndex, setBrandIndex] = useState(0);
  const [showWipe, setShowWipe] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Counter animation using requestAnimationFrame
  useEffect(() => {
    const start = performance.now();
    let raf: number;
    let completed = false;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min((elapsed / BRAND_DURATION) * 100, 100);
      setProgress(p);

      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else if (!completed) {
        completed = true;
        // Show wipe line, then call onComplete
        setShowWipe(true);
        setTimeout(() => {
          onCompleteRef.current();
        }, 800);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Word rotation (Design/Create/Inspire)
  useEffect(() => {
    if (wordIndex >= WORDS.length - 1) return;
    const timer = setTimeout(() => {
      setWordIndex((i) => Math.min(i + 1, WORDS.length - 1));
    }, BRAND_MORPH_INTERVAL);
    return () => clearTimeout(timer);
  }, [wordIndex]);

  // Brand word rotation (ISO/LEXIS/LABS)
  useEffect(() => {
    if (brandIndex >= BRAND_WORDS.length - 1) return;
    const timer = setTimeout(() => {
      setBrandIndex((i) => Math.min(i + 1, BRAND_WORDS.length - 1));
    }, BRAND_MORPH_INTERVAL);
    return () => clearTimeout(timer);
  }, [brandIndex]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden select-none"
      style={{ backgroundColor: "#0A0A0F" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: EASE_SMOOTH }}
    >
      {/* Top-left label */}
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE_SMOOTH }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: "0.12em",
            color: "#00D4C0",
            textTransform: "uppercase",
          }}
        >
          ISOLEXILABS
        </span>
      </motion.div>

      {/* Top-right rotating words */}
      <motion.div
        className="absolute top-8 right-8 md:top-12 md:right-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: EASE_SMOOTH }}
      >
        <div className="relative overflow-hidden h-5">
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "#5A5A72",
                textTransform: "uppercase",
                display: "block",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: EASE_SMOOTH }}
            >
              {WORDS[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Center — Brand word morphing */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={brandIndex}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 7vw, 96px)",
              fontWeight: 700,
              color: "#00D4C0",
              letterSpacing: "-0.02em",
              textAlign: "center",
              filter: "none",
              padding: "0 24px",
              wordBreak: "break-all",
            }}
            initial={{ opacity: 0, filter: "blur(12px)", y: 16 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(16px)", y: -16 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {BRAND_WORDS[brandIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom-right counter */}
      <motion.div
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE_SMOOTH }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(32px, 8vw, 96px)",
            fontWeight: 700,
            color: "#F0F0F5",
            fontVariantNumeric: "tabular-nums",
            lineHeight: 1,
          }}
        >
          {Math.round(progress).toString().padStart(3, "0")}
        </span>
      </motion.div>

      {/* Bottom edge — Progress bar */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "3px", backgroundColor: "rgba(30, 30, 46, 0.5)" }}
      >
        <motion.div
          style={{
            height: "100%",
            transformOrigin: "left",
            background: "linear-gradient(90deg, #00D4C0 0%, #6AFF30 100%)",
            boxShadow: "0 0 12px rgba(0, 212, 192, 0.4)",
            scaleX: progress / 100,
          }}
          transition={{ duration: 0.05, ease: "linear" }}
        />
      </div>

      {/* Wipe line — horizontal cyan sweep */}
      <AnimatePresence>
        {showWipe && (
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: "none",
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                width: "1px",
                backgroundColor: "#00D4C0",
                boxShadow: "0 0 12px rgba(0, 212, 192, 0.6)",
              }}
              initial={{ left: "0%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 0.6, ease: EASE }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}