import React, { useEffect, useRef, useState } from "react";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

const Experience = () => {
  const { experience } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
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

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold font-poppins tracking-wide text-white mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Work{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {experience.length}+ years of professional experience building
            enterprise applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-purple-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600" />

          {/* Experience cards */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative transition-all duration-700 delay-${(index + 1) * 200} ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full border-4 border-slate-900 transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50"
                        : "bg-slate-600"
                    }`}
                  />
                </div>

                {/* Content card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Briefcase className="w-4 h-4 text-cyan-400" />
                            <span className="text-cyan-400 font-medium">
                              {exp.company}
                            </span>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400 mt-3">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-2 group/item"
                        >
                          <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                          <p className="text-slate-400 text-xs leading-relaxed group-hover/item:text-slate-300 transition-colors">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-slate-300 text-xs hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <span>Want to work together?</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
