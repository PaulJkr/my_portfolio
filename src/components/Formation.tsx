import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Formation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const courses = [
    {
      title: "UI/UX Design",
      status: "Completed",
      description:
        "Comprehensive course covering design principles, user research, and prototyping.",
    },
    {
      title: "HTML & CSS",
      status: "Completed",
      description: "Foundation course in web markup and styling languages.",
    },
    {
      title: "CSS Flexbox & Grid",
      status: "Completed",
      description: "Advanced CSS layout techniques for responsive design.",
    },
    {
      title: "JavaScript",
      status: "Completed",
      description:
        "Core JavaScript programming concepts and modern ES6+ features.",
    },
    {
      title: "Aprenda a Programar com JS, HTML e CSS",
      instructor: "Rodrigo Branas",
      status: "Completed",
      description:
        "Comprehensive programming course covering frontend fundamentals.",
    },
  ];

  return (
    <section id="formation" className="py-20 relative">
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
              Formation & Courses
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl p-6 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 rounded-full text-xs border border-green-500/30">
                      {course.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-teal-400">
                    {course.title}
                  </h3>

                  {course.instructor && (
                    <p className="text-cyan-400 font-medium">
                      by {course.instructor}
                    </p>
                  )}

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {course.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Formation;
