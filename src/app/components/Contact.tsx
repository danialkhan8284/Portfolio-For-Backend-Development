import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-purple-400" />,
      label: "Email",
      value: "danial@example.com",
      link: "mailto:danial@example.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-400" />,
      label: "Location",
      value: "Pakistan",
      link: null
    },
    {
      icon: <Phone className="w-6 h-6 text-cyan-400" />,
      label: "Phone",
      value: "+92 XXX XXXXXXX",
      link: "tel:+92XXXXXXXXX"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl gradient-text mt-4 mb-6">
            Contact Me
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card p-6 hover:bg-purple-500/10 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-purple-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6">
                <h3 className="text-xl text-white mb-4">Connect With Me</h3>
                <p className="text-gray-400 mb-6">
                  Follow me on social media for updates on my latest projects and tech insights
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-full glass-card hover:bg-purple-500/20 transition-all duration-300 text-center neon-glow-hover"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-full glass-card hover:bg-blue-500/20 transition-all duration-300 text-center neon-glow-hover"
                  >
                    LinkedIn
                  </a>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Name</label>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-gray-900/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-gray-900/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Subject</label>
                  <Input
                    type="text"
                    placeholder="How can I help you?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-gray-900/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-gray-900/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-500 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-lg rounded-full neon-glow-hover transition-all duration-300"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
