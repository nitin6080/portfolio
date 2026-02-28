
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import  Button  from './../shared/button';

const Navbar = () => {
  // State management for mobile menu and scroll behavior
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links configuration
  const navLinks = [
    { name: 'Home', path: '/', hash: '#home' },
    { name: 'About', path: '/', hash: '#about' },
    { name: 'Skills', path: '/', hash: '#skills' },
    { name: 'Experience', path: '/', hash: '#experience' },
    { name: 'Projects', path: '/', hash: '#projects' },
    { name: 'Contact', path: '/', hash: '#contact' },
    // { name: 'Live Projects', path: '/', hash: '#live-projects' },
  ];

  // Smooth scroll handler for anchor links
  const handleNavClick = (hash) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-2 group bg-gradient-to-r from-emerald-400 via-teal-500 to-purple-600 bg-clip-text text-transparent animate-gradient"
            onClick={() => handleNavClick('#home')}
          >
            <div className="relative">
              <Code2 className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-hover:rotate-180" />
              <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold ">
              NK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.hash)}
                className="px-4 py-2 text-sm font-normal tracking-wider text-slate-300 hover:bg-gradient-to-r from-emerald-400 via-teal-500 to-purple-600 bg-clip-text hover:text-transparent animate-gradient transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 via-teal-500 to-purple-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link to="/live-projects">
              <Button className="ml-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                Live Projects
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleNavClick(link.hash)}
              className="block px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/live-projects" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
              Live Projects
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;