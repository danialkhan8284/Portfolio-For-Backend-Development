import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Code2 } from "lucide-react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="text-center">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity }
              }}
              className="mb-6 inline-block p-6 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600"
            >
              <Code2 className="w-16 h-16 text-white" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl gradient-text mb-2"
            >
              Muhammad Danial Khan
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400"
            >
              Backend Developer | MERN Stack | Python | Cybersecurity
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 1.2 }}
              className="w-64 h-1 mx-auto mt-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
