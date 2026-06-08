import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, ExternalLink, Shield, Network, Wallet, CloudRain, Zap } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "SOC Simulator",
      description: "A comprehensive Security Operations Center simulator for training and testing security incident response. Simulates real-world attack scenarios and defensive measures.",
      icon: <Shield className="w-12 h-12 text-purple-400" />,
      technologies: ["Python", "Network Security", "Threat Analysis", "Flask"],
      github: "#",
      demo: "#",
      gradient: "from-purple-600/20 to-blue-600/20"
    },
    {
      title: "Network Security Scanner",
      description: "Advanced network vulnerability scanner that identifies security weaknesses and provides detailed reports. Features automated scanning and threat detection.",
      icon: <Network className="w-12 h-12 text-blue-400" />,
      technologies: ["Python", "Cybersecurity", "Network Analysis", "Nmap"],
      github: "#",
      demo: "#",
      gradient: "from-blue-600/20 to-cyan-600/20"
    },
    {
      title: "Crypto Wallet Application",
      description: "Secure cryptocurrency wallet with multi-chain support. Features transaction history, real-time price tracking, and advanced security measures.",
      icon: <Wallet className="w-12 h-12 text-cyan-400" />,
      technologies: ["React", "Node.js", "MongoDB", "Web3.js"],
      github: "#",
      demo: "#",
      gradient: "from-cyan-600/20 to-purple-600/20"
    },
    // {
    //   title: "Weather Forecasting App",
    //   description: "Real-time weather forecasting application with beautiful UI. Features 7-day forecasts, weather alerts, and location-based recommendations.",
    //   icon: <CloudRain className="w-12 h-12 text-blue-400" />,
    //   technologies: ["React", "Express.js", "REST API", "OpenWeather API"],
    //   github: "#",
    //   demo: "#",
    //   gradient: "from-blue-600/20 to-purple-600/20"
    // },
    // {
    //   title: "Electricity Theft Detection System",
    //   description: "ML-powered system for detecting electricity theft patterns. Analyzes consumption data and identifies anomalies using machine learning algorithms.",
    //   icon: <Zap className="w-12 h-12 text-purple-400" />,
    //   technologies: ["Python", "Machine Learning", "Data Analysis", "Flask"],
    //   github: "#",
    //   demo: "#",
    //   gradient: "from-purple-600/20 to-cyan-600/20"
    // }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl gradient-text mt-4 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my best work in backend development, cybersecurity, and full-stack applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="glass-card p-6 h-full flex flex-col hover:bg-purple-500/10 transition-all duration-300 group">
                <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  {project.icon}
                </div>

                <h3 className="text-2xl text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-blue-500/50 bg-blue-500/10 text-blue-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-purple-500/50 text-white hover:bg-purple-500/20 transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-300"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
