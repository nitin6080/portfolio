import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { portfolioData } from "../data/mock";
import { ExternalLink, Github, TrendingUp, ArrowRight } from "lucide-react";
import Button  from "./../shared/button";
import { portfolioData } from "../../data/portfolioData";

const Projects = () => {
  const { projects } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef(null);

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

  // Get unique categories
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  // Filter projects
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Enterprise applications and personal projects showcasing technical
            expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-slate-800/50 border border-slate-700 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-700 delay-${(index + 1) * 100} ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 h-full flex flex-col">
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />

                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title and company */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium">
                      {project.company}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4 flex-1">
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-slate-700/30 rounded text-slate-400 text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="mb-4 p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg">
                      <div className="flex items-center space-x-2 text-xs">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-medium">
                          {project.metrics.improvement}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs mt-1">
                        {project.metrics.score}
                      </p>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700/50 border border-slate-600 rounded text-slate-300 text-xs hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
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

        {/* Live Projects CTA */}
        <div className="relative mt-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-20" />
          <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Explore Live{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Check out my collection of production-ready, fully functional
                  web applications. Each project is deployable and demonstrates
                  real-world problem-solving.
                </p>
                <Link to="/live-projects">
                  <Button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg">
                    View Live Projects
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Preview cards */}
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-slate-700/30 border border-slate-600 rounded-xl p-4 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-full h-20 bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg mb-3 flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="h-2 bg-slate-600 rounded-full w-3/4 mb-2" />
                    <div className="h-2 bg-slate-600 rounded-full w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
