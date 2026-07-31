'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SpotlightBackground from "@/components/SpotlightBackground";
import Navbar from '@/components/Navbar';
import DonateModal from '@/components/DonateModal';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { CMS_DATABASE } from '@/constants/cms-database';

export default function ReportsPage(): React.JSX.Element {
  const { lang, setLang } = useLanguage();
  const [isDonateModalOpen, setIsDonateModalOpen] = useState<boolean>(false);

  const pageData = CMS_DATABASE[lang] || CMS_DATABASE['TR'];
  const nt = pageData.ui;

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
              {pageData.sections.mediaTitle === 'Medya & Raporlar' ? 'Raporlar' : pageData.sections.mediaTitle}
            </h1>
            <p className="text-lg text-[#5A5260] dark:text-[#B2AAC0] max-w-2xl mx-auto">
              {pageData.sections.mediaSub}
            </p>
          </div>

          <div className="flex flex-col gap-10 max-w-5xl mx-auto">
            {pageData.reportsItems.map((item, index) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel rounded-[2rem] border border-black/5 dark:border-white/5 transition-all duration-500 transform hover:-translate-y-2 flex flex-col md:flex-row overflow-hidden animate-cinematic-reveal group shadow-md hover:shadow-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 md:h-auto md:w-2/5 overflow-hidden bg-gray-100 dark:bg-[#1A1520] shrink-0">
                  <img 
                    src={item.imgUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent opacity-50" />
                </div>

                <div className="p-8 md:p-10 flex-1 flex flex-col justify-center relative bg-white/50 dark:bg-[#1A1520]/50 backdrop-blur-md">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-serif font-black text-[#18151A] dark:text-white mb-4 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-base text-[#5A5260] dark:text-[#B2AAC0] font-medium line-clamp-4 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
                    <span className="text-sm font-black uppercase tracking-widest text-[#3D154B] dark:text-[#FF6B5B] group-hover:translate-x-2 transition-transform flex items-center gap-3">
                      {nt.btnReadReport} <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
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
