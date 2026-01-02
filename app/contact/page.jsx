"use client";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import Link from "next/link";

const ContactPage = () => {
  const contactDetails = [
    { 
      icon: FaEnvelope, 
      label: "Email", 
      value: "yadavbivek08@gmail.com",
      link: "mailto:yadavbivek08@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    { 
      icon: FaGithub, 
      label: "GitHub", 
      value: "@imbivek08",
      link: "https://github.com/imbivek08",
      color: "from-gray-500 to-gray-700"
    },
    { 
      icon: FaLinkedin, 
      label: "LinkedIn", 
      value: "Bivek Yadav",
      link: "https://linkedin.com",
      color: "from-blue-500 to-blue-700"
    },
  ];

  return (
    <div className="relative min-h-screen text-white w-full lg:w-[85%] xl:w-[80%] mx-auto px-4 lg:px-0 py-16 lg:py-24">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">📬 Get In Touch</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Let&apos;s{" "}
            <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactDetails.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Link 
                key={index}
                href={contact.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative flex flex-col items-center text-center gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${contact.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-white">{contact.label}</h3>
                      <p className="text-sm text-gray-400 group-hover:text-white transition-colors break-all">{contact.value}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative glass-effect rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
          
          <div className="relative z-10">
            <div className="inline-block p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6">
              <FaPaperPlane size={32} className="text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ready to{" "}
              <span className="gradient-text">Collaborate?</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Whether you have a project in mind or just want to chat about technology, I&apos;d love to hear from you!
            </p>
            <Link 
              href="mailto:yadavbivek08@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <FaEnvelope size={20} />
              Send me an Email
            </Link>
          </div>
        </div>

        {/* Social Links Bar */}
        <div className="mt-12 flex justify-center gap-4">
          <Link href="https://github.com/imbivek08" target="_blank" className="p-4 glass-effect rounded-xl hover:scale-110 transition-all duration-300 glow-blue">
            <FaGithub size={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="p-4 glass-effect rounded-xl hover:scale-110 transition-all duration-300 glow-blue">
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
