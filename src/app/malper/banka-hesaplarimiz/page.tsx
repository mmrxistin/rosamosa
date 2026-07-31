'use client';

import React, { useState } from 'react';
import SpotlightBackground from "@/components/SpotlightBackground";
import Navbar from '@/components/Navbar';
import DonateModal from '@/components/DonateModal';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { CMS_DATABASE, NAV_TRANSLATIONS } from '@/constants/cms-database';

export default function BankaHesaplarimizPage(): React.JSX.Element {
  const { lang, setLang } = useLanguage();
  const [isDonateModalOpen, setIsDonateModalOpen] = useState<boolean>(false);

  const pageData = CMS_DATABASE[lang] || CMS_DATABASE['TR'];
  const nt = NAV_TRANSLATIONS[lang] || NAV_TRANSLATIONS['TR'];

  return (
    <>
      <SpotlightBackground />
      <Navbar
        currentLang={lang}
        onLangChange={setLang}
        onOpenDonateModal={() => setIsDonateModalOpen(true)}
      />

      <div className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-cinematic-reveal">
            <h1 className="text-4xl md:text-5xl font-serif font-black text-[#18151A] dark:text-white mb-6">
              {nt.subBankaHesaplari}
            </h1>
            <p className="text-lg text-[#5A5260] dark:text-[#B2AAC0] max-w-2xl mx-auto">
              Yapım Aşamasında
            </p>
          </div>
        </div>
      </div>

      <DonateModal
        isOpen={isDonateModalOpen}
        ui={pageData.ui}
        onClose={() => setIsDonateModalOpen(false)}
      />
      <ScrollToTopButton ariaLabel={pageData.ui.ariaScrollTop} />
      
      <Footer ui={pageData.ui} contact={pageData.contact} onOpenDonateModal={() => setIsDonateModalOpen(true)} />
    </>
  );
}
