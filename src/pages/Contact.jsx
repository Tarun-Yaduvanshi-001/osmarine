import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Send, Clock,Anchor } from 'lucide-react';
import contactHeaderImg from '../assets/contact_header_image.webp';
import brochurePDF from '../assets/OS_Marine_Brochure.pdf';

import SEO from '../components/SEO';


const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm('service_orlpvlq', 'template_p8adn8b', form.current, 'WAUDDLBmX2sO3GjGF')
      .then(() => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus(''), 5000);
      }, () => {
          setStatus('error');
      });
  };

  return (
    <div className="min-h-screen bg-sand-100">

      <SEO 
        title="Contact Us" 
        description="Get in touch with Oracle Star Marine. Headquartered in Dubai with branches in Singapore, India, Egypt, and Turkey. Available 24/7 for vessel support."
        keywords="contact oracle star marine, marine services dubai contact, ship supplier email, marine support 24/7, dubai maritime companies"
        url="/contact"
      />
      
       {/* Header with Image Background */}
       <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
              <img 
                  src={contactHeaderImg}
                  alt="Contact Oracle Star Marine 24/7 support team" 
                  className="w-full h-full object-cover"
              />
              <div className="header-overlay"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-tight font-serif">Get In Touch</h1>
              <p className="text-xl md:text-2xl text-gold-300 font-light font-serif">We are available 24/7 for your vessel requirements.</p>
          </div>
          <a href={brochurePDF} download="OS Marine Brochure" target="_blank">
            <button className="bg-marine-900 h-21 w-21 md:h-27 md:w-27 text-[12px] md:text-sm border-5 border-white font-bold rounded-full right-1 bottom-1  mt-5 hover:scale-110 opacity-100 hover:opacity-100 md:right-5 absolute text-gold-300 md:bottom-5 animate-bounce z-10"><Anchor className="m-auto"></Anchor>Download Brochure</button>
          </a>
      </div>


      <div className="max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="space-y-10">
          <div>
            <h3 className="text-gold-500 font-bold uppercase tracking-widest mb-2">Global Reach</h3>
            <h2 className="text-3xl font-extrabold text-marine-900 mb-6">Our Locations</h2>
            <div className="grid grid-cols-2 gap-4">
              {['Dubai (HQ)', 'Singapore', 'India', 'Egypt', 'Turkey'].map(loc => (
                <div key={loc} className="flex items-center gap-3 text-marine-900 font-bold bg-white p-4 rounded-lg shadow-sm border-l-4 border-marine-700">
                  <MapPin size={20} className="text-gold-500" /> {loc}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-marine-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10">
                 <MapPin size={150} />
             </div>
             <h3 className="font-bold text-2xl mb-6 text-gold-500">Head Office</h3>
             {/* <p className="text-marine-300 mb-2 text-lg">123 Maritime Tower, Jumeirah Lake Towers</p> */}
             <p className="text-marine-300 mb-8 text-lg">Dubai, United Arab Emirates</p>
             <div className="space-y-4">
                <p className="font-bold flex items-center gap-4 text-lg"><Phone size={20} className="text-gold-500"/> +971 507865241</p>
                <p className="font-bold flex items-center gap-4 text-lg"><Mail size={20} className="text-gold-500"/> info@osmarine.ae</p>
                <p className="font-bold flex items-center gap-4 text-lg"><Clock size={20} className="text-gold-500"/> 24/7 Support available</p>
             </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white px-10 py-5 rounded-3xl shadow-2xl border-t-8 border-gold-500">
          <h2 className="text-3xl font-extrabold text-marine-900 mb-8">Send a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                <label className="block text-sm font-bold text-marine-900 uppercase tracking-wider mb-2">Your Name</label>
                <input type="text" name="user_name" required className="w-full p-4 border-2 border-sand-100 rounded-xl focus:outline-none focus:border-marine-700 bg-sand-100/30 transition-colors" placeholder="Ex -Sheikh Hussain" />
                </div>
                <div>
                <label className="block text-sm font-bold text-marine-900 uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" name="user_email" required className="w-full p-4 border-2 border-sand-100 rounded-xl focus:outline-none focus:border-marine-700 bg-sand-100/30 transition-colors" placeholder="username@domain.com" />
                </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-marine-900 uppercase tracking-wider mb-2">Subject / Enquiry Type</label>
              <input type="text" name="subject" required className="w-full p-4 border-2 border-sand-100 rounded-xl focus:outline-none focus:border-marine-700 bg-sand-100/30 transition-colors" placeholder="e.g., Engine Spares Enquiry" />
            </div>
            <div>
              <label className="block text-sm font-bold text-marine-900 uppercase tracking-wider mb-2">Message</label>
              <textarea name="message" rows="5" required className="w-full p-4 border-2 border-sand-100 rounded-xl focus:outline-none focus:border-marine-700 bg-sand-100/30 transition-colors resize-none" placeholder="How can we help your vessel?"></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gold-500 text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-marine-900 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:scale-95"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={20} />
            </button>
            {status === 'success' && <p className="text-green-600 font-bold text-center bg-green-100 p-3 rounded-lg">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-600 font-bold text-center bg-red-100 p-3 rounded-lg">Failed to send. Please try again.</p>}
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;