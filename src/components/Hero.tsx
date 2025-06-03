import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTheme, setCurrentTheme] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullName = "Paul Ambayo Omondi...";

  // Color themes for the animated name
  const colorThemes = [
    "bg-gradient-to-r from-teal-400 via-cyan-400 to-green-400", // Original teal-cyan-green
    "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400", // Purple-pink-red
    "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400", // Blue-indigo-purple
    "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400", // Yellow-orange-red
    "bg-gradient-to-r from-green-400 via-teal-400 to-blue-400", // Green-teal-blue
    "bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400", // Pink-rose-orange
    "bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400", // Cyan-blue-indigo
  ];

  // Typewriter effect
  useEffect(() => {
    const typeSpeed = 120; // milliseconds per character
    const deleteSpeed = 80; // milliseconds per character deletion
    const pauseTime = 1500; // pause at end before deleting

    const timer = setTimeout(
      () => {
        if (isTyping) {
          // Typing forward
          if (currentIndex < fullName.length) {
            setDisplayedText(fullName.slice(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          } else {
            // Finished typing, pause then start deleting
            setTimeout(() => {
              setIsTyping(false);
            }, pauseTime);
          }
        } else {
          // Deleting backward
          if (currentIndex > 0) {
            setDisplayedText(fullName.slice(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
          } else {
            // Finished deleting, change theme and start typing again
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold min-h-[1.2em] flex items-center justify-center"
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
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            <span className="block">Frontend Web Developer</span>
            <motion.span
              className="text-teal-400"
              animate={{
                color: [
                  "#14b8a6", // teal-500
                  "#06b6d4", // cyan-500
                  "#10b981", // emerald-500
                  "#8b5cf6", // violet-500
                  "#f59e0b", // amber-500
                  "#ef4444", // red-500
                  "#14b8a6", // back to teal
                ],
              }}
              transition={{
                duration: 14, // Adjusted to match typewriter cycle
                repeat: Infinity,
                ease: "linear",
              }}
            >
              (Soon-to-be Fullstack)
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            A dedicated frontend developer transitioning from traditional
            methods into modern web technologies. Passionate about clean UI/UX,
            animations, and performance optimization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6 pt-6"
          >
            <motion.a
              href="https://github.com/PaulJkr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/paul-omondi-79ba3222a"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/paul_omondi15?utm_source=qr&igsh=MW4xb3BmYnRsZXJydg=="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
            >
              <Instagram size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ duration: 2, delay: 1.2, repeat: Infinity }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-teal-400 hover:text-teal-300 transition-colors duration-300"
          whileHover={{ y: -5 }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>

      {/* Enhanced floating elements that sync with name animation */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
          borderColor: [
            "rgba(20, 184, 166, 0.2)", // teal
            "rgba(168, 85, 247, 0.2)", // purple
            "rgba(59, 130, 246, 0.2)", // blue
            "rgba(251, 191, 36, 0.2)", // yellow
            "rgba(16, 185, 129, 0.2)", // green
            "rgba(244, 114, 182, 0.2)", // pink
            "rgba(6, 182, 212, 0.2)", // cyan
          ],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity },
          borderColor: { duration: 14, repeat: Infinity, ease: "linear" },
        }}
        className="absolute top-20 right-20 w-32 h-32 border-2 rounded-full"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 0.9, 1],
          borderColor: [
            "rgba(6, 182, 212, 0.2)", // cyan
            "rgba(244, 114, 182, 0.2)", // pink
            "rgba(16, 185, 129, 0.2)", // green
            "rgba(251, 191, 36, 0.2)", // yellow
            "rgba(59, 130, 246, 0.2)", // blue
            "rgba(168, 85, 247, 0.2)", // purple
            "rgba(20, 184, 166, 0.2)", // teal
          ],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity },
          borderColor: { duration: 14, repeat: Infinity, ease: "linear" },
        }}
        className="absolute bottom-20 left-20 w-24 h-24 border-2 rounded-full"
      />

      {/* Remove the CSS animation since we're not using it anymore */}
    </section>
  );
};

export default Hero;
