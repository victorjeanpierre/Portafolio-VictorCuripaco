
'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import axios from "axios";
import { useState } from 'react';

export default function ContactBox({ data }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post("/api/contact", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-center  items-center min-h-screen bg-gradient-to-br from-indigo-100 to-white-100 px-4 py-12">
      {/* Imagen de perfil */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-48 h-48 mb-8"
      >
       <Image
        src={data.image}
        alt={data.title}
        layout="fill"
        objectFit="cover"
  className="rounded-full border-2 border-white shadow-lg"
/>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20"></div>
      </motion.div>

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800"
      >
        Contáctame
      </motion.h1>

      {/* Formulario y información de contacto */}
      <div className="grid md:grid-cols-2 gap-5 w-full max-w-6x">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white shadow-xl rounded-lg p-8"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">{data.title}</h2>
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-8"
            >
              <Send className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <p className="text-xl font-semibold text-gray-800">¡Gracias por tu mensaje!</p>
              <p className="text-gray-600 mt-2">Me pondré en contacto contigo pronto.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campos del formulario */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <input
                 type="email"
                 id="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 required
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                 placeholder="tu@email.com"
               />
             </div>
             <div>
               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                 Mensaje
               </label>
               <textarea
                 id="message"
                 name="message"
                 value={formData.message}
                 onChange={handleChange}
                 required
                 rows={4}
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                 placeholder="Tu mensaje aquí..."
               ></textarea>
             </div>
             <motion.button
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               type="submit"
               disabled={isSubmitting}
               className="w-full bg-gradient-to-r from-indigo-600 to-orange-600 text-white py-3 px-6 rounded-md hover:from-indigo-700 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300 flex items-center justify-center"
             >
               {isSubmitting ? (
                 <motion.div
                   animate={{ rotate: 360 }}
                   transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                 >
                   <Send className="w-5 h-5" />
                 </motion.div>
               ) : (
                 <>
                   <Send className="w-5 h-5 mr-2" />
                   Enviar mensaje
                 </>
               )}
             </motion.button>
           </form>
         )}
       </motion.div>

       <motion.div 
         initial={{ opacity: 0, x: 20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, delay: 0.6 }}
         className="bg-white shadow-xl rounded-lg p-8"
       >
         <h2 className="text-2xl font-semibold mb-6 text-gray-800">Información de contacto</h2>
         <div className="space-y-6">
           <div className="flex items-center">
             <Phone className="w-6 h-6 mr-4 text-indigo-600" />
             <span className="text-gray-700">{data.phone}</span>
           </div>
           <div className="flex items-center">
             <Mail className="w-6 h-6 mr-4 text-indigo-600" />
             <span className="text-gray-700">{data.email}</span>
           </div>
           <div className="flex items-center">
             <MapPin className="w-6 h-6 mr-4 text-indigo-600" />
             <span className="text-gray-700">{data.address}</span>
           </div>
         </div>
         <div className="mt-8">
           <h3 className="text-xl font-semibold mb-4 text-gray-800">Hola mi nombre es Victor</h3>
           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
           "Soy estudiante de Ingeniería de Sistemas en la Universidad Nacional de Cañete, con una gran pasión por el diseño y desarrollo de software. Me enfoco en crear soluciones innovadoras y eficientes que mejoren la vida de las personas. Tengo habilidades en desarrollo de aplicaciones web y móviles, diseño de interfaces de usuario (UI/UX), programación en lenguajes como JavaScript, Python, HTML/CSS y manejo de bases de datos y sistemas operativos. Además, tengo experiencia en herramientas de desarrollo como React, Node.js, Next.js, Git, GitHub, Bootstrap, Tailwind CSS, entre otras. Mi objetivo es continuar aprendiendo y mejorando mis habilidades para crear proyectos que impacten positivamente en la comunidad y trabajar en empresas líderes en tecnología e innovación."
                </label>
         </div>
       </motion.div>
     </div>
   </div>
 );
}