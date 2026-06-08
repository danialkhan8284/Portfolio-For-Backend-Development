import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Github, GitBranch, Star, GitPullRequest, Code } from "lucide-react";

export default function GitHubStats() {
  const stats = [
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      label: "Repositories",
      value: "20+",
      description: "Public & Private"
    },
    {
      icon: <GitBranch className="w-8 h-8 text-blue-400" />,
      label: "Commits",
      value: "1,500+",
      description: "This Year"
    },
    {
      icon: <Star className="w-8 h-8 text-cyan-400" />,
      label: "Stars Earned",
      value: "50+",
      description: "Across Projects"
    },
    {
      icon: <GitPullRequest className="w-8 h-8 text-purple-400" />,
      label: "Pull Requests",
      value: "100+",
      description: "Merged"
    }
  ];

  const languages = [
    { name: "JavaScript", percentage: 35, color: "bg-yellow-500" },
    { name: "Python", percentage: 30, color: "bg-blue-500" },
    { name: "TypeScript", percentage: 20, color: "bg-blue-400" },
    { name: "HTML/CSS", percentage: 10, color: "bg-orange-500" },
    { name: "Other", percentage: 5, color: "bg-gray-500" }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="github">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm uppercase tracking-wider">Activity</span>
          <h2 className="text-4xl md:text-5xl gradient-text mt-4 mb-6">
            GitHub Statistics
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My open source contributions and coding activity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="glass-card p-6 text-center hover:bg-purple-500/10 transition-all duration-300 group">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-3xl text-white mb-2">{stat.value}</h3>
                <p className="text-lg text-gray-300 mb-1">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="glass-card p-8">
            <h3 className="text-2xl text-white mb-6 text-center">Most Used Languages</h3>

            <div className="space-y-6">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">{lang.name}</span>
                    <span className="text-purple-400">{lang.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-full ${lang.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://github.com/danialkhan8284"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-300 neon-glow-hover"
              >
                <Github className="w-5 h-5" />
                View GitHub Profile
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
