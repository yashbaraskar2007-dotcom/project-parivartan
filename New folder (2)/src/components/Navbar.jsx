import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Leaderboard', href: '#leaderboard' },
    { name: 'FAQs', href: '#faqs' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              PARIVARTAN
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white shadow-lg">
              Join Battle
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-50">
                Sign In
              </Button>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-green-600 text-white">
                Join Battle
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;