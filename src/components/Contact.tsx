import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/PaulJkr",
      color: "from-gray-600 to-gray-700",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "www.linkedin.com/in/paul-omondi-79ba3222a",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/paul_omondi15?utm_source=qr&igsh=MW4xb3BmYnRsZXJydg== ",
      color: "from-pink-600 to-purple-700",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto: paulomondi027@gmail.com",
      color: "from-teal-600 to-cyan-700",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-12 leading-relaxed"
          >
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about web development. Feel free to reach out!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center space-y-3 p-6 bg-gradient-to-r ${link.color} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <link.icon size={32} className="text-white" />
                <span className="text-white font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            <p className="text-gray-400 mb-4">
              © 2025 Paul Jkr. Built with React, TypeScript & Tailwind CSS.
            </p>
            <p className="text-teal-400">
              Crafted with passion and attention to detail.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
