// import { motion, useScroll, useTransform } from "framer-motion";
// import { Link } from '@inertiajs/react';
// import { FaArrowRight, FaLaptopCode, FaStar, FaUsers, FaShieldAlt, FaCloud, FaMobileAlt, FaChartLine } from "react-icons/fa";

// const containerVariants = {
//  hidden: { opacity: 0 },
//  visible: {
//   opacity: 1,
//   transition: {
//    staggerChildren: 0.15,
//    delayChildren: 0.2
//   }
//  }
// };

// const textVariants = {
//  hidden: { opacity: 0, y: 50 },
//  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
// };

// const buttonVariants = {
//  hover: { scale: 1.05, boxShadow: "0px 8px 25px rgba(99, 102, 241, 0.4)" },
//  tap: { scale: 0.95 }
// };

// const spin = {
//  animate: { rotate: 360, transition: { repeat: Infinity, duration: 3, ease: "linear" } }
// };

// const Hero = () => {
//  const { scrollY } = useScroll();

//  const stats = [
//   { icon: FaShieldAlt, text: "100% Sécurisé", color: "#3B82F6" },
//   { icon: FaCloud, text: "+500 Clients", color: "#8B5CF6" },
//   { icon: FaMobileAlt, text: "24/7 Support", color: "#06B6D4" }
//  ];

//  return (
//   <section className="relative h-screen mt-20 flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-12 sm:px-6 md:px-8 lg:px-20">
//    {/* 🌟 FOND ANIMÉ */}
//    <div className="absolute inset-0 -z-10 overflow-hidden">
//     <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 bg-[length:400%_400%] animate-gradient"></div>
//     {Array.from({ length: 12 }).map((_, i) => (
//      <motion.div
//       key={i}
//       className="absolute rounded-full bg-blue-500/20 blur-xl"
//       initial={{ scale: 0, opacity: 0 }}
//       animate={{
//        scale: [0.5, 1.2, 0.5],
//        opacity: [0.2, 0.5, 0.2],
//        x: [0, Math.random() * 100, 0],
//        y: [0, Math.random() * 100, 0]
//       }}
//       transition={{
//        duration: 8 + Math.random() * 4,
//        repeat: Infinity,
//        delay: i * 0.3
//       }}
//       style={{
//        width: `${20 + Math.random() * 30}px`,
//        height: `${20 + Math.random() * 30}px`,
//        top: `${Math.random() * 100}%`,
//        left: `${Math.random() * 100}%`
//       }}
//      />
//     ))}
//    </div>

//    {/* 📱 CONTENU - MOBILE FIRST */}
//    <motion.div
//     className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-16"
//     variants={containerVariants}
//     initial="hidden"
//     animate="visible"
//    >
//     {/* 🎯 TEXTE */}
//     <motion.div
//      className="w-full text-center lg:text-left lg:w-1/2"
//      variants={textVariants}
//     >
//      {/* Badge */}
//      <motion.div className="mx-auto inline-block rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-lg lg:mx-0">
//       🚀 #1 IT au Cameroun
//      </motion.div>

//      {/* Titre */}
//      <motion.h1 className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-3xl font-black leading-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
//       <span className="block">Votre Partenaire IT</span>
//       <span className="block">au Cameroun</span>
//      </motion.h1>

//      {/* Sous-titre */}
//      <motion.p className="mx-auto mt-4 max-w-sm text-base text-gray-700 sm:max-w-md md:text-lg lg:max-w-lg">
//       **Transformation numérique accessible** pour PME camerounaises.
//       Sécurité, Cloud, Apps - **Support 24/7 en français**.
//      </motion.p>

//      {/* 📊 STATS */}
//      <motion.div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
//       {stats.map((item, i) => (
//        <motion.div
//         key={i}
//         className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 shadow-md backdrop-blur-sm sm:px-6"
//         whileHover={{ scale: 1.05, y: -2 }}
//         transition={{ delay: 0.3 + i * 0.1 }}
//        >
//         <motion.div style={{ color: item.color }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
//          <item.icon size={24} />
//         </motion.div>

//         <span className="font-semibold text-gray-800">{item.text}</span>
//        </motion.div>
//       ))}
//      </motion.div>

//      {/* 🔥 BOUTONS */}
//      <motion.div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
//       <motion.div className="w-full sm:w-auto" variants={buttonVariants} whileHover="hover" whileTap="tap">
//        <Link
//         href="/devis"
//         className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-white font-bold shadow-xl hover:shadow-2xl sm:px-10"
//        >
//         Devis Gratuit <FaArrowRight className="ml-2" />
//        </Link>
//       </motion.div>
//       <motion.div className="w-full sm:w-auto" variants={buttonVariants} whileHover="hover" whileTap="tap">
//        <Link
//         href="/services"
//         className="flex w-full items-center justify-center rounded-full border-2 border-blue-600 px-8 py-4 text-blue-600 font-bold bg-white hover:bg-blue-50 sm:px-10"
//        >
//         Nos Services
//        </Link>
//       </motion.div>
//      </motion.div>
//     </motion.div>

//     {/* 🖼️ IMAGE */}
//     <motion.div className="w-full lg:w-1/2" variants={textVariants}>
//      <motion.div
//       className="relative mx-auto flex justify-center"
//       style={{ y: useTransform(scrollY, [0, 400], [0, -60]) }}
//      >
//       <motion.img
//        src="./assets/dash.png"
//        alt="Dashboard OMIIE"
//        className="h-auto w-full max-w-xs rounded-3xl shadow-2xl object-cover sm:max-w-sm md:max-w-md lg:max-w-lg"
//        whileHover={{ scale: 1.05, rotate: 2 }}
//        transition={{ duration: 0.4 }}
//        loading="lazy"
//       />
//       <motion.div
//        className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"
//        animate={{
//         scale: [1, 1.1, 1],
//         rotate: [0, 180, 360]
//        }}
//        transition={{ duration: 20, repeat: Infinity }}
//       />
//      </motion.div>
//     </motion.div>
//    </motion.div>

//    {/* 🎆 ANIMATIONS CSS */}
//    <style>{`
//         @keyframes gradientShift {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-gradient {
//           animation: gradientShift 12s ease infinite;
//         }
//       `}</style>
//   </section>
//  );
// };

// export default Hero;









import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from '@inertiajs/react';
import { FaArrowRight, FaShieldAlt, FaUsers, FaHeadset, FaLaptopCode, FaDatabase, FaMobileAlt, FaChartLine } from "react-icons/fa";

const containerVariants = {
 initial: { opacity: 0, y: 20 },
 animate: {
  opacity: 1,
  y: 0,
  transition: {
   staggerChildren: 0.1,
   delayChildren: 0.3,
   duration: 0.8
  }
 }
};

const Hero = () => {
 const { scrollY } = useScroll();
 const y1 = useTransform(scrollY, [0, 300], [0, -50]);
 const y2 = useTransform(scrollY, [0, 300], [0, 20]);

 const services = [
  { icon: FaLaptopCode, title: "Développement Web", desc: "Sites & Apps PME" },
  { icon: FaShieldAlt, title: "Cybersécurité", desc: "Protection 100%" },
  { icon: FaDatabase, title: "Cloud Local", desc: "Données Cameroun" },
  { icon: FaMobileAlt, title: "Applications", desc: "Mobile PME" },
  { icon: FaChartLine, title: "Analytics", desc: "Décisions Data" }
 ];

 return (
  <section className="relative overflow-hidden bg-white">
   {/* HEADER HERO */}
   <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
    <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
     <motion.div
      className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
     >
      {/* CONTENT */}
      <motion.div variants={containerVariants}>
       <div className="mb-6">
        <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
         <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
         </svg>
         Certifié CNPS • 5+ ans expertise
        </div>
       </div>

       <motion.h1
        className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
        variants={containerVariants}
       >
        <span className="block text-blue-600">Digitalisation</span>
        <span className="block">PME Camerounaises</span>
       </motion.h1>

       <motion.p
        className="mb-8 text-lg text-gray-600"
        variants={containerVariants}
       >
        Organisation complète de vos <strong>milieux numériques</strong> et interfaces.
        Solutions sur-mesure : sécurité, cloud local, applications mobiles.
        <strong>Support 24/7 en français depuis Yaoundé.</strong>
       </motion.p>

       {/* CTA */}
       <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-12"
        variants={containerVariants}
       >
        <Link
         prefetch
         href="/devis"
         className="group flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors"
        >
         <span className="mr-3">Devis Gratuit</span>
         <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
         href="/services"
         className="flex items-center justify-center rounded-lg border-2 border-blue-600 px-8 py-4 text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
        >
         Nos Solutions
        </Link>
       </motion.div>

       {/* STATS */}
       <motion.div
        className="grid grid-cols-3 gap-6"
        variants={containerVariants}
       >
        <div className="text-center">
         <div className="text-3xl font-bold text-blue-600">500+</div>
         <div className="text-sm text-gray-600">PME accompagnées</div>
        </div>
        <div className="text-center">
         <div className="text-3xl font-bold text-blue-600">100%</div>
         <div className="text-sm text-gray-600">Sécurisé CNPS</div>
        </div>
        <div className="text-center">
         <div className="text-3xl font-bold text-blue-600">24/7</div>
         <div className="text-sm text-gray-600">Support local</div>
        </div>
       </motion.div>
      </motion.div>

      {/* IMAGE */}
      <motion.div
       style={{ y: y1 }}
       className="relative"
      >
       <img
        src="./assets/dash.png"
        alt="Dashboard OMIIE"
        className="w-full max-w-lg rounded-2xl shadow-xl"
       />
       <div className="absolute -inset-2 bg-blue-500/5 rounded-2xl"></div>
      </motion.div>
     </motion.div>
    </div>
   </div>

   {/* SERVICES CAROUSEL */}
   <div className="relative bg-gray-50 py-16">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
     <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
     >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Solutions PME</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
       Digitalisation complète adaptée aux entreprises camerounaises
      </p>
     </motion.div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {services.map((service, i) => (
       <motion.div
        key={i}
        className="group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        whileHover={{ y: -8 }}
       >
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
         <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
          <service.icon className="text-2xl text-blue-600 group-hover:text-white" />
         </div>
         <h3 className="font-semibold text-gray-900 mb-2 text-center">{service.title}</h3>
         <p className="text-sm text-gray-600 text-center">{service.desc}</p>
        </div>
       </motion.div>
      ))}
     </div>
    </div>
   </div>

   {/* TRUST SECTION */}
   <div className="py-16 bg-white">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
     <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
     >
      <div className="text-center md:text-left">
       <h3 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi OMIIE ?</h3>
       <p className="text-gray-600">
        Basés à Yaoundé, nous comprenons vos défis locaux.
        Solutions conformes CNPS, support en français 24/7.
       </p>
      </div>
      <div className="space-y-4">
       <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        <span className="text-gray-700">Infrastructure Cloud locale</span>
       </div>
       <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        <span className="text-gray-700">Conformité RGPD/Cameroun</span>
       </div>
       <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        <span className="text-gray-700">Formation équipes incluse</span>
       </div>
      </div>
      <div className="text-center">
       <Link href="/contact" className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700">
        Contacter Expert
       </Link>
      </div>
     </motion.div>
    </div>
   </div>
  </section>
 );
};

export default Hero;
