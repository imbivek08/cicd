"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaArrowUp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-white/5">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none"></div>
      
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-2xl font-bold text-[#7ee787]">bivek@portfolio</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Full-stack developer passionate about creating elegant solutions to complex problems.
              </p>
              <div className="flex gap-3 justify-center md:justify-start">
                <Link 
                  href="https://github.com/imbivek08" 
                  target="_blank" 
                  className="p-2.5 glass-effect rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300"
                >
                  <FaGithub size={18} />
                </Link>
                <Link 
                  href="https://linkedin.com" 
                  target="_blank" 
                  className="p-2.5 glass-effect rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedin size={18} />
                </Link>
                <Link 
                  href="https://twitter.com" 
                  target="_blank" 
                  className="p-2.5 glass-effect rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300"
                >
                  <FaTwitter size={18} />
                </Link>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/project" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-bold mb-4 text-white">Get In Touch</h4>
              <div className="space-y-2.5 text-sm text-gray-400">
                <p className="hover:text-white transition-colors">
                  <Link href="mailto:yadavbivek08@gmail.com">
                    yadavbivek08@gmail.com
                  </Link>
                </p>
                <p>Available for freelance work</p>
                <p className="text-xs text-gray-500 mt-4">Mon - Fri, 9AM - 6PM IST</p>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-white/5 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center sm:text-left">
                © {currentYear} Bivek Yadav. Made with{" "}
                <FaHeart className="inline text-red-500 animate-pulse" size={12} />{" "}
                in Nepal
              </p>
              <button
                onClick={scrollToTop}
                className="p-3 glass-effect rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
                aria-label="Scroll to top"
              >
                <FaArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
