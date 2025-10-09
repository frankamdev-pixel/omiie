// // import { Link, usePage } from '@inertiajs/react';
// // import { AnimatePresence, motion } from 'framer-motion';
// // import { ChevronDown, Hand, Home, FolderOpen, Info, Phone, User, LogOut } from 'lucide-react';
// // import { useEffect, useRef, useState } from 'react';

// // export default function Navbar() {
// //   const { auth } = usePage().props;
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const dropdownRef = useRef(null);

// //   useEffect(() => {
// //     const handleClickOutside = (e) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
// //         setDropdownOpen(false);
// //       }
// //     };
// //     document.addEventListener('click', handleClickOutside);
// //     return () => document.removeEventListener('click', handleClickOutside);
// //   }, []);

// //   const menuLinks = [
// //     { name: 'Accueil', icon: <Home size={18} />, href: '/' },
// //     { name: 'Services offerts', icon: <FolderOpen size={18} />, href: '/services' },
// //     { name: 'À propos', icon: <Info size={18} />, href: '/about' },
// //     { name: 'Contact', icon: <Phone size={18} />, href: '/contact' },
// //   ];

// //   const isAuthenticated = !!auth.user;

// //   return (
// //     <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-lg">
// //       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
// //         <Link href="/" className="text-2xl font-bold tracking-wide">Omiie</Link>

// //         {/* Liens Desktop */}
// //         <div className="hidden items-center space-x-8 md:flex">
// //           {menuLinks.map((link) => (
// //             <motion.div whileHover={{ scale: 1.1 }} key={link.name}>
// //               <Link href={link.href} className="flex items-center gap-2 transition hover:text-blue-300">
// //                 {link.icon} {link.name}
// //               </Link>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* Dropdown Utilisateur */}
// //         <div className="relative" ref={dropdownRef}>
// //           {isAuthenticated ? (
// //             <div className="flex flex-col items-center">
// //               <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 focus:outline-none">
// //                 <motion.img
// //                   src={auth.user.avatar || '/user.jpg'}
// //                   alt="avatar"
// //                   className="h-10 w-10 rounded-full border-2 border-blue-400 shadow-md"
// //                   whileHover={{ scale: 1.1, rotate: 3 }}
// //                 />
// //                 <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
// //                   <ChevronDown size={20} />
// //                 </motion.div>
// //               </button>
// //               <div className="mt-1 block md:hidden">
// //                 <motion.div animate={{ y: [0, -5, 0], opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-blue-400">
// //                   <Hand size={22} />
// //                 </motion.div>
// //               </div>
// //             </div>
// //           ) : (
// //             <Link href="/login" className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow-md transition hover:bg-blue-600">Se connecter</Link>
// //           )}

// //           <AnimatePresence>
// //             {dropdownOpen && isAuthenticated && (
// //               <motion.div
// //                 initial={{ opacity: 0, y: -15 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -15 }}
// //                 transition={{ duration: 0.3 }}
// //                 className="absolute right-0 z-50 mt-3 w-56 overflow-hidden rounded-lg border border-blue-200 bg-white text-gray-800 shadow-xl"
// //               >
// //                 <div className="border-b border-gray-200 px-4 py-3">
// //                   <p className="font-semibold">{auth.user.name}</p>
// //                   <p className="text-sm text-gray-500">Membre Premium</p>
// //                 </div>

// //                 {/* Liens mobile */}
// //                 <div className="block md:hidden">
// //                   {menuLinks.map((link) => (
// //                     <Link key={link.name} href={link.href} className="flex items-center gap-2 px-4 py-2 transition hover:bg-blue-50" onClick={() => setDropdownOpen(false)}>
// //                       {link.icon} {link.name}
// //                     </Link>
// //                   ))}
// //                   <hr className="my-1" />
// //                 </div>

// //                 <Link href="/profile" className="flex items-center gap-2 px-4 py-2 transition hover:bg-blue-50">
// //                   <User size={18} /> Mon profil
// //                 </Link>

// //                 <Link href="/logout" method="post" as="button" className="flex w-full items-center gap-2 px-4 py-2 text-left text-red-500 transition hover:bg-red-50">
// //                   <LogOut size={18} /> Se déconnecter
// //                 </Link>
// //               </motion.div>
// //             )}
// //           </AnimatePresence>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// import { Link, usePage } from '@inertiajs/react';
// import { AnimatePresence, motion } from 'framer-motion';
// import {
//     ChevronDown,
//     FolderOpen,
//     Hand,
//     Home,
//     Info,
//     LogOut,
//     Phone,
//     User,
// } from 'lucide-react';
// import { useEffect, useRef, useState } from 'react';
// export default function Navbar({
//     isAuthenticated = true,
//     user = { name: 'Frankam', avatar: '/user.jpg' },
// }) {
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);
//     const { auth } = usePage().props;
//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (
//                 dropdownRef.current &&
//                 !dropdownRef.current.contains(e.target)
//             ) {
//                 setDropdownOpen(false);
//             }
//         };
//         document.addEventListener('click', handleClickOutside);
//         return () => document.removeEventListener('click', handleClickOutside);
//     }, []);
//     console.log(auth.user.name);
//     const menuLinks = [
//         { name: 'Accueil', icon: <Home size={18} />, href: '/' },
//         {
//             name: 'Services offerts',
//             icon: <FolderOpen size={18} />,
//             href: '/services',
//         },
//         { name: 'À propos', icon: <Info size={18} />, href: '/about' },
//         { name: 'Contact', icon: <Phone size={18} />, href: '/contact' },
//     ];
//     return (
//         <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-lg">
//             {' '}
//             <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
//                 {' '}
//                 {/* Logo */}{' '}
//                 <Link href="/" className="text-2xl font-bold tracking-wide">
//                     {' '}
//                     Omiie{' '}
//                 </Link>{' '}
//                 {/* Liens Desktop */}{' '}
//                 <div className="hidden items-center space-x-8 md:flex">
//                     {' '}
//                     {menuLinks.map((link) => (
//                         <motion.div whileHover={{ scale: 1.1 }} key={link.name}>
//                             {' '}
//                             <Link
//                                 href={link.href}
//                                 className="flex items-center gap-2 transition hover:text-blue-300"
//                             >
//                                 {' '}
//                                 {link.icon} {link.name}{' '}
//                             </Link>{' '}
//                         </motion.div>
//                     ))}{' '}
//                 </div>{' '}
//                 {/* Dropdown Utilisateur */}{' '}
//                 <div className="relative" ref={dropdownRef}>
//                     {' '}
//                     {isAuthenticated ? (
//                         <div className="flex flex-col items-center">
//                             {' '}
//                             <button
//                                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                                 className="flex items-center gap-2 focus:outline-none"
//                             >
//                                 {' '}
//                                 <motion.img
//                                     src={user.avatar}
//                                     alt="avatar"
//                                     className="h-10 w-10 rounded-full border-2 border-blue-400 shadow-md"
//                                     whileHover={{ scale: 1.1, rotate: 3 }}
//                                 />{' '}
//                                 <motion.div
//                                     animate={{ rotate: dropdownOpen ? 180 : 0 }}
//                                     transition={{ duration: 0.3 }}
//                                 >
//                                     {' '}
//                                     <ChevronDown size={20} />{' '}
//                                 </motion.div>{' '}
//                             </button>{' '}
//                             {/* Doigt clignotant sous l'avatar sur mobile */}{' '}
//                             <div className="mt-1 block md:hidden">
//                                 {' '}
//                                 <motion.div
//                                     animate={{
//                                         y: [0, -5, 0],
//                                         opacity: [1, 0.5, 1],
//                                     }}
//                                     transition={{
//                                         repeat: Infinity,
//                                         duration: 1.5,
//                                     }}
//                                     className="text-blue-400"
//                                 >
//                                     {' '}
//                                     <Hand size={22} />{' '}
//                                 </motion.div>{' '}
//                             </div>{' '}
//                         </div>
//                     ) : (
//                         <Link
//                             href="/login"
//                             className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow-md transition hover:bg-blue-600"
//                         >
//                             {' '}
//                             Se connecter{' '}
//                         </Link>
//                     )}{' '}
//                     <AnimatePresence>
//                         {' '}
//                         {dropdownOpen && (
//                             <motion.div
//                                 initial={{ opacity: 0, y: -15 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -15 }}
//                                 transition={{ duration: 0.3 }}
//                                 className="absolute right-0 z-50 mt-3 w-56 overflow-hidden rounded-lg border border-blue-200 bg-white text-gray-800 shadow-xl"
//                             >
//                                 {' '}
//                                 <div className="border-b border-gray-200 px-4 py-3">
//                                     {' '}
//                                     <p className="font-semibold">
//                                         {auth.user.name}
//                                     </p>{' '}
//                                     <p className="text-sm text-gray-500">
//                                         {' '}
//                                         Membre Premium{' '}
//                                     </p>{' '}
//                                 </div>{' '}
//                                 {/* Liens du menu sur mobile */}{' '}
//                                 <div className="block md:hidden">
//                                     {' '}
//                                     {menuLinks.map((link) => (
//                                         <Link
//                                             key={link.name}
//                                             href={link.href}
//                                             className="flex items-center gap-2 px-4 py-2 transition hover:bg-blue-50"
//                                             onClick={() =>
//                                                 setDropdownOpen(false)
//                                             }
//                                         >
//                                             {' '}
//                                             {link.icon} {link.name}{' '}
//                                         </Link>
//                                     ))}{' '}
//                                     <hr className="my-1" />{' '}
//                                 </div>{' '}
//                                 <Link
//                                     href="/profile"
//                                     className="flex items-center gap-2 px-4 py-2 transition hover:bg-blue-50"
//                                 >
//                                     {' '}
//                                     <User size={18} /> Mon profil{' '}
//                                 </Link>{' '}
//                                 <Link
//                                     href="/logout"
//                                     method="post"
//                                     as="button"
//                                     className="flex w-full items-center gap-2 px-4 py-2 text-left text-red-500 transition hover:bg-red-50"
//                                 >
//                                     {' '}
//                                     <LogOut size={18} /> Se déconnecter{' '}
//                                 </Link>{' '}
//                             </motion.div>
//                         )}{' '}
//                     </AnimatePresence>{' '}
//                 </div>{' '}
//             </div>{' '}
//         </nav>
//     );
// }

// import { Link, usePage } from '@inertiajs/react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { ChevronDown, Hand, Home, FolderOpen, Info, Phone, User, LogOut } from 'lucide-react';
// import { useEffect, useRef, useState } from 'react';

// export default function Navbar() {
//   const { auth } = usePage().props;
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, []);

//   const menuLinks = [
//     { name: 'Accueil', icon: <Home size={18} />, href: '/' },
//     { name: 'Services', icon: <FolderOpen size={18} />, href: '/services' },
//     { name: 'À propos', icon: <Info size={18} />, href: '/about' },
//     { name: 'Contact', icon: <Phone size={18} />, href: '/contact' },
//   ];

//   const isAuthenticated = !!auth?.user;

//   return (
//     <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-lg">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
//         <Link href="/" className="text-2xl font-bold tracking-wide">Omiie</Link>

//         <div className="hidden md:flex space-x-8">
//           {menuLinks.map((link) => (
//             <motion.div key={link.name} whileHover={{ scale: 1.05 }}>
//               <Link href={link.href} className="flex items-center gap-2 transition hover:text-blue-300">
//                 {link.icon} {link.name}
//               </Link>
//             </motion.div>
//           ))}
//         </div>

//         <div className="relative" ref={dropdownRef}>
//           {isAuthenticated ? (
//             <div className="flex flex-col items-center">
//               <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 focus:outline-none">
//                 <motion.img
//                   src={auth.user.avatar || '../pages/user.png'}
//                   alt="avatar"
//                   className="h-10 w-10 rounded-full border-2 border-blue-400 shadow-md"
//                   whileHover={{ scale: 1.1, rotate: 3 }}
//                 />
//                 <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
//                   <ChevronDown size={20} />
//                 </motion.div>
//               </button>
//               <div className="mt-1 block md:hidden">
//                 <motion.div animate={{ y: [0, -5, 0], opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-blue-400">
//                   <Hand size={22} />
//                 </motion.div>
//               </div>
//             </div>
//           ) : (
//             <Link href="/login" className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow-md transition hover:bg-blue-600">Se connecter</Link>
//           )}

//           <AnimatePresence>
//             {dropdownOpen && isAuthenticated && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.2 }}
//                 className="absolute right-0 z-50 mt-3 w-56 overflow-hidden rounded-lg border border-blue-200 bg-white text-gray-800 shadow-xl"
//               >
//                 <div className="border-b border-gray-200 px-4 py-3">
//                   <p className="font-semibold">{auth.user.name}</p>
//                   <p className="text-sm text-gray-500">Bienvenue sur Omiie <span>😊😊</span></p>
//                 </div>

//                 <div className="block md:hidden">
//                   {menuLinks.map((link) => (
//                     <Link key={link.name} href={link.href} className="flex items-center gap-2 px-4 py-2 transition hover:bg-blue-50" onClick={() => setDropdownOpen(false)}>
//                       {link.icon} {link.name}
//                     </Link>
//                   ))}
//                   <hr className="my-1" />
//                 </div>

//                 <Link href="/settings/profile" className="flex items-center gap-2 px-4 py-2 transition hover:bg-blue-50">
//                   <User size={18} /> Mon profil
//                 </Link>

//                 <Link href="/logout" method="post" as="button" className="flex w-full items-center gap-2 px-4 py-2 text-left text-red-500 transition hover:bg-red-50">
//                   <LogOut size={18} /> Se déconnecter
//                 </Link>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </nav>
//   );
// }
import { Link, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
ChevronDown,
FolderOpen,
Hand,
Home,
Info,
LogOut,
Phone,
User,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
const { auth } = usePage().props;
const [dropdownOpen, setDropdownOpen] = useState(false);
const dropdownRef = useRef<HTMLDivElement>(null);

useEffect(() => {
const handleClickOutside = (e: MouseEvent) => {
if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
setDropdownOpen(false);
}
};
document.addEventListener('click', handleClickOutside);
return () => document.removeEventListener('click', handleClickOutside);
}, []);

const menuLinks = [
{ name: 'Accueil', icon: <Home size={18} />, href: '/' },
{ name: 'Services', icon: <FolderOpen size={18} />, href: '/services' },
{ name: 'À propos', icon: <Info size={18} />, href: '/about' },
{ name: 'Contact', icon: <Phone size={18} />, href: '/contact' },
];

const isAuthenticated = !!auth?.user;

return ( <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 text-white shadow-lg"> <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
{/* Logo */} <Link href="/" className="text-2xl font-bold tracking-wide transition hover:text-white/80">
Omiie </Link>

    {/* Menu Desktop */}
    <div className="hidden md:flex space-x-8">
      {menuLinks.map(link => (
        <motion.div key={link.name} whileHover={{ scale: 1.05 }}>
          <Link href={link.href} className="flex items-center gap-2 transition hover:text-white/80">
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
              src={auth.user.avatar || '/user.jpg'}
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
              animate={{ y: [0, -5, 0], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-white/70"
            >
              <div className="flex flex-col items-center">
                Menu
                <Hand size={22} />
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        <Link
          href="/login"
          className="rounded-lg bg-white/20 px-4 py-2 text-white shadow-md transition hover:bg-white/30"
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
              <p className="font-semibold">{auth.user.name}</p>
              <p className="text-sm text-gray-500">Bienvenue sur Omiie 😊</p>
            </div>

            {/* Menu mobile */}
            <div className="block md:hidden">
              {menuLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 transition hover:bg-pink-50"
                  onClick={() => setDropdownOpen(false)}
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
