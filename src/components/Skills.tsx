import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = {
    frontend: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "SCSS", level: 80 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 75 },
    ],
    tools: [
      { name: "Figma", level: 85 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Framer Motion", level: 80 },
      { name: "Vite", level: 85 },
    ],
  };

  const SkillBar = ({
    skill,
    delay,
  }: {
    skill: { name: string; level: number };
    delay: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-teal-400 text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 relative">
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
              Skills & Technologies
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-teal-400 mb-6">
                Frontend
              </h3>
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={0.6 + index * 0.1}
                  />
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Backend</h3>
              <div className="space-y-4">
                {skills.backend.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={0.8 + index * 0.1}
                  />
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-green-400 mb-6">Tools</h3>
              <div className="space-y-4">
                {skills.tools.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={1.0 + index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
