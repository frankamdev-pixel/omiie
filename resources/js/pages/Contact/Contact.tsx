import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Inertia } from "@inertiajs/inertia";
import {
 Send, User, Mail, Phone, FileText, MessageSquare, CheckCircle, AlertCircle,
 MapPin, Clock, PhoneCall, Shield, Database, Smartphone, BarChart3, Headphones
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Contact() {
 const [formData, setFormData] = useState({
  name: "", email: "", phone: "", subject: "", message: "", service: ""
 });
 const [errors, setErrors] = useState({});
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [success, setSuccess] = useState(false);
 const [step, setStep] = useState(1);
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true });

 const services = [
  { id: "cyber", icon: Shield, label: "Cybersécurité" },
  { id: "cloud", icon: Database, label: "Cloud" },
  { id: "mobile", icon: Smartphone, label: "Applications" },
  { id: "analytics", icon: BarChart3, label: "Analytics" },
  { id: "support", icon: Headphones, label: "Support" }
 ];

 const validateField = (name, value) => {
  switch (name) {
   case "name": return value.trim() ? "" : "Nom requis";
   case "email": return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Email invalide";
   case "phone": return /^\+?\d{8,15}$/.test(value) ? "" : "Téléphone invalide";
   case "subject": return value.trim() ? "" : "Sujet requis";
   case "message": return value.trim().length > 10 ? "" : "Message trop court";
   case "service": return value ? "" : "Service requis";
   default: return "";
  }
 };

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  setErrors({ ...errors, [name]: validateField(name, value) });
 };

 const isStepValid = () => {
  if (step === 1) return !!formData.service;
  if (step === 2)
   return (
    formData.name &&
    formData.email &&
    formData.phone &&
    !errors.name &&
    !errors.email &&
    !errors.phone
   );
  return (
   formData.subject &&
   formData.message &&
   !errors.subject &&
   !errors.message
  );
 };

 const nextStep = () => {
  if (isStepValid()) setStep(step + 1);
 };

 const prevStep = () => setStep(step - 1);

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!isStepValid()) return;
  setIsSubmitting(true);

  try {
   await Inertia.post("/contacts", formData, {
    onSuccess: () => {
     setSuccess(true);
     setTimeout(() => {
      setSuccess(false);
      setStep(1);
      setFormData({
       name: "",
       email: "",
       phone: "",
       subject: "",
       message: "",
       service: "",
      });
      setErrors({});
     }, 4000);
    },
    onError: (err) => setErrors(err),
   });
  } catch (err) {
   console.error(err);
  } finally {
   setIsSubmitting(false);
  }
 };

 return (
  <section className="py-24 relative overflow-hidden ">
   {/* Particules animées */}
   <Navbar />
   <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 20 }).map((_, i) => (
     <motion.div
      key={i}
      className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
      animate={{
       x: [0, Math.random() * 100, 0],
       y: [0, Math.random() * 100, 0],
       scale: [0, 1, 0],
       opacity: [0, 0.8, 0],
      }}
      transition={{
       duration: 4 + Math.random() * 4,
       repeat: Infinity,
       delay: i * 0.2,
      }}
      style={{
       left: `${Math.random() * 100}%`,
       top: `${Math.random() * 100}%`,
      }}
     />
    ))}
   </div>

   <div className="max-w-6xl mx-auto px-4">
    {/* Header */}
    <motion.div
     ref={ref}
     initial={{ opacity: 0, y: 50 }}
     animate={isInView ? { opacity: 1, y: 0 } : {}}
     className="text-center mb-16"
    >
     <motion.div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600  px-6 py-3 rounded-full mb-6">
      <Clock className="w-5 h-5" /> Réponse garantie sous 1h
     </motion.div>
     <h2 className="text-5xl font-black bg-gradient-to-r from-indigo-900 to-blue-900 bg-clip-text text-transparent mb-4">
      Contact OMIIE
     </h2>
     <p className="text-xl text-gray-600 max-w-2xl mx-auto">
      Support 24/7 • Anglais/Français • Bafoussam/Yaoundé
     </p>
    </motion.div>

    {/* Formulaire multi-step */}
    <div className="grid lg:grid-cols-2 gap-12 items-start">
     {/* Formulaire */}
     <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.2 }}
     >
      <div className="backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-blue/20">
       {/* Barre de progression */}
       <div className="flex justify-between mb-8">
        {[1, 2, 3].map((s) => (
         <motion.div
          key={s}
          className={`flex-1 h-2 mx-1 rounded-full ${s <= step ? "bg-indigo-600" : "bg-black"}`}
          animate={{ scaleX: s === step ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 0.5 }}
         />
        ))}
       </div>

       <AnimatePresence mode="wait">
        {step === 1 && (
         <motion.div
          key="step1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
         >
          <h3 className="text-2xl font-bold mb-6">Quel service ?</h3>
          <div className="grid grid-cols-2 gap-4">
           {services.map((service) => (
            <motion.button
             key={service.id}
             type="button"
             onClick={() =>
              setFormData({ ...formData, service: service.id })
             }
             className={`p-4 rounded-xl border-2 transition-all ${formData.service === service.id
              ? "border-indigo-600 bg-blue-500 shadow-lg"
              : "border-red-200 hover:border-indigo-300"
              }`}
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
            >
             <service.icon className="w-8 h-8 mb-2 mx-auto" />
             <p className="font-semibold text-sm">{service.label}</p>
            </motion.button>
           ))}
          </div>
          {errors.service && (
           <p className="text-red-500 mt-2 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" /> {errors.service}
           </p>
          )}
         </motion.div>
        )}

        {step === 2 && (
         <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h3 className="text-2xl font-bold mb-6">Vos coordonnées</h3>
          {[
           { name: "name", icon: User, placeholder: "Frank Kamgang" },
           { name: "email", icon: Mail, placeholder: "frank@omiie.cm" },
           { name: "phone", icon: Phone, placeholder: "+237 690 46 18 30" },
           { name: "phone", icon: Phone, placeholder: "+237 640 16 29 51" }
          ].map((field) => (
           <div key={field.name} className="mb-4">
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
             <field.icon className="w-5 h-5 text-blue-600" />
             <input
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              className="flex-1 bg-transparent outline-none"
             />
            </div>
            {errors[field.name] && (
             <p className="text-red-500 text-sm mt-1 flex gap-1">
              <AlertCircle className="w-4 h-4" /> {errors[field.name]}
             </p>
            )}
           </div>
          ))}
         </motion.div>
        )}

        {step === 3 && (
         <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h3 className="text-2xl font-bold mb-6">Votre message</h3>
          {[
           { name: "subject", icon: FileText, placeholder: "Ex: Devis Cybersécurité PME" },
           { name: "message", icon: MessageSquare, placeholder: "Dites-nous tout...", isTextarea: true },
          ].map((field) => (
           <div key={field.name} className="mb-4">
            <div className={`flex items-start gap-3 p-3 bg-gray-50 rounded-xl ${field.isTextarea ? "min-h-[120px]" : ""}`}>
             <field.icon className="w-5 h-5 text-blue-600 mt-1" />
             {field.isTextarea ? (
              <textarea
               name={field.name}
               placeholder={field.placeholder}
               value={formData[field.name]}
               onChange={handleChange}
               rows={4}
               className="flex-1 bg-transparent outline-none resize-none"
              />
             ) : (
              <input
               name={field.name}
               placeholder={field.placeholder}
               value={formData[field.name]}
               onChange={handleChange}
               className="flex-1 bg-transparent outline-none"
              />
             )}
            </div>
            {errors[field.name] && (
             <p className="text-red-500 text-sm mt-1 flex gap-1">
              <AlertCircle className="w-4 h-4" /> {errors[field.name]}
             </p>
            )}
           </div>
          ))}
         </motion.div>
        )}
       </AnimatePresence>

       {/* Navigation */}
       <div className="flex justify-between mt-8">
        {step > 1 && (
         <motion.button
          type="button"
          onClick={prevStep}
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 text-indigo-600 border border-indigo-600 rounded-xl font-semibold"
         >
          Précédent
         </motion.button>
        )}
        <motion.button
         type="button"
         onClick={step < 3 ? nextStep : handleSubmit}
         disabled={!isStepValid() || isSubmitting}
         whileHover={isStepValid() ? { scale: 1.05 } : {}}
         className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${isStepValid()
          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-black shadow-md"
          : "bg-blue-300 text-gray-500 cursor-not-allowed"
          }`}
        >
         {isSubmitting ? "Envoi..." : step < 3 ? "Suivant" : "Envoyer"} <Send className="w-5 h-5" />
        </motion.button>
       </div>
      </div>
     </motion.div>

     {/* Sidebar */}
     <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.4 }}
      className="space-y-8"
     >
      <div className="bg-blue-500 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
       <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <PhoneCall className="w-6 h-6 text-blue-600" /> Contact Direct
       </h3>
       <div className="space-y-4">
        <div className="flex items-center gap-3 p-3 bg-blue-500 rounded-xl">
         <Phone className="w-5 h-5 text-blue-600" />
         <div>
          <p className="font-semibold">Appel gratuit</p>
          <p className="text-sm text-gray-100">+237 6 90 46 18 30</p>
          <p className="text-sm text-gray-100">+237 6 40 16 29 51</p>
         </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-black rounded-xl">
         <Mail className="w-5 h-5 text-green-600" />
         <div>
          <p className="font-semibold">Email</p>
          <p className="text-sm text-gray-600">omiietech@gmail.com</p>
         </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-black rounded-xl">
         <Clock className="w-5 h-5 text-purple-600" />
         <div>
          <p className="font-semibold">Support</p>
          <p className="text-sm text-gray-600">24/7 - Réponse 1h</p>
         </div>
        </div>
       </div>
      </div>

      <div className="bg-[#204e7f] shadow-lg backdrop-blur-xl rounded-3xl p-6 border border-white/20">
       <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <MapPin className="w-6 h-6 text-green-600" /> Nos Bureaux
       </h3>
       <div className="space-y-3">
        <p className="flex items-center gap-2">
         <MapPin className="w-4 h-4" /> Yaoundé - Centre Administratif
        </p>
        <p className="flex items-center gap-2">
         <MapPin className="w-4 h-4" /> Bafoussam - Centre ville
        </p>
        <p className="text-sm text-white">Livraison nationale incluse</p>
       </div>
      </div>
     </motion.div>
    </div>
   </div>

   {/* Succès */}
   <AnimatePresence>
    {success && (
     <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
     >
      <motion.div className=" rounded-3xl p-12 text-center shadow-2xl max-w-md w-full mx-4 relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 opacity-10" />
       <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6 drop-shadow-2xl" />
       <h3 className="text-3xl font-bold text-gray-800 mb-4">PARFAIT ! 🎉</h3>
       <p className="text-lg text-gray-600 mb-8">
        Message reçu ! Réponse sous 1h.
       </p>
       <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-green-400-700-100 p-4 rounded-full text-green-700 font-semibold"
       >
        📧 {formData.email}
       </motion.div>
      </motion.div>
     </motion.div>
    )}
   </AnimatePresence>
  </section>
 );
}
