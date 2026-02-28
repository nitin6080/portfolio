import React from "react";
import Navbar from "../components/layout/navbar";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Skills from "../components/sections/skills";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";
import Footer from "../components/layout/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
