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

const services = [
  { title: 'Développement Web', description: 'Sites modernes et performants avec React/Next.js.', icon: <FaCode size={40} className="text-pink-600" />, gradient: 'from-pink-400 to-pink-600' },
  { title: 'Installation Réseau', description: 'Réseaux sécurisés pour entreprises et particuliers.', icon: <FaNetworkWired size={40} className="text-pink-600" />, gradient: 'from-purple-400 to-pink-600' },
  { title: 'Marketing Digital', description: 'SEO, pubs et stratégies réseaux sociaux.', icon: <FaBullhorn size={40} className="text-pink-600" />, gradient: 'from-blue-400 to-pink-600' },
  { title: 'Cybersécurité', description: 'Protégez vos données avec audits et solutions.', icon: <FaShieldAlt size={40} className="text-pink-600" />, gradient: 'from-red-400 to-pink-600' },
  { title: 'E-learning', description: 'Plateformes éducatives interactives.', icon: <FaGraduationCap size={40} className="text-pink-600" />, gradient: 'from-green-400 to-pink-600' },
  { title: 'E-commerce', description: 'Boutiques en ligne optimisées.', icon: <FaShoppingCart size={40} className="text-pink-600" />, gradient: 'from-yellow-400 to-pink-600' },
  { title: 'Design UI/UX', description: 'Interfaces intuitives et esthétiques.', icon: <FaPaintBrush size={40} className="text-pink-600" />, gradient: 'from-teal-400 to-pink-600' },
  { title: 'Intelligence Artificielle', description: 'Automatisation et optimisation via IA.', icon: <FaBrain size={40} className="text-pink-600" />, gradient: 'from-indigo-400 to-pink-600' },
  { title: 'Cloud Computing', description: 'Solutions cloud flexibles et performantes.', icon: <FaCloud size={40} className="text-pink-600" />, gradient: 'from-cyan-400 to-pink-600' },
  { title: 'Maintenance Informatique', description: 'Support technique pro et réactif.', icon: <FaTools size={40} className="text-pink-600" />, gradient: 'from-orange-400 to-pink-600' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ServicesSwiper = () => (
  <section className="relative py-20 bg-pink-50 overflow-hidden">
    {/* Fond animé léger */}
    <div className="absolute inset-0">
      <svg className="w-full h-full opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#FF69B4"
          fillOpacity="0.2"
          d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
          <animate attributeName="d" dur="12s" repeatCount="indefinite" values="
            M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
            M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,197.3C672,181,768,171,864,181.3C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
            M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
          " />
        </path>
      </svg>
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <motion.h2 className="text-3xl md:text-4xl font-extrabold text-pink-600 text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Nos Services Premium
      </motion.h2>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        navigation
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
              whileHover={{ scale: 1.05, boxShadow: '0px 15px 30px rgba(255,105,180,0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold text-pink-600 mb-3">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <a href={`#${service.title.toLowerCase().replace(' ', '-')}`} className="mt-4 inline-block bg-pink-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-pink-700 transition">
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
