
// import { Link, usePage } from '@inertiajs/react';
// import { AnimatePresence, motion } from 'framer-motion';
// import {
//   ChevronDown,
//   FolderOpen,
//   Home,
//   Info,
//   LogOut,
//   Menu,
//   Phone,
//   User,
//   X,
// } from 'lucide-react';
// import { useEffect, useRef, useState } from 'react';
// import avatar from '../pages/avatar.png';

// const navVariants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: 'easeOut' },
//   },
// };

// const dropdownVariants = {
//   hidden: { opacity: 0, scale: 0.95, y: -10 },
//   visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
// };

// const mobileMenuVariants = {
//   hidden: { opacity: 0, x: '100%' },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.4, ease: 'easeInOut' },
//   },
// };

// export default function Navbar() {
//   const { auth } = usePage().props;
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     const handleClickOutside = (e) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target)
//       ) {
//         setDropdownOpen(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const menuLinks = [
//     { name: 'Accueil', icon: <Home size={18} />, href: '/' },
//     {
//       name: 'Formateurs',
//       icon: <FolderOpen size={18} />,
//       href: '/formateurs',
//     },
//     {
//       name: 'Tableau de bord',
//       icon: <FolderOpen size={18} />,
//       href: '/dashboard',
//     },
//     { 
//        name: 'Services',
//        icon: <FolderOpen size={18} />, 
//        href: '/services'
//        },
//     { 
//       name: 'À propos',
//        icon: <Info size={18} />,
//         href: '/about' },
//     { 
//       name: 'Contact',
//        icon: <Phone size={18} />,
//         href: '/contact'
//        },
//   ];

//   const isAuthenticated = !!auth?.user;

//   return (
//     <>
//       <style>
//         {`
//                     @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
//                     :root {
//                         --omiie-pink: #3FD1CB;
//                         --omiie-accent: #534EEB;
//                         --omiie-white: #FFFFFF;
//                         --omiie-light-pink: #C0CCFE;
//                     }

//                     .omiie-nav {
//                         background: linear-gradient(135deg, var(--omiie-light-pink), var(--omiie-white));
//                         transition: all 0.5s ease;
//                     }

//                     .omiie-nav.scrolled {
//                         background: rgba(255, 255, 255, 0.95);
//                         box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                       
//                     }

//                     .omiie-btn {
//                         background: linear-gradient(to right, var(--omiie-pink), var(--omiie-accent));
//                         color: var(--omiie-white);
//                         transition: all 0.3s ease;
//                     }

//                     .omiie-btn:hover {
//                         background: linear-gradient(to right, var(--omiie-accent), var(--omiie-pink));
//                     }

//                     .omiie-nav-link {
//                         position: relative;
//                         padding-bottom: 4px;
//                     }

//                     .omiie-nav-link::after {
//                         content: '';
//                         position: absolute;
//                         bottom: 0;
//                         left: 0;
//                         width: 0;
//                         height: 2px;
//                         background: var(--omiie-pink);
//                         transition: width 0.3s ease;
//                     }

//                     .omiie-nav-link:hover::after {
//                         width: 100%;
//                     }

//                     .omiie-dropdown {
//                         border-radius: 12px;
//                         box-shadow: 0 8px 25px rgba(63, 209, 203, 0.3);
//                     }

//                     .omiie-mobile-menu {
//                         background: var(--omiie-white);
//                         box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
//                     }
//                 `}
//       </style>

//       <motion.nav
//         className={`omiie-nav fixed top-0 z-50 w-full ${scrolled ? 'scrolled' : ''} bg-white`}
//         variants={navVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
//           {/* Logo */}
//           <Link
//           prefetch
//           href="/" className="flex items-center gap-2">
//             <motion.img
//               src="./assets/logo.png" // Remplace par ton logo
//               alt="Omiie Logo"
//               className="h-10 w-10"
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               transition={{ type: 'spring', stiffness: 300 }}
//             />
//             {/* <span
//                             className={`text-2xl font-extrabold tracking-tight ${scrolled ? 'text-gray-900' : 'text-[var(--omiie-pink)]'}`}
//                         >
//                             Omiie
//                         </span> */}
//           </Link>

//           {/* Menu Desktop */}
//           <div className="hidden items-center gap-8 lg:flex">
//             {menuLinks.map((link) => (
//               <motion.div
//                 key={link.name}
//                 whileHover={{ y: -3 }}
//                 transition={{ type: 'spring', stiffness: 400 }}
//               >
//                 <Link
//                 prefetch
//                   href={link.href}
//                   className={`omiie-nav-link flex items-center gap-2 text-sm font-semibold ${scrolled ? 'text-gray-800 hover:text-[var(--omiie-pink)]' : 'text-gray-900 hover:text-[var(--omiie-pink)]'}`}
//                 >
//                   {link.icon}
//                   {link.name}
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//           {/* Actions (Auth + Mobile Toggle) */}
//           <div className="flex items-center gap-4">
//             {isAuthenticated ? (
//               <div className="relative" ref={dropdownRef}>
//                 <motion.button
//                   onClick={() =>
//                     setDropdownOpen(!dropdownOpen)
//                   }
//                   className="flex items-center gap-2 focus:outline-none"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <motion.img
//                     src={auth.user.avatar || avatar}
//                     alt="Avatar"
//                     className="h-10 w-10 rounded-full border-2 border-[var(--omiie-pink)] shadow-sm"
//                     whileHover={{ scale: 1.1 }}
//                   />
//                   <motion.div
//                     animate={{
//                       rotate: dropdownOpen ? 180 : 0,
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <ChevronDown
//                       size={20}
//                       className={
//                         scrolled
//                           ? 'text-gray-800'
//                           : 'text-gray-900'
//                       }
//                     />
//                   </motion.div>
//                 </motion.button>

//                 <AnimatePresence>
//                   {dropdownOpen && (
//                     <motion.div
//                       variants={dropdownVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="hidden"
//                       className="omiie-dropdown absolute right-0 mt-2 w-56 bg-[#fff]
//        text-gray-800"
//                     >
//                       <div className="border-b border-gray-200 px-4 py-3">
//                         <p className="font-semibold">
//                           {auth.user.name}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           Bienvenue sur Omiie 😊
//                         </p>
//                       </div>
//                       <Link
//                       prefetch
//                         href="/settings/profile"
//                         className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--omiie-light-pink)]"
//                         onClick={() =>
//                           setDropdownOpen(false)
//                         }
//                       >
//                         <User size={18} /> Mon profil
//                       </Link>
//                       <Link
//                       prefetch
//                         href="/logout"
//                         method="post"
//                         as="button"
//                         className="flex w-full items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50"
//                         onClick={() =>
//                           setDropdownOpen(false)
//                         }
//                       >
//                         <LogOut size={18} /> Se
//                         déconnecter
//                       </Link>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ) : (
//               <Link
//                 href="/register"
//                 className="omiie-btn rounded-full px-4 py-2 text-sm font-semibold"
//               >
//                 S'inscrire
//               </Link>
//             )}

//             {/* Toggle Menu Mobile */}
//             <motion.button
//               className="bg-[#534EEB] focus:outline-none lg:hidden"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               whileTap={{ scale: 0.9 }}
//             >
//               {mobileMenuOpen ? (
//                 <X
//                   size={24}
//                   className={
//                     scrolled
//                       ? 'text-gray-800'
//                       : 'text-gray-900'
//                   }
//                 />
//               ) : (
//                 <Menu
//                   size={24}
//                   className={
//                     scrolled
//                       ? 'text-gray-800'
//                       : 'text-gray-900'
//                   }
//                 />
//               )}
//             </motion.button>
//           </div>
//         </div>

//         {/* Menu Mobile */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               variants={mobileMenuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               className="omiie-mobile-menu fixed top-0 left-0 h-full w-3/4 bg-[#534EEB] sm:w-1/2 lg:hidden"
//             >
//               <div className="flex flex-col p-6">
//                 <motion.button
//                   className="mb-4 self-end"
//                   onClick={() => setMobileMenuOpen(false)}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <X size={24} className="text-gray-800" />
//                 </motion.button>
//                 {menuLinks.map((link) => (
//                   <Link
//                   prefetch
//                     key={link.name}
//                     href={link.href}
//                     className="flex items-center gap-3 py-3 text-lg font-semibold text-gray-800 hover:text-[var(--omiie-pink)]"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {link.icon}
//                     {link.name}
//                   </Link>
//                 ))}
//                 {isAuthenticated && (
//                   <>
//                     <hr className="my-4 text-bold" />
//                     <Link
//                     prefetch
//                       href="/settings/profile"
//                       className="flex items-center gap-3 py-3 text-lg font-semibold text-gray-800 hover:text-[var(--omiie-pink)]"
//                       onClick={() =>
//                         setMobileMenuOpen(false)
//                       }
//                     >
//                       <User size={18} /> Mon profil
//                     </Link>
//                     <Link
//                     prefetch
//                       href="/dashboard"
//                       className="flex items-center gap-3 py-3 text-lg font-semibold text-gray-800 hover:text-[var(--omiie-pink)]"
//                       onClick={() =>
//                         setMobileMenuOpen(false)
//                       }
//                     >
//                       <User size={18} /> Tableau de bord
//                     </Link>
//                     <Link
//                     prefetch
//                       href="/logout"
//                       method="post"
//                       as="button"
//                       className="flex items-center gap-3 py-3 text-lg font-semibold text-red-500 hover:text-red-600"
//                       onClick={() =>
//                         setMobileMenuOpen(false)
//                       }
//                     >
//                       <LogOut size={18} /> Se déconnecter
//                     </Link>
//                   </>
//                 )}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>
//     </>
//   );
// }








// import { Link, usePage } from '@inertiajs/react';
// import { AnimatePresence, motion } from 'framer-motion';
// import {
//   ChevronDown,
//   FolderOpen,
//   Home,
//   Info,
//   LogOut,
//   Menu,
//   Phone,
//   User,
//   X,
// } from 'lucide-react';
// import { useEffect, useRef, useState } from 'react';
// import avatar from '../pages/avatar.png';

// const navVariants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: 'easeOut' },
//   },
// };

// const dropdownVariants = {
//   hidden: { opacity: 0, scale: 0.95, y: -10 },
//   visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
// };

// // ✅ Nouveau style d’ouverture du menu mobile
// const mobileMenuVariants = {
//   hidden: { opacity: 0, x: '-100%', scale: 0.98 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: { duration: 0.45, ease: 'easeInOut' },
//   },
//   exit: {
//     opacity: 0,
//     x: '-100%',
//     scale: 0.98,
//     transition: { duration: 0.35, ease: 'easeInOut' },
//   },
// };

// export default function Navbar() {
//   const { auth } = usePage().props;
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const menuLinks = [
//     { name: 'Accueil', icon: <Home size={18} />, href: '/' },
//     { name: 'Formateurs', icon: <FolderOpen size={18} />, href: '/formateurs' },
//     { name: 'Tableau de bord', icon: <FolderOpen size={18} />, href: '/dashboard' },
//     { name: 'Services', icon: <FolderOpen size={18} />, href: '/services' },
//     { name: 'À propos', icon: <Info size={18} />, href: '/about' },
//     { name: 'Contact', icon: <Phone size={18} />, href: '/contact' },
//   ];

//   const isAuthenticated = !!auth?.user;

//   return (
//     <>
//       <style>
//         {`
//           :root {
//             --omiie-pink: #3FD1CB;
//             --omiie-accent: #534EEB;
//             --omiie-white: #FFFFFF;
//             --omiie-light-pink: #C0CCFE;
//           }
//           .omiie-nav {
//             background: linear-gradient(135deg, var(--omiie-light-pink), var(--omiie-white));
//             transition: all 0.5s ease;
//           }
//           .omiie-nav.scrolled {
//             background: rgba(255, 255, 255, 0.95);
//             box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
//           }
//           .omiie-btn {
//             background: linear-gradient(to right, var(--omiie-pink), var(--omiie-accent));
//             color: var(--omiie-white);
//             transition: all 0.3s ease;
//           }
//           .omiie-btn:hover {
//             background: linear-gradient(to right, var(--omiie-accent), var(--omiie-pink));
//           }
//           .omiie-nav-link {
//             position: relative;
//             padding-bottom: 4px;
//           }
//           .omiie-nav-link::after {
//             content: '';
//             position: absolute;
//             bottom: 0;
//             left: 0;
//             width: 0;
//             height: 2px;
//             background: var(--omiie-pink);
//             transition: width 0.3s ease;
//           }
//           .omiie-nav-link:hover::after {
//             width: 100%;
//           }
//           .omiie-dropdown {
//             border-radius: 12px;
//             box-shadow: 0 8px 25px rgba(63, 209, 203, 0.3);
//           }
//           .omiie-mobile-menu {
//             background: #534EEB;
//             color: white;
//             box-shadow: 4px 0 15px rgba(0, 0, 0, 0.2);
//           }
//         `}
//       </style>

//       <motion.nav
//         className={`omiie-nav fixed top-0 z-50 w-full ${scrolled ? 'scrolled' : ''}`}
//         variants={navVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
//           <Link prefetch href="/" className="flex items-center gap-2">
//             <motion.img
//               src="./assets/logo.png"
//               alt="Omiie Logo"
//               className="h-10 w-10"
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               transition={{ type: 'spring', stiffness: 300 }}
//             />
//           </Link>

//           <div className="hidden items-center gap-8 lg:flex">
//             {menuLinks.map((link) => (
//               <motion.div key={link.name} whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 400 }}>
//                 <Link
//                   prefetch
//                   href={link.href}
//                   className={`omiie-nav-link flex items-center gap-2 text-sm font-semibold ${
//                     scrolled ? 'text-gray-800 hover:text-[var(--omiie-pink)]' : 'text-gray-900 hover:text-[var(--omiie-pink)]'
//                   }`}
//                 >
//                   {link.icon}
//                   {link.name}
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//           <div className="flex items-center gap-4">
//             {isAuthenticated ? (
//               <div className="relative" ref={dropdownRef}>
//                 <motion.button
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className="flex items-center gap-2 focus:outline-none"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <motion.img
//                     src={auth.user.avatar || avatar}
//                     alt="Avatar"
//                     className="h-10 w-10 rounded-full border-2 border-[var(--omiie-pink)] shadow-sm"
//                     whileHover={{ scale: 1.1 }}
//                   />
//                   <motion.div
//                     animate={{ rotate: dropdownOpen ? 180 : 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <ChevronDown size={20} className={scrolled ? 'text-gray-800' : 'text-gray-900'} />
//                   </motion.div>
//                 </motion.button>
//               </div>
//             ) : (
//               <Link href="/register" className="omiie-btn rounded-full px-4 py-2 text-sm font-semibold">
//                 S'inscrire
//               </Link>
//             )}

//             <motion.button
//               className="bg-[#534EEB] focus:outline-none lg:hidden rounded-md p-1"
//               onClick={() => setMobileMenuOpen(true)}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Menu size={24} className="text-white" />
//             </motion.button>
//           </div>
//         </div>

//         {/* ✅ Overlay + Menu mobile avec animation */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <>
//               <motion.div
//                 className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={() => setMobileMenuOpen(false)}
//               />

//               <motion.div
//                 key="mobileMenu"
//                 variants={mobileMenuVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 className="omiie-mobile-menu fixed top-0 left-0 z-50 h-full w-3/4 sm:w-1/2 flex flex-col p-6 lg:hidden"
//               >
//                 <motion.button
//                   className="mb-4 self-end"
//                   onClick={() => setMobileMenuOpen(false)}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <X size={24} className="text-white" />
//                 </motion.button>

//                 {menuLinks.map((link) => (
//                   <Link
//                     prefetch
//                     key={link.name}
//                     href={link.href}
//                     className="flex items-center gap-3 py-3 text-lg font-semibold hover:text-[var(--omiie-pink)]"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {link.icon}
//                     {link.name}
//                   </Link>
//                 ))}

//                 {isAuthenticated && (
//                   <>
//                     <hr className="my-4 border-white/30" />
//                     <Link
//                       prefetch
//                       href="/settings/profile"
//                       className="flex items-center gap-3 py-3 text-lg font-semibold hover:text-[var(--omiie-pink)]"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       <User size={18} /> Mon profil
//                     </Link>
//                     <Link
//                       prefetch
//                       href="/logout"
//                       method="post"
//                       as="button"
//                       className="flex items-center gap-3 py-3 text-lg font-semibold text-red-300 hover:text-red-500"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       <LogOut size={18} /> Se déconnecter
//                     </Link>
//                   </>
//                 )}
//               </motion.div>
//             </>
//           )}
//         </AnimatePresence>
//       </motion.nav>
//     </>
//   );
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

// Animations
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, x: '-100%', scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    x: '-100%',
    scale: 0.95,
    transition: { duration: 0.35, ease: 'easeInOut' },
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
    
    <style>
  {`
    :root {
      --omiie-pink: #3FD1CB;
      --omiie-accent: #534EEB;
      --omiie-white: #FFFFFF;
      --omiie-light-pink: #C0CCFE;
      --omiie-dark: #0D0D1A;
    }

    .omiie-nav {
      background: linear-gradient(135deg, var(--omiie-light-pink), var(--omiie-white));
      transition: all 0.5s ease;
    }

    .omiie-nav.scrolled {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    
    .omiie-mobile-menu {
      background: linear-gradient(145deg, rgba(83, 78, 235, 0.85), rgba(63, 209, 203, 0.85));
      backdrop-filter: blur(25px);
      color: white;
      box-shadow: 0 0 50px rgba(83, 78, 235, 0.4);
      border-right: 2px solid rgba(255,255,255,0.1);
      border-top-right-radius: 28px;
      border-bottom-right-radius: 28px;
      overflow-y: auto;
      position: relative;
    }

  
    .omiie-mobile-menu::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at top left, rgba(255,255,255,0.2), transparent 60%);
      pointer-events: none;
    }

    .omiie-mobile-link {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 20px;
      border-radius: 14px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .omiie-mobile-link:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateX(6px);
    }

    .omiie-mobile-link svg {
      filter: drop-shadow(0 0 6px rgba(255,255,255,0.4));
    }


    .omiie-mobile-link:hover::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, rgba(255,255,255,0.25), transparent 70%);
      opacity: 0.6;
      animation: glow 1s ease-out;
    }

    @keyframes glow {
      from { opacity: 0.8; transform: scale(0.9); }
      to { opacity: 0; transform: scale(2); }
    }

    .omiie-divider {
      border-color: rgba(255,255,255,0.2);
      margin: 10px 0;
    }

   
    .omiie-close-btn {
      background: rgba(255,255,255,0.15);
      border-radius: 50%;
      padding: 8px;
      transition: all 0.3s ease;
    }

    .omiie-close-btn:hover {
      background: rgba(255,255,255,0.3);
      transform: rotate(90deg);
    }

    
    .omiie-mobile-menu::-webkit-scrollbar {
      width: 6px;
    }
    .omiie-mobile-menu::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.2);
      border-radius: 10px;
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
          <Link prefetch href="/" className="flex items-center gap-2">
            <motion.img
              src="./assets/logo.png"
              alt="Omiie Logo"
              className="h-10 w-10"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </Link>

          {/* 🌐 Menu Desktop */}
          <div className="hidden items-center gap-8 lg:flex">
            {menuLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 400 }}>
                <Link
                  prefetch
                  href={link.href}
                  className={`omiie-nav-link flex items-center gap-2 text-sm font-semibold ${
                    scrolled ? 'text-gray-800 hover:text-[var(--omiie-pink)]' : 'text-gray-900 hover:text-[var(--omiie-pink)]'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* 👤 Utilisateur + Burger */}
          <div className="flex items-center gap-4">
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
                    className="h-10 w-10 rounded-full border-2 border-[var(--omiie-pink)] shadow-sm"
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={20} className={scrolled ? 'text-gray-800' : 'text-gray-900'} />
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
                      <div className="border-b border-gray-200 rounded-md px-4 py-3">
                        <p className="font-semibold">{auth.user.name}</p>
                        <p className="text-sm text-gray-500">Bienvenue sur Omiie 😊</p>
                      </div>
                      <Link
                        prefetch
                        href="/settings/profile"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--omiie-light-pink)]"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <User size={18} /> Mon profil
                      </Link>
                      <Link
                        prefetch
                        href="/logout"
                        method="post"
                        as="button"
                        className="flex w-full items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <LogOut size={18} /> Se déconnecter
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link href="/register" className="omiie-btn rounded-full px-4 py-2 text-sm font-semibold">
                S'inscrire
              </Link>
            )}

            <motion.button
              className="bg-[#534EEB] focus:outline-none lg:hidden rounded-md p-1"
              onClick={() => setMobileMenuOpen(true)}
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={24} className="text-white" />
            </motion.button>
          </div>
        </div>

        {/* 📱 Overlay + Menu mobile */}
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
                className="omiie-mobile-menu fixed top-0 left-0 z-50 h-full w-3/4 sm:w-1/2 flex flex-col p-6 lg:hidden"
              >
                <motion.button
                  className="mb-6 self-end text-white"
                  onClick={() => setMobileMenuOpen(false)}
                  whileTap={{ scale: 0.9, rotate: 90 }}
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
                      prefetch
                      href={link.href}
                      className="omiie-mobile-link text-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {isAuthenticated && (
                  <>
                    <hr className="my-5 omiie-divider" />
                    <Link
                      prefetch
                      href="/settings/profile"
                      className="omiie-mobile-link text-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <User size={18} /> Mon profil
                    </Link>
                    <Link
                      prefetch
                      href="/logout"
                      method="post"
                      as="button"
                      className="omiie-mobile-link text-lg font-medium text-red-300 hover:text-red-500"
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
      </motion.nav>
    </>
  );
}
