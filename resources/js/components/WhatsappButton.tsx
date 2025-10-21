import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "+237672809736";
  const message = "Bonjour !";
  const url = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-lg"
      aria-label="Contacter via WhatsApp"
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(16, 185, 129, 0.6)" }}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <FaWhatsapp size={28} />
    </motion.a>
  );
}
