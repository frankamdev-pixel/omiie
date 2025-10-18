
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Inertia } from "@inertiajs/inertia";
import { Send, X, User, Mail, Phone, Briefcase, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@headlessui/react";

export default function QuoteModal() {
 const [isOpen, setIsOpen] = useState(false);
 const [formData, setFormData] = useState({
  name: "", email: "", phone: "", company: "", message: ""
 });
 const [errors, setErrors] = useState({});
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [showSuccess, setShowSuccess] = useState(false);
 const [progress, setProgress] = useState(100);

 const validateField = (name, value) => {
  switch (name) {
   case "name": return value.trim() ? "" : "Nom requis";
   case "email": return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Email invalide";
   case "phone": return /^\+?[1-9]\d{1,14}$/.test(value) ? "" : "Téléphone invalide (ex: +237690461830)";
   case "message": return value.trim() ? "" : "Message requis";
   default: return "";
  }
 };

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  setErrors({ ...errors, [name]: validateField(name, value) });
 };

 const isFormValid = () => {
  return Object.values(errors).every(err => !err) &&
   formData.name && formData.email && formData.phone && formData.message;
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (!isFormValid()) return;
  setIsSubmitting(true);


  setTimeout(() => {
   setIsSubmitting(false);
   setShowSuccess(true);
   setProgress(100);

   const interval = setInterval(() => {
    setProgress(prev => {
     if (prev <= 0) {
      clearInterval(interval);
      setShowSuccess(false);
      setIsOpen(false);
      // ✅ REDIRECTION
      Inertia.visit('/', { method: 'get', preserveState: false });
      return 0;
     }
     return prev - 2;
    });
   }, 60);
  }, 1000);
 };

 // 🎆 FEUX D'ARTIFICE SIMPLES (PAS DE LIB)
 const Fireworks = () => (
  <div className="fixed inset-0 pointer-events-none z-70">
   {Array.from({ length: 30 }).map((_, i) => (
    <motion.div
     key={i}
     className="absolute w-3 h-3 rounded-full"
     initial={{ opacity: 0, scale: 0 }}
     animate={showSuccess ? {
      opacity: [0, 1, 0],
      scale: [0, 2, 0],
      x: [0, (Math.random() - 0.5) * 600, 0],
      y: [0, (Math.random() - 0.5) * 600, 0]
     } : { opacity: 0 }}
     transition={{
      duration: 1.5 + Math.random(),
      repeat: showSuccess ? Infinity : 0,
      repeatType: "reverse",
      delay: i * 0.05
     }}
     style={{
      left: "50%",
      top: "50%",
      background: `hsl(${Math.random() * 360}, 100%, 60%)`
     }}
    />
   ))}
  </div>
 );

 return (
  <>
   <motion.button
    whileHover={{ scale: 1.05 }}
    onClick={() => setIsOpen(true)}
    className="bg-blue-500 text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl"
   >
    Obtenir un Devis Gratuit<Send className="inline ml-2 w-5 h-5" />
   </motion.button>

   {/* 🎆 FEUX D'ARTIFICE */}
   <AnimatePresence>{showSuccess && <Fireworks />}</AnimatePresence>

   {/* Modal */}
   <AnimatePresence>
    {isOpen && !showSuccess && (
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={() => setIsOpen(false)}
     >
      <motion.div
       initial={{ scale: 0.9, y: 50 }}
       animate={{ scale: 1, y: 0 }}
       className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl"
       onClick={(e) => e.stopPropagation()}
      >
       <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
        <X className="w-6 h-6" />
       </button>
       <h2 className="text-3xl font-bold text-center mb-6 text-indigo-900">Devis Gratuit</h2>
       <form onSubmit={handleSubmit} className="space-y-6">
        {[
         { name: "name", icon: User, placeholder: "Kamgang Frank" },
         { name: "email", icon: Mail, placeholder: "frank@omiie.com" },
         { name: "phone", icon: Phone, placeholder: "+237690461830" },
         { name: "company", icon: Briefcase, placeholder: "Nom de votre entreprise" },
         { name: "message", icon: MessageSquare, placeholder: "Besoin cybersécurité...", isTextarea: true }
        ].map((field, i) => (
         <motion.div key={field.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
          <div className="flex items-start gap-3">
           <field.icon className="w-5 h-5 text-blue-600 mt-3" />
           {field.isTextarea ? (
            <Textarea name={field.name} placeholder={field.placeholder} value={formData[field.name]} onChange={handleChange} rows={4} className="flex-1 p-3 border rounded-lg focus:border-blue-500" />
           ) : (
           <Input type={field.name === "email" ? "email" : field.name === "phone" ? "tel" : "text"} name={field.name} placeholder={field.placeholder} value={formData[field.name]} onChange={handleChange} className="flex-1 text-bold text-2xl text-blue-950 p-3 border rounded-lg focus:border-blue-500" />
           )}
          </div>
          {errors[field.name] && <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>}
         </motion.div>
        ))}
        <motion.button
         whileHover={{ scale: isFormValid() ? 1.02 : 1 }}
         type="submit" disabled={!isFormValid() || isSubmitting}
         className={`w-full py-4 rounded-lg font-bold ${isFormValid() ? "bg-indigo-900 text-white" : "bg-gray-300 text-gray-500"}`}
        >
         {isSubmitting ? "Envoi..." : "Envoyer"} <Send className="w-5 h-5 inline" />
        </motion.button>
       </form>
      </motion.div>
     </motion.div>
    )}
   </AnimatePresence>


   <AnimatePresence>
    {showSuccess && (
     <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-60"
     >
      <motion.div
       initial={{ rotateY: -180 }}
       animate={{ rotateY: 0 }}
       className="bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-3xl p-10 text-center shadow-2xl relative max-w-md w-full mx-4"
      >
       {/* ⏳ BARRE PROGRESSION */}
       <div className="absolute top-0 left-0 h-2 bg-white/30">
        <motion.div className="h-full bg-white" initial={{ width: "100%" }} animate={{ width: `${progress}%` }} transition={{ duration: 3 }} />
       </div>

       <CheckCircle className="w-20 h-20 mx-auto mb-4 drop-shadow-2xl" />
       <h3 className="text-3xl font-bold mb-4">FÉLICITATIONS ! 🎉</h3>
       <p className="text-lg mb-6">Devis envoyé !</p>
       <p className="text-blue-100">
        Redirection en <span className="font-bold text-2xl">{Math.round(progress / 100 * 3)}s</span>
       </p>
      </motion.div>
     </motion.div>
    )}
   </AnimatePresence>
  </>
 );
}
