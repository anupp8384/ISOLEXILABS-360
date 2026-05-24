import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Analytics } from "@vercel/analytics/react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { ProcessSection } from "./components/ProcessSection";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";
import bgImage from "../imports/WhatsApp_Image_2026-05-17_at_11.00.16_AM.jpeg";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ backgroundColor: "#0A0A0F", minHeight: "100vh" }}>
      <Analytics />
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-out",
        }}
      >
        <Navbar />
        <main>
          <HeroSection />
          {/* Single continuous background for all sections below hero */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundAttachment: "local",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(10,10,15,0.45)",
                zIndex: 1,
              }}
            />
            <div style={{ position: "relative", zIndex: 2 }}>
              <ServicesSection />
              <AboutSection />
              <ProcessSection />
              <CTABanner />
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
