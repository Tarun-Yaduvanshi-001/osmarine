import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Anchor, Globe, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/hero-ship-video.mp4';

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-screen w-full">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-marine-900/90 to-marine-700/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
          >
            ORACLE STAR <br /> <span className="text-marine-300 text-3xl md:text-5xl">MARINE AND TRADING LLC</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-sand-100 max-w-2xl mb-8"
          >
            Your Global Partner in Marine Supply, Technical Services, and Logistics.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4"
          >
            <Link to="/contact" className="px-8 py-3 bg-gold-500 text-marine-900 font-bold rounded hover:bg-white transition duration-300">
              Contact Us
            </Link>
            <Link to="/services" className="px-8 py-3 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-marine-900 transition duration-300">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-marine-900 mb-6">Navigating Excellence</h2>
          <p className="text-marine-700 max-w-3xl mx-auto mb-12 text-lg">
            Oracle Star Marine is dedicated to providing top-tier marine stores, spare parts, and technical solutions globally. With our headquarters in Dubai and branches worldwide, we ensure your vessels keep sailing smoothly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Anchor size={40} />, title: "Technical Stores", desc: "Deck, Engine, and Cabin stores supplied with precision." },
              { icon: <Globe size={40} />, title: "Global Logistics", desc: "Seamless import/export and last-mile delivery to vessels." },
              { icon: <Package size={40} />, title: "Spare Parts", desc: "OEM and genuine spares for Main and Aux engines." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-xl border-b-4 border-gold-500"
              >
                <div className="text-marine-900 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-marine-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP PREVIEW */}
      <section className="py-20 bg-marine-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gold-500 mb-6">Global Presence</h2>
            <p className="mb-6 text-marine-300">
              Operating strategically from 5 key maritime hubs. We are where your ship is.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2"><ArrowRight size={16} className="text-gold-500"/> Dubai (HQ)</li>
              <li className="flex items-center gap-2"><ArrowRight size={16} className="text-gold-500"/> Singapore</li>
              <li className="flex items-center gap-2"><ArrowRight size={16} className="text-gold-500"/> Turkey</li>
              <li className="flex items-center gap-2"><ArrowRight size={16} className="text-gold-500"/> Egypt</li>
              <li className="flex items-center gap-2"><ArrowRight size={16} className="text-gold-500"/> India</li>
            </ul>
            <Link to="/contact" className="text-gold-500 hover:text-white underline">View on Map &rarr;</Link>
          </div>
          <div className="flex-1 h-64 w-full bg-marine-700/30 rounded-lg flex items-center justify-center border border-marine-300/30">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28888.243542245!2d55.132!3d25.078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA0JzQ4LjAiTiA1NcKwMDgnMDguMCJF!5e0!3m2!1sen!2sae!4v1625000000000!5m2!1sen!2sae" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;