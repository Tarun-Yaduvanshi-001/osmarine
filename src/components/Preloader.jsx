// src/components/Preloader.jsx
import React from "react";
import { motion } from "framer-motion";
import logoRing from '/osmarine_logo_ring.webp';

const letters = "OSMARINE".split("");

const container = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      repeat: Infinity,
    },
  },
};

const letterBounce = {
  initial: { y: 0 },
  animate: {
    y: [-2, -18, -2],
    transition: {
      duration: 0.9,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-marine-950 via-marine-900 to-marine-950 text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <img src={logoRing} alt="" className="h-25 mb-5 animate-bounce" />
      {/* Bouncing Letters */}
      <motion.div
        className="flex items-end space-x-1 text-4xl font-serif tracking-widest text-gold-500"
        variants={container}
        animate="animate"
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={letterBounce}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      {/* Line */}
      <div className="mt-2 w-56 h-[3px] bg-marine-600 rounded-full relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Subtitle */}
      <motion.p
        className="mt-6 text-lg font-bold tracking-[0.3em] text-marine-300"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        LOADING...
      </motion.p>

      {/* Ocean Glow */}
      <motion.div
        className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-marine-800/40 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </motion.div>
  );
};

export default Preloader;