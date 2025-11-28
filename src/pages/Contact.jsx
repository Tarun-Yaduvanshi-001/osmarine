import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // NOTE: You must sign up at emailjs.com to get these IDs
    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY'
    emailjs.sendForm('service_giv9d89', 'template_s2upnds', form.current, 'DaazGoaO9Q7s65oU1')
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <div className="pt-20 min-h-screen bg-sand-100">
      
      {/* Header */}
      <div className="bg-marine-900 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Get In Touch</h1>
        <p className="text-gold-500">We are available 24/7 for your queries.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
        
        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-marine-900 mb-6">Our Locations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Dubai (HQ)', 'Singapore', 'India', 'Egypt', 'Turkey'].map(loc => (
                <div key={loc} className="flex items-center gap-2 text-marine-700 font-medium">
                  <MapPin size={18} className="text-gold-500" /> {loc}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gold-500">
             <h3 className="font-bold text-lg mb-4">Head Office</h3>
             <p className="text-gray-600 mb-2">123 Maritime Tower, Jumeirah Lake Towers</p>
             <p className="text-gray-600 mb-2">Dubai, United Arab Emirates</p>
             <p className="text-marine-900 font-bold mt-4 flex items-center gap-2"><Phone size={16}/> +971 50 123 4567</p>
             <p className="text-marine-900 font-bold flex items-center gap-2"><Mail size={16}/> info@oraclestar.com</p>
          </div>

          {/* Embedded Google Map (Placeholder Coords) */}
          <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28888.243542245!2d55.132!3d25.078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA0JzQ4LjAiTiA1NcKwMDgnMDguMCJF!5e0!3m2!1sen!2sae!4v1625000000000!5m2!1sen!2sae" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-2xl font-bold text-marine-900 mb-6">Send a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input type="text" name="user_name" required className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-marine-700 bg-sand-100/30" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" name="user_email" required className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-marine-700 bg-sand-100/30" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea name="message" rows="5" required className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-marine-700 bg-sand-100/30"></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-marine-900 text-white py-4 rounded font-bold hover:bg-marine-700 transition flex items-center justify-center gap-2"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>
            {status === 'success' && <p className="text-green-600 text-center">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-600 text-center">Failed to send. Please try again.</p>}
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;