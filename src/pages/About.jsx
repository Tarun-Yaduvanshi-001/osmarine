import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Compass } from 'lucide-react';
import aboutHeaderImg from '../assets/about_header_image.jpg';
import aboutImg from '../assets/about.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-sand-100">
      {/* Header with Image Background */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
              <img 
                  src={aboutHeaderImg} 
                  alt="About Us Header" 
                  className="w-full h-full object-cover"
              />
              <div className="header-overlay"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-tight">About Us</h1>
              <p className="text-xl md:text-2xl text-gold-300 font-light">Commitment. Quality. Reliability across the oceans.</p>
          </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 space-y-20">
        
        {/* Background Section with Image Split */}
        <motion.section 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-2xl shadow-xl"
        >
          <div>
            <h3 className="text-gold-500 font-bold uppercase tracking-widest mb-2">Our Story</h3>
            <h2 className="text-3xl font-bold text-marine-900 mb-6">Driving Maritime Efficiency</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Oracle Star Marine and Trading LLC was established to bridge the gap between quality marine supplies and efficient logistics. With years of experience in the maritime industry, we understand the critical nature of vessel operations. 
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
                Our team is comprised of marine engineers and logistics experts dedicated to serving vessels with speed and precision, ensuring you receive the right parts, at the right time, anywhere in the world.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <img 
                  src={aboutImg}
                  alt="Marine Engineers" 
                  className="w-full h-full object-cover"
              />
               <div className="absolute inset-0 bg-marine-900/20"></div>
          </div>
        </motion.section>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
             whileHover={{ translateY: -10 }}
             className="bg-gradient-to-br from-marine-900 to-marine-700 text-white p-10 rounded-2xl shadow-lg relative overflow-hidden"
          >
            <Compass size={60} className="text-marine-300 opacity-20 absolute top-4 right-4" />
            <h3 className="text-2xl font-bold mb-4 text-gold-300 flex items-center gap-3"><Target /> Our Vision</h3>
            <p className="text-lg leading-relaxed opacity-90">To be the world's most trusted partner in marine supply and technical services, recognized for our integrity, innovation, and operational excellence.</p>
          </motion.div>
          <motion.div 
             whileHover={{ translateY: -10 }}
             className="bg-white text-marine-900 p-10 rounded-2xl shadow-lg border-t-4 border-gold-500 relative overflow-hidden"
          >
            <Compass size={60} className="text-gold-500 opacity-10 absolute top-4 right-4" />
            <h3 className="text-2xl font-bold mb-4 text-gold-500 flex items-center gap-3"><Compass /> Our Mission</h3>
            <p className="text-lg leading-relaxed">To deliver high-quality spares, stores, and services 24/7, ensuring our clients' vessels experience zero downtime due to supply chain delays.</p>
          </motion.div>
        </div>

        {/* Why Choose Us Grid */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-marine-900 mb-12">Why Partner With Us?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
             {[
                 {text: "24/7 Global Availability", delay: 0},
                 {text: "Wide Global Network", delay: 0.1},
                 {text: "Competitive Pricing", delay: 0.2},
                 {text: "Expert Technical Team", delay: 0.3},
                 {text: "Genuine OEM Spares", delay: 0.4},
                 {text: "Fast Customs Clearance", delay: 0.5}
             ].map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: item.delay }}
                 viewport={{ once: true }}
                 className="flex flex-col items-center justify-center gap-3 bg-white p-6 rounded-xl shadow-md border-b-4 border-transparent hover:border-gold-500 transition-all duration-300 group"
               >
                 <CheckCircle size={32} className="text-marine-700 group-hover:text-gold-500 transition-colors" />
                 <span className="font-bold text-lg text-marine-900">{item.text}</span>
               </motion.div>
             ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;