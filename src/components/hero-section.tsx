"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-3xl mx-auto text-center">
        {isVisible && (
          <>
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Activity className="h-12 w-12 text-green-500 animate-pulse" />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Monitor your network with precision
            </motion.h1>

            <motion.p
              className="text-lg text-white/70 mb-10 mx-auto max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Real-time ping monitoring, network diagnostics, and performance
              tracking. Keep your systems running smoothly with advanced latency
              analysis and instant alerts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="group bg-green-500 text-white hover:bg-green-600"
              >
                Download for desktop
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                View documentation
              </Button>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
