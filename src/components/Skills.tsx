import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const techLogos = [
  { name: "React", src: "/logos/react.png" },
  { name: "TypeScript", src: "/logos/typescript.png" },
  { name: "JavaScript", src: "/logos/javascript.png" },
  { name: "Tailwind CSS", src: "/logos/tailwind.png" },
  { name: "HTML", src: "/logos/html.png" },
  { name: "CSS", src: "/logos/css.png" },
  { name: "Node.js", src: "/logos/nodejs.png" },
  { name: "MongoDB", src: "/logos/mongodb.png" },
  { name: "GitHub", src: "/logos/github.png" },
  { name: "Framer Motion", src: "/logos/framermotion.png" },
  { name: "Vite", src: "/logos/vite.png" },
  { name: "Python", src: "/logos/python.png" },
];

const Skills = () => {
  const carouselRef = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Tech Stack & Tools
          </span>
        </motion.h2>

        <motion.div
          ref={carouselRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full overflow-hidden"
        >
          <motion.div
            className="flex w-max space-x-10 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...techLogos, ...techLogos].map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md space-y-2 min-w-[100px]"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-16 h-16 object-contain transition duration-300"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
