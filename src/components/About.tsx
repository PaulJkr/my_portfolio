import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate frontend developer currently transitioning into
                fullstack development. My journey began with traditional web
                development methods, but I've embraced modern technologies like
                React, TypeScript, and the MERN stack.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in creating clean, responsive user interfaces with
                smooth animations and excellent user experience. My focus is on
                performance optimization and writing maintainable, scalable
                code.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Currently working with React, TypeScript, Tailwind CSS, and
                expanding my backend skills with Node.js, Express.js, and
                MongoDB to become a well-rounded fullstack developer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl p-8 border border-teal-500/20">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Current Focus</span>
                    <span className="text-teal-400">MERN Stack</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Experience</span>
                    <span className="text-teal-400">1+ Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Projects Completed</span>
                    <span className="text-teal-400">10+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Specialization</span>
                    <span className="text-teal-400">Frontend & UI/UX</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
