// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin 
// Suphanallah, Elhamdulillah, Allahu Ekber
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
// Allah u Ekber Ve Lillahil Hamd, Allah u Ekber, Allah u Ekber,
//  La ilahe illAllah u vahdehu la şerike leh, lehul-mulku ve lehul-hamdu
//  yuhyi ve yumit ve biyadihil xayr 
//  ve huve ala kulli şey'in kadir
// Allah u Ekber Ve Lillahil Hamd

"use client";
import React, { useState } from 'react';
import SpotlightBackground from '@/components/SpotlightBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WorkAreasSection from '@/components/WorkAreasSection';
import FieldGallerySection from '@/components/FieldGallerySection';
import MediaReportsSection from '@/components/MediaReportsSection';
import NewsPanelSection from '@/components/NewsPanelSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import WorkModuleModal from '@/components/WorkModuleModal';
import MediaModal from '@/components/MediaModal';
import GalleryModal from '@/components/GalleryModal';
import DonateModal from '@/components/DonateModal';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Footer from '@/components/Footer';
import { ActiveModalState, MediaItem, GalleryItem } from '@/types/cms';
import { useLanguage } from '@/context/LanguageContext';
import { CMS_DATABASE } from '@/constants/cms-database';
import ForYouFeed from './ekibimiz/ForYouFeed';
export default function Home(): React.JSX.Element {
  const { lang, setLang } = useLanguage();
  const [activeModal, setActiveModal] = useState<ActiveModalState | null>(null);
  const [activeMediaItem, setActiveMediaItem] = useState<MediaItem | null>(null);
  const [activeGalleryItem, setActiveGalleryItem] = useState<GalleryItem | null>(null);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState<boolean>(false);

  const pageData = CMS_DATABASE[lang] || CMS_DATABASE['TR'];

  return (
    <>
      <SpotlightBackground />
      <Navbar
        currentLang={lang}
        onLangChange={setLang}
        onOpenDonateModal={() => setIsDonateModalOpen(true)}
      />
<ForYouFeed/>
      <HeroSection hero={pageData.hero} ui={pageData.ui} />
      <NewsPanelSection
        newsItems={pageData.newsItems}
        announcementItems={pageData.announcementItems}
        questionItems={pageData.questionItems}
        ui={pageData.ui}
      />
      <WorkAreasSection
        sections={pageData.sections}
        ui={pageData.ui}
        modules={pageData.modules}
        onSelectModule={setActiveModal}
      />

      <FieldGallerySection
        sections={pageData.sections}
        galleryItems={pageData.galleryItems}
        onSelectGallery={setActiveGalleryItem}
      />

      <MediaReportsSection
        sections={pageData.sections}
        ui={pageData.ui}
        mediaItems={pageData.mediaItems}
        onSelectMedia={setActiveMediaItem}
      />

      <AboutSection
        sections={pageData.sections}
        stats={pageData.stats}
      />

      <ContactSection
        contact={pageData.contact}
        ui={pageData.ui}
      />

      <WorkModuleModal
        activeModal={activeModal}
        ui={pageData.ui}
        onClose={() => setActiveModal(null)}
      />

      <MediaModal
        item={activeMediaItem}
        ui={pageData.ui}
        onClose={() => setActiveMediaItem(null)}
      />

      <GalleryModal
        item={activeGalleryItem}
        ui={pageData.ui}
        onClose={() => setActiveGalleryItem(null)}
      />

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
