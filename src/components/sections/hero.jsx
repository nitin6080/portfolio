import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, X, Copy, Check, ExternalLink } from "lucide-react";
import Button from "./../shared/button";
import { portfolioData } from "../../data/portfolioData";
import resume from "./../../assets/NitinKumarFrontEndEngineer.pdf";

// Mail service icons (same as Contact.jsx & Footer.jsx)
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

// Mail Chooser Modal (same as Contact.jsx & Footer.jsx)
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

const Hero = () => {
  const heroRef = useRef(null);
  const { personal, stats } = portfolioData;
  const [showMailModal, setShowMailModal] = useState(false);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const parallaxElements = heroRef.current.querySelectorAll(".parallax");
        parallaxElements.forEach((el, index) => {
          const speed = (index + 1) * 0.3;
          el.style.transform = `translateY(${scrolled * speed}px)`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to contact section
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mail chooser modal */}
      {showMailModal && (
        <MailChooserModal
          email={personal.email}
          onClose={() => setShowMailModal(false)}
        />
      )}

      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient orbs with parallax */}
          <div className="parallax absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="parallax absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="space-y-8">
              {/* Welcome badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-full animate-fade-in">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="text-sm text-slate-300">
                  Available for opportunities
                </span>
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="block text-white">Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-emerald-400 via-teal-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                    {personal.name}
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-300">
                  {personal.title}
                </h2>
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                  {personal.tagline}
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={scrollToContact}
                  className="flex gap-1 items-center group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Button
                    variant="outline"
                    className="flex gap-1 items-center border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download CV
                  </Button>
                </a>
              </div>

              {/* Social links */}
              <div className="flex space-x-4">
                {[
                  // {
                  //   icon: Github,
                  //   url: "https://github.com/",
                  //   label: "GitHub",
                  // },
                  {
                    icon: Linkedin,
                    url: "https://linkedin.com/in/nitinkumarshukla",
                    label: "LinkedIn",
                    isEmail: false,
                  },
                  {
                    icon: Mail,
                    url: null, // Changed: handled by modal, not mailto:
                    label: "Email",
                    isEmail: true,
                  },
                ].map((social) => {
                  const Icon = social.icon;

                  // Email: open modal instead of mailto:
                  if (social.isEmail) {
                    return (
                      <button
                        key={social.label}
                        onClick={() => setShowMailModal(true)}
                        className="p-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-110 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </button>
                    );
                  }
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-110 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right column - Stats cards */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2 animate-bounce">
              <span className="text-xs text-slate-500 uppercase tracking-wider">
                Scroll Down
              </span>
              <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Custom animations */}
        <style jsx>{`
          @keyframes gradient {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;
