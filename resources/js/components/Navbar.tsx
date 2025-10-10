// import { Link, usePage } from '@inertiajs/react';
// import { AnimatePresence, motion } from 'framer-motion';
// import {
//     ChevronDown,
//     FolderOpen,
//     Home,
//     Info,
//     LogOut,
//     Phone,
//     User,
// } from 'lucide-react';
// import { useEffect, useRef, useState } from 'react';
// import avatar from '../pages/avatar.png';

// export default function Navbar() {
//     const { auth } = usePage().props;
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const dropdownRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 20);
//         const handleClickOutside = (e: MouseEvent) => {
//             if (
//                 dropdownRef.current &&
//                 !dropdownRef.current.contains(e.target as Node)
//             ) {
//                 setDropdownOpen(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         document.addEventListener('click', handleClickOutside);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//             document.removeEventListener('click', handleClickOutside);
//         };
//     }, []);

//     const menuLinks = [
//         { name: 'Accueil', icon: <Home size={18} />, href: '/' },
//         {
//             name: 'Formateurs',
//             icon: <FolderOpen size={18} />,
//             href: '/formateurs',
//         },
//         { name: 'Services', icon: <FolderOpen size={18} />, href: '/services' },
//         { name: 'À propos', icon: <Info size={18} />, href: '/about' },
//         { name: 'Contact', icon: <Phone size={18} />, href: '/contact' },
//     ];

//     const isAuthenticated = !!auth?.user;

//     return (
//         <nav
//             className={`fixed top-0 z-50 w-full transition-all duration-500 ${
//                 scrolled
//                     ? 'bg-white/40 shadow-md backdrop-blur-md'
//                     : 'bg-[#C0CCFE]'
//             } py-3 shadow-md`}
//         >
//             <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
//                 {/* Logo */}
//                 <Link
//                     href="/"
//                     className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
//                         scrolled ? 'text-gray-800' : 'text-white'
//                     }`}
//                 >
//                     Omiie
//                 </Link>

//                 {/* Menu Desktop */}
//                 <div className="hidden space-x-8 md:flex">
//                     {menuLinks.map((link) => (
//                         <motion.div
//                             key={link.name}
//                             whileHover={{ scale: 1.05, y: -2 }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             <Link
//                                 href={link.href}
//                                 className={`flex items-center gap-2 transition-colors duration-300 ${
//                                     scrolled
//                                         ? 'text-gray-800 hover:text-pink-600'
//                                         : 'text-white hover:text-white/80'
//                                 }`}
//                             >
//                                 {link.icon} {link.name}
//                             </Link>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Dropdown Utilisateur */}
//                 <div className="relative" ref={dropdownRef}>
//                     {isAuthenticated ? (
//                         <div className="flex flex-col items-center">
//                             <button
//                                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                                 className="flex items-center gap-2 focus:outline-none"
//                             >
//                                 <motion.img
//                                     src={auth.user.avatar || avatar}
//                                     alt="avatar"
//                                     className="h-10 w-10 rounded-full border-2 border-white/70 shadow-md"
//                                     whileHover={{ scale: 1.1, rotate: 3 }}
//                                 />
//                                 <motion.div
//                                     animate={{ rotate: dropdownOpen ? 180 : 0 }}
//                                     transition={{ duration: 0.3 }}
//                                 >
//                                     <ChevronDown size={20} />
//                                 </motion.div>
//                             </button>

//                             {/* Doigt mobile */}
//                             <div className="mt-1 block md:hidden">
//                                 <motion.div
//                                     animate={{
//                                         y: [0, -5, 0],
//                                         opacity: [1, 0.5, 1],
//                                     }}
//                                     transition={{
//                                         repeat: Infinity,
//                                         duration: 1.5,
//                                     }}
//                                     className="flex flex-col items-center text-white/70"
//                                 >
//                                     <span className="text-2xl">☝️</span>
//                                     Menu
//                                 </motion.div>
//                             </div>
//                         </div>
//                     ) : (
//                         <Link
//                             href="/login"
//                             className={`rounded-lg px-4 py-2 shadow-md transition-colors duration-300 ${
//                                 scrolled
//                                     ? 'bg-white text-gray-800 hover:bg-pink-100'
//                                     : 'bg-white/20 text-white hover:bg-white/30'
//                             }`}
//                         >
//                             Se connecter
//                         </Link>
//                     )}

//                     <AnimatePresence>
//                         {dropdownOpen && isAuthenticated && (
//                             <motion.div
//                                 initial={{ opacity: 0, y: -10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -10 }}
//                                 transition={{ duration: 0.2 }}
//                                 className="absolute right-0 z-50 mt-3 w-56 rounded-lg border border-white/20 bg-white text-gray-800 shadow-xl"
//                             >
//                                 <div className="border-b border-gray-200 px-4 py-3">
//                                     <p className="font-semibold">
//                                         {auth.user.name}
//                                     </p>
//                                     <p className="text-sm text-gray-500">
//                                         Bienvenue sur Omiie 😊
//                                     </p>
//                                 </div>

//                                 {/* Menu mobile */}
//                                 <div className="block md:hidden">
//                                     {menuLinks.map((link) => (
//                                         <Link
//                                             key={link.name}
//                                             href={link.href}
//                                             className="flex items-center gap-2 px-4 py-2 transition hover:bg-pink-50"
//                                             onClick={() =>
//                                                 setDropdownOpen(false)
//                                             }
//                                         >
//                                             {link.icon} {link.name}
//                                         </Link>
//                                     ))}
//                                     <hr className="my-1" />
//                                 </div>

//                                 <Link
//                                     href="/profile"
//                                     className="flex items-center gap-2 px-4 py-2 transition hover:bg-pink-50"
//                                 >
//                                     <User size={18} /> Mon profil
//                                 </Link>

//                                 <Link
//                                     href="/logout"
//                                     method="post"
//                                     as="button"
//                                     className="flex w-full items-center gap-2 px-4 py-2 text-left text-red-500 transition hover:bg-red-50"
//                                 >
//                                     <LogOut size={18} /> Se déconnecter
//                                 </Link>
//                             </motion.div>
//                         )}
//                     </AnimatePresence>
//                 </div>
//             </div>
//         </nav>
//     );
// }

import { Link, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ChevronDown,
    FolderOpen,
    Home,
    Info,
    LogOut,
    Menu,
    Phone,
    User,
    X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import avatar from '../pages/avatar.png';

// Variants pour animations fluides
const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
};

const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: 'easeInOut' },
    },
};

export default function Navbar() {
    const { auth } = usePage().props;
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setDropdownOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menuLinks = [
        { name: 'Accueil', icon: <Home size={18} />, href: '/' },
        {
            name: 'Formateurs',
            icon: <FolderOpen size={18} />,
            href: '/formateurs',
        },
        { name: 'Services', icon: <FolderOpen size={18} />, href: '/services' },
        { name: 'À propos', icon: <Info size={18} />, href: '/about' },
        { name: 'Contact', icon: <Phone size={18} />, href: '/contact' },
    ];

    const isAuthenticated = !!auth?.user;

    return (
        <>
            <style>
                {`
                    @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
                    :root {
                        --omiie-pink: #3FD1CB;
                        --omiie-accent: #534EEB;
                        --omiie-white: #FFFFFF;
                        --omiie-light-pink: #C0CCFE;
                    }

                    .omiie-nav {
                        background: linear-gradient(135deg, var(--omiie-light-pink), var(--omiie-white));
                        transition: all 0.5s ease;
                    }

                    .omiie-nav.scrolled {
                        background: rgba(255, 255, 255, 0.95);
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                        backdrop-filter: blur(10px);
                    }

                    .omiie-btn {
                        background: linear-gradient(to right, var(--omiie-pink), var(--omiie-accent));
                        color: var(--omiie-white);
                        transition: all 0.3s ease;
                    }

                    .omiie-btn:hover {
                        background: linear-gradient(to right, var(--omiie-accent), var(--omiie-pink));
                    }

                    .omiie-nav-link {
                        position: relative;
                        padding-bottom: 4px;
                    }

                    .omiie-nav-link::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 0;
                        height: 2px;
                        background: var(--omiie-pink);
                        transition: width 0.3s ease;
                    }

                    .omiie-nav-link:hover::after {
                        width: 100%;
                    }

                    .omiie-dropdown {
                        border-radius: 12px;
                        box-shadow: 0 8px 25px rgba(63, 209, 203, 0.3);
                    }

                    .omiie-mobile-menu {
                        background: var(--omiie-white);
                        box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
                    }
                `}
            </style>

            <motion.nav
                className={`omiie-nav fixed top-0 z-50 w-full ${scrolled ? 'scrolled' : ''}`}
                variants={navVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <motion.img
                            src="/logo.png" // Remplace par ton logo
                            alt="Omiie Logo"
                            className="h-10 w-10"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        />
                        <span
                            className={`text-2xl font-extrabold tracking-tight ${scrolled ? 'text-gray-900' : 'text-[var(--omiie-pink)]'}`}
                        >
                            Omiie
                        </span>
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden items-center gap-8 lg:flex">
                        {menuLinks.map((link) => (
                            <motion.div
                                key={link.name}
                                whileHover={{ y: -3 }}
                                transition={{ type: 'spring', stiffness: 400 }}
                            >
                                <Link
                                    href={link.href}
                                    className={`omiie-nav-link flex items-center gap-2 text-sm font-semibold ${scrolled ? 'text-gray-800 hover:text-[var(--omiie-pink)]' : 'text-gray-900 hover:text-[var(--omiie-pink)]'}`}
                                >
                                    {link.icon}
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Actions (Auth + Mobile Toggle) */}
                    <div className="flex items-center gap-4">
                        {isAuthenticated ? (
                            <div className="relative" ref={dropdownRef}>
                                <motion.button
                                    onClick={() =>
                                        setDropdownOpen(!dropdownOpen)
                                    }
                                    className="flex items-center gap-2 focus:outline-none"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.img
                                        src={auth.user.avatar || avatar}
                                        alt="Avatar"
                                        className="h-10 w-10 rounded-full border-2 border-[var(--omiie-pink)] shadow-sm"
                                        whileHover={{ scale: 1.1 }}
                                    />
                                    <motion.div
                                        animate={{
                                            rotate: dropdownOpen ? 180 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown
                                            size={20}
                                            className={
                                                scrolled
                                                    ? 'text-gray-800'
                                                    : 'text-gray-900'
                                            }
                                        />
                                    </motion.div>
                                </motion.button>

                                <AnimatePresence>
                                    {dropdownOpen && (
                                        <motion.div
                                            variants={dropdownVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            className="omiie-dropdown absolute right-0 mt-2 w-56 bg-white text-gray-800"
                                        >
                                            <div className="border-b border-gray-200 px-4 py-3">
                                                <p className="font-semibold">
                                                    {auth.user.name}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Bienvenue sur Omiie 😊
                                                </p>
                                            </div>
                                            <Link
                                                href="/profile"
                                                className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--omiie-light-pink)]"
                                                onClick={() =>
                                                    setDropdownOpen(false)
                                                }
                                            >
                                                <User size={18} /> Mon profil
                                            </Link>
                                            <Link
                                                href="/logout"
                                                method="post"
                                                as="button"
                                                className="flex w-full items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50"
                                                onClick={() =>
                                                    setDropdownOpen(false)
                                                }
                                            >
                                                <LogOut size={18} /> Se
                                                déconnecter
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className="omiie-btn rounded-full px-4 py-2 text-sm font-semibold"
                            >
                                Se connecter
                            </Link>
                        )}

                        {/* Toggle Menu Mobile */}
                        <motion.button
                            className="focus:outline-none lg:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            whileTap={{ scale: 0.9 }}
                        >
                            {mobileMenuOpen ? (
                                <X
                                    size={24}
                                    className={
                                        scrolled
                                            ? 'text-gray-800'
                                            : 'text-gray-900'
                                    }
                                />
                            ) : (
                                <Menu
                                    size={24}
                                    className={
                                        scrolled
                                            ? 'text-gray-800'
                                            : 'text-gray-900'
                                    }
                                />
                            )}
                        </motion.button>
                    </div>
                </div>

                {/* Menu Mobile */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="omiie-mobile-menu fixed top-0 right-0 h-full w-3/4 bg-white sm:w-1/2 lg:hidden"
                        >
                            <div className="flex flex-col p-6">
                                <motion.button
                                    className="mb-4 self-end"
                                    onClick={() => setMobileMenuOpen(false)}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X size={24} className="text-gray-800" />
                                </motion.button>
                                {menuLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="flex items-center gap-3 py-3 text-lg font-semibold text-gray-800 hover:text-[var(--omiie-pink)]"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.icon}
                                        {link.name}
                                    </Link>
                                ))}
                                {isAuthenticated && (
                                    <>
                                        <hr className="my-4" />
                                        <Link
                                            href="/profile"
                                            className="flex items-center gap-3 py-3 text-lg font-semibold text-gray-800 hover:text-[var(--omiie-pink)]"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            <User size={18} /> Mon profil
                                        </Link>
                                        <Link
                                            href="/logout"
                                            method="post"
                                            as="button"
                                            className="flex items-center gap-3 py-3 text-lg font-semibold text-red-500 hover:text-red-600"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            <LogOut size={18} /> Se déconnecter
                                        </Link>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}
