import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaShieldAlt,
  FaRocket,
  FaChartLine,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.8, delay },
  },
});

export default function WhyUs() {
  const features = [
    {
      icon: <FaUsers />,
      title: "Une équipe dévouée",
      desc: "Nos experts travaillent main dans la main avec vous pour chaque étape de votre projet.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Sécurité renforcée",
      desc: "Vos données et vos systèmes sont protégés par les technologies les plus fiables.",
    },
    {
      icon: <FaRocket />,
      title: "Croissance accélérée",
      desc: "Des solutions agiles et modernes pour propulser vos performances au niveau supérieur.",
    },
    {
      icon: <FaChartLine />,
      title: "Résultats concrets",
      desc: "Nous mesurons l’impact réel de chaque action pour maximiser votre retour sur investissement.",
    },
    {
      icon: <FaGlobe />,
      title: "Présence mondiale",
      desc: "Nous accompagnons des entreprises dans le monde entier, sans limites de frontières.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation constante",
      desc: "Nous restons à la pointe des tendances technologiques pour anticiper vos besoins.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F9FAFF] to-white py-24">
      {/* --- Effet décoratif animé --- */}
      <motion.div
        className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-[#3FD1CB]/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#534EEB]/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* --- Titre --- */}
        <motion.h2
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-[#2D2A8A] mb-6"
        >
          Pourquoi nous choisir ?
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-lg text-gray-600 mb-20"
        >
          Parce que votre réussite est notre mission. Nous allions technologie, design et stratégie
          pour propulser votre entreprise vers l’excellence.
        </motion.p>

        {/* --- Liste des avantages --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center px-6"
            >
              <div className="text-6xl text-[#3FD1CB] mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#2D2A8A] mb-3">{item.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Animation de bas de section --- */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#2D2A8A] text-white font-semibold rounded-full shadow-lg hover:bg-[#3FD1CB] hover:text-[#2D2A8A] transition-all"
          >
            Travaillons ensemble 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
