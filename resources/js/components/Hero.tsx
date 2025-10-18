import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from '@inertiajs/react';
import { FaArrowRight, FaLaptopCode, FaStar, FaUsers, FaShieldAlt, FaCloud, FaMobileAlt, FaChartLine } from "react-icons/fa";

const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
  opacity: 1,
  transition: {
   staggerChildren: 0.15,
   delayChildren: 0.2
  }
 }
};

const textVariants = {
 hidden: { opacity: 0, y: 50 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const buttonVariants = {
 hover: { scale: 1.05, boxShadow: "0px 8px 25px rgba(99, 102, 241, 0.4)" },
 tap: { scale: 0.95 }
};

const spin = {
 animate: { rotate: 360, transition: { repeat: Infinity, duration: 3, ease: "linear" } }
};

const Hero = () => {
 const { scrollY } = useScroll();

 const stats = [
  { icon: FaShieldAlt, text: "100% Sécurisé", color: "#3B82F6" },
  { icon: FaCloud, text: "+500 Clients", color: "#8B5CF6" },
  { icon: FaMobileAlt, text: "24/7 Support", color: "#06B6D4" }
 ];

 return (
  <section className="relative h-screen mt-20 flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-12 sm:px-6 md:px-8 lg:px-20">
   {/* 🌟 FOND ANIMÉ */}
   <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 bg-[length:400%_400%] animate-gradient"></div>
    {Array.from({ length: 12 }).map((_, i) => (
     <motion.div
      key={i}
      className="absolute rounded-full bg-blue-500/20 blur-xl"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
       scale: [0.5, 1.2, 0.5],
       opacity: [0.2, 0.5, 0.2],
       x: [0, Math.random() * 100, 0],
       y: [0, Math.random() * 100, 0]
      }}
      transition={{
       duration: 8 + Math.random() * 4,
       repeat: Infinity,
       delay: i * 0.3
      }}
      style={{
       width: `${20 + Math.random() * 30}px`,
       height: `${20 + Math.random() * 30}px`,
       top: `${Math.random() * 100}%`,
       left: `${Math.random() * 100}%`
      }}
     />
    ))}
   </div>

   {/* 📱 CONTENU - MOBILE FIRST */}
   <motion.div
    className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-16"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
   >
    {/* 🎯 TEXTE */}
    <motion.div
     className="w-full text-center lg:text-left lg:w-1/2"
     variants={textVariants}
    >
     {/* Badge */}
     <motion.div className="mx-auto inline-block rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-lg lg:mx-0">
      🚀 #1 IT au Cameroun
     </motion.div>

     {/* Titre */}
     <motion.h1 className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-3xl font-black leading-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
      <span className="block">Votre Partenaire IT</span>
      <span className="block">au Cameroun</span>
     </motion.h1>

     {/* Sous-titre */}
     <motion.p className="mx-auto mt-4 max-w-sm text-base text-gray-700 sm:max-w-md md:text-lg lg:max-w-lg">
      **Transformation numérique accessible** pour PME camerounaises.
      Sécurité, Cloud, Apps - **Support 24/7 en français**.
     </motion.p>

     {/* 📊 STATS */}
     <motion.div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
      {stats.map((item, i) => (
       <motion.div
        key={i}
        className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 shadow-md backdrop-blur-sm sm:px-6"
        whileHover={{ scale: 1.05, y: -2 }}
        transition={{ delay: 0.3 + i * 0.1 }}
       >
        <motion.div style={{ color: item.color }} variants={spin} animate="animate">
         <item.icon size={24} />
        </motion.div>
        <span className="font-semibold text-gray-800">{item.text}</span>
       </motion.div>
      ))}
     </motion.div>

     {/* 🔥 BOUTONS */}
     <motion.div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
      <motion.div className="w-full sm:w-auto" variants={buttonVariants} whileHover="hover" whileTap="tap">
       <Link
        href="/devis"
        className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-white font-bold shadow-xl hover:shadow-2xl sm:px-10"
       >
        Devis Gratuit <FaArrowRight className="ml-2" />
       </Link>
      </motion.div>
      <motion.div className="w-full sm:w-auto" variants={buttonVariants} whileHover="hover" whileTap="tap">
       <Link
        href="/services"
        className="flex w-full items-center justify-center rounded-full border-2 border-blue-600 px-8 py-4 text-blue-600 font-bold bg-white hover:bg-blue-50 sm:px-10"
       >
        Nos Services
       </Link>
      </motion.div>
     </motion.div>
    </motion.div>

    {/* 🖼️ IMAGE */}
    <motion.div className="w-full lg:w-1/2" variants={textVariants}>
     <motion.div
      className="relative mx-auto flex justify-center"
      style={{ y: useTransform(scrollY, [0, 400], [0, -60]) }}
     >
      <motion.img
       src="./assets/dash.png"
       alt="Dashboard OMIIE"
       className="h-auto w-full max-w-xs rounded-3xl shadow-2xl object-cover sm:max-w-sm md:max-w-md lg:max-w-lg"
       whileHover={{ scale: 1.05, rotate: 2 }}
       transition={{ duration: 0.4 }}
       loading="lazy"
      />
      <motion.div
       className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"
       animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 180, 360]
       }}
       transition={{ duration: 20, repeat: Infinity }}
      />
     </motion.div>
    </motion.div>
   </motion.div>

   {/* 🎆 ANIMATIONS CSS */}
   <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradientShift 12s ease infinite;
        }
      `}</style>
  </section>
 );
};

export default Hero;