import { motion } from "motion/react";
import { Code, Database, Shield, Rocket } from "lucide-react";
import { Card } from "./ui/card";

export default function About() {
  const expertise = [
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Full Stack Development",
      description: "Expert in MERN stack with focus on scalable backend architecture and RESTful APIs"
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: "Database Design",
      description: "Proficient in MongoDB, MySQL, and Firebase for robust data management solutions"
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Cybersecurity",
      description: "Passionate about building secure systems with network security and threat analysis"
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      title: "Python Development",
      description: "Building automation tools, APIs, and security applications with Python"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl md:text-5xl gradient-text mt-4 mb-6">
            Who I Am
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I'm a passionate Backend Developer and Cybersecurity Enthusiast with extensive experience
              in building robust, scalable applications using the MERN stack and Python. My journey in
              technology combines a deep understanding of server-side architecture with a keen focus on
              security best practices.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With years of hands-on experience, I've developed everything from RESTful APIs and
              microservices to security tools and automation systems. I'm committed to writing clean,
              efficient code and creating solutions that make a real impact.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6 hover:bg-purple-500/10 transition-all duration-300 group h-full">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
