import React from 'react';
import { motion } from 'framer-motion';
import { Container, Truck, Globe } from 'lucide-react';

const Trading = () => {
  return (
    <div className="pt-20 min-h-screen bg-sand-100">
      <div className="bg-marine-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-gold-500 mb-4">Global Trading</h1>
            <p className="text-xl text-marine-300">Export. Import. Supply.</p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Globe size={120} className="text-marine-700 opacity-50" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-marine-900">Seamless Logistics</h2>
            <p className="text-gray-700 text-lg">
              Our trading division specializes in the procurement and movement of marine equipment across borders. We handle the complexities of customs, freight forwarding, and last-mile delivery to the port.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 bg-white p-4 rounded shadow">
                <Container className="text-gold-500" />
                <span className="font-semibold">Bulk & Container Shipping</span>
              </li>
              <li className="flex items-center gap-4 bg-white p-4 rounded shadow">
                <Truck className="text-gold-500" />
                <span className="font-semibold">Port-to-Deck Delivery</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
             initial={{ x: 50, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             className="bg-marine-700 p-1 rounded-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1494412574643-35d324698428?auto=format&fit=crop&q=80&w=800" 
              alt="Container Ship" 
              className="rounded shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Trading;