import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Server, Code, Shield, Boxes, Globe, Lock } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Server className="w-12 h-12 text-purple-400" />,
      title: "Backend Development",
      description: "Robust server-side applications with Node.js, Express, and Python. Scalable architecture and efficient database design.",
      features: ["RESTful APIs", "Database Design", "Server Architecture", "Microservices"]
    },
    {
      icon: <Code className="w-12 h-12 text-blue-400" />,
      title: "MERN Stack Applications",
      description: "Full-stack web applications using MongoDB, Express, React, and Node.js. Modern, responsive, and user-friendly interfaces.",
      features: ["Single Page Apps", "Real-time Features", "State Management", "Responsive Design"]
    },
    {
      icon: <Boxes className="w-12 h-12 text-cyan-400" />,
      title: "API Development",
      description: "Design and implementation of RESTful APIs with comprehensive documentation. Integration with third-party services.",
      features: ["REST APIs", "GraphQL", "API Documentation", "Authentication"]
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-400" />,
      title: "Security Assessments",
      description: "Comprehensive security audits and penetration testing. Identifying vulnerabilities and implementing security best practices.",
      features: ["Vulnerability Scanning", "Security Audits", "Threat Analysis", "Security Hardening"]
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-400" />,
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins. Performance optimization and security implementation for WordPress sites.",
      features: ["Custom Themes", "Plugin Development", "Performance Optimization", "SEO"]
    },
    {
      icon: <Lock className="w-12 h-12 text-cyan-400" />,
      title: "Python Automation",
      description: "Automated solutions for repetitive tasks, data processing, and system administration using Python.",
      features: ["Task Automation", "Data Processing", "Web Scraping", "System Scripts"]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="services">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm uppercase tracking-wider">What I Offer</span>
          <h2 className="text-4xl md:text-5xl gradient-text mt-4 mb-6">
            Services
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional development services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="glass-card p-6 h-full hover:bg-purple-500/10 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
