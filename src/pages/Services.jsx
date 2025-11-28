import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, ShoppingCart, Settings, Anchor, Zap, Box, Droplet, PenTool } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('sales'); // 'sales' or 'services'

  // Data Structure
  const salesData = {
    stores: [
      { id: 'A.1', name: "Engine Stores", icon: <Settings /> },
      { id: 'A.2', name: "Deck Stores", icon: <Anchor /> },
      { id: 'A.3', name: "Electrical Stores", icon: <Zap /> },
      { id: 'A.4', name: "Cabin Stores", icon: <Box /> },
      { id: 'A.5', name: "Provision Stores", icon: <ShoppingCart /> },
    ],
    spares: [
      { id: 'B.1', name: "Main Engine", icon: <Settings /> },
      { id: 'B.2', name: "Auxiliary Engine", icon: <Settings /> },
      { id: 'B.3', name: "Main Air Compressor", icon: <Wrench /> },
      { id: 'B.4', name: "Boiler", icon: <Droplet /> },
      { id: 'B.5', name: "Purifiers", icon: <Droplet /> },
      { id: 'B.6', name: "Fresh Water Generator", icon: <Droplet /> },
      { id: 'B.7', name: "Deck Hydraulic Machinery", icon: <Anchor /> },
      { id: 'B.8', name: "Cargo Cranes", icon: <PenTool /> },
    ]
  };

  const servicesData = [
    { id: 'C.1', name: "Main Engine Overhaul", icon: <Settings />, desc: "Complete overhaul and maintenance." },
    { id: 'C.2', name: "Auxiliary Engine Overhaul", icon: <Settings />, desc: "Routine checks and repair." },
    { id: 'C.3', name: "Deck Hydraulic Machines", icon: <Anchor />, desc: "Winch and windlass servicing." },
    { id: 'C.4', name: "Fabrication Jobs", icon: <PenTool />, desc: "Custom welding and steel work." },
    { id: 'C.5', name: "Safety Items Inspection", icon: <Zap />, desc: "Fire fighting and LSA appliances." },
    { id: 'C.6', name: "Calibration Services", icon: <Wrench />, desc: "Instrumentation and sensors." },
    { id: 'C.7', name: "Other Services", icon: <Box />, desc: "General ship repairs." },
  ];

  return (
    <div className="pt-20 min-h-screen bg-sand-100">
      
      {/* Header */}
      <div className="bg-marine-700 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Our Solutions</h1>
        <p className="text-marine-300">Comprehensive Sales & Technical Services</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center -mt-8 relative z-10 px-4">
        <div className="bg-white p-2 rounded-full shadow-lg flex gap-2">
          <button 
            onClick={() => setActiveTab('sales')}
            className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'sales' ? 'bg-marine-900 text-gold-500' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            Product Sales
          </button>
          <button 
            onClick={() => setActiveTab('services')}
            className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'services' ? 'bg-marine-900 text-gold-500' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            Technical Services
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          
          {/* CATEGORY 1: SALES */}
          {activeTab === 'sales' && (
            <motion.div 
              key="sales"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-marine-900 mb-6 border-b-2 border-gold-500 inline-block">A. Marine Stores</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {salesData.stores.map((item) => (
                    <ServiceCard key={item.id} item={item} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-marine-900 mb-6 border-b-2 border-gold-500 inline-block">B. Technical Spares</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {salesData.spares.map((item) => (
                    <ServiceCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* CATEGORY 2: SERVICES */}
          {activeTab === 'services' && (
            <motion.div 
              key="services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
               <h2 className="text-2xl font-bold text-marine-900 mb-6 border-b-2 border-gold-500 inline-block">C. Repair & Maintenance</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {servicesData.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300">
                      <div className="h-40 bg-marine-900 flex items-center justify-center overflow-hidden">
                        {/* Image Placeholder - use Unsplash random marine images */}
                        <img 
                          src={`https://images.unsplash.com/photo-1590233083753-43c3c3a9d701?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW5lJTIwZW5naW5lcmluZ3xlbnwwfHwwfHx8MA%3D%3D`} 
                          alt={item.name} 
                          className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition duration-500"
                        />
                      </div>
                      <div className="p-6 relative">
                        <div className="absolute -top-8 right-6 bg-gold-500 p-3 rounded-full text-white shadow-md">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-marine-900 mb-2">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.desc || "Professional marine standard service."}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};

const ServiceCard = ({ item }) => (
  <motion.div 
    whileHover={{ y: -5, borderColor: '#AB9072' }}
    className="bg-white p-6 rounded-lg shadow border-2 border-transparent text-center flex flex-col items-center justify-center gap-3 cursor-pointer"
  >
    <div className="text-marine-700 bg-sand-100 p-4 rounded-full">
      {item.icon}
    </div>
    <h3 className="font-semibold text-marine-900">{item.name}</h3>
  </motion.div>
);

export default Services;