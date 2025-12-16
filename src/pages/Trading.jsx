import React from 'react';
import { motion } from 'framer-motion';
import { Container, Truck, Globe, Ship, Anchor } from 'lucide-react';
import tradeHeaderImg from '../assets/trading_header_image.webp';
import tradingLogisticsImg from '../assets/trading_logistics.jpg';

import SEO from '../components/SEO';

const Trading = () => {
  return (
    <div className="min-h-screen bg-sand-100 ">

      <SEO 
        title="Global Trading & Logistics" 
        description="Expert marine procurement and global logistics solutions. We handle customs, freight forwarding, and last-mile delivery for ship spares worldwide."
        keywords="marine logistics, ship spares procurement, global trading, customs clearance, freight forwarding, port delivery"
        url="/trading"
      />

      {/* Header with Image Background */}
      <div className="relative min-h-[60vh] pt-32 pb-20 lg:pt-40 lg:pb-32 flex items-center justify-center">
          <div className="absolute inset-0">
              <img 
                  src={tradeHeaderImg}
                  alt="International marine trading and global logistics operations" 
                  className="w-full h-full object-cover"
              />
              <div className="header-overlay"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-tight font-serif">Global Trading</h1>
              <p className="text-xl md:text-2xl text-gold-300 font-light font-serif">Export. Import. Seamless Supply Chain.</p>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 overflow-x-hidden">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
            className="space-y-8"
          >
            <div>
                <h3 className="text-gold-500 font-bold uppercase tracking-widest mb-2">Logistics Solutions</h3>
                <h2 className="text-4xl font-extrabold text-marine-900 mb-6">Connecting Oceans & Ports</h2>
            </div>
            <p className="text-marine-900/80 text-lg leading-relaxed">
              Our trading division specializes in the procurement and movement of critical marine equipment and spares across borders. We navigate the complexities of international customs, freight forwarding, and last-mile delivery to ensure your vessel receives what it needs, when it needs it.
            </p>
            
            <div className="grid gap-4">
              <TradingFeature icon={<Container />} title="Bulk & Container Shipping" desc="Efficient handling of large volume orders." />
              <TradingFeature icon={<Truck />} title="Port-to-Deck Delivery" desc="Swift last-mile logistics directly to your vessel." />
              <TradingFeature icon={<Globe />} title="Global Sourcing Network" desc="Procuring hard-to-find spares from around the world." />
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
             className="relative"
          >
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gold-500/20 rounded-3xl -z-10 transform translate-x-8 -translate-y-8"></div>
            <img 
              src={tradingLogisticsImg} 
              alt="Global ship spares logistics and freight forwarding container" 
              className="rounded-3xl shadow-2xl border-4 border-white z-10 relative"
            />
             <div className="absolute -bottom-10 -left-10 bg-marine-900 p-6 rounded-2xl shadow-xl text-white flex items-center gap-4 z-20 animate-float">
                <Anchor size={40} className="text-gold-500" />
                <div>
                    <h4 className="font-bold text-xl">Reliable Partner</h4>
                    <p className="text-sm text-marine-300">Trusted by major fleets.</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const TradingFeature = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md border-l-4 border-gold-500 transition-all hover:shadow-lg hover:translate-x-2">
    <div className="text-marine-700 bg-marine-300/20 p-3 rounded-full shrink-0">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h4 className="font-bold text-xl text-marine-900 mb-1">{title}</h4>
      <p className="text-marine-900/70">{desc}</p>
    </div>
  </div>
);

export default Trading;