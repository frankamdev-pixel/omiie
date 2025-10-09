import { motion } from "framer-motion";
import {
FaFacebookF,
FaInstagram,
FaLinkedinIn,
FaTwitter,
} from "react-icons/fa";

export default function Footer() {
const sectionVariants = {
hidden: { opacity: 0, y: 30 },
visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
"Développement Web",
"Design Graphique",
"SEO",
"Marketing",
"Consulting",
];
const quickLinks = ["Accueil", "À propos", "Services", "Contact"];

return (
<motion.footer
className="relative bottom-0 w-full bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white shadow-2xl"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.8 }}
> <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
<motion.div
className="grid grid-cols-1 gap-10 md:grid-cols-4"
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
>
{/* À propos */}
<motion.div variants={sectionVariants}> <h3 className="mb-4 text-2xl font-bold text-blue-500">Omiie</h3> <p className="mb-4 text-gray-300 leading-relaxed">
Omiie propose des services professionnels pour booster votre
présence en ligne. Notre mission : allier design, performance et
innovation. </p> <p className="text-sm text-gray-400">
© 2025 omiie. Tous droits réservés. </p>
</motion.div>

      {/* Services */}
      <motion.div variants={sectionVariants}>
        <h4 className="mb-4 text-lg font-semibold text-blue-400">
          Nos Services
        </h4>
        <ul className="space-y-2">
          {services.map((service) => (
            <motion.li
              key={service}
              whileHover={{ x: 5, color: "#3b82f6" }}
              className="cursor-pointer text-gray-300 transition-colors"
            >
              {service}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Liens rapides */}
      <motion.div variants={sectionVariants}>
        <h4 className="mb-4 text-lg font-semibold text-blue-400">
          Liens rapides
        </h4>
        <ul className="space-y-2">
          {quickLinks.map((link) => (
            <motion.li
              key={link}
              whileHover={{ x: 5, color: "#3b82f6" }}
              className="cursor-pointer text-gray-300 transition-colors"
            >
              {link}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Contact & Réseaux */}
      <motion.div variants={sectionVariants}>
        <h4 className="mb-4 text-lg font-semibold text-blue-400">
          Contact
        </h4>
        <p className="mb-2 text-gray-300">Email : contact@omiie.com</p>
        <p className="mb-4 text-gray-300">Téléphone : +237 690 46 18 30</p>
        <div className="mt-3 flex space-x-5">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
            (Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  color: "#3b82f6",
                }}
                className="text-lg text-gray-300 transition-all"
              >
                <Icon />
              </motion.a>
            )
          )}
        </div>
      </motion.div>
    </motion.div>
  </div>

  {/* Ligne du bas */}
  <motion.div
    className="bg-gray-800/80 backdrop-blur-sm py-4 text-center text-sm text-gray-400"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
    viewport={{ once: true }}
  >
    Conçu avec ❤️ par <span className="text-blue-400">Omiie</span> | Tous
    droits réservés 2025
  </motion.div>
</motion.footer>

);
}

