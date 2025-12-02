"use client";

import Profile from "./components/Profile";
import SocialLinks from "./components/SocialLinks";
import LocationMap from "./components/LocationMap";
import Button from "./components/Button";
import Header from "./components/Header";
import Globe from "./components/icons/Globe";
import Phone from "./components/icons/Phone";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import { motion } from "framer-motion";
import { useEffect } from "react";

type CalendlyStatic = {
  showPopupWidget?: (url: string) => void;
  initPopupWidget?: (opts: { url: string }) => void;
  closePopupWidget?: () => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyStatic;
  }
}

export default function Home() {
  useEffect(() => {
    // Preload Calendly widget script so popup opens quickly
    if (typeof window === "undefined") return;
    if (window.Calendly) return;
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openCalendlyPopup = (e?: React.MouseEvent) => {
    e?.preventDefault();
    const url = "https://calendly.com/patriciadiaz-dev/30min";
    if (typeof window === "undefined") return;
    const w = window;
    if (w.Calendly && typeof w.Calendly.showPopupWidget === "function") {
      w.Calendly.showPopupWidget(url);
      return;
    }
    // Fallback: load script then open
    const script = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    ) as HTMLScriptElement | null;
    if (script) {
      script.addEventListener("load", () => {
        if (w.Calendly && typeof w.Calendly.showPopupWidget === "function") {
          w.Calendly.showPopupWidget(url);
        }
      });
    } else {
      const s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      s.onload = () => {
        if (w.Calendly && typeof w.Calendly.showPopupWidget === "function") {
          w.Calendly.showPopupWidget(url);
        }
      };
      document.body.appendChild(s);
    }
  };
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen w-full relative bg-gradient-to-br from-green-500 to-emerald-500"
    >
      <div className="w-full min-h-screen bg-white">
        {/* Avatar Section with Gradient */}
        <Header />

        <div className="bg-white relative">
          {/* Profile Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Profile />
          </motion.div>

          {/* White Content Section */}
          <motion.div
            className="bg-white"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="container mx-auto max-w-md px-6 pb-8">
              <div className="flex flex-col items-center space-y-6">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-4"
                >
                  <SocialLinks />
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="w-full space-y-4 mt-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Button
                    href="https://patriciadiaz.dev/portfolio"
                    leftIcon={Globe}
                    variant="gradient"
                  >
                    Visita mi portafolio
                  </Button>

                  {/* Calendly - abre popup en lugar de navegar */}
                  <Button
                    href="https://calendly.com/patriciadiaz-dev/30min"
                    leftIcon={Phone}
                    variant="gradient"
                    className="mt-2"
                    onClick={openCalendlyPopup}
                  >
                    Agenda una cita
                  </Button>
                </motion.div>

                {/* Project Card */}
                <motion.div
                  className="w-full"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <ProjectCard
                    href="https://prototipo-wedding1.netlify.app/"
                    image="/images/invitaciones-digitales.webp"
                    imageAlt="Invitaciones Digitales"
                    badge="INVITACIONES DIGITALES PARA BODAS - DEMO"
                    title="Invitaciones Digitales"
                    description="Invitaciones digitales únicas para tu boda. Personalizable, fácil de compartir por WhatsApp, email o redes sociales. Una forma moderna de compartir tu gran día con tus invitados."
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
          {/* Eliminado botón duplicado de Calendly para evitar problemas de hidratación */}

          {/* Location Map Section */}
          <motion.div
            className="bg-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="container mx-auto max-w-md px-6 pb-6">
              <LocationMap />
            </div>
          </motion.div>

          {/* Footer Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Footer />
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
