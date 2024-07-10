// src/components/Footer.jsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black-400 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold">ATHLETICUS</h4>
            <p className="text-gray-400">Transform your body and mind with Athleticus Calisthenics Program.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Contact Us</h4>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="h-5 w-5 text-red-500" />
              <p className="text-gray-400">(123) 456-7890</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="h-5 w-5 text-red-500" />
              <p className="text-gray-400">info@calisthenicsmastery.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="h-5 w-5 text-red-500" />
              <p className="text-gray-400">123 Main Street, Anytown USA</p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Follow Us</h4>
            <div className="flex items-center gap-4">
              <FaFacebook className="h-5 w-5 text-red-500" />
              <p className="text-gray-400">@athleticusfitness</p>
            </div>
            <div className="flex items-center gap-4">
              <FaInstagram className="h-5 w-5 text-red-500" />
              <p className="text-gray-400">@athleticusfitness</p>
            </div>
            <div className="flex items-center gap-4">
              <FaTwitter className="h-5 w-5 text-red-500" />
              <p className="text-gray-400">@athleticusfit</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          &copy; 2024 Athleticus Fitness. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
