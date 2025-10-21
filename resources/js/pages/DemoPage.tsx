import { motion } from "framer-motion";
import {
 FaTachometerAlt,
 FaServer,
 FaUsers,
 FaChartLine,
 FaShieldAlt,
 FaPlus,
} from "react-icons/fa";
import { useState } from "react";

export default function DemoPage() {
 const [activeTab, setActiveTab] = useState("dashboard");

 // ✅ Définition propre des couleurs pour éviter les classes dynamiques
 const colorClasses = {
  blue: {
   gradient: "from-blue-500/10 to-blue-600/10 border-blue-200/20",
   icon: "text-blue-400",
   bg: "bg-blue-500/20",
  },
  green: {
   gradient: "from-green-500/10 to-green-600/10 border-green-200/20",
   icon: "text-green-400",
   bg: "bg-green-500/20",
  },
  purple: {
   gradient: "from-purple-500/10 to-purple-600/10 border-purple-200/20",
   icon: "text-purple-400",
   bg: "bg-purple-500/20",
  },
  indigo: {
   gradient: "from-indigo-500/10 to-indigo-600/10 border-indigo-200/20",
   icon: "text-indigo-400",
   bg: "bg-indigo-500/20",
  },
  red: {
   gradient: "from-red-500/10 to-red-600/10 border-red-200/20",
   icon: "text-red-400",
   bg: "bg-red-500/20",
  },
 };

 const stats = [
  { name: "Entreprises", value: "47", icon: FaUsers, color: "blue" },
  { name: "Interfaces", value: "124", icon: FaServer, color: "green" },
  { name: "Milieux IT", value: "89", icon: FaShieldAlt, color: "purple" },
  { name: "Utilisateurs", value: "203", icon: FaUsers, color: "indigo" },
 ];

 const features = [
  {
   title: "Gestion Interfaces",
   description:
    "Organisez tous vos outils informatiques (CRM, ERP, serveurs) avec facilité",
   icon: FaServer,
   color: "blue",
  },
  {
   title: "Dashboard Centralisé",
   description: "Visualisez l'état de votre infrastructure IT en temps réel",
   icon: FaTachometerAlt,
   color: "green",
  },
  {
   title: "Sécurité & Logs",
   description: "Suivi complet des activités et alertes de sécurité",
   icon: FaShieldAlt,
   color: "red",
  },
  {
   title: "Multi-Entreprises",
   description: "Gérez plusieurs entreprises depuis une seule plateforme",
   icon: FaUsers,
   color: "purple",
  },
 ];

 const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
   opacity: 1,
   transition: { staggerChildren: 0.2 },
  },
 };

 const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
 };

 const tabContent = {
  dashboard: (
   <div className="space-y-6">
    {/* Stats */}
    <motion.div
     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
     variants={containerVariants}
    >
     {stats.map((stat, idx) => {
      const Icon = stat.icon;
      const colors = colorClasses[stat.color];
      return (
       <motion.div
        key={idx}
        variants={itemVariants}
        className={`p-6 rounded-xl bg-gradient-to-br ${colors.gradient} border backdrop-blur-sm`}
       >
        <div className="flex items-center justify-between">
         <div className={`p-3 rounded-lg ${colors.bg}`}>
          <Icon className={`text-2xl ${colors.icon}`} />
         </div>
         <div>
          <p className="text-3xl font-bold text-white">
           {stat.value}
          </p>
          <p className="text-sm text-gray-300 mt-1">{stat.name}</p>
         </div>
        </div>
       </motion.div>
      );
     })}
    </motion.div>

    {/* Quick Actions */}
    <motion.div
     variants={itemVariants}
     className="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
     {[
      { title: "Nouvelle Interface", icon: FaPlus, color: "blue" },
      { title: "Ajouter Milieu", icon: FaServer, color: "green" },
      { title: "Rapport Mensuel", icon: FaChartLine, color: "purple" },
     ].map((action, idx) => {
      const Icon = action.icon;
      const colors = colorClasses[action.color];
      return (
       <motion.button
        key={idx}
        whileHover={{ scale: 1.05, y: -5 }}
        className={`p-6 rounded-xl bg-gradient-to-r ${colors.gradient} border text-left transition-all`}
       >
        <div className="flex items-center space-x-3">
         <div className={`p-2 rounded-lg ${colors.bg}`}>
          <Icon className={`${colors.icon}`} />
         </div>
         <div>
          <h4 className="font-semibold text-white">{action.title}</h4>
          <p className="text-sm text-gray-400">Action rapide</p>
         </div>
        </div>
       </motion.button>
      );
     })}
    </motion.div>

    {/* Placeholder Graph */}
    <motion.div
     variants={itemVariants}
     className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50"
    >
     <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center">
      <FaChartLine className="mr-2" /> Performance Interfaces
     </h3>
     <div className="h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
      <p className="text-gray-400">
       📊 Graphique des performances (Chart.js à intégrer)
      </p>
     </div>
    </motion.div>
   </div>
  ),
  // autres onglets inchangés...
 };

 return (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
   {/* Header */}
   <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-black/80 backdrop-blur-sm border-b border-gray-800 py-6"
   >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
       Démo Omiie
      </h1>
      <p className="text-gray-400 mt-2 md:mt-0">
       Plateforme de gestion IT multi-entreprises
      </p>
     </div>
    </div>
   </motion.div>

   {/* Contenu principal */}
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {/* Tabs */}
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     className="flex flex-wrap justify-center md:justify-start gap-2 mb-8 bg-gray-800/50 rounded-xl p-2"
    >
     {[
      { id: "dashboard", label: "Dashboard", icon: FaTachometerAlt },
      { id: "interfaces", label: "Interfaces", icon: FaServer },
      { id: "milieux", label: "Milieux IT", icon: FaShieldAlt },
     ].map((tab) => {
      const Icon = tab.icon;
      return (
       <motion.button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        whileHover={{ scale: 1.05 }}
        className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${activeTab === tab.id
          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
          : "text-gray-300 hover:text-white bg-gray-700/50 hover:bg-gray-600/50"
         }`}
       >
        <Icon className="text-sm" />
        <span className="font-medium">{tab.label}</span>
       </motion.button>
      );
     })}
    </motion.div>

    {/* Contenu onglet */}
    <motion.div
     key={activeTab}
     initial={{ opacity: 0, x: 20 }}
     animate={{ opacity: 1, x: 0 }}
     exit={{ opacity: 0, x: -20 }}
     transition={{ duration: 0.3 }}
     variants={containerVariants}
    >
     {tabContent[activeTab]}
    </motion.div>
   </div>
  </div>
 );
}
