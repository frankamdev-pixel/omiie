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

const menuLabelVariants = {
 hidden: { opacity: 0, y: 10 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.4, loop: Infinity, yoyo: true } }
};

export default function Navbar() {
 const { auth } = usePage().props;
 const [dropdownOpen, setDropdownOpen] = useState(false);
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const dropdownRef = useRef(null);

 useEffect(() => {
  const handleClickOutside = (e) => {
   if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
    setDropdownOpen(false);
   }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
   document.removeEventListener('mousedown', handleClickOutside);
  };
 }, []);

 const menuLinks = [
  { name: 'Accueil', icon: Home, href: '/', color: 'text-white' },
  { name: 'Services', icon: Shield, href: '/services', color: 'text-white' },
  { name: 'À propos', icon: Info, href: '/about', color: 'text-white' },
  { name: 'Contact', icon: Phone, href: '/contact', color: 'text-white' },
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
   {/* NAVBAR */}
   <motion.nav
    className="fixed top-0 z-50 w-full bg-gradient-to-r from-blue-600/95 to-indigo-700/95 backdrop-blur-full shadow-lg border-b border-white/20"
    variants={navVariants}
    initial="hidden"
    animate="visible"
   >
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
     {/* LOGO */}
     <motion.div variants={itemVariants}>
      <Link
      prefetch
       href="/" className="flex items-center gap-3 group">
       <motion.div
        className="relative"
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.6 }}
       >
        <div className="w-12 h-12 bg-blue-500 rounded-2xl shadow-lg flex items-center justify-center">
         <img src="/assets/logo.png" className='h-10' alt="logo omiie" />
        </div>
        <motion.div
         className="absolute -inset-1 bg-gradient-to-r from-white to-blue-100 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"
         initial={{ scale: 0 }}
         whileHover={{ scale: 1 }}
        />
       </motion.div>
       <div>
        <h1 className="text-xl font-bold text-white lg:text-2xl">OMIIE</h1>
        <p className="text-xs text-blue-100">Votre IT Cameroun</p>
       </div>
      </Link>
     </motion.div>

     {/* LINKS DESKTOP */}
     <motion.div className="hidden lg:flex items-center gap-8" variants={itemVariants}>
      {menuLinks.map((link, i) => (
       <motion.div key={link.name} className="relative group" variants={itemVariants}>
        <Link
         prefetch
         href={link.href}
         className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 text-white/90 hover:text-white hover:bg-white/20"
        >
         <link.icon size={18} className={link.color} />
         {link.name}
        </Link>
       </motion.div>
      ))}
     </motion.div>

     {/* CTA + USER + MOBILE */}
     <motion.div className="flex items-center gap-2 lg:gap-6" variants={itemVariants}>
      {/* Bouton S'inscrire - VISIBLE SUR MOBILE + DESKTOP */}
      {!isAuthenticated && (
       <motion.div className="group">
        <Link
         href="/register"
         className="px-4 py-2 lg:px-6 lg:py-3 rounded-full font-bold text-xs lg:text-sm transition-all duration-300 bg-white text-blue-600 hover:bg-white/90 shadow-lg hover:shadow-xl"
         whileHover={{ scale: 1.05, y: -2 }}
        >
         S'inscrire
        </Link>
        <motion.div
         className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block"
         variants={menuLabelVariants}
         initial="hidden"
         animate="visible"
        >
         Cliquez ici !
        </motion.div>
       </motion.div>
      )}

      {/* User Dropdown - UNIQUEMENT DESKTOP */}
      {isAuthenticated && (
       <div className="relative hidden lg:block" ref={dropdownRef}>
        <motion.button
         onClick={() => setDropdownOpen(!dropdownOpen)}
         className="flex items-center gap-1 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition"
         whileHover={{ scale: 1.05 }}
        >
         <img
          src={auth.user.avatar || "https://ui-avatars.com/api/?name=" + auth.user.name}
          alt="Avatar"
          className="w-8 h-8 rounded-full border-2 border-white"
         />
         <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={16} className="text-white" />
         </motion.div>
        </motion.button>

        <AnimatePresence>
         {dropdownOpen && (
          <motion.div
           variants={dropdownVariants}
           initial="hidden"
           animate="visible"
           exit="exit"
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

      {/* MOBILE: Avatar simple OU Burger Menu */}
      <div className="flex items-center gap-2 lg:hidden">
       {isAuthenticated ? (
        <Link href="/dashboard" className="p-2 rounded-full bg-white/20">
         <img
          src={auth.user.avatar || "https://ui-avatars.com/api/?name=" + auth.user.name}
          alt="Avatar"
          className="w-8 h-8 rounded-full border-2 border-white"
         />
        </Link>
       ) : (
        <div className="relative">
         <motion.button
          className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30"
          onClick={() => setMobileMenuOpen(true)}
          whileTap={{ scale: 0.9 }}
         >
          <Menu size={20} />
         </motion.button>
         <motion.div
          className="absolute -top-6 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full opacity-0 hover:opacity-100 transition-opacity"
          variants={menuLabelVariants}
          initial="hidden"
          whileHover="visible"
         >
          Menu
         </motion.div>
        </div>
       )}
      </div>
     </motion.div>
    </div>
   </motion.nav>

   {/* MOBILE MENU - UNIQUEMENT NON-CONNECTÉ */}
   <AnimatePresence>
    {mobileMenuOpen && !isAuthenticated && (
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

        {/* Menu Links */}
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

        {/* Services */}
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
        <Link
         href="/register"
         className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-center block mb-6 hover:from-blue-700"
         onClick={() => setMobileMenuOpen(false)}
        >
         🚀 S'inscrire chez OMIIE
        </Link>
       </div>
      </motion.div>
     </>
    )}
   </AnimatePresence>
  </>
 );
}


// import { Link, usePage } from '@inertiajs/react';
// import { AnimatePresence, motion } from 'framer-motion';
// import {
//  ChevronDown, FolderOpen, Home, Info, LogOut, Menu, Phone, User, X,
//  Shield, Database, Smartphone, BarChart3, Clock, Globe, Star,
//  ArrowRight
// } from 'lucide-react';
// import { useEffect, useRef, useState } from 'react';

// const navVariants = {
//  hidden: { opacity: 0, y: -30 },
//  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
// };

// const itemVariants = {
//  hidden: { opacity: 0, y: -10 },
//  visible: { opacity: 1, y: 0 }
// };

// const dropdownVariants = {
//  hidden: { opacity: 0, scale: 0.95, y: -10 },
//  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
//  exit: { opacity: 0, scale: 0.95 }
// };

// const mobileMenuVariants = {
//  hidden: { opacity: 0, x: '-100%' },
//  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//  exit: { opacity: 0, x: '-100%' }
// };

// export default function Navbar() {
//  const { auth } = usePage().props;
//  const [dropdownOpen, setDropdownOpen] = useState(false);
//  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//  const dropdownRef = useRef(null);

//  useEffect(() => {
//   const handleClickOutside = (e) => {
//    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//     setDropdownOpen(false);
//    }
//   };
//   document.addEventListener('mousedown', handleClickOutside);
//   return () => {
//    document.removeEventListener('mousedown', handleClickOutside);
//   };
//  }, []);

//  const menuLinks = [
//   { name: 'Accueil', icon: Home, href: '/', color: 'text-white' },
//   { name: 'Services', icon: Shield, href: '/services', color: 'text-white' },
//   { name: 'À propos', icon: Info, href: '/about', color: 'text-white' },
//   { name: 'Contact', icon: Phone, href: '/contact', color: 'text-white' },
//  ];

//  const servicesDropdown = [
//   { name: 'Cybersécurité', icon: Shield, href: '/services/cyber' },
//   { name: 'Cloud Local', icon: Database, href: '/services/cloud' },
//   { name: 'Applications', icon: Smartphone, href: '/services/apps' },
//   { name: 'Analytics', icon: BarChart3, href: '/services/analytics' },
//   { name: 'Support 24/7', icon: Clock, href: '/services/support' },
//  ];

//  const isAuthenticated = !!auth?.user;

//  return (
//   <>
//    {/* NAVBAR - COULEUR FIXE ÉPIQUE */}
//    <motion.nav
//     className="fixed top-0 z-50 w-full bg-gradient-to-r from-blue-600/95 to-indigo-700/95 backdrop-blur-xl shadow-lg border-b border-white/20"
//     variants={navVariants}
//     initial="hidden"
//     animate="visible"
//    >
//     <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
//      {/* LOGO */}
//      <motion.div variants={itemVariants}>
//       <Link href="/" className="flex items-center gap-3 group">
//        <motion.div
//         className="relative"
//         whileHover={{ scale: 1.1, rotate: 360 }}
//         transition={{ duration: 0.6 }}
//        >
//         <div className="w-12 h-12 bg-white/90 rounded-2xl shadow-lg flex items-center justify-center">
//          <img src="/assets/logo.png" className='h-10' alt="logo omiie" />
//         </div>
//         <motion.div
//          className="absolute -inset-1 bg-gradient-to-r from-white to-blue-100 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"
//          initial={{ scale: 0 }}
//          whileHover={{ scale: 1 }}
//         />
//        </motion.div>
//        <div>
//         <h1 className="text-xl font-bold text-white lg:text-2xl">OMIIE</h1>
//         <p className="text-xs text-blue-100">Votre IT Cameroun</p>
//        </div>
//       </Link>
//      </motion.div>

//      {/* LINKS DESKTOP */}
//      <motion.div className="hidden lg:flex items-center gap-8" variants={itemVariants}>
//       {menuLinks.map((link, i) => (
//        <motion.div key={link.name} className="relative group" variants={itemVariants}>
//         <Link
//          href={link.href}
//          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 text-white/90 hover:text-white hover:bg-white/20"
//         >
//          <link.icon size={18} className={link.color} />
//          {link.name}
//         </Link>
//        </motion.div>
//       ))}
//      </motion.div>

//      {/* CTA + USER */}
//      <motion.div className="flex items-center gap-6" variants={itemVariants}>
//       {!isAuthenticated ? (
//        <motion.div className="hidden md:block">
//         <Link
//          href="/register"
//          className="px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 bg-white text-blue-600 hover:bg-white/90 shadow-lg hover:shadow-xl"
//          whileHover={{ scale: 1.05, y: -2 }}
//         >
//          S'inscrire
//         </Link>
//         <button>Menu</button>
//        </motion.div>
//       ) : (
//        <div className="relative" ref={dropdownRef}>
//         <motion.button
//          onClick={() => setDropdownOpen(!dropdownOpen)}
//          className="flex items-center gap-1 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition"
//          whileHover={{ scale: 1.05 }}
//         >
//          <img
//           src={auth.user.avatar || "https://ui-avatars.com/api/?name=" + auth.user.name}
//           alt="Avatar"
//           className="w-8 h-8 rounded-full border-2 border-white"
//          />
//          <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
//           <ChevronDown size={16} className="text-white" />
//          </motion.div>
//         </motion.button>

//         <AnimatePresence>
//          {dropdownOpen && (
//           <motion.div
//            variants={dropdownVariants}
//            initial="hidden"
//            animate="visible"
//            exit="exit"
//            className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
//           >
//            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
//             <div className="flex items-center gap-3">
//              <img
//               src={auth.user.avatar || "https://ui-avatars.com/api/?name=" + auth.user.name}
//               className="w-10 h-10 rounded-full"
//              />
//              <div>
//               <p className="font-bold text-gray-800">{auth.user.name}</p>
//               <p className="text-sm text-gray-500">Membre Premium</p>
//              </div>
//             </div>
//            </div>
//            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50">
//             <Home size={18} className="text-blue-600" /> Tableau de bord
//            </Link>
//            <Link href="/settings/profile" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50">
//             <User size={18} className="text-indigo-600" /> Profil
//            </Link>
//            <Link href="/logout" method="post" as="button" className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50">
//             <LogOut size={18} /> Déconnexion
//            </Link>
//           </motion.div>
//          )}
//         </AnimatePresence>
//        </div>
//       )}

//       {/* MOBILE MENU BUTTON */}
//       <motion.button
//        className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30"
//        onClick={() => setMobileMenuOpen(true)}
//        whileTap={{ scale: 0.9 }}
//       >
//        <Menu size={20} />
//       </motion.button>
//      </motion.div>
//     </div>
//    </motion.nav>

//    {/* MOBILE MENU */}
//    <AnimatePresence>
//     {mobileMenuOpen && (
//      <>
//       <motion.div
//        className="fixed inset-0 bg-black/50 lg:hidden z-40"
//        initial={{ opacity: 0 }}
//        animate={{ opacity: 1 }}
//        exit={{ opacity: 0 }}
//        onClick={() => setMobileMenuOpen(false)}
//       />
//       <motion.div
//        variants={mobileMenuVariants}
//        initial="hidden"
//        animate="visible"
//        exit="exit"
//        className="fixed top-0 left-0 z-50 h-full w-80 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl rounded-r-3xl overflow-y-auto"
//       >
//        <div className="p-6">
//         <motion.button
//          onClick={() => setMobileMenuOpen(false)}
//          className="mb-8 self-end p-2 rounded-full bg-white/10 hover:bg-white/20"
//          whileTap={{ scale: 0.9 }}
//         >
//          <X size={24} />
//         </motion.button>

//         {/* Menu Links */}
//         <div className="space-y-2 mb-8">
//          {menuLinks.map((link, i) => (
//           <motion.div key={link.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
//            <Link
//             href={link.href}
//             className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition"
//             onClick={() => setMobileMenuOpen(false)}
//            >
//             <link.icon size={20} className={`${link.color} w-5 h-5`} />
//             <span className="font-semibold">{link.name}</span>
//            </Link>
//           </motion.div>
//          ))}
//         </div>

//         {/* Services */}
//         <div className="mb-8">
//          <h3 className="font-bold text-blue-400 mb-4 flex items-center gap-2">
//           <FolderOpen size={20} /> Nos Services
//          </h3>
//          <div className="space-y-2">
//           {servicesDropdown.map((service, i) => (
//            <motion.div key={service.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
//             <Link
//              href={service.href}
//              className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition ml-2"
//              onClick={() => setMobileMenuOpen(false)}
//             >
//              <service.icon size={18} className="text-blue-400" />
//              <span>{service.name}</span>
//             </Link>
//            </motion.div>
//           ))}
//          </div>
//         </div>

//         {/* CTA/Auth Mobile */}
//         {!isAuthenticated ? (
//          <Link
//           href="/register"
//           className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-center block mb-6 hover:from-blue-700"
//           onClick={() => setMobileMenuOpen(false)}
//          >
//           🚀 S'inscrire <ArrowRight className="inline ml-2" />
//          </Link>
//         ) : (
//          <div className="space-y-2">
//           <Link href="/dashboard" className="flex items-center gap-4 p-4 rounded-2xl bg-white/10" onClick={() => setMobileMenuOpen(false)}>
//            <Star size={20} className="text-yellow-400" /> Tableau de bord
//           </Link>
//           <Link href="/logout" method="post" className="flex items-center gap-4 p-4 rounded-2xl text-red-400 bg-white/10" onClick={() => setMobileMenuOpen(false)}>
//            <LogOut size={20} /> Déconnexion
//           </Link>
//          </div>
//         )}
//        </div>
//       </motion.div>
//      </>
//     )}
//    </AnimatePresence>
//   </>
//  );
// }