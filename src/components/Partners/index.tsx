"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "./partners.css";

// Configurable partner list
const partners = [
  { name: "Apigee", logo: "src/assets/partners/apigee.png" },
  { name: "Boomi", logo: "src/assets/partners/boomi.png" },
  { name: "Google", logo: "src/assets/partners/google.png" },
  { name: "Microsoft", logo: "src/assets/partners/microsoft.png" },
  { name: "Hyperpay", logo: "src/assets/partners/hyperpay.png" },
  { name: "Informatica", logo: "src/assets/partners/informatica.png" },
  { name: "Jira", logo: "src/assets/partners/jira.png" },
  { name: "KrakenD", logo: "src/assets/partners/krakenD.png" },
];

function PartnersSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="offerings-section py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Our Trusted Partners
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            We collaborate with leading technology innovators and strategic partners worldwide.
          </p>
        </div>

        <div className="offerings-container flex flex-wrap gap-8">
          {/* Left Navigation (Partner Names) */}
          <aside className="offerings-sidebar flex-shrink-0">
            <div className="offerings-heading mb-4">
              <span className="heading-highlight" />
              <span>Our Partners</span>
            </div>
            <ul className="offerings-tabs">
              {partners.map((partner, idx) => (
                <motion.li
                  key={partner.name}
                  className={active === idx ? "active" : ""}
                  onClick={() => setActive(idx)}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {partner.name}
                </motion.li>
              ))}
            </ul>
          </aside>

          {/* Right Content (Partner Logo / Details) */}
          <main className="offerings-details flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={partners[active].name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center items-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md"
              >
                <Image
                  src={partners[active].logo}
                  alt={partners[active].name}
                  width={250}
                  height={120}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
