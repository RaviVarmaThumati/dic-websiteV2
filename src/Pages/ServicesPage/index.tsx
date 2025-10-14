import React from "react";

import Header from "../../components/Header";
import FooterSection from "../../components/Footer";
import BackToTop from "../../components/BackToTop";
import OfferingsSection from "../../components/OfferingsSection";


const ServicesPage: React.FC = () => (
  <>
    <Header />
    <OfferingsSection />
    <FooterSection />
    <BackToTop />
  </>
);

export default ServicesPage;
