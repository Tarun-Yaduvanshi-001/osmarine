import React from 'react';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-marine-900 text-sand-100 pt-12 pb-6 border-t-4 border-gold-500">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-marine-300 mb-4">Oracle Star</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Leading Marine Service & Trading provider. Delivering excellence across oceans with premium stores, spares, and technical services.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold text-gold-500 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-marine-300 transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-marine-300 transition">Services</Link></li>
            <li><Link to="/trading" className="hover:text-marine-300 transition">Trading</Link></li>
            <li><Link to="/contact" className="hover:text-marine-300 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-gold-500 mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><MapPin size={16} /> Dubai, UAE (Head Office)</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +971 507865241</li>
            <li className="flex items-center gap-2"><Mail size={16} /> info@osmarine.ae</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold text-gold-500 mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/oracle-star-marine-services-and-trading-llc-5025113a0/" className="hover:text-marine-300" target="_blank"><Linkedin /></a>
            <a href="#" className="hover:text-marine-300" target="_blank"><Facebook /></a>
            <a href="https://www.instagram.com/oracle_star_marine/" className="hover:text-marine-300" target="_blank"><Instagram /></a>
          </div>
        </div>
      </div>
      
      <div className="text-center border-t border-marine-700 pt-6 text-sm opacity-60">
        &copy; {new Date().getFullYear()} Oracle Star Marine and Trading LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;