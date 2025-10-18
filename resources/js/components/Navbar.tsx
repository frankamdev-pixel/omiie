// import { Link, usePage } from '@inertiajs/react';
// import { AnimatePresence, motion } from 'framer-motion';
// import {
//  ChevronDown,
//  FolderOpen,
//  Home,
//  Info,
//  LogOut,
//  Menu,
//  Phone,
//  User,
//  X,
// } from 'lucide-react';
// import { useEffect, useRef, useState } from 'react';
// import avatar from '../pages/avatar.png';

// const navVariants = {
//  hidden: { opacity: 0, y: -20 },
//  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
// };

// const dropdownVariants = {
//  hidden: { opacity: 0, scale: 0.95, y: -10 },
//  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
//  exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } },
// };

// const mobileMenuVariants = {
//  hidden: { opacity: 0, x: '-100%', scale: 0.95 },
//  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.45, ease: 'easeInOut' } },
//  exit: { opacity: 0, x: '-100%', scale: 0.95, transition: { duration: 0.35, ease: 'easeInOut' } },
// };

// export default function Navbar() {
//  const { auth } = usePage().props;
//  const [dropdownOpen, setDropdownOpen] = useState(false);
//  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//  const [scrolled, setScrolled] = useState(false);
//  const dropdownRef = useRef(null);

//  useEffect(() => {
//   const handleScroll = () => setScrolled(window.scrollY > 20);
//   const handleClickOutside = (e) => {
//    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//     setDropdownOpen(false);
//    }
//   };
//   window.addEventListener('scroll', handleScroll);
//   document.addEventListener('mousedown', handleClickOutside);
//   return () => {
//    window.removeEventListener('scroll', handleScroll);
//    document.removeEventListener('mousedown', handleClickOutside);
//   };
//  }, []);

//  const menuLinks = [
//   { name: 'Accueil', icon: <Home size={18} />, href: '/' },
//   { name: 'Formateurs', icon: <FolderOpen size={18} />, href: '/formateurs' },
//   { name: 'Tableau de bord', icon: <FolderOpen size={18} />, href: '/dashboard' },
//   { name: 'Services', icon: <FolderOpen size={18} />, href: '/services' },
//   { name: 'À propos', icon: <Info size={18} />, href: '/about' },
//   { name: 'Contact', icon: <Phone size={18} />, href: '/contact' },
//  ];

//  const isAuthenticated = !!auth?.user;

//  return (
//   <>
//    <motion.nav
//     className={`omiie-nav fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${scrolled && 'bg-cyan-200 shadow-md'
//      }`}
//     variants={navVariants}
//     initial="hidden"
//     animate="visible"
//    >
//     <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
//      {/* Logo */}
//      <Link
//       prefetch
//       href="/" className="flex items-center gap-2">
//       <motion.img
//        src="./assets/logo.png"
//        alt="Omiie Logo"
//        className="h-10 w-10"
//        whileHover={{ scale: 1.1, rotate: 5 }}
//       />
//      </Link>


//      {/* Desktop Links */}
//      <div className="hidden items-center gap-8 lg:flex">
//       {menuLinks.map((link) => (
//        <motion.div key={link.name} whileHover={{ y: -2 }}>
//         <Link
//          prefetch
//          href={link.href}
//          className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-indigo-600 transition"
//         >
//          {link.icon}
//          {link.name}
//         </Link>
//        </motion.div>
//       ))}
//      </div>

//      {/* Right side */}
//      <div className="flex items-center gap-4">
//       {/* Dropdown Auth */}
//       {isAuthenticated ? (
//        <div className="relative" ref={dropdownRef}>
//         <motion.button
//          onClick={() => setDropdownOpen(!dropdownOpen)}
//          className="flex items-center gap-2 focus:outline-none"
//          whileHover={{ scale: 1.05 }}
//         >
//          <motion.img
//           src={auth.user.avatar || avatar}
//           alt="Avatar"
//           className="h-10 w-10 rounded-full border-2 border-indigo-400 shadow-sm"
//           whileHover={{ scale: 1.1 }}
//          />
//          <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }}>
//           <ChevronDown size={20} className="text-gray-800" />
//          </motion.div>
//         </motion.button>

//         <AnimatePresence>
//          {dropdownOpen && (
//           <motion.div
//            variants={dropdownVariants}
//            initial="hidden"
//            animate="visible"
//            exit="exit"
//            className="absolute right-0 mt-3 w-56 rounded-xl bg-white shadow-xl border border-gray-100"
//           >
//            <div className="border-b border-gray-200 px-4 py-3">
//             <p className="font-semibold text-gray-800">{auth.user.name}</p>
//             <p className="text-sm text-gray-500">Bienvenue 👋</p>
//            </div>
//            <Link
//             prefetch
//             href="/settings/profile"
//             className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
//            >
//             <User size={18} /> Mon profil
//            </Link>
//            <Link
//             prefetch
//             href="/logout"
//             method="post"
//             as="button"
//             className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50"
//            >
//             <LogOut size={18} /> Se déconnecter
//            </Link>
//           </motion.div>
//          )}
//         </AnimatePresence>
//        </div>
//       ) : (
//        <Link
//         prefetch
//         href="/register"
//         className="bg-indigo-600 hover:bg-indigo-500 text-white rounded px-4 py-2 text-sm font-semibold transition"
//        >
//         S’inscrire
//        </Link>
//       )}

//       {/* Mobile Menu Button */}
//       <motion.button
//        className="bg-blue-500 focus:outline-none rounded lg:hidden p-2"
//        onClick={() => setMobileMenuOpen(true)}
//        whileTap={{ scale: 0.9 }}
//       >
//        <Menu size={24} className="text-white" />
//       </motion.button>
//      </div>
//     </div>
//    </motion.nav>

//    {/* Mobile Menu */}
//    <AnimatePresence>
//     {mobileMenuOpen && (
//      <>
//       <motion.div
//        className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
//        initial={{ opacity: 0 }}
//        animate={{ opacity: 1 }}
//        exit={{ opacity: 0 }}
//        onClick={() => setMobileMenuOpen(false)}
//       />

//       <motion.div
//        key="mobileMenu"
//        variants={mobileMenuVariants}
//        initial="hidden"
//        animate="visible"
//        exit="exit"
//        className="fixed top-0 left-0 z-50 h-full w-3/4 sm:w-1/2 flex flex-col p-6 bg-gray-900 text-white shadow-2xl rounded-r-3xl"
//       >
//        <motion.button
//         className="mb-6 self-end p-2 rounded-full bg-gray-800 hover:bg-gray-700"
//         onClick={() => setMobileMenuOpen(false)}
//         whileTap={{ scale: 0.9 }}
//        >
//         <X size={26} />
//        </motion.button>

//        {menuLinks.map((link, index) => (
//         <motion.div
//          key={link.name}
//          initial={{ opacity: 0, x: -10 }}
//          animate={{ opacity: 1, x: 0 }}
//          transition={{ delay: 0.05 * index }}
//         >
//          <Link
//           prefetch
//           href={link.href}
//           className="flex items-center gap-3 py-3 px-2 text-lg font-medium rounded hover:bg-gray-800 transition"
//           onClick={() => setMobileMenuOpen(false)}
//          >
//           {link.icon} {link.name}
//          </Link>
//         </motion.div>
//        ))}

//        {isAuthenticated && (
//         <>
//          <hr className="my-5 border-white/20" />
//          <Link
//           prefetch
//           href="/settings/profile"
//           className="flex items-center gap-3 py-3 px-2 rounded hover:bg-gray-800 transition"
//           onClick={() => setMobileMenuOpen(false)}
//          >
//           <User size={18} /> Mon profil
//          </Link>
//          <Link
//           prefetch
//           href="/logout"
//           method="post"
//           as="button"
//           className="flex items-center gap-3 py-3 px-2 text-red-400 hover:text-red-500 rounded hover:bg-gray-800 transition"
//           onClick={() => setMobileMenuOpen(false)}
//          >
//           <LogOut size={18} /> Se déconnecter
//          </Link>
//         </>
//        )}
//       </motion.div>
//      </>
//     )}
//    </AnimatePresence>
//   </>
//  );
// }



import { Link, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
 ChevronDown, FolderOpen, Home, Info, LogOut, Menu, Phone, User, X,
 Shield, Database, Smartphone, BarChart3, Clock, Globe, Star
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const navVariants = {
 hidden: { opacity: 0, y: -30 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
};

const itemVariants = {
 hidden: { opacity: 0, y: -10 },
 visible: { opacity: 1, y: 0 }
};

const dropdownVariants = {
 hidden: { opacity: 0, scale: 0.95, y: -10 },
 visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
 exit: { opacity: 0, scale: 0.95 }
};

const mobileMenuVariants = {
 hidden: { opacity: 0, x: '-100%' },
 visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
 exit: { opacity: 0, x: '-100%' }
};

export default function Navbar() {
 const { auth } = usePage().props;
 const [dropdownOpen, setDropdownOpen] = useState(false);
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const dropdownRef = useRef(null);

 useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 10);
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
  { name: 'Accueil', icon: Home, href: '/', color: 'text-blue-600' },
  { name: 'Services', icon: Shield, href: '/services', color: 'text-indigo-600' },
  { name: 'À propos', icon: Info, href: '/about', color: 'text-purple-600' },
  { name: 'Contact', icon: Phone, href: '/contact', color: 'text-green-600' },
 ];

 const servicesDropdown = [
  { name: 'Cybersécurité', icon: Shield, href: '/services/cyber' },
  { name: 'Cloud Local', icon: Database, href: '/services/cloud' },
  { name: 'Applications', icon: Smartphone, href: '/services/apps' },
  { name: 'Analytics', icon: BarChart3, href: '/services/analytics' },
  { name: 'Support 24/7', icon: Clock, href: '/services/support' },
 ];

 const isAuthenticated = !!auth?.user;

 return (
  <>
   {/* ✨ NAVBAR PRINCIPALE */}
   <motion.nav
    className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
      ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-blue-100'
      : 'bg-gradient-to-r from-blue-600/90 to-indigo-700/90 backdrop-blur-xl'
     }`}
    variants={navVariants}
    initial="hidden"
    animate="visible"
   >
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
     {/* 🔥 LOGO ANIMÉ */}
     <motion.div variants={itemVariants}>
      <Link href="/" className="flex items-center gap-3 group">
       <motion.div
        className="relative"
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.6 }}
       >
        <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center">
         <Globe className="w-8 h-8 text-blue-600" />
        </div>
        <motion.div
         className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"
         initial={{ scale: 0 }}
         whileHover={{ scale: 1 }}
        />
       </motion.div>
       <div>
        <h1 className="text-xl font-bold text-white lg:text-2xl">OMIIE</h1>
        <p className={`text-xs ${scrolled ? 'text-gray-600' : 'text-blue-100'}`}>Votre IT Cameroun</p>
       </div>
      </Link>
     </motion.div>

     {/* 💻 LINKS DESKTOP */}
     <motion.div className="hidden lg:flex items-center gap-1" variants={itemVariants}>
      {menuLinks.map((link, i) => (
       <motion.div key={link.name} className="relative group" variants={itemVariants}>
        <Link
         href={link.href}
         className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
          }`}
        >
         <link.icon size={18} className={link.color} />
         {link.name}
        </Link>
       </motion.div>
      ))}

      {/* 🛡️ DROPDOWN SERVICES */}
      <div className="relative" ref={dropdownRef}>
       <motion.button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${scrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white/90 hover:text-white'
         }`}
        whileHover={{ scale: 1.05 }}
       >
        <FolderOpen size={18} className="text-orange-500" />
        Services
        <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }}>
         <ChevronDown size={16} />
        </motion.div>
       </motion.button>

       <AnimatePresence>
        {dropdownOpen && (
         <motion.div
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-blue-100 overflow-hidden"
         >
          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
           <h3 className="font-bold text-indigo-900">Nos Solutions IT</h3>
          </div>
          <div className="py-2">
           {servicesDropdown.map((service) => (
            <Link
             key={service.name}
             href={service.href}
             className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition"
             onClick={() => setDropdownOpen(false)}
            >
             <service.icon size={18} className="text-blue-600" />
             <span className="font-medium text-gray-800">{service.name}</span>
            </Link>
           ))}
          </div>
         </motion.div>
        )}
       </AnimatePresence>
      </div>
     </motion.div>

     {/* 🎯 CTA + USER */}
     <motion.div className="flex items-center gap-4" variants={itemVariants}>
      {!isAuthenticated ? (
       <motion.div className="hidden md:block">
        <Link
         href="/register"
         className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${scrolled
           ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl'
           : 'bg-white text-blue-600 hover:bg-blue-50'
          }`}
         whileHover={{ scale: 1.05, y: -2 }}
        >
         S'inscrire
        </Link>
       </motion.div>
      ) : (
       <div className="relative">
        <motion.button
         onClick={() => setDropdownOpen(!dropdownOpen)}
         className="flex items-center gap-2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition"
         whileHover={{ scale: 1.05 }}
        >
         <img
          src={auth.user.avatar || "https://ui-avatars.com/api/?name=" + auth.user.name}
          alt="Avatar"
          className="w-8 h-8 rounded-full border-2 border-white"
         />
         <ChevronDown size={16} className="text-white" />
        </motion.button>

        <AnimatePresence>
         {dropdownOpen && (
          <motion.div
           variants={dropdownVariants}
           className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
           <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center gap-3">
             <img
              src={auth.user.avatar || "https://ui-avatars.com/api/?name=" + auth.user.name}
              className="w-10 h-10 rounded-full"
             />
             <div>
              <p className="font-bold text-gray-800">{auth.user.name}</p>
              <p className="text-sm text-gray-500">Membre Premium</p>
             </div>
            </div>
           </div>
           <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50">
            <Home size={18} className="text-blue-600" /> Dashboard
           </Link>
           <Link href="/settings/profile" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50">
            <User size={18} className="text-indigo-600" /> Profil
           </Link>
           <Link href="/logout" method="post" as="button" className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50">
            <LogOut size={18} /> Déconnexion
           </Link>
          </motion.div>
         )}
        </AnimatePresence>
       </div>
      )}

      {/* 📱 MOBILE MENU */}
      <motion.button
       className={`p-2 rounded-full ${scrolled ? 'bg-blue-600 text-white' : 'bg-white/20 text-white'}`}
       onClick={() => setMobileMenuOpen(true)}
       whileTap={{ scale: 0.9 }}
      >
       <Menu size={20} />
      </motion.button>
     </motion.div>
    </div>
   </motion.nav>

   {/* 📲 MOBILE MENU ÉPIQUE */}
   <AnimatePresence>
    {mobileMenuOpen && (
     <>
      <motion.div
       className="fixed inset-0 bg-black/50 lg:hidden z-40"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       onClick={() => setMobileMenuOpen(false)}
      />
      <motion.div
       variants={mobileMenuVariants}
       initial="hidden"
       animate="visible"
       exit="exit"
       className="fixed top-0 left-0 z-50 h-full w-80 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl rounded-r-3xl overflow-y-auto"
      >
       <div className="p-6">
        <motion.button
         onClick={() => setMobileMenuOpen(false)}
         className="mb-8 self-end p-2 rounded-full bg-white/10 hover:bg-white/20"
         whileTap={{ scale: 0.9 }}
        >
         <X size={24} />
        </motion.button>

        {/* Links */}
        <div className="space-y-2 mb-8">
         {menuLinks.map((link, i) => (
          <motion.div key={link.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
           <Link
            href={link.href}
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition"
            onClick={() => setMobileMenuOpen(false)}
           >
            <link.icon size={20} className={`${link.color} w-5 h-5`} />
            <span className="font-semibold">{link.name}</span>
           </Link>
          </motion.div>
         ))}
        </div>

        {/* Services Mobile */}
        <div className="mb-8">
         <h3 className="font-bold text-blue-400 mb-4 flex items-center gap-2">
          <FolderOpen size={20} /> Nos Services
         </h3>
         <div className="space-y-2">
          {servicesDropdown.map((service, i) => (
           <motion.div key={service.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
            <Link
             href={service.href}
             className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition ml-2"
             onClick={() => setMobileMenuOpen(false)}
            >
             <service.icon size={18} className="text-blue-400" />
             <span>{service.name}</span>
            </Link>
           </motion.div>
          ))}
         </div>
        </div>

        {/* CTA Mobile */}
        {!isAuthenticated ? (
         <Link
          href="/register"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-center block mb-6 hover:from-blue-700"
          onClick={() => setMobileMenuOpen(false)}
         >
          🚀 Rejoindre OMIIE
         </Link>
        ) : (
         <div className="space-y-2">
          <Link href="/dashboard" className="flex items-center gap-4 p-4 rounded-2xl bg-white/10" onClick={() => setMobileMenuOpen(false)}>
           <Star size={20} className="text-yellow-400" /> Dashboard
          </Link>
          <Link href="/logout" method="post" className="flex items-center gap-4 p-4 rounded-2xl text-red-400 bg-white/10" onClick={() => setMobileMenuOpen(false)}>
           <LogOut size={20} /> Déconnexion
          </Link>
         </div>
        )}
       </div>
      </motion.div>
     </>
    )}
   </AnimatePresence>
  </>
 );
}
