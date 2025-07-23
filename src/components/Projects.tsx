import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "KenyaSafe",
      description:
        " Frontend-only user interface for a next-gen disaster preparedness and emergency response platform. Designed for governments, NGOs, and community leaders, this system merges aesthetics, usability, and performance to support high-stakes emergency management workflows.",
      technologies: ["React", "Tailwind CSS", "MongoDB"],
      features: [
        "Early Warning & Notifications",
        "Incident Reporting",
        "Resource & Shelter Directory",
        "Responsive UI/UX",
        "Community Messaging & Updates",
      ],
      github: "https://github.com/PaulJkr/KenyaSafe",
      live: "https://kenyasafedisaster.netlify.app/",
    },
    {
      title: "Karibu Kenya Travels",
      description:
        "A comprehensive travel platform with real-time itinerary builder, PDF export, dynamic dropdowns, packing checklist with local & DB sync, infinite carousel slider, animated search suggestions, testimonials, and interactive map.",
      technologies: ["React", "Tailwind CSS", "MongoDB"],
      features: [
        "Real-time itinerary builder",
        "PDF export functionality",
        "Interactive map integration",
        "Dynamic search suggestions",
        "Packing checklist sync",
      ],
      github: "https://github.com/PaulJkr/Karibu",
      live: "#",
    },
    {
      title: "Fish Wholesale Platform",
      description:
        "A family business platform featuring inventory management system, shopping cart with global context state, ocean-themed UI design, advanced filters and search functionality, and user authentication.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "MongoDB"],
      features: [
        "Inventory management system",
        "Global state management",
        "User authentication",
        "Advanced filtering system",
        "Ocean-themed design",
      ],
      github: "https://github.com/PaulJkr/fish-sell-app",
      live: "#",
    },
    {
      title: "Business Landing Page",
      description:
        "A modern landing page with Calendly integration, interactive pricing cards, testimonial sliders, and demo video walkthrough. Built with smooth animations and responsive design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
      features: [
        "Calendly integration",
        "Interactive pricing cards",
        "Testimonial sliders",
        "Demo video integration",
        "Smooth animations",
      ],
      github: "https://github.com/PaulJkr/business-landing-page",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
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
              Featured Projects
            </span>
          </motion.h2>

          <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl p-8 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-teal-400">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-cyan-400">
                        Key Features:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-gray-400 flex items-center"
                          >
                            <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 rounded-full text-sm border border-teal-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center space-y-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:shadow-teal-500/25 transition-all duration-300"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </motion.a>

                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 px-6 py-3 border border-teal-500 text-teal-400 rounded-lg hover:bg-teal-500/10 transition-all duration-300"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
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

export default Projects;
