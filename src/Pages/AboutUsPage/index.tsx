import React from "react";

import Header from "../../components/Header";
import FooterSection from "../../components/Footer";
import BackToTop from "../../components/BackToTop";
import AboutUsSection from "../../components/AboutUsSection";


const AboutUsPage: React.FC = () => (
  <>
    <Header />
    <AboutUsSection />
    <FooterSection />
    <BackToTop />
  </>
);

export default AboutUsPage;
