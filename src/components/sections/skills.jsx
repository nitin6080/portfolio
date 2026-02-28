import React, { useEffect, useRef, useState } from "react";
// import { portfolioData } from "../data/mock";
import * as LucideIcons from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

const Skills = () => {
  const { skills } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
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
      id="skills"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

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
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web
            applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, categoryIndex) => {
            const IconComponent =
              LucideIcons[category.icon] || LucideIcons.Code2;

            return (
              <div
                key={categoryIndex}
                className={`transition-all duration-700 delay-${(categoryIndex + 1) * 100} ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                  {/* Category header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Technologies list */}
                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="group/tech"
                        onMouseEnter={() =>
                          setHoveredSkill(`${categoryIndex}-${techIndex}`)
                        }
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* Skill name and level */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-300 text-sm font-medium group-hover/tech:text-white transition-colors">
                            {tech.name}
                          </span>
                          <span className="text-cyan-400 text-xs font-semibold">
                            {tech.level}%
                          </span>
                        </div>

                        {/* Progress bar */}
                        <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          {/* Background track */}
                          <div className="absolute inset-0 bg-slate-700/30" />

                          {/* Progress fill */}
                          <div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${tech.level}%` : "0%",
                              transitionDelay: `${categoryIndex * 200 + techIndex * 100}ms`,
                            }}
                          >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                          </div>

                          {/* Hover glow */}
                          {hoveredSkill === `${categoryIndex}-${techIndex}` && (
                            <div
                              className="absolute inset-y-0 left-0 bg-cyan-400/30 blur-sm rounded-full transition-all duration-300"
                              style={{ width: `${tech.level}%` }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom stat */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-full">
            <span className="text-slate-400 text-sm">
              Constantly learning and exploring new technologies
            </span>
            <span className="text-cyan-400">🚀</span>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
