import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download, Code2, Terminal } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              {/* <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400">Available for Opportunities</span> */}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              <span className="block text-xl md:text-2xl text-gray-400 mb-2">Hello, I'm</span>
              <span className="block text-5xl md:text-7xl gradient-text mb-2">
                Muhammad Danial Khan
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl text-white/90 mb-2">
                Backend Developer | MERN Stack Developer
              </h2>
              <h3 className="text-xl md:text-2xl text-purple-400">
                Python Developer | Cybersecurity Enthusiast
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Crafting robust backend systems, scalable APIs, and secure applications.
              Passionate about building technology that makes a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-full neon-glow-hover transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Code2 className="mr-2 h-5 w-5" />
                View Projects
              </Button>

         <a href="/Danial_CV.pdf" download>
  <Button
    variant="outline"
    className="border-2 border-purple-500/50 text-white hover:bg-purple-500/20 px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300"
  >
    <Download className="mr-2 h-5 w-5" />
    Download CV
  </Button>
</a>

              <Button
                variant="outline"
                className="border-2 border-cyan-500/50 text-white hover:bg-cyan-500/20 px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-purple-500/20 transition-all duration-300 neon-glow-hover"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 neon-glow-hover"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:danial@example.com"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-cyan-500/20 transition-all duration-300 neon-glow-hover"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-3xl transform rotate-6 neon-glow" />
              <div className="relative w-full h-full glass-card rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-12">
                  <Code2 className="w-32 h-32 mx-auto mb-6 text-purple-400" />
                  <div className="space-y-4">
                    <div className="glass-card p-4 rounded-xl">
                      <code className="text-cyan-400 text-sm">const developer = {"{"}</code>
                      <div className="ml-6 space-y-2 my-2">
                        <div><code className="text-purple-400">name:</code> <code className="text-green-400">"Muhammad Danial Khan"</code>,</div>
                        <div><code className="text-purple-400">role:</code> <code className="text-green-400">"Backend Developer"</code>,</div>
                        <div><code className="text-purple-400">skills:</code> <code className="text-yellow-400">["MERN", "Python", "APIs"]</code>,</div>
                        <div><code className="text-purple-400">passion:</code> <code className="text-green-400">"Cybersecurity"</code></div>
                      </div>
                      <code className="text-cyan-400 text-sm">{"}"};</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
