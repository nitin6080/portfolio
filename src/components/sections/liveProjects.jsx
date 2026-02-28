import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Code2, Sparkles, ArrowLeft } from "lucide-react";
import Button from "./../shared/button";
import { liveProjects } from "../../data/portfolioData";

const LiveProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(liveProjects.map((p) => p.category))];

  // Filter projects
  const filteredProjects =
    activeCategory === "All"
      ? liveProjects
      : liveProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero section */}
      <div className="relative overflow-hidden py-24">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link to="/">
            <Button
              variant="outline"
              className="mb-8 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">
                Production Ready
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Live{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Projects Hub
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Fully functional, production-ready web applications. Each project
              is deployable on Netlify and demonstrates real-world
              problem-solving with clean, commented code.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Total Projects", value: liveProjects.length },
              {
                label: "Live & Working",
                value: liveProjects.filter((p) => p.status === "Live").length,
              },
              { label: "Technologies", value: "15+" },
              { label: "Code Quality", value: "A+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-teal-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />

                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 backdrop-blur-sm rounded-full text-xs font-medium ${
                      project.status === "Live"
                        ? "bg-green-500/20 border border-green-500/50 text-green-400"
                        : "bg-yellow-500/20 border border-yellow-500/50 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700/30 rounded text-slate-400 text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-700/50 border border-slate-600 rounded text-slate-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-cyan-400 text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  {project.status === "Live" ? (
                    <Button
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                      onClick={() =>
                        alert("Project demo will be available soon!")
                      }
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  ) : (
                    <Button
                      className="flex-1 bg-slate-700/50 text-slate-400 cursor-not-allowed"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                    onClick={() =>
                      alert("Code repository will be available soon!")
                    }
                  >
                    <Code2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              These projects are constantly evolving. Check back regularly for
              updates and new additions!
            </p>
            <Link to="/#contact">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveProjects;
