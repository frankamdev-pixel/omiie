import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Cloud, Smartphone, BarChart3, Headphones, MapPin, Server, ArrowRightCircle, Globe, Cpu, Lock, Database } from "lucide-react";
import { Link } from "@inertiajs/react";

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
  <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <motion.div
     initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     className="text-center mb-16"
    >
     <h2 className="text-5xl font-extrabold text-indigo-900 mb-4 tracking-tight">Services OMIIE Pro</h2>
     <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Catalogue complet, organisé par catégories. Cliquez sur les tabs pour explorer. Chaque service inclut features clés.
     </p>
    </motion.div>

    <Tabs defaultValue="securite" className="space-y-12" onValueChange={setActiveTab}>
     <TabsList className="flex flex-wrap justify-center gap-4 bg-transparent border-none">
      {Object.entries(categories).map(([key, cat]) => (
       <TabsTrigger
        key={key}
        value={key}
        className="px-6 py-3 rounded-full data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-lg border border-indigo-200 hover:bg-indigo-50 transition-all"
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
         <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
           <CardTitle className="text-3xl font-bold">{cat.title}</CardTitle>
           <CardDescription className="text-lg opacity-90 mt-2">{cat.desc}</CardDescription>
          </CardHeader>
          <CardContent className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
           {cat.services.map((service, i) => (
            <motion.div
             key={service.title}
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: i * 0.1 }}
             className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-blue-300"
            >
             <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-xl">
               <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800">{service.title}</h4>
</div>
             <p className="text-gray-600 mb-4">{service.desc}</p>
             <ul className="space-y-2 mb-6">
              {service.features.map((feat) => (
               <li key={feat} className="flex items-center gap-2 text-sm text-gray-700">
                <ArrowRightCircle className="w-4 h-4 text-green-500" /> {feat}
               </li>
              ))}
             </ul>
             <Link href='/devis' className="w-full text-center px-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-green-600">
              Devis Gratuit <ArrowRightCircle className="ml-2 w-4 h-4" />
             </Link>
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
