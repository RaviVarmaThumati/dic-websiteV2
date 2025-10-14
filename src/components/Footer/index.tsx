import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const socialLinks = [
  { icon: <FaLinkedinIn />, url: "#" },
  { icon: <FaTwitter />, url: "#" },
  { icon: <FaFacebookF />, url: "#" },
  { icon: <FaYoutube />, url: "#" },
];

const FooterSection: React.FC = () => (
  <footer className="footer-main">
    <div className="footer-overlay" />
    <div className="footer-container">
      <div className="footer-columns">
        {/* LEFT: Logo & Socials */}
        <div className="footer-col footer-left">
          <div className="footer-logo-wrap">
            <img
              src="/d-logo.png"
              alt="DIC"
              className="footer-logo"
            />
          </div>
          <p className="footer-tagline">
            Empowering digital innovation through intelligent solutions and proven expertise.
          </p>

          <div className="footer-socials">
            {socialLinks.map((s, idx) => (
              <a
                href={s.url}
                key={idx}
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* CENTER: Contact */}
        <div className="footer-col footer-center">
        <h4 className="footer-heading">Contact Us</h4>
        <div className="footer-contact compact">
            <div className="contact-item">
            <div className="contact-icon-box map"><FaMapMarkerAlt /></div>
            <p>Riyadh, KSA<br />McKinney, TX 75070</p>
            </div>
            <div className="contact-item">
            <div className="contact-icon-box email"><FaEnvelope /></div>
            <p><a href="mailto:info@dic.sa">info@dic.sa</a></p>
            </div>
            <div className="contact-item">
            <div className="contact-icon-box phone"><FaPhone /></div>
            <p><a href="tel:+12143066837">+1 214 306 6837</a></p>
            </div>
        </div>
        </div>

        {/* RIGHT: Quick Links */}
        <div className="footer-col footer-right">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">For Journalists</a></li>
            <li><a href="#">Job Opportunities</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <span>© 2025 DIC Technologies. All rights reserved.</span>
    </div>
  </footer>
);

export default FooterSection;
