import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Cloud, Smartphone, BarChart3, Headphones, MapPin, Server, ArrowRightCircle, Globe, Cpu, Lock, Database, CheckCircle } from "lucide-react";
import { Link } from "@inertiajs/react";
import Navbar from "@/components/Navbar";

export default function Services() {
 const [activeTab, setActiveTab] = useState("securite");

 const categories = {
  securite: {
   title: "Sécurité & Protection",
   desc: "Solutions avancées pour protéger vos actifs numériques contre les menaces modernes.",
   icon: Lock,
   services: [
    { icon: Shield, title: "Cybersécurité Avancée", desc: "Audits complets, firewalls intelligents, détection AI d'intrusions 24/7. Conformité RGPD/LOPD.", features: ["Monitoring proactif", "Réponse incidents <1h", "Formation équipes"] },
    { icon: Lock, title: "Protection Anti-Malware", desc: "Scans en temps réel, isolation menaces, backups sécurisés automatisés.", features: ["Zero-trust architecture", "Encryption end-to-end", "Rapports mensuels"] },
    { icon: Shield, title: "Audit & Conformité", desc: "Évaluations ISO 27001, plans de continuité business.", features: ["Vulnérabilités scanning", "Tests penetration", "Certifications délivrées"] }
   ]
  },
  cloud: {
   title: "Cloud & Infrastructure",
   desc: "Infrastructures scalables et optimisées pour l'Afrique Centrale.",
   icon: Cloud,
   services: [
    { icon: Database, title: "Cloud Local Hébergement", desc: "Data centers Cameroun, latence minimale, pricing FCFA.", features: ["99.99% uptime", "Scalabilité auto", "Intégration AWS/Azure"] },
    { icon: Server, title: "Gestion Serveurs Hybrides", desc: "Optimisation on-premise/cloud, monitoring 24/7.", features: ["Redondance multi-site", "Backup quotidien", "Mises à jour automatisées"] },
    { icon: Cloud, title: "Migration & DevOps", desc: "Transition zéro downtime, CI/CD pipelines.", features: ["Assessment gratuit", "Training DevOps", "Support post-migration"] },
    { icon: Globe, title: "Réseaux Privés Virtuels", desc: "VPN entreprise, connexions sécurisées mobiles.", features: ["Zero-config setup", "Multi-device", "Logs auditables"] }
   ]
  },
  dev: {
   title: "Développement & Applications",
   desc: "Apps sur mesure pour booster votre productivité.",
   icon: Cpu,
   services: [
    { icon: Smartphone, title: "Apps Mobiles Custom", desc: "Développement React Native/Flutter pour iOS/Android.", features: ["UI/UX design pro", "Intégration API", "Maintenance annuelle"] },
    { icon: Cpu, title: "Web Apps Progressives", desc: "Sites PWA performants, offline-ready.", features: ["SEO optimisé", "Push notifications", "Cross-browser"] },
    { icon: Database, title: "Systèmes ERP/CRM", desc: "Intégrations Odoo/Dolibarr adaptées PME.", features: ["Modules custom", "Data migration", "Analytics intégrés"] }
   ]
  },
  analytics: {
   title: "Analytics & Intelligence",
   desc: "Data-driven insights pour décisions stratégiques.",
   icon: BarChart3,
   services: [
    { icon: BarChart3, title: "Business Intelligence", desc: "Dashboards PowerBI/Tableau personnalisés.", features: ["Real-time data", "AI predictions", "Rapports automatisés"] },
    { icon: Cpu, title: "IA & Machine Learning", desc: "Modèles custom pour optimisation processes.", features: ["Chatbots entreprise", "Analyse prédictive", "Intégration existant"] }
   ]
  },
  support: {
   title: "Support & Déploiement",
   desc: "Accompagnement expert partout au Cameroun.",
   icon: Headphones,
   services: [
    { icon: Headphones, title: "Support 24/7 Multilingue", desc: "Tickets, chat, appel - réponse <15min.", features: ["Français/English", "Remote assist", "On-site urgent"] },
    { icon: MapPin, title: "Déploiement National", desc: "Installations Yaoundé/Douala + régions.", features: ["Logistique incluse", "Training sur site", "Garantie 1 an"] },
    { icon: Globe, title: "Formation & Consulting", desc: "Workshops IT, conseils stratégie numérique.", features: ["Certificats délivrés", "Groupes/Indiv", "Follow-up 3 mois"] }
   ]
  }
 };

 return (
  <section className="py-24 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
   <Navbar />
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header Animé */}
    <motion.div
     initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8 }}
     className="text-center mb-16"
    >
     <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-4 tracking-tight">
      Services OMIIE Pro
     </h2>
     <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Catalogue complet, organisé par catégories. Explorez avec fluidité. Chaque service avec features clés et CTA.
     </p>
    </motion.div>

    {/* Tabs Sophistiquées */}
    <Tabs defaultValue="securite" className="space-y-12" onValueChange={setActiveTab}>
     <TabsList className="flex flex-wrap justify-center gap-4 bg-transparent border-none p-2 rounded-2xl bg-white/30 backdrop-blur-md shadow-inner">
      {Object.entries(categories).map(([key, cat]) => (
       <TabsTrigger
        key={key}
        value={key}
        className="px-6 py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-lg border border-transparent data-[state=active]:border-white/20 hover:bg-white/20 transition-all duration-300 text-gray-800 hover:text-indigo-900"
       >
        <cat.icon className="w-5 h-5 mr-2" /> {cat.title.split(" &")[0]}
       </TabsTrigger>
      ))}
     </TabsList>

     {Object.entries(categories).map(([key, cat]) => (
      <TabsContent key={key} value={key}>
       <AnimatePresence mode="wait">
        <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -20 }}
         transition={{ duration: 0.4 }}
        >
         <Card className="border-none shadow-2xl rounded-3xl overflow-hidden bg-white">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white relative">
           <CardTitle className="text-3xl font-bold">{cat.title}</CardTitle>
           <CardDescription className="text-lg opacity-90 mt-2">{cat.desc}</CardDescription>
           <motion.div
            className="absolute top-4 right-4 p-3 bg-white/20 rounded-full"
            whileHover={{ scale: 1.1, rotate: 360 }}
           >
            <cat.icon className="w-6 h-6" />
           </motion.div>
          </CardHeader>
          <CardContent className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
           {cat.services.map((service, i) => (
            <motion.div
             key={service.title}
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: i * 0.1, duration: 0.5 }}
             className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300 hover:scale-[1.02]"
            >
             <div className="flex items-center gap-3 mb-4">
              <motion.div
               className="p-3 bg-blue-100 rounded-xl"
               whileHover={{ rotate: 360 }}
               transition={{ duration: 0.6 }}
              >
               <service.icon className="w-6 h-6 text-blue-600" />
              </motion.div>
              <h4 className="text-xl font-bold text-gray-800">{service.title}</h4>
             </div>
             <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.desc}</p>
             <ul className="space-y-2 mb-6">
              {service.features.map((feat, j) => (
               <motion.li
                key={feat}
                className="flex items-center gap-2 text-sm text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: j * 0.1 }}
               >
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> {feat}
               </motion.li>
              ))}
             </ul>
             <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
              <Link prefetch href="/devis">
               Devis Gratuit <ArrowRightCircle className="ml-2 w-4 h-4" />
              </Link>
             </Button>
            </motion.div>
           ))}
          </CardContent>
         </Card>
        </motion.div>
       </AnimatePresence>
      </TabsContent>
     ))}
    </Tabs>
   </div>
  </section>
 );
}