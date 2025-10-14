import React from "react";
import { motion } from "framer-motion";
import "./Compilance.css";

const certifications = [
  { src: "src/assets/certifications/ISO1.png", alt: "ISO 1" },
  { src: "src/assets/certifications/ISO2.png", alt: "ISO 2" },
  { src: "src/assets/certifications/ISO3.png", alt: "ISO 3" },
  { src: "src/assets/certifications/ISO4.png", alt: "ISO 4" },
  { src: "src/assets/certifications/ISO5.png", alt: "ISO 5" },
];

const CompilanceSection: React.FC = () => {
  return (
    <section className="compliances-section">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <h2>Our Compliances</h2>
          <p>Exclusive ISO Certifications and Industry Standards</p>
        </div>

        {/* Carousel Wrapper with Gradient Overlays */}
        <div className="carousel-wrapper">
          {/* Gradient overlays */}
          <div className="gradient-overlay left" />
          <div className="gradient-overlay right" />

          <motion.div
            className="carousel-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {[...certifications, ...certifications].map((cert, idx) => (
              <motion.div
                key={idx}
                className="cert-box"
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 10px 30px rgba(79, 70, 229, 0.25)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={cert.src} alt={cert.alt} className="cert-logo" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompilanceSection;
