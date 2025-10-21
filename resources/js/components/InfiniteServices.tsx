// import React from "react";
// import { motion } from "framer-motion";

// const services = [
//   "Développement Web",
//   "Design Graphique",
//   "Marketing Digital",
//   "Cybersécurité",
//   "Applications Mobiles",
//   "Intelligence Artificielle",
//   "E-Learning",
//   "Branding & Identité Visuelle",
//   "SEO / Référencement",
//   "Stratégie Digitale",
// ];

// export default function ServicesMarquee() {
//   const repeated = [...services, ...services, ...services];

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-r from-[#fdfdfd] via-[#f9faff] to-[#fdfdfd] py-2">
//       {/* Bande principale */}
//       <div className="overflow-hidden whitespace-nowrap flex">
//         <motion.div
//           className="flex gap-20 text-3xl sm:text-4xl font-semibold tracking-widest"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
//         >
//           {repeated.map((service, i) => (
//             <span
//               key={i}
//               className="text-[#2D2A8A] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.15)] hover:drop-shadow-[3px_3px_3px_rgba(63,209,203,0.6)] transition-all duration-300"
//             >
//               {service}
//             </span>
//           ))}
//         </motion.div>
//       </div>

//       {/* Bande inversée */}
//       <div className="overflow-hidden whitespace-nowrap mt-6 flex opacity-70">
//         <motion.div
//           className="flex gap-20 text-2xl sm:text-3xl font-light"
//           animate={{ x: ["-50%", "0%"] }}
//           transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
//         >
//           {repeated.map((service, i) => (
//             <span
//               key={i}
//               className="text-[#3FD1CB] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.2)] hover:drop-shadow-[3px_3px_3px_rgba(45,45,138,0.6)] transition-all duration-300"
//             >
//               {service}
//             </span>
//           ))}
//         </motion.div>
//       </div>

//       {/* Lueur subtile */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
//     </section>
//   );
// }


import React from "react";
import { motion } from "framer-motion";

const services = [
 { title: "Développement Web", icon: "💻", color: "#3B82F6" },
 { title: "Cybersécurité", icon: "🛡️", color: "#1E40AF" },
 { title: "Cloud Local", icon: "☁️", color: "#6366F1" },
 { title: "Applications Mobiles", icon: "📱", color: "#0EA5E9" },
 { title: "Analytics & IA", icon: "📊", color: "#8B5CF6" },
 { title: "Design UX/UI", icon: "🎨", color: "#EC4899" },
 { title: "Support 24/7", icon: "🎧", color: "#10B981" },
 { title: "Formation PME", icon: "📚", color: "#F59E0B" },
 { title: "SEO Local", icon: "🔍", color: "#EF4444" },
 { title: "Stratégie Digitale", icon: "🎯", color: "#6B7280" }
];

export default function ServicesMarquee() {
 const repeated = [...services, ...services];

 return (
  <section className="relative overflow-hidden bg-gray-500 py-8 border-t border-blue-100">
   {/* MARQUEE PRINCIPALE */}
   <div className="overflow-hidden whitespace-nowrap">
    <motion.div
     className="flex gap-16"
     animate={{ x: ["0%", "-50%"] }}
     transition={{
      repeat: Infinity,
      duration: 40,
      ease: "linear"
     }}
    >
     {repeated.map((service, i) => (
      <motion.span
       key={i}
       className="flex items-center gap-3 text-xl font-semibold tracking-wide py-4 px-6 rounded-lg bg-white shadow-sm border border-gray-100 hover:border-blue-200 transition-all duration-300 group cursor-pointer"
       style={{ color: service.color }}
       whileHover={{
        scale: 1.05,
        boxShadow: `0 8px 25px ${service.color}20`,
        y: -4
       }}
       transition={{ duration: 0.3 }}
      >
       <span className="text-2xl group-hover:scale-110 transition-transform">{service.icon}</span>
       <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
        {service.title}
       </span>
      </motion.span>
     ))}
    </motion.div>
   </div>

   {/* MARQUEE INVERSÉE - SUBTILE */}
   <div className="overflow-hidden whitespace-nowrap mt-4 opacity-60">
    <motion.div
     className="flex gap-16"
     animate={{ x: ["-50%", "0%"] }}
     transition={{
      repeat: Infinity,
      duration: 50,
      ease: "linear"
     }}
    >
     {repeated.map((service, i) => (
      <motion.span
       key={i + repeated.length}
       className="flex items-center gap-2 text-lg font-medium tracking-wide py-3 px-4 rounded-md bg-white/70 backdrop-blur-sm"
       style={{ color: service.color }}
       whileHover={{ scale: 1.02 }}
      >
       <span className="text-xl">{service.icon}</span>
       <span className="text-gray-600">{service.title}</span>
      </motion.span>
     ))}
    </motion.div>
   </div>

   {/* SOUS-TITRE PRO */}
   <motion.div
    className="absolute left-1/2 transform -translate-x-1/2 bottom-2 text-center"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 }}
   >
    <p className="text-sm text-gray-500 font-medium">
     Solutions complètes pour PME camerounaises • Yaoundé
    </p>
   </motion.div>

   {/* SUBTIL GLOW */}
   <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-blue-50/50 pointer-events-none"></div>
  </section>
 );
}
