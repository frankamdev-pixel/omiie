import { Link } from '@inertiajs/react';
import { motion } from "framer-motion";
import {
 FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube,
 FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaShieldAlt, FaCloud,
 FaMobileAlt, FaChartLine, FaHeadphones
} from "react-icons/fa";

export default function Footer() {
 const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
   opacity: 1,
   transition: {
    staggerChildren: 0.15,
    delayChildren: 0.3
   }
  }
 };

 const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" } }
 };

 const services = [
  { icon: FaShieldAlt, name: "Cybersécurité", href: "/services/cyber" },
  { icon: FaCloud, name: "Cloud Local", href: "/services/cloud" },
  { icon: FaMobileAlt, name: "Applications", href: "/services/apps" },
  { icon: FaChartLine, name: "Analytics", href: "/services/analytics" },
  { icon: FaHeadphones, name: "Support 24/7", href: "/services/support" }
 ];

 const quickLinks = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "À Propos", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Devis Gratuit", href: "/devis" }
 ];

 return (
  <motion.footer
   className="relative w-full bg-gradient-to-br from-indigo-950 via-blue-950 to-purple-950 text-white overflow-hidden shadow-2xl"
   variants={containerVariants}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true }}
  >
   {/* Particules dynamiques (source rare: Framer docs advanced) */}
   <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 25 }).map((_, i) => (
     <motion.div
      key={i}
      className="absolute w-2 h-2 bg-white/20 rounded-full blur-sm"
      animate={{
       x: [0, Math.random() * 150 - 75, 0],
       y: [0, Math.random() * 150 - 75, 0],
       opacity: [0, 0.6, 0],
       scale: [0.5, 1.2, 0.5]
      }}
      transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: i * 0.15 }}
      style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
     />
    ))}
   </div>

   <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">

     {/* Logo & About - Pro avec hover glow (Tailwind rare: bg-clip-text) */}
     <motion.div variants={itemVariants} className="text-center lg:text-left">
      <motion.div
       whileHover={{ scale: 1.05 }}
       className="mb-6 flex justify-center lg:justify-start items-center gap-3"
      >
       <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg">
        <span className="text-2xl font-black text-white"><img src="/assets/logo.png" alt="OMIIE Logo" width={40} height={40} /></span>
       </div>
       <h3 className="text-3xl font-black bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
        OMIIE
       </h3>
      </motion.div>
      <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
       <strong className="text-blue-300">Partenaire IT #1 Cameroun</strong>. Solutions cloud, cybersécurité, apps pour PME.
       <strong className="text-purple-300">Support 24/7 local</strong>.
      </p>
      <p className="text-xs text-gray-400">© 2025 OMIIE. Tous droits réservés. Conçu au 🇨🇲.</p>
     </motion.div>

     {/* Services - Icônes animées (Framer spring) */}
     <motion.div variants={itemVariants} className="text-center lg:text-left">
      <h4 className="text-xl font-bold mb-6 text-blue-300 flex items-center justify-center lg:justify-start gap-2">
       <FaChartLine className="w-5 h-5" /> Nos Services
      </h4>
      <ul className="space-y-4">
       {services.map((service, i) => (
        <motion.li
         key={i}
         variants={itemVariants}
         whileHover={{ x: 8, color: "#93C5FD" }}
         className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 hover:text-blue-300 transition-all cursor-pointer"
        >
         <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
          <service.icon size={18} />
         </motion.div>
         <Link href={service.href}>{service.name}</Link>
        </motion.li>
       ))}
      </ul>
     </motion.div>

     {/* Liens Rapides - Smooth hover */}
     <motion.div variants={itemVariants} className="text-center lg:text-left">
      <h4 className="text-xl font-bold mb-6 text-purple-300 flex items-center justify-center lg:justify-start gap-2">
       <FaClock className="w-5 h-5" /> Liens Rapides
      </h4>
      <ul className="space-y-4">
       {quickLinks.map((link, i) => (
        <motion.li
         key={i}
         variants={itemVariants}
         whileHover={{ x: 8, color: "#C4B5FD" }}
         className="text-gray-300 hover:text-purple-300 transition-all cursor-pointer text-center lg:text-left"
        >
         <Link href={link.href}>{link.name}</Link>
        </motion.li>
       ))}
      </ul>
     </motion.div>

     {/* Contact - Cards interactives (Tailwind shadow rare) */}
     <motion.div variants={itemVariants} className="text-center lg:text-left">
      <h4 className="text-xl font-bold mb-6 text-green-300 flex items-center justify-center lg:justify-start gap-2">
       <FaEnvelope className="w-5 h-5" /> Contactez-nous directement
      </h4>
      <div className="space-y-4">
       <motion.div
        whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(34,197,94,0.2)" }}
        className="flex items-center justify-center lg:justify-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-green-300/50 transition-all"
       >
        <FaPhone size={18} className="text-green-400" />
        <div className="text-sm">
         <p className="font-semibold text-gray-200">Appel 24/7</p>
         <p className="text-gray-400">+237 690 461 830</p>
        </div>
       </motion.div>
       <motion.div
        whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(59,130,246,0.2)" }}
        className="flex items-center justify-center lg:justify-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-blue-300/50 transition-all"
       >
        <FaEnvelope size={18} className="text-blue-400" />
        <div className="text-sm">
         <p className="font-semibold text-gray-200">Email</p>
         <p className="text-gray-400">omiietech@gmail.com</p>
        </div>
       </motion.div>
       <motion.div
        whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(168,85,247,0.2)" }}
        className="flex items-center justify-center lg:justify-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-purple-300/50 transition-all"
       >
        <FaMapMarkerAlt size={18} className="text-purple-400" />
        <div className="text-sm">
         <p className="font-semibold text-gray-200">Bureaux</p>
         <p className="text-gray-400">Bafoussam • Yaoundé</p>
        </div>
       </motion.div>
      </div>
     </motion.div>
    </div>

    {/* Barre Légale - Centrée mobile */}
    <motion.div
     variants={itemVariants}
     className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400"
    >
     <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <p>© {new Date().getFullYear()} <span className="font-bold text-white">OMIIE</span> - Tous droits réservés. Conçu avec passion au 🇨🇲 Cameroun.</p>
      <div className="flex items-center gap-6">
       <Link href="/privacy" className="hover:text-blue-300 transition">Politique Confidentialité</Link>
       <Link href="/terms" className="hover:text-purple-300 transition">Conditions Utilisation</Link>
       <Link href="/rgpd" className="hover:text-green-300 transition">RGPD Compliance</Link>
       <Link href="/careers" className="hover:text-white transition">Carrières</Link>
      </div>
     </div>
    </motion.div>
   </div>
  </motion.footer>
 );
}
