import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Award, Calendar } from "lucide-react";

export default function Experience() {
  const timeline = [
    {
      type: "work",
      title: "Backend Developer",
      company: "Chai and Code on Youtube",
      period: "2024 - Present",
      description: "Developing scalable backend systems using Node.js, Express, and MongoDB. Architecting RESTful APIs and implementing microservices.",
      technologies: ["Node.js", "Express", "MongoDB", "Docker", "AWS"]
    },
    {
      type: "work",
      title: "MERN Stack Developer",
      company: "independent Web Developer",
      period: "2023 - 2024",
      description: "Built full-stack web applications using MERN stack. Designed and implemented database schemas and API integrations.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "REST APIs"]
    },
    {
      type: "work",
      title: "WordPress Developer",
      company: "Gellf Academy",
      period: "2022 - 2023",
      description: "Developed custom WordPress themes and plugins. Optimized website performance and implemented security best practices.",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS"]
    },
    {
      type: "work",
      title: "Cybersecurity Projects",
      company: "Tech Toch Solutions Inc.",
      period: "2023 - Present",
      description: "Conducting research in network security, developing security tools, and participating in CTF competitions.",
      technologies: ["Python", "Network Security", "Penetration Testing", "Security Analysis"]
    }
  ];

  const certifications = [
    {
      title: "Cybersecurity Fundamentals",
      issuer: "Coursera",
      year: "2024"
    },
    {
      title: "Python for Data Science",
      issuer: "Coursera",
      year: "2023"
    },
    {
      title: "MERN Stack Development",
      issuer: "Udemy",
      year: "2023"
    },
    {
      title: "Network Security",
      issuer: "Cisco",
      year: "2025"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="experience">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm uppercase tracking-wider">Journey</span>
          <h2 className="text-4xl md:text-5xl gradient-text mt-4 mb-6">
            Experience & Achievements
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My professional journey and continuous learning path
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card p-6 hover:bg-purple-500/10 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-6 h-6 text-purple-400" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="text-xl text-white group-hover:text-purple-400 transition-colors duration-300">
                              {item.title}
                            </h3>
                            <p className="text-cyan-400">{item.company}</p>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            {item.period}
                          </div>
                        </div>

                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="border-purple-500/50 bg-purple-500/10 text-purple-300 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl text-white">Certifications</h3>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 rounded-lg bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <h4 className="text-white mb-1">{cert.title}</h4>
                      <p className="text-sm text-cyan-400">{cert.issuer}</p>
                      <p className="text-xs text-gray-500 mt-1">{cert.year}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
