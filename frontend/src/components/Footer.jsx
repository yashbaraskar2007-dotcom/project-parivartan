import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold text-white">PARIVARTAN</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Engineering a cultural shift in cleanliness. Win your city, own your pride, build better India.
            </p>
            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-200">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-200">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-200">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-200">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-orange-500 transition-colors duration-200">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-orange-500 transition-colors duration-200">How It Works</a></li>
              <li><a href="#leaderboard" className="hover:text-orange-500 transition-colors duration-200">Leaderboard</a></li>
              <li><a href="#faqs" className="hover:text-orange-500 transition-colors duration-200">FAQs</a></li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">For Users</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Citizen Guide</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Authority Portal</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Download App</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Community Guidelines</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-sm">GDGOC Innovation Hub<br />Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-500 flex-shrink-0" />
                <span className="text-sm">hello@parivartan.in</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500 flex-shrink-0" />
                <span className="text-sm">+91 XXX XXX XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} PARIVARTAN. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-orange-500 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;