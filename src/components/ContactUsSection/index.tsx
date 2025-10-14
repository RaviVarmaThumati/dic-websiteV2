import React from "react";
import { motion } from "framer-motion";
import "./ContactUsSection.css";

const ContactUsSection: React.FC = () => (
  <section className="contactus-section">
    <motion.div
      className="contactus-box"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Left - Contact Form */}
      <div className="contactus-form-area">
        <div className="consult-header">
          <h2 className="consult-title">
            Need a <span>Consultation?</span>
          </h2>
        </div>

        <p className="consult-desc">
          Drop us a line — we’re here to answer your questions 24/7.
        </p>

        <form className="contactus-form">
          <motion.textarea
            className="cu-message"
            placeholder="How can we help you?"
            whileFocus={{ borderColor: "#007bff", boxShadow: "0 0 8px #007bff30" }}
          ></motion.textarea>

          <div className="cu-upload-row">
            <span className="cu-upload-icon">&#8682;</span>
            <span>
              Drag & drop or <a href="#">browse</a> to upload file(s)
              <span className="cu-help">?</span>
            </span>
          </div>

          <div className="cu-row">
            <input className="cu-input" type="text" placeholder="Full name" />
            <input className="cu-input" type="text" placeholder="Company" />
          </div>

          <div className="cu-row">
            <input className="cu-input" type="email" placeholder="Work email" />
            <div className="cu-phone-input">
              <select className="cu-country">
                <option value="IN">🇮🇳 +91</option>
                <option value="US">🇺🇸 +1</option>
                <option value="GB">🇬🇧 +44</option>
              </select>
              <input type="tel" placeholder="00000 00000" />
            </div>
          </div>

          <motion.button
            type="submit"
            className="cu-send-btn"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255,200,65,0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>

      {/* Right - Contact Info */}
      <aside className="contactus-side">
        <motion.div
          className="cu-side-block"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Get in Touch Instantly</h3>
          <div className="cu-side-item"><span className="cu-side-icon">📞</span> Call us</div>
          <div className="cu-side-item"><span className="cu-side-icon">📧</span> Email us</div>
          <div className="cu-side-item"><span className="cu-side-icon">💬</span> Live chat</div>
          <div className="cu-side-item"><span className="cu-side-icon">🟩</span> WhatsApp</div>
        </motion.div>

        <div className="cu-side-block">
          <h4>For Journalists</h4>
          <div className="cu-side-item"><span className="cu-side-icon">📝</span> Get unique insights</div>
        </div>

        <div className="cu-side-block">
          <h4>Join Our Team</h4>
          <div className="cu-side-item"><span className="cu-side-icon">📤</span> Upload your CV</div>
        </div>
      </aside>
    </motion.div>
  </section>
);

export default ContactUsSection;
