import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./WhyChooseUsSection.css";
import whyImage from "../../assets/whychooseus.png";

const reasons = [
  {
    icon: "🚀",
    title: "Fast Delivery",
    description: "We ensure your projects are delivered on time without compromising quality.",
  },
  {
    icon: "💡",
    title: "Innovative Solutions",
    description: "Our team leverages cutting-edge technology to provide creative solutions.",
  },
  {
    icon: "🤝",
    title: "Trusted Partnership",
    description: "We build long-term relationships with our clients through transparency and reliability.",
  },
  {
    icon: "📈",
    title: "Proven Results",
    description: "Our solutions drive measurable results and help your business grow.",
  },
];

const WhyChooseUsSection: React.FC = () => {
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  return (
    <section className="whychooseus-section">
      <div className="section-wrapper">
        <div className="whychooseus-container">
            <div className="section-header">
              <h2>Why Choose Us</h2>
              <h1>Few Reasons Why People Choosing Us!</h1>
              <p>We prioritize understanding our clients' unique requirements, challenges, and goals. We believe in building strong partnerships and collaborate closely with our clients throughout the project lifecycle. Our client-centric approach enables us to tailor our solutions to their specific needs and deliver personalized services.</p>
            </div>
          {/* Left Side: Image */}
          <motion.div
            className="whychooseus-image"
            ref={imageRef}
            initial={{ x: -100, opacity: 0 }}
            animate={imageInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={whyImage} alt="Why Choose Us" />
          </motion.div>

          {/* Right Side: Text and Cards */}
          <div className="whychooseus-content">

            <motion.div
              className="reasons-grid"
              ref={cardsRef}
              initial="hidden"
              animate={cardsInView ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  className="reason-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{ scale: 1.05, boxShadow: "0 12px 28px rgba(79, 70, 229, 0.15)" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="reason-icon">{reason.icon}</div>
                  <h3 className="reason-title">{reason.title}</h3>
                  <p className="reason-desc">{reason.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
