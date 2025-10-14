import React from "react";
import { motion } from "framer-motion";
import "./AboutUsSection.css";
import aboutImage from "../../assets/about-us.png";

const aboutCards = [
  {
    title: "Our Mission",
    description: "Empowering businesses with innovative software solutions that drive growth and efficiency.",
  },
  {
    title: "Our Vision",
    description: "To be a global leader in intelligent technology services and solutions.",
  },
  {
    title: "Our Values",
    description: "Integrity, collaboration, innovation, and customer-centricity in everything we do.",
  },
];

const stats = [
  { value: 15, label: "Years of Experience" },
  { value: 250, label: "Projects Completed" },
  { value: 120, label: "Satisfied Clients" },
  { value: 10, label: "Global Offices" },
];

const AboutUsSection: React.FC = () => {
  return (
    <section className="aboutus-section">
      <div className="section-wrapper">
        <div className="aboutus-container">
          {/* Left Side: Image */}
          <motion.div
            className="aboutus-image"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={aboutImage} alt="About Us" />
          </motion.div>

          {/* Right Side: Content */}
          <div className="aboutus-content">
            <div className="section-header">
              <h2>About Us</h2>
              <p>
                We empower businesses with intelligent software solutions,
                combining innovation, expertise, and commitment to deliver
                measurable results.
              </p>
            </div>

            {/* Stats */}
            <div className="aboutus-stats">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <h3 className="stat-value">{stat.value}+</h3>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* <div className="aboutus-actions">
              <button className="primary-btn">Learn More</button>
            </div> */}
          </div>
        </div>

        {/* Cards */}
          <div className="aboutus-cards">
            {aboutCards.map((card, index) => (
              <motion.div
                className="about-card"
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
