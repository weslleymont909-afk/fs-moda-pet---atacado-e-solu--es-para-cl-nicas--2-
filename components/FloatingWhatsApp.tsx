import React from 'react';
import { CONTACT_INFO, getWhatsAppLink } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float bg-white p-3 rounded-full shadow-2xl hover:bg-slate-50 transition-all transform hover:scale-110 flex items-center justify-center animate-bounce duration-1000 border border-slate-100"
      title="Fale Conosco pelo WhatsApp"
    >
      <img 
        src="https://i.postimg.cc/G2KHNfYF/image-removebg-preview-(1).png" 
        alt="WhatsApp Icon" 
        className="w-10 h-10 object-contain"
      />
    </a>
  );
};

export default FloatingWhatsApp;