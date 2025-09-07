"use client"

import React from 'react';
import Link from 'next/link';
import {
  FaLinkedin,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from 'react-icons/fa';
import { BsFillSendFill } from "react-icons/bs";

import { motion, Variants } from 'framer-motion';

// Properly typed slideInFromLeft function
const slideInFromLeft = (delay: number): Variants => {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5
      }
    }
  };
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-[#2b2351a7] via-[#0300146f] to-indigo-950 text-white w-full py-6 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Side - Contact Information */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-white text-lg font-medium mb-2">Get in touch</h3>
          <Link 
            href="mailto:muneebkhan08304@gmail.com" 
            className="block text-3xl font-bold text-gray-300 hover:text-white mb-2 transition-colors"
          >
            <div className='flex flex-row gap-3 '>
            muneebkhan08304@gmail.com
            <BsFillSendFill className='text-xl'/>
            </div>
            
          </Link>

          <p className="text-gray-300 text-lg">+92-3157236266</p>
        </div>
        
        {/* Right Side - Social Media */}
        <div className="relative py-4 flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
            Stay Connected
          </h2>
          
          {/* Social Icons */}
          <div className="flex space-x-8 text-4xl">
            <Link
              href="https://www.linkedin.com/in/muhammadmuneebkhan8304"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white
                hover:text-primary
                transition-transform
                duration-300
                hover:scale-110
              "
            >
              <FaLinkedin />
            </Link>
            
            <Link
              href="https://discord.com/users/1178243724824825896"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white
                hover:text-primary
                transition-transform
                duration-300
                hover:scale-110
              "
            >
              <FaDiscord />
            </Link>
            
            <Link
              href="https://www.facebook.com/profile.php?id=100064171872590"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white
                hover:text-primary
                transition-transform
                duration-300
                hover:scale-110
              "
            >
              <FaFacebook />
            </Link>
            
            <Link
              href="https://x.com/MuneebKhan0834?s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white
                hover:text-primary
                transition-transform
                duration-300
                hover:scale-110
              "
            >
              <FaTwitter />
            </Link>
            
            <Link
              href="https://www.instagram.com/muhammadmuneeb_khan/profilecard/?igsh=dDJqZXJ0MG4zMDMz"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white
                hover:text-primary
                transition-transform
                duration-300
                hover:scale-110
              "
            >
              <FaInstagram />
            </Link>

            <Link
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white
                hover:text-primary
                transition-transform
                duration-300
                hover:scale-110
              "
            >
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Consultation Button */}
      <div className="flex justify-center mt-8 mb-4">
        <motion.div
          variants={slideInFromLeft(1)}
          initial="hidden"
          animate="visible"
        >
          <Link 
            href="/contact"
            className="py-3 px-6 button-primary text-center text-gray-100 font-bold cursor-pointer rounded-lg transition-all inline-block"
          >
            BOOK A FREE CONSULTATION
          </Link>
        </motion.div>
      </div>
      
      {/* Copyright at the bottom */}
      <div className="text-center text-sm text-gray-300 mt-4">
        &copy; {currentYear} Muneeb. All rights reserved.
      </div>
    </footer>
 
  );
};

export default Footer;