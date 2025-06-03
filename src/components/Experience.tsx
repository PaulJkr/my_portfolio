import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      period: "Jun 2023 – Aug 2024",
      role: "Freelance Developer",
      company: "Multiple Clients",
      description:
        "Worked on various React and MERN stack projects, delivering custom web solutions for different industries.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express.js"],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl p-8 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-2xl font-bold text-teal-400">
                        {exp.role}
                      </h3>
                      <span className="text-cyan-400 font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <h4 className="text-xl text-gray-300">{exp.company}</h4>

                    <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 rounded-full text-sm border border-teal-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
