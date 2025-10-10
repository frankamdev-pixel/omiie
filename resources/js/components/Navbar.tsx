import { Link, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ChevronDown,
    FolderOpen,
    Home,
    Info,
    LogOut,
    Phone,
    User,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import avatar from '../pages/avatar.png';

export default function Navbar() {
    const { auth } = usePage().props;
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        const handleClickOutside = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
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
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-500 ${
                scrolled
                    ? 'bg-white/40 shadow-md backdrop-blur-md'
                    : 'bg-[#C0CCFE]'
            } py-3 shadow-md`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                {/* Logo */}
                <Link
                    href="/"
                    className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
                        scrolled ? 'text-gray-800' : 'text-white'
                    }`}
                >
                    Omiie
                </Link>

                {/* Menu Desktop */}
                <div className="hidden space-x-8 md:flex">
                    {menuLinks.map((link) => (
                        <motion.div
                            key={link.name}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link
                                href={link.href}
                                className={`flex items-center gap-2 transition-colors duration-300 ${
                                    scrolled
                                        ? 'text-gray-800 hover:text-pink-600'
                                        : 'text-white hover:text-white/80'
                                }`}
                            >
                                {link.icon} {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Dropdown Utilisateur */}
                <div className="relative" ref={dropdownRef}>
                    {isAuthenticated ? (
                        <div className="flex flex-col items-center">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center gap-2 focus:outline-none"
                            >
                                <motion.img
                                    src={auth.user.avatar || avatar}
                                    alt="avatar"
                                    className="h-10 w-10 rounded-full border-2 border-white/70 shadow-md"
                                    whileHover={{ scale: 1.1, rotate: 3 }}
                                />
                                <motion.div
                                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown size={20} />
                                </motion.div>
                            </button>

                            {/* Doigt mobile */}
                            <div className="mt-1 block md:hidden">
                                <motion.div
                                    animate={{
                                        y: [0, -5, 0],
                                        opacity: [1, 0.5, 1],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.5,
                                    }}
                                    className="flex flex-col items-center text-white/70"
                                >
                                    <span className="text-2xl">☝️</span>
                                    Menu
                                </motion.div>
                            </div>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className={`rounded-lg px-4 py-2 shadow-md transition-colors duration-300 ${
                                scrolled
                                    ? 'bg-white text-gray-800 hover:bg-pink-100'
                                    : 'bg-white/20 text-white hover:bg-white/30'
                            }`}
                        >
                            Se connecter
                        </Link>
                    )}

                    <AnimatePresence>
                        {dropdownOpen && isAuthenticated && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-0 z-50 mt-3 w-56 rounded-lg border border-white/20 bg-white text-gray-800 shadow-xl"
                            >
                                <div className="border-b border-gray-200 px-4 py-3">
                                    <p className="font-semibold">
                                        {auth.user.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Bienvenue sur Omiie 😊
                                    </p>
                                </div>

                                {/* Menu mobile */}
                                <div className="block md:hidden">
                                    {menuLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="flex items-center gap-2 px-4 py-2 transition hover:bg-pink-50"
                                            onClick={() =>
                                                setDropdownOpen(false)
                                            }
                                        >
                                            {link.icon} {link.name}
                                        </Link>
                                    ))}
                                    <hr className="my-1" />
                                </div>

                                <Link
                                    href="/profile"
                                    className="flex items-center gap-2 px-4 py-2 transition hover:bg-pink-50"
                                >
                                    <User size={18} /> Mon profil
                                </Link>

                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="flex w-full items-center gap-2 px-4 py-2 text-left text-red-500 transition hover:bg-red-50"
                                >
                                    <LogOut size={18} /> Se déconnecter
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
}
