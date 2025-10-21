import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Target, Cpu, Globe, Shield, Database, Smartphone, BarChart3, Clock, MapPin, Phone, Mail, Award, Star, Quote, Briefcase, Code, Server, Cloud, Send, Check, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "@inertiajs/react";

export default function About() {
 const services = [
  { icon: Shield, title: "Cybersécurité Avancée", desc: "Protection proactive contre les menaces, audits réguliers et réponse rapide aux incidents pour sécuriser vos données." },
  { icon: Database, title: "Solutions Cloud Locales", desc: "Stockage et hébergement adaptés au Cameroun, avec conformité aux régulations locales et faible latence." },
  { icon: Smartphone, title: "Développement d'Apps Mobiles", desc: "Applications sur mesure pour iOS et Android, optimisées pour les réseaux mobiles camerounais." },
  { icon: BarChart3, title: "Analytics & BI", desc: "Outils d'analyse de données pour des insights business actionnables, avec dashboards personnalisés." },
  { icon: Clock, title: "Support Technique 24/7", desc: "Assistance en français et anglais, avec monitoring proactif et temps de réponse < 30 min." },
  { icon: MapPin, title: "Déploiement National", desc: "Installation et maintenance sur site dans toutes les régions du Cameroun, y compris zones rurales." },
  { icon: Server, title: "Gestion de Serveurs", desc: "Optimisation d'infrastructures on-premise ou hybrides pour performance et scalabilité." },
  { icon: Cloud, title: "Migration Cloud", desc: "Transition fluide vers le cloud avec minimisation des downtimes et formation des équipes." }
 ];

 const values = [
  { icon: Cpu, title: "Innovation Permanente", color: "text-blue-600", desc: "Adoption de tech émergentes adaptées au contexte africain pour rester en avance." },
  { icon: Users, title: "Proximité Client", color: "text-green-600", desc: "Équipes locales dédiées, visites régulières et feedback loops pour une relation durable." },
  { icon: Target, title: "Fiabilité Absolue", color: "text-purple-600", desc: "Uptime 99.99%, backups automatisés et redondance pour une continuité business." },
  { icon: Shield, title: "Sécurité Prioritaire", color: "text-red-600", desc: "Conformité GDPR/LOPD et protocoles zero-trust pour protéger vos assets." },
  { icon: Award, title: "Excellence Opérationnelle", color: "text-orange-600", desc: "Certifications ISO et focus sur la qualité pour des résultats premium." },
  { icon: Briefcase, title: "Adaptabilité Locale", color: "text-indigo-600", desc: "Solutions taillées pour les PME camerounaises, avec pricing flexible." }
 ];

 const team = [
  { name: "Fokam Ance", role: "Fondateur & CEO", desc: "Expert en cybersécurité avec 5+ ans d'expérience en Afrique.", icon: Code },
  { name: "Kamgang Frank", role: "Co-Fondateur & CEO", desc: "Expert en développement web et mobile avec 5+ ans d'expérience au Cameroun.", icon: Code },

  { name: "Tchatchouan Bryan Paul", role: "CTO", desc: "Spécialiste cloud, formée à MIT, pionnière en IA pour PME.", icon: Server },
  { name: "Soh Loic", role: "Directeur Opérations", desc: "Gestion de projets IT pour 10+ entreprises camerounaises.", icon: Briefcase }
 ];

 const testimonials = [
  { quote: "OMIIE a transformé notre gestion IT. Fiable et abordable !", author: "Imprime SARL, Bafoussam", rating: 5 },
  { quote: "Support exceptionnel, solutions sur mesure pour notre startup.", author: "TechHub Yaoundé", rating: 5 },
  { quote: "Sécurité renforcée, productivité boostée. Recommandé !", author: "Microfinance Locale", rating: 4.5 }
 ];

 const timeline = [
  { year: "2018", event: "Fondation d'OMIIE à Bafoussam" },
  { year: "2020", event: "Lancement des services cloud et web locaux" },
  { year: "2022", event: "Partenariat avec 15+ PME camerounaises" },
  { year: "2024", event: "Réalisation de nombreux projets en interne" },
  { year: "2025", event: "Certification ISO 27001 obtenue" }
 ];

 return (
  <div className="bg-gray-50 text-gray-800 overflow-hidden">
   {/* HERO - Immersif avec parallax */}
   <Navbar />
   <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white">
    <motion.div
     className="absolute inset-0 bg-black/40 z-0"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 1.5 }}
    />
    <motion.div
     className="z-10 text-center max-w-5xl mx-auto px-6"
     initial={{ y: 100, opacity: 0 }}
     animate={{ y: 0, opacity: 1 }}
     transition={{ duration: 1, delay: 0.5 }}
    >
     <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">OMIIE</h1>
     <p className="text-2xl md:text-3xl mb-10 font-light">Votre allié numérique au Cameroun : Gestion, Sécurité, Innovation pour les entreprises d'aujourd'hui.</p>
     <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
      className="bg-white text-indigo-800 px-10 py-4 rounded-full font-bold text-lg shadow-2xl"
     >
      <Link
       prefetch
       href='/contact'>Démarrez Votre Transformation <ArrowRight className="inline ml-2" /></Link>

     </motion.button>
    </motion.div>
   </section>

   {/* MISSION/VISION - Fluide avec animations */}
   <section className="max-w-7xl mx-auto py-24 px-6">
    <div className="grid lg:grid-cols-2 gap-16">
     <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
      <div className="flex items-center gap-4 mb-6">
       <Target className="w-10 h-10 text-blue-600" />
       <h2 className="text-4xl font-bold">Notre Mission</h2>
      </div>
      <p className="text-lg text-gray-700 mb-6">Rendre la transformation numérique accessible, sécurisée et rentable pour toutes les entreprises camerounaises, en comblant le gap IT avec des solutions locales innovantes.</p>
      <ul className="space-y-3 text-blue-700 font-medium">
       <li className="flex items-center gap-2"><Check className="w-5 h-5" /> Accompagnement de A à Z</li>
       <li className="flex items-center gap-2"><Check className="w-5 h-5" /> Focus sur l'inclusivité</li>
       <li className="flex items-center gap-2"><Check className="w-5 h-5" /> Impact économique positif</li>
      </ul>
     </motion.div>
     <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
      <div className="flex items-center gap-4 mb-6">
       <Globe className="w-10 h-10 text-purple-600" />
       <h2 className="text-4xl font-bold">Notre Vision 2029</h2>
      </div>
      <p className="text-lg text-gray-700 mb-6">Devenir le leader incontesté en IT management en Afrique central, équipant 1000  entreprises avec des outils durables et éthiques.</p>
      <ul className="space-y-3 text-purple-700 font-medium">
       <li className="flex items-center gap-2"><Check className="w-5 h-5" /> Expansion régionale</li>
       <li className="flex items-center gap-2"><Check className="w-5 h-5" /> Innovation verte</li>
       <li className="flex items-center gap-2"><Check className="w-5 h-5" /> Emplois locaux créés</li>
      </ul>
     </motion.div>
    </div>
   </section>

   {/* SERVICES - Grille responsive */}
   <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-24 px-6">
    <motion.h2 initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="text-5xl font-bold text-center mb-16">Services Premium</motion.h2>
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
     {services.map((service, i) => (
      <motion.div
       key={i}
       initial={{ scale: 0.95, opacity: 0 }}
       whileInView={{ scale: 1, opacity: 1 }}
       transition={{ delay: i * 0.1, duration: 0.5 }}
       className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all border-b-4 border-blue-500"
      >
       <service.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
       <h3 className="text-xl font-bold text-center mb-3">{service.title}</h3>
       <p className="text-gray-600 text-center">{service.desc}</p>
      </motion.div>
     ))}
    </div>
   </section>

   {/* VALEURS - Carousel-like */}
   <section className="py-24 px-6 bg-white">
    <h2 className="text-5xl font-bold text-center mb-16">Valeurs Fondamentales</h2>
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 lg:grid-cols-6 gap-6">
     {values.map((value, i) => (
      <motion.div
       key={i}
       initial={{ y: 30, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ delay: i * 0.1 }}
       className="text-center p-6 rounded-xl bg-gray-50 shadow-md hover:bg-blue-50 transition"
      >
       <value.icon className={`w-10 h-10 ${value.color} mx-auto mb-3`} />
       <h3 className="font-bold mb-2">{value.title}</h3>
       <p className="text-sm text-gray-600">{value.desc}</p>
      </motion.div>
     ))}
    </div>
   </section>

   {/* HISTOIRE/TIMELINE - Animée */}
   <section className="py-24 px-6 bg-gradient-to-l from-purple-50 to-blue-50">
    <h2 className="text-5xl font-bold text-center mb-16">Notre Histoire</h2>
    <div className="max-w-4xl mx-auto relative">
     <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
     {timeline.map((item, i) => (
      <motion.div
       key={i}
       initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
       whileInView={{ opacity: 1, x: 0 }}
       className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}
      >
       <div className={`bg-white p-6 rounded-xl shadow-lg w-1/2 ${i % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
        <h3 className="text-2xl font-bold mb-2">{item.year}</h3>
        <p>{item.event}</p>
       </div>
      </motion.div>
     ))}
    </div>
   </section>

   {/* ÉQUIPE - Professionnelle */}
   <section className="py-24 px-6">
    <h2 className="text-5xl font-bold text-center mb-16">Notre Équipe d'Experts</h2>
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
     {team.map((member, i) => (
      <motion.div
       key={i}
       initial={{ scale: 0.9, opacity: 0 }}
       whileInView={{ scale: 1, opacity: 1 }}
       className="text-center bg-white rounded-2xl shadow-xl p-8"
      >
       <member.icon className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
       <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
       <p className="text-blue-600 font-medium mb-4">{member.role}</p>
       <p className="text-gray-600">{member.desc}</p>
      </motion.div>
     ))}
    </div>
   </section>

   {/* TÉMOIGNAGES - Slider simulé */}
   <section className="bg-gray-100 py-24 px-6">
    <h2 className="text-5xl font-bold text-center mb-16">Ce Que Disent Nos Clients</h2>
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
     <AnimatePresence>
      {testimonials.map((test, i) => (
       <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: i * 0.2 }}
        className="bg-white rounded-2xl shadow-lg p-8"
       >
        <Quote className="w-8 h-8 text-blue-600 mb-4" />
        <p className="text-gray-700 mb-6 italic">{test.quote}</p>
        <div className="flex items-center justify-between">
         <p className="font-bold">{test.author}</p>
         <div className="flex">
          {Array.from({ length: 5 }).map((_, j) => (
           <Star key={j} className={`w-5 h-5 ${j < test.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
          ))}
         </div>
        </div>
       </motion.div>
      ))}
     </AnimatePresence>
    </div>
   </section>

   {/* CONTACT - CTA fort */}
   <section className="bg-indigo-900 text-white py-24 px-6">
    <div className="max-w-5xl mx-auto text-center">
     <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-5xl font-bold mb-10">Prêt à Révolutionner Votre IT ?</motion.h2>
     <p className="text-xl mb-12">Contactez-nous pour un audit gratuit et personnalisé.</p>
     <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="flex items-center justify-center gap-3">
       <MapPin className="w-8 h-8" />
       <div>
        <p className="font-bold">Yaoundé / Douala</p>
        <p className="text-sm opacity-80">Bureaux ouverts 8h-18h</p>
       </div>
      </div>
      <div className="flex items-center justify-center gap-3">
       <Phone className="w-8 h-8" />
       <div>
        <p className="font-bold">+237 690 461 830</p>
        <p className="text-sm opacity-80">Appel 24/7</p>
       </div>
      </div>
      <div className="flex items-center justify-center gap-3">
       <Mail className="w-8 h-8" />
       <div>
        <p className="font-bold">omiietech@gmail.cm</p>
        <p className="text-sm opacity-80">Réponse en 1h</p>
       </div>
      </div>
     </div>
     <motion.button
      whileHover={{ scale: 1.05 }}
      className="bg-blue-500 text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl"
     >
      <Link prefetch href="/devis">
       Obtenir un Devis Gratuit <Send className="inline ml-2" />
      </Link>
     </motion.button>
    </div>
   </section>

   {/* FOOTER */}

   <Footer />
  </div>
 );
}
