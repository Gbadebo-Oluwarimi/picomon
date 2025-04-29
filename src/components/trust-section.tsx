"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const companies = [
  { name: "Company 1", logo: "☼" },
  { name: "Company 2", logo: "○" },
  { name: "Company 3", logo: "▢" },
  { name: "Company 4", logo: "◊" },
  { name: "Company 5", logo: "◯" },
  { name: "Company 6", logo: "◎" },
];

export default function TrustSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 md:py-20">
      {isVisible && (
        <>
          <motion.p
            className="text-center text-white/60 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Trusted by teams at the worlds leading companies.
          </motion.p>

          <motion.div
            className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12 w-12 text-white/60 text-2xl"
              >
                {company.logo}
              </div>
            ))}
          </motion.div>
        </>
      )}
    </section>
  );
}
