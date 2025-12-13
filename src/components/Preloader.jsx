// src/components/Preloader.jsx
import React from "react";
import { motion } from "framer-motion";
import loaderImg from "/osmarine_logo_ring.png";

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-marine-900 text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <img src={loaderImg} alt="" className="h-25 animate-bounce" />

      <div className="w-64 h-1 bg-marine-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gold-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <p className="mt-4 text-marine-300 font-serif tracking-widest text-md animate-pulse">
        LOADING...
      </p>
    </motion.div>
  );
};

export default Preloader;
