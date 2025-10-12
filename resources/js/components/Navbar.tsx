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

const navVariants = {
 hidden: { opacity: 0, y: -20 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const dropdownVariants = {
 hidden: { opacity: 0, scale: 0.95, y: -10 },
 visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
 exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } },
};

const mobileMenuVariants = {
 hidden: { opacity: 0, x: '-100%', scale: 0.95 },
 visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.45, ease: 'easeInOut' } },
 exit: { opacity: 0, x: '-100%', scale: 0.95, transition: { duration: 0.35, ease: 'easeInOut' } },
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
   if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
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
  { name: 'Formateurs', icon: <FolderOpen size={18} />, href: '/formateurs' },
  { name: 'Tableau de bord', icon: <FolderOpen size={18} />, href: '/dashboard' },
  { name: 'Services', icon: <FolderOpen size={18} />, href: '/services' },
  { name: 'À propos', icon: <Info size={18} />, href: '/about' },
  { name: 'Contact', icon: <Phone size={18} />, href: '/contact' },
 ];

 const isAuthenticated = !!auth?.user;

 return (
  <>
   <motion.nav
    className={`omiie-nav fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${scrolled && 'bg-cyan-200 shadow-md' 
     }`}
    variants={navVariants}
    initial="hidden"
    animate="visible"
   >
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
     {/* Logo */}
     <Link href="/" className="flex items-center gap-2">
      <motion.img
       src="./assets/logo.png"
       alt="Omiie Logo"
       className="h-10 w-10"
       whileHover={{ scale: 1.1, rotate: 5 }}
      />
     </Link>

     {/* Desktop Links */}
     <div className="hidden items-center gap-8 lg:flex">
      {menuLinks.map((link) => (
       <motion.div key={link.name} whileHover={{ y: -2 }}>
        <Link
         href={link.href}
         className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-indigo-600 transition"
        >
         {link.icon}
         {link.name}
        </Link>
       </motion.div>
      ))}
     </div>

     {/* Right side */}
     <div className="flex items-center gap-4">
      {/* Dropdown Auth */}
      {isAuthenticated ? (
       <div className="relative" ref={dropdownRef}>
        <motion.button
         onClick={() => setDropdownOpen(!dropdownOpen)}
         className="flex items-center gap-2 focus:outline-none"
         whileHover={{ scale: 1.05 }}
        >
         <motion.img
          src={auth.user.avatar || avatar}
          alt="Avatar"
          className="h-10 w-10 rounded-full border-2 border-indigo-400 shadow-sm"
          whileHover={{ scale: 1.1 }}
         />
         <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }}>
          <ChevronDown size={20} className="text-gray-800" />
         </motion.div>
        </motion.button>

        <AnimatePresence>
         {dropdownOpen && (
          <motion.div
           variants={dropdownVariants}
           initial="hidden"
           animate="visible"
           exit="exit"
           className="absolute right-0 mt-3 w-56 rounded-xl bg-white shadow-xl border border-gray-100"
          >
           <div className="border-b border-gray-200 px-4 py-3">
            <p className="font-semibold text-gray-800">{auth.user.name}</p>
            <p className="text-sm text-gray-500">Bienvenue 👋</p>
           </div>
           <Link
            href="/settings/profile"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
           >
            <User size={18} /> Mon profil
           </Link>
           <Link
            href="/logout"
            method="post"
            as="button"
            className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50"
           >
            <LogOut size={18} /> Se déconnecter
           </Link>
          </motion.div>
         )}
        </AnimatePresence>
       </div>
      ) : (
       <Link
        href="/register"
        className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-4 py-2 text-sm font-semibold transition"
       >
        S’inscrire
       </Link>
      )}

      {/* Mobile Menu Button */}
      <motion.button
       className="bg-black focus:outline-none lg:hidden rounded-md p-2"
       onClick={() => setMobileMenuOpen(true)}
       whileTap={{ scale: 0.9 }}
      >
       <Menu size={24} className="text-white" />
      </motion.button>
     </div>
    </div>
   </motion.nav>

   {/* Mobile Menu */}
   <AnimatePresence>
    {mobileMenuOpen && (
     <>
      <motion.div
       className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       onClick={() => setMobileMenuOpen(false)}
      />

      <motion.div
       key="mobileMenu"
       variants={mobileMenuVariants}
       initial="hidden"
       animate="visible"
       exit="exit"
       className="fixed top-0 left-0 z-50 h-full w-3/4 sm:w-1/2 flex flex-col p-6 bg-gray-900 text-white shadow-2xl rounded-r-3xl"
      >
       <motion.button
        className="mb-6 self-end p-2 rounded-full bg-gray-800 hover:bg-gray-700"
        onClick={() => setMobileMenuOpen(false)}
        whileTap={{ scale: 0.9 }}
       >
        <X size={26} />
       </motion.button>

       {menuLinks.map((link, index) => (
        <motion.div
         key={link.name}
         initial={{ opacity: 0, x: -10 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ delay: 0.05 * index }}
        >
         <Link
          href={link.href}
          className="flex items-center gap-3 py-3 px-2 text-lg font-medium rounded hover:bg-gray-800 transition"
          onClick={() => setMobileMenuOpen(false)}
         >
          {link.icon} {link.name}
         </Link>
        </motion.div>
       ))}

       {isAuthenticated && (
        <>
         <hr className="my-5 border-white/20" />
         <Link
          href="/settings/profile"
          className="flex items-center gap-3 py-3 px-2 rounded hover:bg-gray-800 transition"
          onClick={() => setMobileMenuOpen(false)}
         >
          <User size={18} /> Mon profil
         </Link>
         <Link
          href="/logout"
          method="post"
          as="button"
          className="flex items-center gap-3 py-3 px-2 text-red-400 hover:text-red-500 rounded hover:bg-gray-800 transition"
          onClick={() => setMobileMenuOpen(false)}
         >
          <LogOut size={18} /> Se déconnecter
         </Link>
        </>
       )}
      </motion.div>
     </>
    )}
   </AnimatePresence>
  </>
 );
}
