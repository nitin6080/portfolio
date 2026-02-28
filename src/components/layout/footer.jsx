import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer navigation links
  const footerLinks = [
    { name: "About", hash: "#about" },
    { name: "Skills", hash: "#skills" },
    { name: "Experience", hash: "#experience" },
    { name: "Projects", hash: "#projects" },
    { name: "Contact", hash: "#contact" },
  ];

  // Social media links
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/nitinkumar",
      color: "hover:text-slate-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/nitinkumarshukla",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:nitin.ku25@gmail.com",
      color: "hover:text-cyan-400",
    },
  ];

  // Smooth scroll handler
  const handleScrollTo = (hash) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Nitin Kumar
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Front-End Engineer crafting scalable, performance-driven web
              applications. Passionate about clean code and exceptional user
              experiences.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-slate-900 text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleScrollTo(link.hash)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/live-projects"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  Live Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">
                <span className="text-cyan-400 font-medium">Email:</span>
                <br />
                <a
                  href="mailto:nitin.ku25@gmail.com"
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  nitin.ku25@gmail.com
                </a>
              </li>
              <li className="text-slate-400">
                <span className="text-cyan-400 font-medium">Location:</span>
                <br />
                Bengaluru, India
              </li>
              <li className="text-slate-400">
                <span className="text-cyan-400 font-medium">Phone:</span>
                <br />
                +91 9113707856
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm flex items-center">
              © {currentYear} Nitin Kumar. Crafted with
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current animate-pulse" />
              and React
            </p>
            <p className="text-slate-500 text-xs">
              Designed for performance. Built for scale.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
