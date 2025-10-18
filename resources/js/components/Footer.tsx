import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
 const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
 };

 const formations = ["Développement Web", "Design UI/UX", "Marketing Digital", "Web Design", "Cybersécurité", "Data Science"];
 const quickLinks = ["Accueil", "Formations", "Formateurs", "À propos", "Contact"];

 return (
  <motion.footer
   className="relative w-full bg-[#3FD1CB] text-white shadow-2xl"
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 0.8 }}
  >
   <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-8 lg:px-10">
    <motion.div
     className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4 justify-items-center"
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
    >
     {/* À propos - Toujours centré */}
     <motion.div
      className="text-center md:text-left max-w-sm lg:max-w-none"
      variants={sectionVariants}
     >
      <h3 className="mb-4 text-2xl font-bold text-blue-400 text-center md:text-left">Omiie</h3>
      <p className="mb-4 text-gray-300 leading-relaxed text-center md:text-left">
       <span className="text-blue-300 font-semibold">Omiie</span> est une plateforme de formation en ligne
       qui aide les étudiants et professionnels à acquérir des compétences pratiques grâce à des cours
       interactifs et à des formateurs expérimentés.
      </p>
      <p className="text-sm text-gray-400 text-center md:text-left">© 2025 Omiie. Tous droits réservés.</p>
     </motion.div>

     {/* Formations populaires */}
     <motion.div
      className="text-center md:text-left"
      variants={sectionVariants}
     >
      <h4 className="mb-4 text-lg font-semibold text-blue-400 text-center md:text-left">Formations populaires</h4>
      <ul className="space-y-2 max-w-xs mx-auto md:mx-0">
       {formations.map((formation) => (
        <motion.li
         key={formation}
         whileHover={{ x: 5, color: "#60A5FA" }}
         className="cursor-pointer text-gray-300 transition-all text-center md:text-left"
        >
         {formation}
        </motion.li>
       ))}
      </ul>
     </motion.div>

     {/* Liens rapides */}
     <motion.div
      className="text-center md:text-left"
      variants={sectionVariants}
     >
      <h4 className="mb-4 text-lg font-semibold text-blue-400 text-center md:text-left">Liens rapides</h4>
      <ul className="space-y-2 max-w-xs mx-auto md:mx-0">
       {quickLinks.map((link) => (
        <motion.li
         key={link}
         whileHover={{ x: 5, color: "#60A5FA" }}
         className="cursor-pointer text-gray-300 transition-all text-center md:text-left"
        >
         {link}
        </motion.li>
       ))}
      </ul>
     </motion.div>

     {/* Contact & Réseaux - Centré sur mobile */}
     <motion.div
      className="text-center md:text-left"
      variants={sectionVariants}
     >
      <h4 className="mb-4 text-lg font-semibold text-blue-400 text-center md:text-left">Contact</h4>
      <div className="space-y-2 mb-4">
       <p className="text-gray-300">Email : support@omiielearn.com</p>
       <p className="text-gray-300">Téléphone : +237 690 46 18 30</p>
      </div>
      <div className="flex justify-center md:justify-start space-x-5 pt-2">
       {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, idx) => (
        <motion.a
         key={idx}
         href="#"
         whileHover={{ scale: 1.2, rotate: 10, color: "#60A5FA" }}
         className="text-lg text-gray-300 transition-all"
         whileTap={{ scale: 0.9 }}
        >
         <Icon />
        </motion.a>
       ))}
      </div>
     </motion.div>
    </motion.div>
   </div>

   {/* Ligne du bas - Toujours centrée */}
   <motion.div
    className="bg-gray-800/70 backdrop-blur-sm py-4 text-center text-sm text-gray-400 border-t border-gray-700"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
    viewport={{ once: true }}
   >
    Conçu avec <span className="text-blue-400">💙</span> par{" "}
    <span className="text-blue-400 font-semibold">Omiie</span> | Apprenez. Progressez. Réussissez.
   </motion.div>
  </motion.footer>
 );
}



