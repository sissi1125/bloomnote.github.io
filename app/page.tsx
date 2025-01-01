'use client';
import { useCallback, useState } from 'react';
import { useFavicon } from 'react-use';
import BackToTop from './components/back-to-top';
// import EmailSubscribeModal from './components/email-subscribe-modal';
import Header from './components/header';
import { useDarkMode } from './hooks';
import Contact from './module/contact';
import Home from './module/home';
import Overview from './module/overview';
import Product from './module/product';
import Reviews from './module/reviews';

export default function App() {
  const [showEmailModal, setShowEmailModal] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const isDarkMode = useDarkMode();
  useFavicon(isDarkMode ? '/images/favicon-white.ico' : '/images/favicon-black.ico');

  return (
    <div className="overflow-x-hidden">
      <Header onNavClick={scrollToSection} onLogoClick={() => scrollToSection('home')} />
      <div id="home">
        <Home />
      </div>
      <div id="overview">
        <Overview />
      </div>
      <div id="product">
        <Product />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <BackToTop />
      {/* <SuccessModal show={showSuccessModal} onClose={() => setShowSuccessModal(false)} /> */}
      {/* <EmailSubscribeModal
        show={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        onSuccess={() => {
          setShowEmailModal(false);
          setShowSuccessModal(true);
        }}
      /> */}
    </div>
  );
}
