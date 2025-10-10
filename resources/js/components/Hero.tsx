import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaLaptopCode, FaStar, FaUsers } from 'react-icons/fa';

const spin = {
  animate: {
    rotate: 360,
    transition: { repeat: Infinity, duration: 4, ease: 'linear' },
  },
};

// Variants pour animations
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0px 6px 20px rgba(255, 105, 180, 0.4)', transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

const Hero = () => {
  const { scrollY } = useScroll();

  return (
    <section
      className="relative  flex min-h-screen items-center bg-[#C0CCFE] justify-center overflow-hidden px-4 py-20 sm:px-6 md:px-12 md:py-24"
      aria-label="Section principale de Omiie"
    >
      {/* Fond animé */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient animé */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD6D6] via-[#FECACA] to-[#FFB6B9] animate-gradient bg-[length:400%_400%]"></div>

        {/* Bulles flottantes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30 blur-xl"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${(5 + Math.random() * 10)}s ease-in-out infinite alternate`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Contenu */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 sm:gap-12 md:grid-cols-2">
        {/* Texte et boutons */}
        <motion.div
          className="space-y-6 text-center sm:space-y-8 md:text-left"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div
            className="mb-4 inline-block rounded-full bg-[#534EEB] px-4 py-2 text-sm font-semibold text-white sm:text-base"
            variants={textVariants}
            whileHover={{ scale: 1.1 }}
          >
            Leader en solutions numériques
          </motion.div>
          <motion.h1 className="text-3xl font-extrabold text-[#534EEB] sm:text-4xl md:text-5xl lg:text-6xl" variants={textVariants}>
            Optimisez vos systèmes informatiques d’entreprise
          </motion.h1>
          <motion.h2 className="text-lg font-semibold text-gray-800 sm:text-xl md:text-2xl" variants={textVariants}>
            Une plateforme centralisée pour gérer vos projets, interfaces et équipes informatiques.
          </motion.h2>
          <motion.p className="mx-auto max-w-md text-sm text-gray-600 sm:max-w-lg sm:text-base md:text-lg" variants={textVariants}>
            Maîtrisez le développement web, la cybersécurité, le marketing digital, l’e-learning, l’e-commerce et bien plus.
          </motion.p>

          {/* Boutons */}
          <motion.div className="flex flex-wrap justify-center gap-4 md:justify-start" variants={textVariants}>
            <motion.a
              href="#services"
              className="inline-flex items-center rounded-full bg-[#3FD1CB] px-6 py-3 text-base font-semibold text-white sm:px-8 sm:text-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Commencer <FaArrowRight className="ml-2" />
            </motion.a>
            <motion.a
              href="#formations"
              className="inline-flex items-center rounded-full border-2 border-[#3FD1CB] bg-white px-6 py-3 text-base font-semibold text-black sm:px-8 sm:text-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Nos formations
            </motion.a>
          </motion.div>

          {/* Statistiques */}
          <motion.div className="mt-6 flex flex-wrap justify-center gap-6 sm:mt-8 md:justify-start">
            <motion.div className="flex items-center gap-3 rounded-xl bg-white/20 px-4 py-3 text-[#D2859A] shadow-lg backdrop-blur-md" whileHover={{ scale: 1.1 }}>
              <motion.div variants={spin} animate="animate"><FaUsers size={28} /></motion.div>
              <span className="text-lg font-semibold">+1000 apprenants</span>
            </motion.div>
            <motion.div className="flex items-center gap-3 rounded-xl bg-white/20 px-4 py-3 text-[#6E61F5] shadow-lg backdrop-blur-md" whileHover={{ scale: 1.1 }}>
              <motion.div variants={spin} animate="animate"><FaStar size={28} /></motion.div>
              <span className="text-lg font-semibold">4.9/5 évaluations</span>
            </motion.div>
            <motion.div className="flex items-center gap-3 rounded-xl bg-white/20 px-4 py-3 text-[#47D2D1] shadow-lg backdrop-blur-md" whileHover={{ scale: 1.1 }}>
              <motion.div variants={spin} animate="animate"><FaLaptopCode size={28} /></motion.div>
              <span className="text-lg font-semibold">+10 formations</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div className="relative flex justify-center md:justify-end" initial="hidden" animate="visible" variants={imageVariants}>
          <motion.img
            src="./assets/dash.png"
            alt="Illustration services numériques Omiie"
            className="h-auto w-full max-w-full rounded-3xl object-cover shadow-2xl sm:max-w-md md:max-w-lg"
            style={{ y: useTransform(scrollY, [0, 300], [0, -50]) }}
            loading="lazy"
            whileHover={{ scale: 1.05, y: -15 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute -right-4 -bottom-4 h-20 w-20 rounded-full bg-pink-500 opacity-20 blur-xl sm:h-24 sm:w-24"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Animations CSS */}
      <style>
        {`
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            animation: gradientShift 15s ease infinite;
          }
          @keyframes float {
            0% { transform: translateY(0px) translateX(0px); }
            100% { transform: translateY(-50px) translateX(30px); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
