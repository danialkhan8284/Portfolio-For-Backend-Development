import { motion } from "motion/react";
import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:danial@example.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden pt-24 pb-8">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl gradient-text">Muhammad Danial Khan</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Backend Developer | MERN Stack Developer | Python Developer | Cybersecurity Enthusiast
            </p>
            <p className="text-gray-500 text-sm">
              Building secure, scalable, and innovative solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Backend Development</li>
              <li>MERN Stack Apps</li>
              <li>API Development</li>
              <li>Security Assessments</li>
              <li>WordPress Development</li>
              <li>Python Automation</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white mb-4">Connect</h3>
            <p className="text-gray-400 mb-4">
              Let's build something amazing together
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-purple-500/20 transition-all duration-300 neon-glow-hover"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-purple-500/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Muhammad Danial Khan. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
