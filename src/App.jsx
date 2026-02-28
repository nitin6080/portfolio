import { useEffect } from "react";
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import LiveProjects from "./components/liveProjects";
import "./App.css";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live-projects" element={<LiveProjects />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
