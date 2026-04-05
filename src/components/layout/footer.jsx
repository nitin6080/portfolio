import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Code2,
  X,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";

// ─── Mail service icons (same as Contact.jsx) ─────────────────────────────────
const GmailIcon = () => (
  <img
    src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_32dp.png"
    alt="Gmail"
    className="w-5 h-5 object-contain flex-shrink-0"
  />
);
const OutlookIcon = () => (
  <span className="flex items-center justify-center w-5 h-5 rounded-md bg-blue-600 flex-shrink-0">
    <Mail className="w-3 h-3 text-white" />
  </span>
);
const YahooIcon = () => (
  <span className="flex items-center justify-center w-5 h-5 rounded-md bg-purple-600 flex-shrink-0">
    <Mail className="w-3 h-3 text-white" />
  </span>
);

// ─── Mail Chooser Modal (same pattern as Contact.jsx) ─────────────────────────
const MailChooserModal = ({ email, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const mailOptions = [
    {
      label: "Gmail",
      Icon: GmailIcon,
      url: `https://mail.google.com/mail/?view=cm&to=${email}`,
      accent: "hover:border-red-500/40",
    },
    {
      label: "Outlook",
      Icon: OutlookIcon,
      url: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}`,
      accent: "hover:border-blue-500/40",
    },
    {
      label: "Yahoo Mail",
      Icon: YahooIcon,
      url: `https://compose.mail.yahoo.com/?to=${email}`,
      accent: "hover:border-purple-500/40",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 w-80 shadow-2xl shadow-cyan-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <p className="text-xs text-slate-500 mb-1 uppercase tracking-widest">
          Send email to
        </p>
        <p className="text-white font-medium text-sm mb-5 truncate">{email}</p>

        <div className="space-y-3">
          {mailOptions.map(({ label, Icon, url, accent }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className={`flex items-center justify-between p-3 bg-slate-800 border border-slate-700 ${accent} rounded-xl transition-all duration-200 group`}
            >
              <div className="flex items-center space-x-3">
                <Icon />
                <span className="text-slate-300 group-hover:text-white text-sm font-medium">
                  Open in {label}
                </span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 transition-colors" />
            </a>
          ))}

          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-between p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/40 rounded-xl transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3">
              {copied ? (
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              ) : (
                <Copy className="w-5 h-5 text-slate-400 group-hover:text-white flex-shrink-0" />
              )}
              <span className="text-slate-300 group-hover:text-white text-sm font-medium">
                {copied ? "Copied!" : "Copy address"}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

// Footer
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showMailModal, setShowMailModal] = useState(false);
  const email = "nitin.ku25@gmail.com";

  // Footer navigation links
  const footerLinks = [
    { name: "About", hash: "#about" },
    { name: "Skills", hash: "#skills" },
    { name: "Experience", hash: "#experience" },
    // { name: "Projects", hash: "#projects" },
    { name: "Contact", hash: "#contact" },
  ];

  // Social media links
  const socialLinks = [
    // {
    //   name: "GitHub",
    //   icon: Github,
    //   url: "https://github.com/nitinkumar",
    //   color: "hover:text-slate-300",
    // },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/nitinkumarshukla",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: null, // Changed: handled by modal, not mailto:
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
    <>
      {/* Mail chooser modal */}
      {showMailModal && (
        <MailChooserModal
          email={email}
          onClose={() => setShowMailModal(false)}
        />
      )}
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
                  // Email: open modal instead of mailto:
                  if (social.name === "Email") {
                    return (
                      <button
                        key={social.name}
                        onClick={() => setShowMailModal(true)}
                        className={`p-2 rounded-lg bg-slate-900 text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20`}
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5" />
                      </button>
                    );
                  }
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
                {/* <li>
                  <Link
                    to="/live-projects"
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    Live Projects
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-slate-400">
                  <span className="text-cyan-400 font-medium">Email:</span>
                  <br />
                  {/* Changed: button opens mail chooser modal instead of mailto: */}
                  <button
                    onClick={() => setShowMailModal(true)}
                    className="hover:text-cyan-400 transition-colors duration-200 text-left"
                  >
                    {email}
                  </button>
                </li>
                <li className="text-slate-400">
                  <span className="text-cyan-400 font-medium">Location:</span>
                  <br />
                  {/* Changed: links to Google Maps → Silkboard, Bengaluru */}
                  <a
                    href="https://www.google.com/maps/place/Chancery+Promotions+PG+for+Gents+In+Bommanahalli/@12.9089048,77.6234649,123m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3bae14ee6648ecc7:0x306998e6d64d5ab9!2sNGR+Layout,+Bommanahalli,+Bengaluru,+Karnataka+560068!3b1!8m2!3d12.9106725!4d77.6235413!16s%2Fg%2F12hlwwlnr!3m5!1s0x3bae14ee62dca6e7:0x78c1c629dddc6853!8m2!3d12.9086513!4d77.6237399!16s%2Fg%2F11bwkz5zwx?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                    // "https://www.google.com/maps/search/Silkboard,+Bengaluru,+Karnataka,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors duration-200"
                  >
                    Bengaluru, India
                  </a>
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
    </>
  );
};
export default Footer;
