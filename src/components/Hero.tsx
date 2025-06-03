import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "../assets/passport.jpg";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTheme, setCurrentTheme] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullName = "Paul Ambayo Omondi...";

  const colorThemes = [
    "bg-gradient-to-r from-teal-400 via-cyan-400 to-green-400",
    "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400",
    "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400",
    "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400",
    "bg-gradient-to-r from-green-400 via-teal-400 to-blue-400",
    "bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400",
    "bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400",
  ];

  useEffect(() => {
    const typeSpeed = 120;
    const deleteSpeed = 80;
    const pauseTime = 1500;

    const timer = setTimeout(
      () => {
        if (isTyping) {
          if (currentIndex < fullName.length) {
            setDisplayedText(fullName.slice(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          } else {
            setTimeout(() => setIsTyping(false), pauseTime);
          }
        } else {
          if (currentIndex > 0) {
            setDisplayedText(fullName.slice(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
          } else {
            setCurrentTheme((prev) => (prev + 1) % colorThemes.length);
            setIsTyping(true);
          }
        }
      },
      isTyping ? typeSpeed : deleteSpeed
    );

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, fullName]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold min-h-[1.2em] flex items-center justify-center md:justify-start"
          >
            <motion.span
              className={`${colorThemes[currentTheme]} bg-clip-text text-transparent inline-block`}
              animate={{
                backgroundSize: ["100% 100%", "200% 200%", "100% 100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-[1em] bg-current ml-1 align-middle"
              >
                |
              </motion.span>
            </motion.span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="block">Frontend Web Developer</span>
            <motion.span
              className="text-teal-400"
              animate={{
                color: [
                  "#14b8a6",
                  "#06b6d4",
                  "#10b981",
                  "#8b5cf6",
                  "#f59e0b",
                  "#ef4444",
                  "#14b8a6",
                ],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              (Soon-to-be Fullstack)
            </motion.span>
          </motion.div>

          <motion.p
            className="text-lg text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            A dedicated frontend developer transitioning from traditional
            methods into modern web technologies. Passionate about clean UI/UX,
            animations, and performance optimization.
          </motion.p>

          <motion.div
            className="flex justify-center md:justify-start space-x-6 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a
              href="https://github.com/PaulJkr"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/paul-omondi-79ba3222a"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/paul_omondi15"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
            >
              <Instagram size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="mt-12 md:mt-0 md:w-1/2 relative flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={heroImage}
            alt="Paul Ambayo"
            className="w-64 md:w-96 rounded-3xl shadow-2xl z-10"
          />

          {/* Background floating shapes behind the image */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
              borderColor: [
                "rgba(20, 184, 166, 0.2)",
                "rgba(168, 85, 247, 0.2)",
                "rgba(59, 130, 246, 0.2)",
              ],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity },
              borderColor: { duration: 12, repeat: Infinity, ease: "linear" },
            }}
            className="absolute w-80 h-80 border-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
          />
        </motion.div>
      </div>

      {/* Bottom scroll down icon */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ duration: 2, delay: 1.2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-teal-400 hover:text-teal-300"
        whileHover={{ y: -5 }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;
