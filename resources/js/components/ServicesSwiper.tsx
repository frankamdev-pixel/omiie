import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  FaCode, FaNetworkWired, FaBullhorn, FaShieldAlt, FaGraduationCap, FaShoppingCart,
  FaPaintBrush, FaBrain, FaCloud, FaTools,
} from 'react-icons/fa';

// Couleurs faciles à maintenir
const colors = {
  primary: '#3FD1CB', // turquoise
  gradient: {
    web: 'from-[#3FD1CB] to-[#3FD1CB]',
    network: 'from-[#3FD1CB] to-[#3FD1CB]',
    marketing: 'from-[#3FD1CB] to-[#3FD1CB]',
    security: 'from-[#3FD1CB] to-[#3FD1CB]',
    elearning: 'from-[#3FD1CB] to-[#3FD1CB]',
    ecommerce: 'from-[#3FD1CB] to-[#3FD1CB]',
    design: 'from-[#3FD1CB] to-[#3FD1CB]',
    ai: 'from-[#3FD1CB] to-[#3FD1CB]',
    cloud: 'from-[#3FD1CB] to-[#3FD1CB]',
    maintenance: 'from-[#3FD1CB] to-[#3FD1CB]',
  },
};

const services = [
  { title: 'Développement Web', description: 'Sites modernes et performants avec React/Next.js.', icon: <FaCode size={36} className="text-[#3FD1CB]" />, gradient: colors.gradient.web },
  { title: 'Installation Réseau', description: 'Réseaux sécurisés pour entreprises et particuliers.', icon: <FaNetworkWired size={36} className="text-[#3FD1CB]" />, gradient: colors.gradient.network },
  { title: 'Marketing Digital', description: 'SEO, pubs et stratégies réseaux sociaux.', icon: <FaBullhorn size={36} className="text-[#3FD1CB]" />, gradient: colors.gradient.marketing },
  { title: 'Cybersécurité', description: 'Protégez vos données avec audits et solutions.', icon: <FaShieldAlt size={36} className="text-[#3FD1CB]" />, gradient: colors.gradient.security },
  { title: 'E-learning', description: 'Plateformes éducatives interactives.', icon: <FaGraduationCap size={36} className="text-[#3FD1CB]" />, gradient: colors.gradient.elearning },
  { title: 'E-commerce', description: 'Boutiques en ligne optimisées.', icon: <FaShoppingCart size={36} className="text-[#3FD1CB]" />, gradient: colors.gradient.ecommerce },
  { title: 'Design UI/UX', description: 'Interfaces intuitives et esthétiques.', icon: <FaPaintBrush size={36} className="text-[#3FD1CB]" />, gradient: colors.gradient.design },
  { title: 'Intelligence Artificielle', description: 'Automatisation et optimisation via IA.', icon: <FaBrain size={36} className="text-[#3FD1CB]" />, gradient: colors.gradient.ai },
  { title: 'Cloud Computing', description: 'Solutions cloud flexibles et performantes.', icon: <FaCloud size={36} className="text-[#3FD1CB]" />, gradient: colors.gradient.cloud },
  { title: 'Maintenance Informatique', description: 'Support technique pro et réactif.', icon: <FaTools size={36} className="text-[#3FD1CB]" />, gradient: colors.gradient.maintenance },
];

// Animation cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: { scale: 1.08, y: -5, transition: { type: 'spring', stiffness: 300 } }
};

const ServicesSwiper = () => (
  <section className="relative py-20 bg-[#E0F7F6] overflow-hidden">
    {/* Fond léger animé */}
    <div className="absolute inset-0">
      <svg className="w-full h-full opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill={colors.primary}
          fillOpacity="0.2"
          d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
          <animate attributeName="d" dur="12s" repeatCount="indefinite"
            values="
            M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
            M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,197.3C672,181,768,171,864,181.3C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
            M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
            "
          />
        </path>
      </svg>
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <motion.h2 className="text-3xl md:text-4xl font-extrabold text-[#3FD1CB] text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Nos Services Premium
      </motion.h2>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={25}
        slidesPerView={1}
        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className={`bg-white rounded-3xl shadow-lg p-6 text-center flex flex-col h-full border-t-4 border-gradient-to-r ${service.gradient}`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#3FD1CB] mb-3">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <a href={`#${service.title.toLowerCase().replace(' ', '-')}`} className="mt-4 inline-block bg-[#3FD1CB] text-white px-4 py-1.5 rounded-full font-semibold hover:bg-[#30B9B3] transition">
                En savoir plus
              </a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default ServicesSwiper;
