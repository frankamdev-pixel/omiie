import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import {
    FaBrain,
    FaBullhorn,
    FaChartBar,
    FaCloud,
    FaCode,
    FaGraduationCap,
    FaImage,
    FaMobileAlt,
    FaNetworkWired,
    FaPaintBrush,
    FaSearch,
    FaShieldAlt,
    FaShoppingCart,
    FaTools,
} from 'react-icons/fa';

// Données des services (ajout de placeholders pour images vides + détails enrichis)
const services = [
    {
        title: 'Développement Web',
        description:
            'Créez des sites modernes avec React, Next.js et Tailwind CSS. Apprenez les meilleures pratiques pour des apps performantes.',
        icon: <FaCode size={32} className="text-[var(--omiie-pink)]" />,
        image: './assets/laptop.png' || (
            <FaImage size={32} className="text-gray-400" />
        ), // Placeholder si vide
        category: 'Formations',
        details: 'Cours interactifs, projets réels, certification incluse.',
    },
    {
        title: 'Installation Réseau',
        description:
            'Configurez des réseaux sécurisés et performants avec Cisco et Ubiquiti.',
        icon: <FaNetworkWired size={32} className="text-[var(--omiie-pink)]" />,
        image: 'assets/business.jpg' || (
            <FaImage size={32} className="text-gray-400" />
        ),
        category: 'Services Techniques',
        details: 'Audit gratuit, installation sur site, maintenance 24/7.',
    },
    {
        title: 'Marketing Digital',
        description:
            'Boostez votre visibilité avec SEO, Google Ads et réseaux sociaux.',
        icon: <FaBullhorn size={32} className="text-[var(--omiie-pink)]" />,
        image: '' || <FaImage size={32} className="text-gray-400" />,
        category: 'Digital',
        details: 'Stratégies personnalisées, analytics avancés, ROI mesurable.',
    },
    {
        title: 'Cybersécurité',
        description:
            'Protégez vos systèmes contre les cyberattaques avec firewalls et audits.',
        icon: <FaShieldAlt size={32} className="text-[var(--omiie-pink)]" />,
        image: '' || <FaImage size={32} className="text-gray-400" />,
        category: 'Services Techniques',
        details: 'Tests de pénétration, formation équipe, conformité GDPR.',
    },
    {
        title: 'E-learning',
        description:
            'Créez des plateformes éducatives modernes avec Moodle ou custom LMS.',
        icon: (
            <FaGraduationCap size={32} className="text-[var(--omiie-pink)]" />
        ),
        image: '' || <FaImage size={32} className="text-gray-400" />,
        category: 'Formations',
        details: 'Contenu multimédia, quizzes interactifs, tracking progrès.',
    },
    {
        title: 'E-commerce',
        description:
            'Lancez des boutiques en ligne avec Shopify, WooCommerce ou custom.',
        icon: <FaShoppingCart size={32} className="text-[var(--omiie-pink)]" />,
        image: '' || <FaImage size={32} className="text-gray-400" />,
        category: 'Digital',
        details: 'Intégration paiements, SEO optimisé, mobile-first.',
    },
    {
        title: 'Design UI/UX',
        description:
            'Concevez des interfaces intuitives et esthétiques avec Figma et Adobe XD.',
        icon: <FaPaintBrush size={32} className="text-[var(--omiie-pink)]" />,
        image: 'assets/mobile.png' || (
            <FaImage size={32} className="text-gray-400" />
        ),
        category: 'Formations',
        details: 'Prototypage rapide, user testing, accessibilité WCAG.',
    },
    {
        title: 'Intelligence Artificielle',
        description:
            'Automatisez vos processus avec l’IA via TensorFlow et PyTorch.',
        icon: <FaBrain size={32} className="text-[var(--omiie-pink)]" />,
        image: './assets/ia.jpg' || (
            <FaImage size={32} className="text-gray-400" />
        ),
        category: 'Services Techniques',
        details: 'Modèles custom, intégration API, éthique AI.',
    },
    {
        title: 'Cloud Computing',
        description:
            'Solutions cloud pour performance et flexibilité avec AWS et Azure.',
        icon: <FaCloud size={32} className="text-[var(--omiie-pink)]" />,
        image: 'assets/cloud.jpg' || (
            <FaImage size={32} className="text-gray-400" />
        ),
        category: 'Services Techniques',
        details: 'Migration seamless, scalabilité auto, coûts optimisés.',
    },
    {
        title: 'Maintenance Informatique',
        description:
            'Support technique pour des systèmes fiables, on-site ou remote.',
        icon: <FaTools size={32} className="text-[var(--omiie-pink)]" />,
        image: 'assets/mobile.png' || (
            <FaImage size={32} className="text-gray-400" />
        ),
        category: 'Services Techniques',
        details: 'Contrats annuels, réponse rapide, backups automatisés.',
    },
    {
        title: 'Analyse de Données',
        description:
            'Prenez des décisions éclairées avec vos données via Power BI et Tableau.',
        icon: <FaChartBar size={32} className="text-[var(--omiie-pink)]" />,
        image: 'assets/mobile.png' || (
            <FaImage size={32} className="text-gray-400" />
        ),
        category: 'Digital',
        details: 'Dashboards interactifs, prédictions ML, data cleaning.',
    },
    {
        title: 'Développement Mobile',
        description:
            'Créez des apps pour iOS et Android avec React Native et Flutter.',
        icon: <FaMobileAlt size={32} className="text-[var(--omiie-pink)]" />,
        image: 'assets/mobile.png' || (
            <FaImage size={32} className="text-gray-400" />
        ),
        category: 'Formations',
        details: 'Cross-platform, performance native, publication stores.',
    },
];

// Variants animations intensifiées (ajout spring, rotate, stagger avancé)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
            when: 'beforeChildren',
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9, rotate: -5 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 15,
            duration: 0.8,
            delay: i * 0.1,
        },
    }),
    hover: {
        scale: 1.08,
        rotate: 2,
        boxShadow: '0px 15px 35px rgba(63, 209, 203, 0.5)',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
    tap: { scale: 0.95 },
};

const categories = ['Tous', 'Formations', 'Services Techniques', 'Digital'];

const ServicesGrid = () => {
    const [filter, setFilter] = useState('Tous');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false); // État loading pour UX

    // Memo pour filtrage optimisé (perf React rare source: React docs advanced hooks)
    const filteredServices = useMemo(() => {
        setIsLoading(true);
        const result = services
            .filter(
                (service) => filter === 'Tous' || service.category === filter,
            )
            .filter(
                (service) =>
                    service.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    service.description
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    service.details
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
            );
        setTimeout(() => setIsLoading(false), 300); // Simule loading pour animation fluide
        return result;
    }, [filter, searchTerm]);

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

                    body { font-family: 'Inter', sans-serif; }

                    .omiie-bg-gradient { background: linear-gradient(135deg, var(--omiie-light-pink), var(--omiie-white)); }

                    .omiie-btn {
                        background: linear-gradient(to right, var(--omiie-pink), var(--omiie-accent));
                        color: var(--omiie-white);
                        transition: all 0.3s ease;
                    }

                    .omiie-btn:hover { background: linear-gradient(to right, var(--omiie-accent), var(--omiie-pink)); }

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

                    .omiie-card {
                        border: 2px solid var(--omiie-pink);
                        border-radius: 1.5rem;
                        box-shadow: 0 4px 15px rgba(63, 209, 203, 0.2);
                        max-width: 320px;
                        margin: 0 auto;
                        overflow: hidden;
                        transition: transform 0.3s ease;
                    }

                    .omiie-search-input {
                        border: 2px solid var(--omiie-pink);
                        border-radius: 9999px;
                        padding: 0.5rem 1rem;
                        width: 100%;
                        max-width: 400px;
                        transition: all 0.3s ease;
                    }

                    .omiie-search-input:focus {
                        outline: none;
                        box-shadow: 0 0 0 3px rgba(63, 209, 203, 0.3);
                    }

                    .omiie-particle {
                        position: absolute;
                        border-radius: 50%;
                        background: var(--omiie-pink);
                        opacity: 0.3;
                    }

                    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }

                    .omiie-particle-1 { animation: float 6s ease-in-out infinite; }
                    .omiie-particle-2 { animation: float 8s ease-in-out infinite 1s; }
                    .omiie-particle-3 { animation: float 7s ease-in-out infinite 2s; }

                    /* Ajout tooltip pour détails */
                    .omiie-tooltip { position: relative; }
                    .omiie-tooltip:hover .omiie-tooltip-text {
                        visibility: visible;
                        opacity: 1;
                    }
                    .omiie-tooltip-text {
                        visibility: hidden;
                        width: 200px;
                        background-color: var(--omiie-accent);
                        color: #fff;
                        text-align: center;
                        border-radius: 6px;
                        padding: 5px;
                        position: absolute;
                        z-index: 1;
                        bottom: 125%;
                        left: 50%;
                        margin-left: -100px;
                        opacity: 0;
                        transition: opacity 0.3s;
                    }
                    .omiie-tooltip-text::after {
                        content: "";
                        position: absolute;
                        top: 100%;
                        left: 50%;
                        margin-left: -5px;
                        border-width: 5px;
                        border-style: solid;
                        border-color: var(--omiie-accent) transparent transparent transparent;
                    }
                `}
            </style>

            <section
                className="omiie-bg-gradient relative overflow-hidden py-16"
                aria-label="Grille des services Omiie"
            >
                {/* Fond animé multicouche intensifié (vagues + particules pro) */}
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
                                    M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,197.3C672,181,768,171,864,181.3C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                    M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                    M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
                                "
                            />
                        </path>
                    </svg>
                    <svg
                        className="absolute top-[20%] h-full w-full opacity-15"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
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
                                    M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,229.3C672,213,768,203,864,213.3C960,224,1056,256,1152,256C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                    M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,197.3C672,181,768,171,864,181.3C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
                                "
                            />
                        </path>
                    </svg>
                </div>

                {/* Particules animées pro (plus de particules, mouvements variés) */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="omiie-particle omiie-particle-1 top-1/5 left-1/4 h-3 w-3"></div>
                    <div className="omiie-particle omiie-particle-2 top-3/4 right-1/5 h-4 w-4"></div>
                    <div className="omiie-particle omiie-particle-3 bottom-1/4 left-1/3 h-2 w-2"></div>
                    <div className="omiie-particle omiie-particle-1 top-1/2 right-1/4 h-3 w-3"></div>
                    <div className="omiie-particle omiie-particle-2 bottom-1/5 left-2/5 h-2 w-2"></div>
                    <div
                        className="omiie-particle omiie-particle-3 top-2/3 left-3/4 h-3 w-3"
                        style={{ animationDelay: '3s' }}
                    ></div>
                    <div
                        className="omiie-particle omiie-particle-1 right-1/3 bottom-1/3 h-4 w-4"
                        style={{ animationDuration: '5s' }}
                    ></div>
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="mb-8 text-center text-3xl font-extrabold text-[var(--omiie-pink)] sm:text-4xl md:text-5xl"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            duration: 1,
                        }}
                    >
                        Découvrez Nos Services
                    </motion.h2>

                    {/* Recherche avec debounce implicite via memo */}
                    <motion.div
                        className="mb-6 flex justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative w-full max-w-md">
                            <input
                                type="text"
                                placeholder="Rechercher un service..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="omiie-search-input py-3 pr-4 pl-10 text-base shadow-md" // Amélioré
                                aria-label="Recherche services"
                            />
                            <FaSearch
                                className="absolute top-1/2 left-3 -translate-y-1/2 text-[var(--omiie-pink)]"
                                size={18}
                            />
                        </div>
                    </motion.div>

                    {/* Filtres avec animation hover */}
                    <motion.div
                        className="mb-12 flex flex-wrap justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                className={`omiie-filter-btn rounded-full px-6 py-2 text-sm font-semibold sm:text-base ${filter === category ? 'active' : ''}`}
                                onClick={() => setFilter(category)}
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: 'var(--omiie-pink)',
                                    color: 'var(--omiie-white)',
                                }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={`Filtrer par ${category}`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Grille avec AnimatePresence pour transitions fluides sur filtre/recherche */}
                    <AnimatePresence mode="wait">
                        {isLoading ? (
                            <motion.p
                                key="loading"
                                className="col-span-full text-center text-gray-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                Chargement...
                            </motion.p>
                        ) : filteredServices.length > 0 ? (
                            <motion.div
                                key="grid"
                                className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {filteredServices.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        className="omiie-card flex flex-col"
                                        custom={index}
                                        variants={cardVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                        layout // Pour animations layout fluides
                                    >
                                        <div className="relative h-40">
                                            {service.image ? (
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="h-full w-full object-cover"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center bg-gray-100">
                                                    <FaImage
                                                        size={48}
                                                        className="text-gray-400"
                                                    />
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--omiie-white)] opacity-70"></div>
                                        </div>
                                        <div className="flex flex-grow flex-col p-4">
                                            <motion.div
                                                className="mb-3 flex justify-center"
                                                whileHover={{
                                                    rotate: 360,
                                                    transition: {
                                                        duration: 0.5,
                                                    },
                                                }}
                                            >
                                                {service.icon}
                                            </motion.div>
                                            <h3 className="mb-2 text-center text-lg font-semibold text-[var(--omiie-pink)]">
                                                {service.title}
                                            </h3>
                                            <p className="mb-3 flex-grow text-center text-sm text-gray-600">
                                                {service.description}
                                            </p>
                                            <div className="omiie-tooltip mb-3">
                                                <p className="cursor-help text-center text-xs text-gray-500">
                                                    Détails supplémentaires
                                                </p>
                                                <span className="omiie-tooltip-text">
                                                    {service.details}
                                                </span>
                                            </div>
                                            <a
                                                href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="omiie-btn rounded-full px-3 py-1 text-center text-sm font-semibold"
                                                aria-label={`En savoir plus sur ${service.title}`}
                                            >
                                                En savoir plus
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.p
                                key="no-results"
                                className="col-span-full text-center text-gray-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                Aucun service trouvé.
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </>
    );
};

export default ServicesGrid;
