import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/d-logo.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // shrink after 50px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header-container ${scrolled ? "shrink" : ""}`}>
      <div className="top-bar">
        <div className="top-left">
          <span className="location-link">
            <span className="location-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="location-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
                />
              </svg>
            </span>
            Riyadh, KSA
          </span>
        </div>

        <div className="top-right">
          <a href="mailto:info@dic.sa" className="email-link">
            <span className="email-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="email-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0L12 13 3 8"
                />
              </svg>
            </span>
            info@dic.sa
          </a>
        </div>
      </div>

      <div className="main-nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="DIC Logo" />
          </Link>
        </div>

        <nav className="nav-links">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <button className="primary-btn">Contact Us</button>
          <button className="icon-btn">🔍</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
