'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sun, Moon, Globe, ChevronDown, X, Menu, Heart } from 'lucide-react';
import { LanguageCode } from '@/types/cms';
import { NAV_TRANSLATIONS, CMS_DATABASE } from '@/constants/cms-database';
import { useTheme } from '@/context/ThemeContext';

interface NavbarProps {
  currentLang: LanguageCode;
  onLangChange: (lang: LanguageCode) => void;
  onOpenDonateModal?: () => void;
}

export default function Navbar({ currentLang, onLangChange, onOpenDonateModal }: NavbarProps): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();
  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);
  const [isKurumsalOpen, setIsKurumsalOpen] = useState<boolean>(false);

  const nt = NAV_TRANSLATIONS[currentLang] || NAV_TRANSLATIONS['TR'];
  const pageData = CMS_DATABASE[currentLang] || CMS_DATABASE['TR'];

  useEffect(() => {
    let animationFrameId: number;
    let ticking = false;

    // Sayfa yenilendiğinde en başa atsın isteği üzerine:
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }

    const handleScroll = (): void => {
      if (!ticking) {
        animationFrameId = requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
  }, [isMobileMenuOpen]);

  const selectLanguage = (selectedLang: LanguageCode): void => {
    onLangChange(selectedLang);
    setIsLangOpen(false);
    setIsMobileMenuOpen(false);
  };

  const languages: ReadonlyArray<LanguageCode> = ['TR', 'KUR', 'EN', 'DE', 'FR'];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#FAF8F5]/90 dark:bg-[#0F0C12]/90 backdrop-blur-2xl border-b border-gray-200 dark:border-white/5 py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <Link href="/" className="relative group cursor-pointer flex-shrink-0">
          <div className="absolute inset-0 bg-[#6A4C93] dark:bg-[#FF9A8B] animate-breathe blur-[30px] opacity-10 dark:opacity-20 group-hover:opacity-30 transition-opacity duration-700 rounded-full" />
          <Image src="/image_2.png" alt="Rosa Logo" width={180} height={96} priority className="relative h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
        </Link>

        {/* Center: Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          <div className="relative group">
            <button className="font-bold text-xs tracking-[0.2em] uppercase text-[#6A4C93] dark:text-[#B2AAC0] hover:text-[#6A4C93] dark:hover:text-[#FF9A8B] transition-colors duration-300 flex items-center gap-1">
              {nt.kurumsal} <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 mt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white dark:bg-[#1A1520] border border-gray-100 dark:border-white/10 rounded-2xl shadow-xl transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 flex flex-col overflow-hidden">
              <Link href="/hakkimizda" className="px-5 py-4 text-xs font-bold text-[#6A4C93] dark:text-[#B2AAC0] hover:bg-[#6A4C93]/5 hover:text-[#6A4C93] dark:hover:bg-white/5 dark:hover:text-[#FF9A8B] transition-colors border-b border-gray-100 dark:border-white/5 uppercase tracking-wider">{nt.subHakkimizda}</Link>
              <Link href="/ekibimiz" className="px-5 py-4 text-xs font-bold text-[#6A4C93] dark:text-[#B2AAC0] hover:bg-[#6A4C93]/5 hover:text-[#6A4C93] dark:hover:bg-white/5 dark:hover:text-[#FF9A8B] transition-colors border-b border-gray-100 dark:border-white/5 uppercase tracking-wider">{nt.subEkibimiz}</Link>
              <Link href="/sss" className="px-5 py-4 text-xs font-bold text-[#6A4C93] dark:text-[#B2AAC0] hover:bg-[#6A4C93]/5 hover:text-[#6A4C93] dark:hover:bg-white/5 dark:hover:text-[#FF9A8B] transition-colors border-b border-gray-100 dark:border-white/5 uppercase tracking-wider">{nt.subSss}</Link>
              <Link href="/banka-hesaplarimiz" className="px-5 py-4 text-xs font-bold text-[#6A4C93] dark:text-[#B2AAC0] hover:bg-[#6A4C93]/5 hover:text-[#6A4C93] dark:hover:bg-white/5 dark:hover:text-[#FF9A8B] transition-colors uppercase tracking-wider">{nt.subBankaHesaplari}</Link>
            </div>
          </div>
          <Link href="/haberler" className="font-bold text-xs tracking-[0.2em] uppercase text-[#6A4C93] dark:text-[#B2AAC0] hover:text-[#6A4C93] dark:hover:text-[#FF9A8B] transition-colors duration-300">{nt.haberler}</Link>
          <Link href="/raporlar" className="font-bold text-xs tracking-[0.2em] uppercase text-[#6A4C93] dark:text-[#B2AAC0] hover:text-[#6A4C93] dark:hover:text-[#FF9A8B] transition-colors duration-300">{nt.raporlar}</Link>
          <Link href="/#iletisim" className="font-bold text-xs tracking-[0.2em] uppercase text-[#6A4C93] dark:text-[#B2AAC0] hover:text-[#6A4C93] dark:hover:text-[#FF9A8B] transition-colors duration-300">{nt.iletisim}</Link>
        </div>

        {/* Right: Controls */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <button onClick={toggleTheme} className="w-11 h-11 rounded-full flex items-center justify-center bg-[#6A4C93]/5 dark:bg-white/5 text-[#6A4C93] dark:text-white hover:bg-[#FF9A8B] animate-breathe dark:hover:bg-[#FF9A8B] animate-breathe hover:text-white transition-all duration-300">
            {theme === 'dark' ? <Sun className="w-5 h-5 text-[#E8A838]" /> : <Moon className="w-5 h-5 text-[#6A4C93]" />}
          </button>

          <div className="relative">
            <button onClick={() => setIsLangOpen(!isLangOpen)} aria-expanded={isLangOpen} className="flex items-center gap-2 p-3 rounded-full bg-[#6A4C93]/5 dark:bg-white/5 text-[#6A4C93] dark:text-white hover:bg-[#6A4C93]/10 dark:hover:bg-white/10 transition-all duration-300 font-bold text-xs tracking-wider">
              <Globe className="w-5 h-5 text-[#6A4C93] dark:text-white" /> {currentLang} <ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-36 bg-white dark:bg-[#1A1520] border border-[#EADFCF] dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50">
                {languages.map((l) => (
                  <button key={l} onClick={() => selectLanguage(l)} className="w-full text-left px-4 py-3 text-sm font-bold text-[#18151A] dark:text-[#F5F3F7] hover:bg-[#6A4C93]/5 dark:hover:bg-white/10 transition-colors border-t first:border-0 border-gray-100 dark:border-white/5">{l}</button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={onOpenDonateModal}
            className="border border-[#3D154B]/20 dark:border-white/20 bg-transparent dark:bg-white/5 hover:bg-[#6A4C93]/5 dark:hover:bg-white/10 text-[#6A4C93] dark:text-white font-black text-[10px] xl:text-xs uppercase tracking-[0.15em] py-3 px-4 xl:px-5 rounded-full transition-all duration-300 ml-2 flex items-center gap-2"
          >
            <Heart className="w-4 h-4 text-[#FF9A8B] fill-current" />
            <span>{nt.bagis}</span>
          </button>
          <Link href="/#iletisim" className="bg-[#FF9A8B] hover:bg-[#FEC89A] animate-breathe text-white font-black text-[10px] xl:text-xs uppercase tracking-[0.15em] py-3 px-5 xl:px-6 rounded-full shadow-md transition-all duration-300">{nt.destek}</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2.5 rounded-full bg-[#6A4C93]/5 dark:bg-white/5 text-[#6A4C93] dark:text-white hover:bg-[#FF9A8B] animate-breathe hover:text-white transition-colors">
            {theme === 'dark' ? <Sun className="w-6 h-6 text-[#E8A838]" /> : <Moon className="w-6 h-6 text-[#6A4C93]" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={pageData?.ui?.ariaMenuToggle || "Menüyü Aç/Kapat"} className="text-[#6A4C93] dark:text-white p-2 focus:outline-none transition-colors relative z-[99]">
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 w-full h-screen bg-[#FAF8F5]/95 dark:bg-[#0F0C12]/95 backdrop-blur-3xl flex flex-col justify-center px-8 z-[90]">
          <div className="flex flex-col gap-6 text-left">
            <div className="flex flex-col">
              <button 
                onClick={() => setIsKurumsalOpen(!isKurumsalOpen)} 
                className="text-4xl font-serif font-black tracking-tight text-[#18151A] dark:text-white text-left flex justify-between items-center w-full"
              >
                {nt.kurumsal} <ChevronDown className={`w-8 h-8 transition-transform ${isKurumsalOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`flex-col gap-4 mt-6 ml-4 pl-4 border-l-2 border-[#3D154B]/10 dark:border-white/10 overflow-hidden transition-all duration-300 ${isKurumsalOpen ? 'flex max-h-[400px] opacity-100' : 'max-h-0 opacity-0 hidden'}`}>
                <Link href="/hakkimizda" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest">{nt.subHakkimizda}</Link>
                <Link href="/ekibimiz" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest">{nt.subEkibimiz}</Link>
                <Link href="/sss" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest">{nt.subSss}</Link>
                <Link href="/banka-hesaplarimiz" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest">{nt.subBankaHesaplari}</Link>
              </div>
            </div>
            
            <Link href="/haberler" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-serif font-black tracking-tight text-[#18151A] dark:text-white">{nt.haberler}</Link>
            <Link href="/raporlar" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-serif font-black tracking-tight text-[#18151A] dark:text-white">{nt.raporlar}</Link>
            <Link href="/#iletisim" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-serif font-black tracking-tight text-[#18151A] dark:text-white">{nt.iletisim}</Link>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-8 mt-8 border-t border-gray-200 dark:border-white/10">
            {languages.map((l) => (
              <button key={l} onClick={() => selectLanguage(l)} className={`px-3 py-2.5 text-xs font-black tracking-widest rounded-full flex-1 min-w-[55px] transition-all ${currentLang === l ? 'bg-[#FF9A8B] animate-breathe text-white shadow-md scale-105' : 'bg-gray-200 dark:bg-white/5 text-gray-700 dark:text-white'}`}>{l}</button>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onOpenDonateModal) onOpenDonateModal();
              }}
              className="w-full border border-[#3D154B]/20 dark:border-white/20 bg-transparent dark:bg-white/5 text-[#6A4C93] dark:text-white font-black text-sm uppercase tracking-wider py-4 rounded-full flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 text-[#FF9A8B] fill-current" />
              <span>{nt.bagis}</span>
            </button>
            <Link href="/#iletisim" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-[#FF9A8B] animate-breathe text-white font-black text-sm uppercase tracking-wider py-4 rounded-full shadow-lg text-center">{nt.destek}</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
