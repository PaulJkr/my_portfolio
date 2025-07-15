import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      period: "May 2025 – Present",
      role: "Software Developer",
      company: "COSEKE Ltd",
      description:
        "At COSEKE Limited, a Pan-African IT services provider, I've been immersed in service delivery environments while working on various React and MERN stack projects. I've delivered custom web solutions for different industries with a focus on responsiveness, documentation, and infrastructure monitoring. I've worked with ticketing systems to manage and resolve incidents, provided remote support to end-users, and ensured timely escalation of complex technical issues.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Express.js",
        "EDMS",
      ],
    },
    {
      period: " Mar 2022– Jul 2022",
      role: "Network Support & IT Technician",
      company: "Eldoret Hospital",
      description:
        "Provided comprehensive IT services including network infrastructure support and PHP web development. Configured and maintained business networks while developing operational tools in PHP to streamline processes in Claims, Registration, and Document Management departments. Combined hands-on experience in server administration, network troubleshooting, and custom web development to deliver complete technical solutions aligned with business requirements.",
      technologies: [
        "PHP",
        "Network Configuration",
        "Cisco Systems",
        "Database Management",
      ],
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
                className={`relative ${
                  index < experiences.length - 1 ? "mb-12" : ""
                }`}
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
