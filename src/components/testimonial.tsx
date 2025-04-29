"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 md:py-24">
      {isVisible && (
        <motion.div
          className="max-w-xl mx-auto text-center bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/80 mb-6 italic">
            Weve seen real improvements in our sales process thanks to Wezzi.
            Its intuitive and effective
          </p>

          <div className="flex items-center justify-center space-x-4">
            <div className="relative w-12 h-12 overflow-hidden rounded-full">
              <Image
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Max Dahlen"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="text-left">
              <p className="text-white font-medium">Max Dahlen</p>
              <p className="text-white/60 text-sm">Founder</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
