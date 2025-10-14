import React, { useEffect, useState } from "react";
import "./keyfacts.css";

const keyFacts = [
  { value: 36, label: "years of expertise" },
  { value: 750, label: "IT professionals" },
  { value: 4200, label: "success stories" },
  { value: 30, label: "industries covered" },
];

// Easing function for smooth animation
const easeOutQuad = (t: number) => t * (2 - t);

const KeyFactsSection: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(keyFacts.map(() => 0));

  useEffect(() => {
    const duration = 2000; // total animation duration
    const frameRate = 60; // frames per second
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const counters = keyFacts.map(f => f.value);

    const interval = setInterval(() => {
      frame++;
      setCounts(
        counters.map((value) =>
          Math.round(value * easeOutQuad(frame / totalFrames))
        )
      );
      if (frame >= totalFrames) clearInterval(interval);
    }, duration / totalFrames);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="key-facts-wrapper compact light-bg">
      <div className="key-facts-content">
        <div className="key-facts-title-block">
          <span className="highlight-box" />
          <h2 className="key-facts-title">Key Facts About DIC</h2>
        </div>
        <div className="key-facts-list">
          {keyFacts.map((fact, idx) => (
            <div className="key-fact-item" key={idx}>
              <span className="fact-value animated-number">{counts[idx].toLocaleString()}</span>
              <span className="fact-label">{fact.label}</span>
              {idx < keyFacts.length - 1 && <div className="vertical-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFactsSection;
