import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-sand-100">
      {/* Header */}
      <div className="bg-marine-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold text-gold-500">About Us</h1>
        <p className="mt-4 text-marine-300">Commitment. Quality. Reliability.</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        
        {/* Background */}
        <motion.section 
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-marine-900 mb-4 border-l-4 border-gold-500 pl-4">Company Background</h2>
          <p className="text-gray-700 leading-relaxed">
            Oracle Star Marine and Trading LLC was established to bridge the gap between quality marine supplies and efficient logistics. With years of experience in the maritime industry, we understand the critical nature of vessel operations. Our team is comprised of marine engineers and logistics experts dedicated to serving vessels with speed and precision.
          </p>
        </motion.section>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-marine-700 text-white p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-3 text-gold-500">Our Vision</h3>
            <p>To be the world's most trusted partner in marine supply and technical services, recognized for our integrity and operational excellence.</p>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-marine-900 text-white p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-3 text-gold-500">Our Mission</h3>
            <p>To deliver high-quality spares, stores, and services 24/7, ensuring our clients' vessels experience zero downtime due to supply chain delays.</p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-3xl font-bold text-center text-marine-900 mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {["24/7 Availability", "Global Network", "Competitive Pricing", "Expert Technical Team", "Genuine Spares", "Fast Customs Clearance"].map((item, idx) => (
               <motion.div 
                 key={idx}
                 whileHover={{ scale: 1.05 }}
                 className="flex items-center gap-3 bg-white p-4 rounded shadow border border-marine-300"
               >
                 <CheckCircle className="text-gold-500" />
                 <span className="font-semibold text-marine-900">{item}</span>
               </motion.div>
             ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;