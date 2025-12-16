import React from "react";
import { motion } from "framer-motion";
import {
  Anchor,
  Globe,
  Package,
  Wrench,
  Ship,
  LifeBuoy,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/hero_video.mp4";
import heroPoster from "../assets/hero_poster.webp";
import service1Img from "../assets/technical_spares_supply.jpg";
import service2Img from "../assets/stores_supply.jpg";
import service3Img from "../assets/machinery_overhaul.jpg";
import service4Img from "../assets/ship_repair.jpg";
import service5Img from "../assets/lsa_ffa_inspection.jpg";

import SEO from "../components/SEO";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const featuredServices = [
    { 
      title: "Technical Spares Supply", 
      alt: "Supply of technical spares for marine engines",
      icon: <Settings />, 
      img: service1Img 
    },
    { 
      title: "Stores Supply", 
      alt: "Deck, engine, and cabin stores provision supply",
      icon: <ShoppingCart />, 
      img: service2Img 
    },
    { 
      title: "Machinery Overhaul", 
      alt: "Marine machinery and engine overhaul services",
      icon: <Wrench />, 
      img: service3Img 
    },
    { 
      title: "Ship Repair", 
      alt: "Professional ship repair and dry docking services",
      icon: <Ship />, 
      img: service4Img 
    },
    { 
      title: "LSA/FFA Inspection", 
      alt: "Life saving and fire fighting appliance inspection",
      icon: <LifeBuoy />, 
      img: service5Img 
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Oracle Star Marine Services and Trading LLC",
    "image": "https://osmarine.ae/src/assets/osmarine_logo.png",
    "telephone": "+971 507865241",
    "email": "info@osmarine.ae",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.07501,
      "longitude": 55.18876
    },
    "url": "https://osmarine.ae",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.linkedin.com/in/oracle-star-marine-services-and-trading-llc-5025113a0/",
      "https://www.instagram.com/oracle_star_marine/"
    ]
  };

  return (
    <div className="w-full overflow-hidden">
      <SEO
        title="Home"
        description="Oracle Star Marine Services provides top-tier marine stores, spare parts, and technical solutions globally. Headquarter in Dubai, available 24/7."
        keywords="marine supplies, ship repair, technical spares, dubai marine services"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster={heroPoster}
        >
          <source src={heroVideo} />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-marine-900/80 via-marine-900/60 to-marine-700/40 mix-blend-multiply"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-2 drop-shadow-2xl uppercase tracking-tight font-serif">
              Oracle Star
            </h1>
            <h2 className="text-xl md:text-3xl font-bold text-gold-500 uppercase tracking-widest font-serif">
              Marine Services and Trading LLC
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-2xl text-sand-100 max-w-3xl mb-10 font-light leading-relaxed font-serif"
          >
            Your trusted global partner for premier marine supplies, technical
            expertise, and swift logistics solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/services"
              className="px-8 py-4 bg-gold-500 border-2 border-white text-white font-bold uppercase tracking-wider rounded-4xl hover:bg-marine-700 transition duration-300 shadow-lg"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-4xl font-bold uppercase tracking-wider hover:bg-white hover:text-marine-900 focus:bg-white transition duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* NEW FEATURED SERVICES SECTION */}
      <section className="py-24 bg-white relative z-20 -mt-20 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 font-bold uppercase tracking-widest mb-2">
              What We Do
            </span>
            <h2 className="text-4xl font-extrabold text-marine-900">
              Featured Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <div className="absolute inset-0">
                  <img
                    src={service.img}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-marine-900 via-marine-900/60 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end items-start z-10">
                  <div className="bg-gold-500 p-3 rounded-full text-white mb-4 group-hover:bg-marine-700 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-gold-300 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-marine-700 font-bold uppercase tracking-wider hover:text-gold-500 transition"
            >
              View All Services <Wrench size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* BRIEF INTRO */}
      <section className="py-20 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-marine-900 mb-6">
            Navigating Excellence
          </h2>
          <p className="text-marine-900/80 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            Oracle Star Marine is dedicated to providing top-tier marine stores,
            spare parts, and technical solutions globally. With our headquarters
            in Dubai and branches worldwide, we ensure your vessels keep sailing
            smoothly with minimal downtime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Anchor size={40} />,
                title: "Technical Stores",
                desc: "Deck, Engine, and Cabin stores supplied with precision.",
              },
              {
                icon: <Globe size={40} />,
                title: "Global Logistics",
                desc: "Seamless import/export and last-mile delivery to vessels.",
              },
              {
                icon: <Package size={40} />,
                title: "Spare Parts",
                desc: "OEM and genuine spares for Main and Aux engines.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-xl border-b-4 border-gold-500"
              >
                <div className="text-marine-700 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-marine-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

import { ShoppingCart } from "lucide-react";

export default Home;
