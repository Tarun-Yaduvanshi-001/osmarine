import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, ShoppingCart, Settings, Anchor, Zap, Box, Droplet, PenTool, Ship, CheckCircle2 } from 'lucide-react';
import servicesHeaderImg from '../assets/services_header_image.jpg';

const Services = () => {
  const [activeTab, setActiveTab] = useState('sales');

  // Data Structure
  const salesData = {
    stores: [
      { id: 'A.1', name: "Engine Stores", icon: <Settings /> },
      { id: 'A.2', name: "Deck Stores", icon: <Anchor /> },
      { id: 'A.3', name: "Electrical Stores", icon: <Zap /> },
      { id: 'A.4', name: "Cabin Stores", icon: <Box /> },
      { id: 'A.5', name: "Provision Stores", icon: <ShoppingCart /> },
      { id: 'A.6', name: "Safety Stores", icon: <LifeBuoyIcon /> },
    ],
    spares: [
      { id: 'B.1', name: "Main Engine Spares", icon: <Ship /> },
      { id: 'B.2', name: "Auxiliary Engine", icon: <Settings /> },
      { id: 'B.3', name: "Main Air Compressor", icon: <Wrench /> },
      { id: 'B.4', name: "Boiler Spares", icon: <Droplet /> },
      { id: 'B.5', name: "Purifiers/Separators", icon: <Droplet /> },
      { id: 'B.6', name: "Fresh Water Generator", icon: <Droplet /> },
      { id: 'B.7', name: "Deck Hydraulics", icon: <Anchor /> },
      { id: 'B.8', name: "Cargo Cranes", icon: <PenTool /> },
    ]
  };

  const servicesData = [
    { id: 'C.1', name: "Main Engine Overhaul", icon: <Settings />, desc: "Complete overhaul & liner renewal." },
    { id: 'C.2', name: "Auxiliary Engine Overhaul", icon: <Settings />, desc: "Routine checks & decarbonization." },
    { id: 'C.3', name: "Deck Hydraulic Machines", icon: <Anchor />, desc: "Winch & windlass servicing." },
    { id: 'C.4', name: "Fabrication Jobs", icon: <PenTool />, desc: "Steel renewal & pipe fabrication." },
    { id: 'C.5', name: "LSA/FFA Inspection", icon: <Zap />, desc: "Annual safety appliance servicing." },
    { id: 'C.6', name: "Calibration Services", icon: <Wrench />, desc: "Sensors & UTI tape calibration." },
    { id: 'C.7', name: "Hull Cleaning", icon: <Ship />, desc: "Underwater hull & prop polishing." },
  ];

  return (
    <div className="min-h-screen bg-sand-100">
      
      {/* Header with Image Background */}
      <div className="relative pt-32 pb-28 lg:pt-40 lg:pb-36 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
              <img 
                  src= {servicesHeaderImg}
                  alt="Services Header" 
                  className="w-full h-full object-cover"
              />
              <div className="header-overlay"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-tight">Our Solutions</h1>
              <p className="text-xl md:text-2xl text-gold-300 font-light">Comprehensive Sales & Technical Excellence</p>
          </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center -mt-10 relative z-20 px-4">
        <div className="bg-white p-2 rounded-full shadow-2xl flex gap-2 border border-marine-300/30">
          <button 
            onClick={() => setActiveTab('sales')}
            className={`px-6 md:px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'sales' ? 'bg-marine-900 text-gold-500 shadow-lg' : 'text-marine-700 hover:bg-marine-300/20'}`}
          >
            Product Sales
          </button>
          <button 
            onClick={() => setActiveTab('services')}
            className={`px-6 md:px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'services' ? 'bg-marine-900 text-gold-500 shadow-lg' : 'text-marine-700 hover:bg-marine-300/20'}`}
          >
            Technical Services
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <AnimatePresence mode="wait">
          
          {/* === CATEGORY 1: SALES === */}
          {activeTab === 'sales' && (
            <motion.div 
              key="sales"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-24"
            >
              {/* SECTION A: Marine Stores (Image Left, Content Right) */}
              <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-6 shadow-xl overflow-hidden">
                {/* Group Image */}
                <div className="relative h-[300px] lg:h-[500px] rounded-2xl overflow-hidden group">
                    <img 
                        src="https://images.unsplash.com/photo-1605218427306-635ba2439715?w=800&auto=format&fit=crop&q=80" 
                        alt="Marine Stores" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-marine-900/30 group-hover:bg-marine-900/10 transition-colors"></div>
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg border-l-4 border-gold-500">
                        <h3 className="text-2xl font-extrabold text-marine-900 uppercase">Marine Stores</h3>
                        <p className="text-sm text-marine-700 font-semibold">Quality Provisions & Consumables</p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="lg:pr-8">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-marine-900 mb-4">Complete Store Supply</h2>
                        <p className="text-marine-900/70 leading-relaxed">
                            We supply a comprehensive range of high-quality marine stores to vessels of all types. From engine room consumables to fresh provisions, we ensure your crew has everything they need.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {salesData.stores.map((item) => (
                            <ListItem key={item.id} icon={item.icon} text={item.name} />
                        ))}
                    </div>
                </div>
              </div>

              {/* SECTION B: Technical Spares (Content Left, Image Right) */}
              <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-6 shadow-xl overflow-hidden">
                 {/* Content Grid (First on Desktop) */}
                 <div className="lg:pl-8 order-2 lg:order-1">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-marine-900 mb-4">Technical Spares</h2>
                        <p className="text-marine-900/70 leading-relaxed">
                            Minimize downtime with our genuine and OEM spare parts. We specialize in sourcing hard-to-find components for Main Engines, Aux Engines, and critical deck machinery.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {salesData.spares.map((item) => (
                            <ListItem key={item.id} icon={item.icon} text={item.name} />
                        ))}
                    </div>
                </div>

                {/* Group Image */}
                <div className="relative h-[300px] lg:h-[500px] rounded-2xl overflow-hidden group order-1 lg:order-2">
                    <img 
                        src="https://images.unsplash.com/photo-1565610261709-54316d96a798?w=800&auto=format&fit=crop&q=80" 
                        alt="Technical Spares" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-marine-900/30 group-hover:bg-marine-900/10 transition-colors"></div>
                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg border-r-4 border-gold-500 text-right">
                        <h3 className="text-2xl font-extrabold text-marine-900 uppercase">Engine Spares</h3>
                        <p className="text-sm text-marine-700 font-semibold">OEM & Genuine Parts</p>
                    </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* === CATEGORY 2: SERVICES === */}
          {activeTab === 'services' && (
            <motion.div 
              key="services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
               <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Master Image for Services */}
                    <div className="sticky top-24">
                        <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                            <img 
                                src="https://images.unsplash.com/photo-1621261978485-850655731739?w=800&auto=format&fit=crop&q=80" 
                                alt="Technical Services" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                             <div className="absolute inset-0 bg-gradient-to-t from-marine-900/90 via-transparent to-transparent"></div>
                             <div className="absolute bottom-0 left-0 p-8 text-white">
                                 <h2 className="text-4xl font-extrabold uppercase mb-2">Technical Services</h2>
                                 <p className="text-gold-300 text-lg">Expert repair teams available 24/7 globally.</p>
                             </div>
                        </div>
                    </div>

                    {/* Detailed List */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-sand-100">
                        <h3 className="text-gold-500 font-bold uppercase tracking-widest mb-6">Our Capabilities</h3>
                        <div className="space-y-6">
                            {servicesData.map((service) => (
                                <motion.div 
                                    key={service.id}
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-sand-100/50 transition-colors group cursor-default"
                                >
                                    <div className="bg-marine-900 text-gold-500 p-3 rounded-lg shrink-0 group-hover:scale-110 transition-transform">
                                        {React.cloneElement(service.icon, { size: 24 })}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-marine-900">{service.name}</h4>
                                        <p className="text-marine-900/60 mt-1">{service.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-8 p-6 bg-marine-700/10 rounded-xl border border-marine-700/30">
                            <p className="text-marine-900 font-semibold italic text-center">
                                "Don't see what you need? We handle custom fabrication and ad-hoc repairs upon request."
                            </p>
                        </div>
                    </div>
               </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};

// Helper Component for List Items (Cards)
const ListItem = ({ icon, text }) => (
  <motion.div 
    whileHover={{ scale: 1.02, backgroundColor: '#F3F4F6' }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center gap-3 p-4 rounded-xl border border-sand-100 bg-sand-100/20 cursor-pointer transition-all hover:border-gold-500/50 hover:shadow-md"
  >
    <div className="text-gold-500">
        {React.cloneElement(icon, { size: 20 })}
    </div>
    <span className="font-bold text-marine-900 text-sm sm:text-base">{text}</span>
  </motion.div>
);

// Icon Helper
const LifeBuoyIcon = (props) => (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="4"/>
      <line x1="4.93" x2="9.17" y1="4.93" y2="9.17"/>
      <line x1="14.83" x2="19.07" y1="14.83" y2="19.07"/>
      <line x1="14.83" x2="19.07" y1="9.17" y2="4.93"/>
      <line x1="14.83" x2="9.17" y1="19.07" y2="14.83"/>
    </svg>
);

export default Services;