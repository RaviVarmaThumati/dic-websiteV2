import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import KeyFactsSection from "./components/KeyFactsSection";
import HeroSection from "./components/HeroSection";
import OfferingsSection from "./components/OfferingsSection";
import FooterSection from "./components/Footer";
import BackToTop from "./components/BackToTop";
import CompilanceSection from "./components/CompilanceSection";
import ContactUsSection from "./components/ContactUsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ContactPage from "./Pages/ContactPage"; // Make sure this exists
import AboutUsPage from "./Pages/AboutUsPage";
import ServicesPage from "./Pages/ServicesPage";

function App() {
  return (
    <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <KeyFactsSection />
              <WhyChooseUsSection />
              <OfferingsSection />
              <CompilanceSection />
              <ContactUsSection />
              <FooterSection />
              <BackToTop />
            </>
          }
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={<ContactPage />}
        />
        <Route
          path="/about"
          element={<AboutUsPage />}
        />
        <Route
          path="/services"
          element={<ServicesPage />}
        />
      </Routes>
  );
}

export default App;
