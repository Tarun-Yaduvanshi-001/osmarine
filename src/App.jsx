// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Preloader from './components/Preloader';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Trading from './pages/Trading';
import Contact from './pages/Contact';

// Import assets to preload directly to ensure paths are correct
//headr images
import heroVideo from './assets/hero_video.mp4';
import servicesHeaderImg from './assets/services_header_image.jpg';
import contactHeaderImg from './assets/contact_header_image.jpg';
import tradingHeaderImg from './assets/trading_header_image.jpg';
import aboutHeaderImg from './assets/about_header_image.jpg';

//logos and footer ring
import osmarineLogoImg from './assets/osmarine_logo.png';
import osmarineLogoNameImg from './assets/osmarine_logo_name.png';
import footerRingImg from '/osmarine_logo_ring.png';

//page images
import aboutImg from './assets/about.jpg';
import marineStoresImg from './assets/marine_stores.jpg';
import technicalSparesImg from './assets/technical_spares.jpg';
import technicalServicesImg from './assets/technical_services.jpg';
import tradingLogisticsImg from './assets/trading_logistics.jpg';


//Home page service images
import service1Img from './assets/technical_spares_supply.jpg';
import service2Img from './assets/stores_supply.jpg';
import service3Img from './assets/machinery_overhaul.jpg';
import service4Img from './assets/ship_repair.jpg';
import service5Img from './assets/lsa_ffa_inspection.jpg';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      // 1. Preload Images
      const imagePromises = [
        servicesHeaderImg,
        contactHeaderImg,
        tradingHeaderImg,
        aboutHeaderImg,
        footerRingImg,
        osmarineLogoImg,
        osmarineLogoNameImg,
        aboutImg,
        marineStoresImg,
        technicalSparesImg,
        technicalServicesImg,
        tradingLogisticsImg,
        service1Img,
        service2Img,
        service3Img,
        service4Img,
        service5Img
      ].map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; 
        });
      });

      // 2. Preload Video
      const videoPromise = new Promise((resolve) => {
        const video = document.createElement('video');
        video.src = heroVideo;
        video.onloadeddata = resolve;
        video.onerror = resolve; 
      });

      // 3. Minimum Wait Time 
      const timerPromise = new Promise((resolve) => setTimeout(resolve, 2000));

      await Promise.all([
        ...imagePromises, 
        videoPromise, 
        timerPromise
      ]);

      setIsLoading(false);
    };

    loadAssets();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/trading" element={<Trading />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <FloatingWhatsApp />
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;