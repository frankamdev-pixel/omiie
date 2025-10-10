import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const ServiceDetailsModal = ({ service, isOpen, onClose }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // fermeture clic extérieur
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4 shadow-2xl relative"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            onClick={(e) => e.stopPropagation()} // empêche fermeture intérieure
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={onClose}
              aria-label="Fermer modal"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-[var(--omiie-pink)] mb-4">{service.title}</h2>
            <img
              src={service.image || '/placeholder.jpg'}
              alt={service.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-4">{service.description}</p>
            {service.details && <p className="text-gray-600 italic mb-4">{service.details}</p>}

            {service.details && (
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                {service.details.split('. ').map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}

            <button
              className="omiie-btn w-full py-2 rounded-full font-semibold"
              onClick={onClose}
            >
              Fermer
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ServiceDetailsModal.propTypes = {
  service: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ServiceDetailsModal;

