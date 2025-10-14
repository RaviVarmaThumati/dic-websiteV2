import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000); // 7 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container">
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-bg ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Transforming Businesses <br /> with Intelligent Software Solutions
            </h1>
            <p>
              From enterprise-grade systems to AI-powered tools, we design, build,
              and deliver technology that drives growth and innovation.
            </p>
            <div className="hero-actions">
              <button className="primary-btn">Get a Consultation</button>
              <button className="secondary-btn">View Our Work</button>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
              alt="Digital transformation illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
