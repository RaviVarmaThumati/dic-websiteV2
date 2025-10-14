import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const slides = [
  "src/assets/hero/hero-01.jpg",
  "src/assets/hero/hero-02.jpg",
  "src/assets/hero/hero-03.jpg",
  "src/assets/hero/hero-04.jpg",
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate(); // <-- hook

  const handleConsultationClick = () => {
    navigate("/contact"); // <-- navigate programmatically
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3500); // slightly slower transition
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {/* Animated gradient wave layers */}
      <div className="wave-layer wave1"></div>
      <div className="wave-layer wave2"></div>
      <div className="wave-layer wave3"></div>

      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Transforming Businesses <br />
            with Intelligent Software Solutions
          </h1>
          <p>
            From enterprise-grade systems to AI-powered tools, we design, build, and deliver
            technology that drives growth and innovation.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={handleConsultationClick}>
                Get a Consultation
            </button>
            <button className="secondary-btn">View Our Work</button>
          </div>
        </div>

        <div className="hero-slider">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index}`}
              className={`hero-image ${index === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
