import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { offers } from "../../data/offerings";
import "./offerings.css";

const OfferingsSection: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <motion.section
      className="offerings-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="offerings-container">
        {/* Sidebar / Tabs */}
        <aside className="offerings-sidebar">
          <div className="offerings-heading">
            <span className="heading-highlight" />
            <span>Explore Our Offerings</span>
          </div>
          <ul className="offerings-tabs">
            {offers.map((offer, idx) => (
              <motion.li
                key={offer.title}
                className={active === idx ? "active" : ""}
                onClick={() => setActive(idx)}
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {offer.title}
              </motion.li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="offerings-details">
          <AnimatePresence mode="wait">
            <motion.div
              key={offers[active].title}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              {offers[active].details}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </motion.section>
  );
};

export default OfferingsSection;
