import { motion } from 'framer-motion';
import { FaArrowRight, FaLaptopCode, FaShieldAlt } from 'react-icons/fa';

// Variants pour animations
const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, rotate: -5 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { duration: 1, ease: 'easeOut' },
    },
};

const buttonVariants = {
    hover: {
        scale: 1.05,
        boxShadow: '0px 6px 20px rgba(255,105,180,0.4)',
        transition: { duration: 0.3 },
    },
};

const Hero = () => {
    return (
        <section className="mt-12 flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 to-white px-6 py-16 md:px-16 md:py-24">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
                {/* Texte */}
                <motion.div
                    className="space-y-6 text-center md:text-left"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                    }}
                >
                    <motion.h1
                        className="text-4xl leading-tight font-extrabold text-pink-600 md:text-5xl lg:text-6xl"
                        variants={textVariants}
                    >
                        Boostez votre avenir avec Omiie
                    </motion.h1>
                    <motion.h2
                        className="text-xl font-semibold text-gray-800 md:text-2xl"
                        variants={textVariants}
                    >
                        Formations et services numériques haut de gamme
                    </motion.h2>
                    <motion.p
                        className="mx-auto max-w-lg text-base text-gray-600 md:mx-0 md:text-lg"
                        variants={textVariants}
                    >
                        Découvrez nos formations en développement web,
                        cybersécurité, marketing digital, e-learning et bien
                        plus. Progressez avec des experts passionnés pour un
                        futur connecté.
                    </motion.p>

                    {/* Boutons */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 md:justify-start"
                        variants={textVariants}
                    >
                        <motion.a
                            href="#services"
                            className="inline-flex items-center rounded-full bg-pink-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-pink-700"
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            Commencer <FaArrowRight className="ml-2" />
                        </motion.a>
                        <motion.a
                            href="#formations"
                            className="inline-flex items-center rounded-full border border-pink-600 bg-white px-8 py-3 text-lg font-semibold text-pink-600 transition hover:bg-pink-50"
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            Explorer nos formations
                        </motion.a>
                    </motion.div>

                    {/* Icônes supplémentaires */}
                    <motion.div
                        className="mt-6 flex justify-center gap-6 md:justify-start"
                        variants={textVariants}
                    >
                        <div className="flex items-center gap-2 text-pink-500">
                            <FaLaptopCode size={24} /> Dev Web
                        </div>
                        <div className="flex items-center gap-2 text-pink-500">
                            <FaShieldAlt size={24} /> Cybersécurité
                        </div>
                    </motion.div>
                </motion.div>

                {/* Image */}
                <motion.div
                    className="flex justify-center md:justify-end"
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                >
                    <img
                        src="https://images.unsplash.com/photo-1612831455540-1017fc8d6a6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        alt="Illustration services numériques Omiie"
                        className="h-auto max-w-full rounded-3xl object-cover shadow-2xl transition-transform hover:scale-105 md:max-w-lg"
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
