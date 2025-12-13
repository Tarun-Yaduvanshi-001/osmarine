import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  const phoneNumber = "+971 507865241"; 
  
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20b858] transition-colors"
      whileHover={{ scale: 1.1 }}
      animate={{ 
        boxShadow: ["0 0 0 0 rgba(37, 211, 102, 0.7)", "0 0 0 20px rgba(37, 211, 102, 0)"] 
      }}
      transition={{ 
        duration: 1, 
        repeat: Infinity 
      }}
    >
      <MessageCircle size={28} fill="white" />
    </motion.a>
  );
};

export default FloatingWhatsApp;