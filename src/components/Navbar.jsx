import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/osmarine_logo.png";
import logoName from "../assets/osmarine_logo_name.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Trading", path: "/trading" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#edf9fe]/95 backdrop-blur-md shadow-lg py-2"
          : "bg-[#edf9fe]/90 backdrop-blur-sm py-2 "
      }`}
    >
      <div className="flex justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center w-full">
          {/* Logo Section */}
          <div>
            <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative h-16 w-16 md:h-20 md:w-20 transition-transform duration-300 group-hover:scale-105">
              <img
                src={logoImg}
                alt="Oracle Star Marine Logo"
                className="h-full w-full object-contain drop-shadow-sm"
              />
            </div>
            <div className="hidden  md:block flex flex-col">
              <img
              src={logoName}
              alt="Oracle Star Marine Name"
              className="h-10 object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
              <span className="md:text-md xl:text-lg font-semibold tracking-widest text-marine-700 uppercase">
                <b>Marine Services and Trading LLC</b>
              </span>

              {/* <span className=" md:text-2xl xl:text-3xl font-extrabold tracking-wider text-[#9a6734] uppercase leading-none font-sans">
                Oracle Star
              </span>
              <span className="md:text-md xl:text-lg font-semibold m-4 tracking-widest text-marine-700 uppercase">
                <b>Marine Services and Trading LLC</b>
              </span> */}
            </div>
          </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex xl:space-x-1 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm uppercase font-bold tracking-wider transition-colors duration-300 hover:text-marine-700 ${
                  location.pathname === link.path
                    ? "text-marine-700"
                    : "text-marine-900"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline "
                    className="absolute left-0 bottom-0 h-[3px] w-full bg-gold-500 "
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-marine-900 hover:text-gold-500 transition"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white fixed top-20 left-0 w-full overflow-hidden shadow-xl border-t-8 border-b-8"
          >
            <div className="px-4 pt-4 pb-12 space-y-2 flex flex-col items-center h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-3 text-2xl font-bold uppercase tracking-wider text-marine-900 hover:text-gold-500 transition-colors underline decoration-3 decoration-marine-500"
                  
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
