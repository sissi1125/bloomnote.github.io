'use client';
import { useCallback, useState } from 'react';
import BackToTop from './components/back-to-top';
// import EmailSubscribeModal from './components/email-subscribe-modal';
import Header from './components/header';
import { useDarkMode } from './hooks';
import Contact from './module/contact';
import Home from './module/home';
import Pricing from './module/pricing';
import Help from './module/help';
import Reviews from './module/reviews';
import { useRouter } from 'next/navigation';

import { BloomNavEnum } from './utils/bloomconfig';
import Features from './module/features';
import Scenes from './module/scenes';

export default function App() {
  const [showEmailModal, setShowEmailModal] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const router = useRouter();

  const navigateToHash = (hash: string) => {
    router?.push(`#${hash}`);
  };

  const scrollToSection = useCallback((id: string) => {
    navigateToHash(id);
    // const section = document.getElementById(id);
    // section?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#F9F4EF]">
      <Header onNavClick={scrollToSection} onLogoClick={() => scrollToSection('home')} />
      <div id={BloomNavEnum.HOME}>
        <Home />
      </div>
      <div id={BloomNavEnum.FEATURES}>
        <Features />
        <Scenes />
      </div>
      <div id={BloomNavEnum.PRICING}>
        <Pricing />
      </div>
      <div id={BloomNavEnum.HELP}>
        <Help />
      </div>
      <div id={BloomNavEnum.CONTACT}>
        <Contact />
      </div>
      {/* <BackToTop /> */}
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
