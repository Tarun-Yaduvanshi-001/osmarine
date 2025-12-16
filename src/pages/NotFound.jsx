// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Anchor, Compass } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const waveText = "PAGE NOT FOUND".split("");

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-marine-950 via-marine-900 to-marine-950 text-white overflow-hidden">
      <SEO title="404 | Page Not Found" />

      {/* Animated Ocean Waves */}
      <motion.div
        className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-marine-800/60 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Floating Compass */}
      <motion.div
        className="absolute top-30 right-10 text-gold-500"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        <Compass size={64} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <Anchor size={96} className="text-gold-500" />
        </motion.div>

        <h1 className="text-7xl font-extrabold font-serif text-gold-500 mb-4">
          404
        </h1>

        {/* Wave-style animated text */}
        <motion.div className="flex justify-center mb-6 space-x-1">
          {waveText.map((char, index) => (
            <motion.span
              key={index}
              className="text-xl font-bold tracking-widest text-marine-300"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                delay: index * 0.05,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <p className="max-w-md mx-auto text-gray-400 mb-10 leading-relaxed">
          You’ve drifted into uncharted waters. The page you’re looking for
          doesn’t exist — but safe passage awaits below.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gold-500 text-marine-950 font-bold uppercase tracking-wider shadow-lg hover:bg-white hover:text-gold-500 transition-all"
          >
            <Anchor size={20} />
            Back to Home
          </Link>
        </motion.div>
      </div>

      {/* Subtle Fog Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-marine-900/30 via-transparent to-marine-900/30"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Sailing Ship Animation */}
      <motion.div
        className="absolute bottom-15 left-[5%] text-gold-500/90"
        animate={{ x: ["10%", "120%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        <svg
          width="180"
          height="100"
          viewBox="0 0 180 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hull */}
          <path d="M20 70 L160 70 L140 90 L40 90 Z" fill="#C9A24D" />
          {/* Mast */}
          <rect x="88" y="20" width="4" height="50" fill="#C9A24D" />
          {/* Sail */}
          <path d="M92 22 L140 60 L92 60 Z" fill="#E5C97A" />
          <path d="M88 22 L40 60 L88 60 Z" fill="#F3E3A3" />
        </svg>
      </motion.div>

    </div>
  );
};

export default NotFound;
