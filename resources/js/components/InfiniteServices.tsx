import React from "react";
import { motion } from "framer-motion";

const services = [
  "Développement Web",
  "Design Graphique",
  "Marketing Digital",
  "Cybersécurité",
  "Applications Mobiles",
  "Intelligence Artificielle",
  "E-Learning",
  "Branding & Identité Visuelle",
  "SEO / Référencement",
  "Stratégie Digitale",
];

export default function ServicesMarquee() {
  const repeated = [...services, ...services, ...services];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#fdfdfd] via-[#f9faff] to-[#fdfdfd] py-2">
      {/* Bande principale */}
      <div className="overflow-hidden whitespace-nowrap flex">
        <motion.div
          className="flex gap-20 text-3xl sm:text-4xl font-semibold tracking-widest"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
        >
          {repeated.map((service, i) => (
            <span
              key={i}
              className="text-[#2D2A8A] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.15)] hover:drop-shadow-[3px_3px_3px_rgba(63,209,203,0.6)] transition-all duration-300"
            >
              {service}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bande inversée */}
      <div className="overflow-hidden whitespace-nowrap mt-6 flex opacity-70">
        <motion.div
          className="flex gap-20 text-2xl sm:text-3xl font-light"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
        >
          {repeated.map((service, i) => (
            <span
              key={i}
              className="text-[#3FD1CB] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.2)] hover:drop-shadow-[3px_3px_3px_rgba(45,45,138,0.6)] transition-all duration-300"
            >
              {service}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Lueur subtile */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
    </section>
  );
}
