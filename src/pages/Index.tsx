import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Formation from "../components/Formation";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ParticleBackground from "../components/ParticleBackground";
import { Moon, Sun } from "lucide-react";

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <ParticleBackground />

      {/* Theme Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>

      <Navigation darkMode={darkMode} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Formation />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
