import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import {
 FaBrain, FaBullhorn, FaChartBar, FaCloud, FaCode, FaGraduationCap,
 FaMobileAlt, FaNetworkWired, FaPaintBrush, FaSearch, FaShieldAlt,
 FaShoppingCart, FaTools, FaCheckCircle, FaArrowRight, FaImage
} from 'react-icons/fa';

// MODAL SERVICE - 100% FONCTIONNEL
const ServiceDetailsModal = ({ service, isOpen, onClose }) => {
 if (!isOpen) return null;

 return (
  <AnimatePresence>
   {isOpen && (
    <motion.div
     className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     onClick={onClose}
    >
     <motion.div
      className="mx-4 w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl"
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onClick={(e) => e.stopPropagation()}
     >
      <div className="flex items-center justify-between mb-6">
       <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
       <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
       >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
       </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
       <div className="space-y-3">
        <p className="text-gray-600">{service.description}</p>
        <div className="space-y-2">
         {service.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-blue-600">
           <FaCheckCircle className="text-xs" /> {feature}
          </div>
         ))}
        </div>
       </div>
       <img
        src={service.image}
        alt={service.title}
        className="rounded-xl h-48 w-full object-cover"
       />
      </div>

      <Link
       href={service.link}
       className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
       onClick={onClose}
      >
       Voir Solution Complète <FaArrowRight />
      </Link>
     </motion.div>
    </motion.div>
   )}
  </AnimatePresence>
 );
};

// SERVICES DATA - 100% PME CAMEROUN
const services = [
 {
  id: 1,
  title: 'Développement Web',
  link: '/services/web-development',
  description: 'Sites React/Next.js pour PME camerounaises',
  icon: FaCode,
  image: './assets/laptop.png',
  category: 'Digital',
  features: ['Responsive mobile-first', 'SEO local Cameroun', 'Maintenance 24/7']
 },
 {
  id: 2,
  title: 'Installation Réseau',
  link: '/services/network-installation',
  description: 'Réseaux Cisco sécurisés Yaoundé',
  icon: FaNetworkWired,
  image: './assets/business.jpg',
  category: 'Services Techniques',
  features: ['Audit gratuit', 'Installation sur site', 'Support 24/7']
 },
 {
  id: 3,
  title: 'Marketing Digital',
  link: '/services/digital-marketing',
  description: 'SEO + Google Ads ROI mesurable',
  icon: FaBullhorn,
  image: './assets/business.jpg',
  category: 'Digital',
  features: ['Stratégie locale', 'Analytics avancés', 'ROI +200%']
 },
 {
  id: 4,
  title: 'Cybersécurité',
  link: '/services/cybersecurity',
  description: 'Protection CNPS/GDPR complète',
  icon: FaShieldAlt,
  image: './assets/security.jpg',
  category: 'Services Techniques',
  features: ['Audit pénétration', 'Formation équipe', 'Conformité CNPS']
 },
 {
  id: 5,
  title: 'E-learning',
  link: '/services/elearning',
  description: 'Plateformes Moodle pour PME',
  icon: FaGraduationCap,
  image: './assets/business.jpg',
  category: 'Digital',
  features: ['Contenu multimédia', 'Quizz interactifs', 'Tracking progrès']
 },
 {
  id: 6,
  title: 'E-commerce',
  link: '/services/ecommerce',
  description: 'Boutiques Shopify locales',
  icon: FaShoppingCart,
  image: './assets/business.jpg',
  category: 'Digital',
  features: ['Paiements Mobile Money', 'SEO optimisé', 'Mobile-first']
 },
 {
  id: 7,
  title: 'Design UI/UX',
  link: '/services/ui-ux-design',
  description: 'Interfaces Figma intuitives',
  icon: FaPaintBrush,
  image: './assets/mobile.png',
  category: 'Digital',
  features: ['Prototypage rapide', 'User testing', 'Accessibilité WCAG']
 },
 {
  id: 8,
  title: 'Intelligence Artificielle',
  link: '/services/artificial-intelligence',
  description: 'Automatisation TensorFlow',
  icon: FaBrain,
  image: './assets/ia.jpg',
  category: 'Services Techniques',
  features: ['Modèles custom', 'Intégration API', 'Éthique AI']
 },
 {
  id: 9,
  title: 'Cloud Computing',
  link: '/services/cloud-computing',
  description: 'Infrastructure AWS locale',
  icon: FaCloud,
  image: './assets/cloud.jpg',
  category: 'Services Techniques',
  features: ['Migration seamless', 'Scalabilité auto', 'Coûts optimisés']
 },
 {
  id: 10,
  title: 'Maintenance Informatique',
  link: '/services/maintenance',
  description: 'Support 24/7 Yaoundé',
  icon: FaTools,
  image: './assets/mobile.png',
  category: 'Services Techniques',
  features: ['Contrats annuels', 'Réponse 2h', 'Backups automatisés']
 },
 {
  id: 11,
  title: 'Analyse de Données',
  link: '/services/data-analysis',
  description: 'Dashboards Power BI PME',
  icon: FaChartBar,
  image: './assets/mobile.png',
  category: 'Digital',
  features: ['Dashboards interactifs', 'Prédictions ML', 'Data cleaning']
 },
 {
  id: 12,
  title: 'Développement Mobile',
  link: '/services/mobile-development',
  description: 'Apps React Native PME',
  icon: FaMobileAlt,
  image: './assets/mobile.png',
  category: 'Digital',
  features: ['Cross-platform', 'Performance native', 'Publication stores']
 }
];

// ANIMATIONS
const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
  opacity: 1,
  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
 }
};

const cardVariants = {
 hidden: { opacity: 0, y: 30, scale: 0.95 },
 visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
 hover: { scale: 1.05, y: -10, transition: { duration: 0.3 } },
 tap: { scale: 0.98 }
};

const categories = ['Tous', 'Digital', 'Services Techniques'];

const ServicesGrid = () => {
 const [filter, setFilter] = useState('Tous');
 const [searchTerm, setSearchTerm] = useState('');
 const [selectedService, setSelectedService] = useState(null);

 const filteredServices = useMemo(() => {
  return services
   .filter(service => filter === 'Tous' || service.category === filter)
   .filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
   );
 }, [filter, searchTerm]);

 return (
  <>
   <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     {/* TITRE */}
     <motion.h2
      className="text-4xl font-bold text-center text-gray-900 mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
     >
      Nos Solutions PME
     </motion.h2>
     <motion.p
      className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
     >
      Digitalisation complète pour entreprises camerounaises • Support local Yaoundé 24/7
     </motion.p>

     {/* SEARCH + FILTERS */}
     <div className="flex flex-col lg:flex-row gap-6 justify-center mb-12">
      <div className="relative w-full max-w-md">
       <input
        type="text"
        placeholder="🔍 Rechercher une solution..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none shadow-sm transition-colors"
       />
       <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      </div>
      <div className="flex flex-wrap justify-center gap-3">
       {categories.map(category => (
        <motion.button
         key={category}
         onClick={() => setFilter(category)}
         className={`px-6 py-2 rounded-full font-semibold transition-all ${filter === category
           ? 'bg-blue-600 text-white shadow-lg'
           : 'bg-white text-blue-600 border-2 border-blue-200 hover:bg-blue-50'
          }`}
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
        >
         {category}
        </motion.button>
       ))}
      </div>
     </div>

     {/* GRID */}
     <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
     >
      {filteredServices.map((service, index) => (
       <motion.div
        key={service.id}
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
        variants={cardVariants}
        custom={index}
        whileHover="hover"
        whileTap="tap"
       >
        <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-6">
         <service.icon className="text-4xl text-blue-600" />
        </div>
        <div className="p-6">
         <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
         <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
         <div className="flex items-center justify-between">
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
           {service.category}
          </span>
          <button
           onClick={() => setSelectedService(service)}
           className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-1 transition-colors"
          >
           Détails <FaArrowRight className="text-xs" />
          </button>
         </div>
        </div>
       </motion.div>
      ))}
     </motion.div>

     {filteredServices.length === 0 && (
      <motion.p
       className="text-center text-gray-500 py-12 col-span-full text-lg"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
      >
       ❌ Aucune solution trouvée. Essayez un autre mot-clé.
      </motion.p>
     )}
    </div>
   </section>

   <ServiceDetailsModal
    service={selectedService}
    isOpen={!!selectedService}
    onClose={() => setSelectedService(null)}
   />
  </>
 );
};

export default ServicesGrid;
