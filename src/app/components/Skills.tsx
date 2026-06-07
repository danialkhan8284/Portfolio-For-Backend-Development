import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import {
  Code,
  Database,
  Server,
  Shield,
  Github,
  Terminal,
  Globe,
  Lock
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "MERN Stack",
      icon: <Code className="w-6 h-6" />,
      color: "text-purple-400",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "React.js", level: 85 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Python & Backend",
      icon: <Terminal className="w-6 h-6" />,
      color: "text-blue-400",
      skills: [
        { name: "Python", level: 90 },
        { name: "REST APIs", level: 95 },
        { name: "MySQL", level: 80 },
        { name: "Firebase", level: 85 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Server className="w-6 h-6" />,
      color: "text-cyan-400",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Linux", level: 85 },
        { name: "WordPress", level: 80 }
      ]
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      color: "text-purple-400",
      skills: [
        { name: "Network Security", level: 85 },
        { name: "Security Analysis", level: 80 },
        { name: "Penetration Testing", level: 75 }
      ]
    }
  ];

  const techStack = [
    "Node.js", "Express.js", "MongoDB", "React.js", "JavaScript",
    "Python", "REST APIs", "MySQL", "Firebase", "Git", "GitHub",
    "Linux", "Cybersecurity", "WordPress", "TypeScript", "Next.js",
    "GraphQL", "Docker", "AWS", "Nginx"
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm uppercase tracking-wider">My Arsenal</span>
          <h2 className="text-4xl md:text-5xl gradient-text mt-4 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, secure, and scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6 h-full hover:bg-purple-500/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className={category.color}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-sm text-purple-400">{skill.level}%</span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl"
        >
          <h3 className="text-2xl text-white mb-6 text-center">Tech Stack</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm border-purple-500/50 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-all duration-300"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
