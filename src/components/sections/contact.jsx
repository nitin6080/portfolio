import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  X,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import Button from "./../shared/button";
import Container from "./../shared/container";
import Textarea from "./../shared/textarea";
import Input from "./../shared/input";
import { useToast } from "./../../hooks/useToast";
import { portfolioData } from "../../data/portfolioData";

// Mail service icons
// Gmail: uses the real Google icon (works fine)
const GmailIcon = () => (
  <img
    src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_32dp.png"
    alt="Gmail"
    className="w-5 h-5 object-contain flex-shrink-0"
  />
);

// Outlook: blue badge with Lucide Mail
const OutlookIcon = () => (
  <span className="flex items-center justify-center w-5 h-5 rounded-md bg-blue-600 flex-shrink-0">
    <Mail className="w-3 h-3 text-white" />
  </span>
);

// Yahoo: purple badge with Lucide Mail
const YahooIcon = () => (
  <span className="flex items-center justify-center w-5 h-5 rounded-md bg-purple-600 flex-shrink-0">
    <Mail className="w-3 h-3 text-white" />
  </span>
);

// Mail Chooser Modal
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

// Main Contact Component
const Contact = () => {
  const { personal } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMailModal, setShowMailModal] = useState(false);
  const sectionRef = useRef(null);
  const { toast } = useToast();

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission (MOCK - will be integrated with backend later)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent! 🚀",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  // Contact info config
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      link: null,
      isEmail: true,
      color: "text-cyan-400",
      iconBg: "bg-cyan-500/15",
      cardHover: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
      link: `tel:${personal.phone}`,
      isEmail: false,
      color: "text-blue-400",
      iconBg: "bg-blue-500/15",
      cardHover: "hover:border-blue-500/50 hover:shadow-blue-500/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personal.location,
      // Opens Google Maps → Silkboard, Bengaluru
      link: "https://www.google.com/maps/place/Chancery+Promotions+PG+for+Gents+In+Bommanahalli/@12.9089048,77.6234649,123m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3bae14ee6648ecc7:0x306998e6d64d5ab9!2sNGR+Layout,+Bommanahalli,+Bengaluru,+Karnataka+560068!3b1!8m2!3d12.9106725!4d77.6235413!16s%2Fg%2F12hlwwlnr!3m5!1s0x3bae14ee62dca6e7:0x78c1c629dddc6853!8m2!3d12.9086513!4d77.6237399!16s%2Fg%2F11bwkz5zwx?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D",
      // "https://www.google.com/maps/search/Silkboard,+Bengaluru,+Karnataka,+India",
      isEmail: false,
      color: "text-purple-400",
      iconBg: "bg-purple-500/15",
      cardHover: "hover:border-purple-500/50 hover:shadow-purple-500/10",
    },
  ];

  // Shared card content — centred, vertical layout looks great in equal-width cards
  const CardInner = ({ info }) => {
    const Icon = info.icon;
    return (
      <div className="flex flex-col items-center text-center space-y-3">
        <div
          className={`p-4 ${info.iconBg} rounded-2xl ${info.color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">
            {info.label}
          </p>
          <p className="text-white tracking-wide font-medium text-sm leading-snug break-all">
            {info.value}
          </p>
        </div>
      </div>
    );
  };

  const cardBase =
    "group flex-1 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl";

  return (
    <>
      {showMailModal && (
        <MailChooserModal
          email={personal.email}
          onClose={() => setShowMailModal(false)}
        />
      )}

      <section
        id="contact"
        ref={sectionRef}
        className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden"
      >
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Get In{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Let's build
              something amazing together!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-purple-600 mx-auto rounded-full mt-4" />
          </div>

          {/*
            OUTER flex: left panel | right panel (form).
            With form commented out, left panel gets centered via justify-center
            and is capped at max-w-3xl so it doesn't look stretched on wide screens.
          */}
          <div className="flex flex-wrap gap-12 justify-center">
            {/* ── CONTACT PANEL ── */}
            <div
              className={`w-full max-w-3xl space-y-6 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/*
                3 contact cards in a row on md+ screens.
                Equal flex width, centred icon+label inside each.
                Mobile: stacks vertically.
              */}
              <div className="flex flex-col md:flex-row gap-4">
                {contactInfo.map((info, index) => {
                  if (info.isEmail) {
                    return (
                      <button
                        key={index}
                        onClick={() => setShowMailModal(true)}
                        className={`${cardBase} ${info.cardHover} text-left`}
                      >
                        <CardInner info={info} />
                      </button>
                    );
                  }
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target={info.label === "Location" ? "_blank" : undefined}
                      rel={
                        info.label === "Location"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`block ${cardBase} ${info.cardHover}`}
                    >
                      <CardInner info={info} />
                    </a>
                  );
                })}
              </div>

              {/* Social links */}
              <div
                className={`bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 transition-all duration-700 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h3 className="text-xl font-semibold tracking-wide text-white mb-6 text-center">
                  Connect with me on Social Media
                </h3>
                <div className="flex gap-4">
                  {[
                    {
                      icon: Linkedin,
                      url: `https://${personal.linkedin}`,
                      label: "LinkedIn",
                      hover: "hover:text-blue-400 hover:border-blue-500/50",
                    },
                    // {
                    //   icon: Github,
                    //   url: `https://${personal.github}`,
                    //   label: "GitHub",
                    //   hover: "hover:text-slate-200 hover:border-slate-500/50",
                    // },
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 p-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl text-slate-400 ${social.hover} hover:scale-105 transition-all duration-300 flex flex-col items-center space-y-2`}
                      >
                        <Icon className="w-6 h-6" />
                        <span className="text-sm font-medium">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── RIGHT PANEL — Contact form (commented, ready for backend) ── */}
            {/* <div
              className={`flex-1 min-w-[300px] max-w-xl transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                    <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                    <Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} required placeholder="Project Collaboration" className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={3} placeholder="Tell me about your project..." className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500 resize-none" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-5 text-lg">
                    {isSubmitting ? (
                      <span className="flex items-center justify-center"><span className="animate-spin mr-2">⏳</span>Sending...</span>
                    ) : (
                      <span className="flex items-center justify-center">Send Message<Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                    )}
                  </Button>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
