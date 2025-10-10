import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaFilter, FaCalendarAlt, FaBuilding, FaLink, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Variants pour animations fluides
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, duration: 0.8, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  hover: {
    scale: 1.08,
    boxShadow: '0px 12px 30px rgba(83, 78, 235, 0.6)',
    transition: { duration: 0.4 },
  },
  tap: { scale: 0.98 },
};

const starVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  hover: { scale: 1.2, rotate: 360, transition: { duration: 0.5 } },
};

const filterVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.5, ease: 'easeInOut' } },
};

const Testimonial = () => {
  const [filter, setFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: 'Jean Dupont',
      role: 'CTO, TechCorp',
      quote: 'Cette plateforme a révolutionné notre gestion IT. L\'interface est intuitive, le support réactif, et les outils personnalisables nous ont permis d\'optimiser nos workflows en un temps record. Un must-have pour toute entreprise tech.',
      avatar: 'https://via.placeholder.com/100',
      rating: 5,
      category: 'IT Management',
      date: '15 Mai 2024',
      companyLogo: 'https://via.placeholder.com/50?text=TC',
      link: 'https://techcorp.com/testimonial/jean',
    },
    {
      name: 'Marie Lefèvre',
      role: 'Manager IT, InnoSys',
      quote: 'Excellente solution pour nos besoins en UX. Les features avancées comme l\'intégration API et les dashboards analytiques ont boosté notre productivité. Le design est moderne et adapté mobile, ce qui facilite l\'adoption par les équipes.',
      avatar: 'https://via.placeholder.com/100',
      rating: 5,
      category: 'User Experience',
      date: '22 Juin 2024',
      companyLogo: 'https://via.placeholder.com/50?text=IS',
      link: 'https://innosys.com/reviews/marie',
    },
    {
      name: 'Luc Martin',
      role: 'PDG, DataFlow',
      quote: 'Outil robuste pour la scalabilité. Nous gérons des volumes de données massifs sans ralentissement. Les options de customisation et la sécurité intégrée nous ont convaincus. Rapport qualité-prix imbattable.',
      avatar: 'https://via.placeholder.com/100',
      rating: 4,
      category: 'Scalability',
      date: '10 Juillet 2024',
      companyLogo: 'https://via.placeholder.com/50?text=DF',
      link: 'https://dataflow.com/feedback/luc',
    },
    {
      name: 'Sophie Bernard',
      role: 'Directrice, CyberSec',
      quote: 'Parfait pour la cybersécurité. Les protocoles avancés et les alertes en temps réel protègent nos systèmes efficacement. L\'équipe de support est experte et toujours disponible. Hautement recommandé pour les environnements sensibles.',
      avatar: 'https://via.placeholder.com/100',
      rating: 5,
      category: 'Security',
      date: '5 Août 2024',
      companyLogo: 'https://via.placeholder.com/50?text=CS',
      link: 'https://cybersec.com/testimonials/sophie',
    },
  ];

  const filteredTestimonials = filter === 'all' ? testimonials : testimonials.filter(t => t.category === filter);

  // Fonctions pour naviguer avec les chevrons
  const scrollToNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' }); // Ajuste 300 pour largeur carte
    }
  };

  const scrollToPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#FFD6D6] via-[#FECACA] to-[#FFB6B9] overflow-hidden">
      {/* Bulles flottantes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/30 blur-xl"
          style={{
            width: `${40 + Math.random() * 60}px`,
            height: `${40 + Math.random() * 60}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -60, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.h2
          className="text-4xl font-extrabold text-[#534EEB] text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ce que disent nos clients
        </motion.h2>

        {/* Filtres */}
        <div className="flex justify-center mb-10">
          <motion.button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#3FD1CB] text-white font-semibold hover:bg-[#534EEB] transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={showFilters ? 'Cacher les filtres' : 'Afficher les filtres'}
          >
            <FaFilter /> Filtrer
          </motion.button>
        </div>
        <AnimatePresence>
          {showFilters && (
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-10"
              variants={filterVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {['all', 'IT Management', 'User Experience', 'Scalability', 'Security'].map(category => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-5 py-2 rounded-full text-base font-semibold transition-all ${
                    filter === category
                      ? 'bg-[#534EEB] text-white shadow-lg'
                      : 'bg-white/60 text-[#534EEB] hover:bg-[#3FD1CB] hover:text-white'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {category === 'all' ? 'Tous' : category}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll horizontal avec chevrons */}
        <div className="relative">
          <motion.button
            onClick={scrollToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#534EEB] text-white hover:bg-[#3FD1CB] transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Témoignage précédent"
          >
            <FaChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={scrollToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#534EEB] text-white hover:bg-[#3FD1CB] transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Témoignage suivant"
          >
            <FaChevronRight size={24} />
          </motion.button>
          <motion.div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-thin scrollbar-thumb-[#3FD1CB] scrollbar-track-[#FFD6D6]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="min-w-[85%] sm:min-w-[45%] lg:min-w-[30%] snap-center"
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <div className="relative bg-white/95 rounded-3xl shadow-2xl p-8 text-center max-w-md mx-auto backdrop-blur-lg">
                  <FaQuoteLeft className="text-[#3FD1CB] text-4xl mx-auto mb-6" />
                  <p className="text-gray-700 italic mb-6 text-base leading-relaxed">"{testimonial.quote}"</p>
                  <motion.div className="flex justify-center mb-4" variants={containerVariants} initial="hidden" animate="visible">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.span key={i} variants={starVariants} whileHover="hover">
                        <FaStar className={`text-2xl ${i < testimonial.rating ? 'text-[#534EEB]' : 'text-gray-300'}`} />
                      </motion.span>
                    ))}
                  </motion.div>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold text-[#534EEB] mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{testimonial.role}</p>
                  <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><FaCalendarAlt /> {testimonial.date}</span>
                    <img src={testimonial.companyLogo} alt="Company Logo" className="w-6 h-6" />
                  </div>
                  <a
                    href={testimonial.link}
                    className="mt-4 inline-flex items-center gap-1 text-[#3FD1CB] hover:text-[#534EEB] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink /> Lire plus
                  </a>
                  <span className="absolute top-4 right-4 text-xs text-[#3FD1CB] font-semibold bg-white/50 px-2 py-1 rounded-full">
                    {testimonial.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animations CSS et scrollbar stylé */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-60px) translateX(30px); }
            100% { transform: translateY(0px) translateX(0px); }
          }
          .scrollbar-thin {
            scrollbar-width: thin;
            scrollbar-color: #3FD1CB #FFD6D6;
          }
          .scrollbar-thin::-webkit-scrollbar {
            height: 8px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background-color: #3FD1CB;
            border-radius: 9999px;
          }
          .scrollbar-thin::-webkit-scrollbar-track {
            background-color: #FFD6D6;
            border-radius: 9999px;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonial;