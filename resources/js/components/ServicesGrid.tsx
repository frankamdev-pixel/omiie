import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    FaBrain,
    FaBullhorn,
    FaChartBar,
    FaCloud,
    FaCode,
    FaGraduationCap,
    FaMobileAlt,
    FaNetworkWired,
    FaPaintBrush,
    FaShieldAlt,
    FaShoppingCart,
    FaTools,
} from 'react-icons/fa';

// Données des services corrigées et enrichies
const services = [
    {
        title: 'Développement Web',
        description:
            'Créez des sites modernes avec React, Next.js et Tailwind CSS.',
        icon: <FaCode size={32} className="text-[var(--omiie-pink)]" />,
        image: './assets/laptop.png',
        category: 'Formations',
        // gradient: 'from-[var(--omiie-pink)] to-[var(--omiie-accent)]',
    },
    {
        title: 'Installation Réseau',
        description: 'Configurez des réseaux sécurisés et performants.',
        icon: <FaNetworkWired size={32} className="text-[var(--omiie-pink)]" />,
        image: 'assets/business.jpg',
        category: 'Services Techniques',
        // gradient: 'from-[var(--omiie-accent)] to-[var(--omiie-pink)]',
    },
    {
        title: 'Marketing Digital',
        description: 'Boostez votre visibilité avec SEO et réseaux sociaux.',
        icon: <FaBullhorn size={32} className="text-[var(--omiie-pink)]" />,
        image: '',
        category: 'Digital',
        // gradient: 'from-[var(--omiie-pink)] to-[var(--omiie-light-pink)]',
    },
    {
        title: 'Cybersécurité',
        description: 'Protégez vos systèmes contre les cyberattaques.',
        icon: <FaShieldAlt size={32} className="text-[var(--omiie-pink)]" />,
        image: '',
        category: 'Services Techniques',
        // gradient: 'from-[var(--omiie-accent)] to-[var(--omiie-white)]',
    },
    {
        title: 'E-learning',
        description: 'Créez des plateformes éducatives modernes.',
        icon: (
            <FaGraduationCap size={32} className="text-[var(--omiie-pink)]" />
        ),
        image: '',
        category: 'Formations',
        // gradient: 'from-[var(--omiie-light-pink)] to-[var(--omiie-pink)]',
    },
    {
        title: 'E-commerce',
        description:
            'Lancez des boutiques en ligne avec Shopify ou WooCommerce.',
        icon: <FaShoppingCart size={32} className="text-[var(--omiie-pink)]" />,
        image: '',
        category: 'Digital',
        // gradient: 'from-[var(--omiie-pink)] to-[var(--omiie-accent)]',
    },
    {
        title: 'Design UI/UX',
        description: 'Concevez des interfaces intuitives et esthétiques.',
        icon: <FaPaintBrush size={32} className="text-[var(--omiie-pink)]" />,
        image: 'assets/mobile.png',
        category: 'Formations',
        // gradient: 'from-[var(--omiie-accent)] to-[var(--omiie-pink)]',
    },
    {
        title: 'Intelligence Artificielle',
        description: 'Automatisez vos processus avec l’IA.',
        icon: <FaBrain size={32} className="text-[var(--omiie-pink)]" />,
        image: './assets/ia.jpg',
        category: 'Services Techniques',
        // gradient: 'from-[var(--omiie-white)] to-[var(--omiie-pink)]',
    },
    {
        title: 'Cloud Computing',
        description: 'Solutions cloud pour performance et flexibilité.',
        icon: <FaCloud size={32} className="text-[var(--omiie-pink)]" />,
        image: 'assets/cloud.jpg',
        category: 'Services Techniques',
        // gradient: 'from-[var(--omiie-pink)] to-[var(--omiie-light-pink)]',
    },
    {
        title: 'Maintenance Informatique',
        description: 'Support technique pour des systèmes fiables.',
        icon: <FaTools size={32} className="text-[var(--omiie-pink)]" />,
        image: 'assets/mobile.png',
        category: 'Services Techniques',
        // gradient: 'from-[var(--omiie-accent)] to-[var(--omiie-pink)]',
    },
    {
        title: 'Analyse de Données',
        description: 'Prenez des décisions éclairées avec vos données.',
        icon: <FaChartBar size={32} className="text-[var(--omiie-pink)]" />,
        image: 'assets/mobile.png',
        category: 'Digital',
        // gradient: 'from-[var(--omiie-light-pink)] to-[var(--omiie-accent)]',
    },
    {
        title: 'Développement Mobile',
        description: 'Créez des apps pour iOS et Android.',
        icon: <FaMobileAlt size={32} className="text-[var(--omiie-pink)]" />,
        image: 'assets/mobile.png',
        category: 'Formations',
        // gradient: 'from-[var(--omiie-pink)] to-[var(--omiie-white)]',
    },
];

// Variants pour animations des cartes
const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 },
    }),
};

// Catégories pour le filtre
const categories = ['Tous', 'Formations', 'Services Techniques', 'Digital'];

const ServicesGrid = () => {
    const [filter, setFilter] = useState('Tous');

    const filteredServices =
        filter === 'Tous'
            ? services
            : services.filter((service) => service.category === filter);

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
                rel="stylesheet"
            />
            <style>
                {`
          @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');

          :root {
            --omiie-pink: #3FD1CB;
            --omiie-light-pink: #C0CCFE;
            --omiie-white: #FFFFFF;
            --omiie-accent: #534EEB;
          }

          body {
            font-family: 'Inter', sans-serif;
          }

          .omiie-bg-gradient {
            background: linear-gradient(135deg, var(--omiie-light-pink), var(--omiie-white));
          }

          .omiie-btn {
            background: linear-gradient(to right, var(--omiie-pink), var(--omiie-accent));
            color: var(--omiie-white);
            transition: all 0.3s ease;
          }

          .omiie-btn:hover {
            background: linear-gradient(to right, var(--omiie-accent), var(--omiie-pink));
          }

          .omiie-filter-btn {
            background: var(--omiie-white);
            border: 2px solid var(--omiie-pink);
            color: var(--omiie-pink);
            transition: all 0.3s ease;
          }

          .omiie-filter-btn.active, .omiie-filter-btn:hover {
            background: var(--omiie-pink);
            color: var(--omiie-white);
          }

          a:focus {
            outline: 2px solid var(--omiie-pink);
            outline-offset: 4px;
          }

          .omiie-particle {
            position: absolute;
            border-radius: 50%;
            background: var(--omiie-pink);
            opacity: 0.3;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          .omiie-particle-1 { animation: float 6s ease-in-out infinite; }
          .omiie-particle-2 { animation: float 8s ease-in-out infinite 1s; }
          .omiie-particle-3 { animation: float 7s ease-in-out infinite 2s; }
        `}
            </style>

            <section
                className="omiie-bg-gradient relative overflow-hidden py-16"
                aria-label="Grille des services Omiie"
            >
                {/* Fond animé (vagues lumineuses multicouches) */}
                <div className="absolute inset-0">
                    <svg
                        className="h-full w-full opacity-25"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="var(--omiie-pink)"
                            fillOpacity="0.3"
                            d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        >
                            <animate
                                attributeName="d"
                                dur="8s"
                                repeatCount="indefinite"
                                values="
                  M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,197.3C672,181,768,171,864,181.3beek7C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            />
                        </path>
                    </svg>
                    <svg
                        className="h-full w-full opacity-15"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        style={{ position: 'absolute', top: '15%' }}
                    >
                        <path
                            fill="var(--omiie-accent)"
                            fillOpacity="0.2"
                            d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,197.3C672,181,768,171,864,181.3C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        >
                            <animate
                                attributeName="d"
                                dur="10s"
                                repeatCount="indefinite"
                                values="
                  M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,197.3C672,181,768,171,864,181.3C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,197.3C672,181,768,171,864,181.3C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            />
                        </path>
                    </svg>
                </div>

                {/* Particules animées */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="omiie-particle omiie-particle-1 top-1/5 left-1/4 h-3 w-3"></div>
                    <div className="omiie-particle omiie-particle-2 top-3/4 right-1/5 h-4 w-4"></div>
                    <div className="omiie-particle omiie-particle-3 bottom-1/4 left-1/3 h-2 w-2"></div>
                    <div className="omiie-particle omiie-particle-1 top-1/2 right-1/4 h-3 w-3"></div>
                    <div className="omiie-particle omiie-particle-2 bottom-1/5 left-2/5 h-2 w-2"></div>
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                    <motion.h2
                        className="mb-8 text-center text-3xl font-extrabold text-[var(--omiie-pink)] sm:text-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Découvrez Nos Services
                    </motion.h2>

                    {/* Filtres */}
                    <motion.div
                        className="mb-12 flex flex-wrap justify-center gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`omiie-filter-btn rounded-full px-6 py-2 text-sm font-semibold sm:text-base ${filter === category ? 'active' : ''}`}
                                onClick={() => setFilter(category)}
                                aria-label={`Filtrer par ${category}`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    {/* Grille des cartes */}
                    <motion.div
                        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                        }}
                    >
                        {filteredServices.length > 0 ? (
                            filteredServices.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col overflow-hidden rounded-2xl bg-[var(--omiie-white)] shadow-xl"
                                    custom={index}
                                    variants={cardVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            '0px 10px 25px rgba(255, 105, 180, 0.4)',
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="relative">
                                        <img
                                            src={service.image}
                                            alt={service.title || 'Service'}
                                            className="h-48 w-full object-cover sm:h-56"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-[var(--omiie-white)] opacity-70"></div>
                                    </div>
                                    <div className="flex flex-grow flex-col p-6">
                                        <div className="mb-4 flex justify-center">
                                            {service.icon}
                                        </div>
                                        <h3 className="mb-3 text-center text-xl font-semibold text-[var(--omiie-pink)]">
                                            {service.title ||
                                                'Titre non disponible'}
                                        </h3>
                                        <p className="mb-4 flex-grow text-center text-gray-600">
                                            {service.description}
                                        </p>
                                        <a
                                            href={
                                                service.title
                                                    ? `#${service.title.toLowerCase().replace(/\s+/g, '-')}`
                                                    : '#'
                                            }
                                            className="omiie-btn rounded-full px-4 py-2 text-center text-sm font-semibold sm:text-base"
                                            aria-label={`En savoir plus sur ${service.title || 'ce service'}`}
                                        >
                                            En savoir plus
                                        </a>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-600">
                                Aucun service disponible dans cette catégorie.
                            </p>
                        )}
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default ServicesGrid;
