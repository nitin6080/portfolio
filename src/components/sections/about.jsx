import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import profImg from "./../../assets/nitinKumarShukla.jfif";

const About = () => {
  const { about, personal, education } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-inter tracking-wide font-bold text-white mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Profile image and basic info */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Profile card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <div className="flex items-center space-x-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-36 h-36 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
                      <img
                        src={profImg}
                        alt={personal.name}
                        className="w-full h-full rounded-full object-cover bg-slate-900"
                      />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-green-500 w-10 h-10 rounded-full border-4 border-slate-800 flex items-center justify-center">
                      <span className="text-sm font-semibold text-white">
                        {personal.yearsOfExperience}+
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold tracking-wide text-white mb-2">
                      {personal.name}
                    </h3>
                    <p className="text-cyan-400 font-medium tracking-wide mb-1">
                      {personal.title}
                    </p>
                    <p className="text-slate-400 text-sm">
                      {personal.location}
                    </p>
                  </div>
                </div>

                {/* Contact info */}
                <div className="mt-6 pt-6 border-t border-slate-700 flex gap-1 justify-between items-center">
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex gap-2 items-center"
                  >
                    <Mail /> {personal.email}
                  </a>
                  <a
                    href={`tel:${personal.phone}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex gap-2 items-center"
                  >
                    <Phone /> {personal.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Education card */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                Education
              </h4>
              <div className="space-y-2">
                <p className="text-white font-medium">{education.degree}</p>
                <p className="text-cyan-400 text-sm">{education.field}</p>
                <p className="text-slate-400 text-sm">
                  {education.institution}
                </p>
                <p className="text-slate-500 text-xs">{education.period}</p>
                <div className="pt-2 flex items-center space-x-2">
                  <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-medium">
                    {education.grade}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Description and highlights */}
          <div
            className={`space-y-6 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Summary */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Professional Journey
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                {about.summary}
              </p>
              <p className="text-slate-400 leading-relaxed">
                {about.description}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Key Highlights
              </h4>
              <div className="space-y-3">
                {about.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional info */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
              <p className="text-slate-300 leading-relaxed italic">
                "Passionate about building performant, accessible web
                applications that deliver exceptional user experiences. Always
                learning, always improving."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
