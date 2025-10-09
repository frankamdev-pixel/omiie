import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaLaptopCode, FaShieldAlt, FaUsers, FaStar } from 'react-icons/fa';

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

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.4 } },
};

const Hero = () => {
  const { scrollY } = useScroll();

  return (
    <>
      <section
        className="relative h-screen min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-white px-4 py-16 sm:px-6 md:px-12 md:py-24 overflow-hidden"
        aria-label="Section principale de Omiie"
      >
        {/* Particules animées */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-3 h-3 top-1/5 left-1/4 bg-pink-300 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute w-4 h-4 top-3/4 right-1/5 bg-pink-200 rounded-full opacity-30 animate-bounce delay-200"></div>
          <div className="absolute w-2 h-2 bottom-1/4 left-1/3 bg-pink-300 rounded-full opacity-30 animate-bounce delay-400"></div>
          <div className="absolute w-3 h-3 top-1/2 right-1/4 bg-pink-200 rounded-full opacity-30 animate-bounce delay-600"></div>
        </div>

        <div className="relative mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Texte */}
          <motion.div
            className="space-y-6 sm:space-y-8 text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div
              className="inline-block bg-pink-500 text-white text-sm sm:text-base font-semibold px-4 py-2 rounded-full mb-4"
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
            >
              Leader en solutions numériques
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-pink-500 leading-tight"
              variants={textVariants}
            >
              Transformez votre avenir avec Omiie
            </motion.h1>
            <motion.h2
              className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800"
              variants={textVariants}
            >
              Formations et services d’excellence
            </motion.h2>
            <motion.p
              className="mx-auto max-w-md sm:max-w-lg text-sm sm:text-base md:text-lg text-gray-600"
              variants={textVariants}
            >
              Maîtrisez le développement web, la cybersécurité, le marketing digital, l’e-learning, l’e-commerce et bien plus.
            </motion.p>

            {/* Boutons */}
            <motion.div className="flex flex-wrap justify-center gap-4 md:justify-start" variants={textVariants}>
              <motion.a
                href="#services"
                className="inline-flex items-center bg-pink-500 text-white rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Commencer <FaArrowRight className="ml-2" />
              </motion.a>
              <motion.a
                href="#formations"
                className="inline-flex items-center border-2 border-pink-500 bg-white text-pink-500 rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Nos formations
              </motion.a>
            </motion.div>

            {/* Statistiques */}
            <motion.div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 md:justify-start" variants={statsVariants}>
              <div className="flex items-center gap-3 text-pink-500"><FaUsers size={24} /><span className="font-semibold">+1000 apprenants</span></div>
              <div className="flex items-center gap-3 text-pink-500"><FaStar size={24} /><span className="font-semibold">4.9/5 évaluations</span></div>
              <div className="flex items-center gap-3 text-pink-500"><FaLaptopCode size={24} /><span className="font-semibold">+10 formations</span></div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div className="flex justify-center md:justify-end relative" initial="hidden" animate="visible" variants={imageVariants}>
            <motion.img
              src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&fm=webp"
              alt="Illustration services numériques Omiie"
              className="h-auto max-w-full w-full sm:max-w-md md:max-w-lg rounded-3xl object-cover shadow-2xl"
              style={{ y: useTransform(scrollY, [0, 300], [0, -50]) }}
              loading="lazy"
              whileHover={{ scale: 1.05, y: -15 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 bg-pink-500 opacity-20 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
