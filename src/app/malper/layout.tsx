// Bismillahir Rahmanir Rahim
// Elhamdu Lillahi Rabbil Alamin
// Es selatu vesselamu ala rasulina Muhammedin
// Suphan Allah ul Azim ve Bihamdihi
// Subhan Allahil Azim
// La ilahe illAllah u vahdehu la şerike leh, lehul mülkü ve lehul hamdü
//yuhyi ve yumit ,biyadihil xayru ve huve ala kulli şeyin kadir.
//  ve hüve ala külli şeyin kadir.
// Elhamdulillah ya Samed i Vehhab i Quddus i  Erhamer Rahimin i Gafur i Rahim i Halim i Azim i Aziz i Hakim i Latif i Hafiz i Kadir i Muheymin i Ehed  i Alim i Basir i Sami i Halim i Gani
// La ilahe illAllah u vahdehu la şerike leh, lehul mülkü ve lehul hamdü
// Rabbena Ve Lekel Hamd . İnneke Hamidun Mecid
// Allahu Ekber Allahu Ekber Allahu Ekber La ilahe illAllah
// Allahu Ekber Allahu Ekber ve Lillahil Hamd
"use client";
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { AdminShortcutListener } from '@/components/AdminShortcutListener';
import '../globals.css';
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans-next',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display-next',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif-next',
  display: 'swap',
});


export default function MLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <div className={`${inter.variable} ${plusJakarta.variable} ${playfair.variable} min-h-screen bg-[#FAF8F5] dark:bg-[#0F0C12] text-[#18151A] dark:text-[#F5F3F7] font-sans relative selection:bg-[#FF6B5B] selection:text-white overflow-x-hidden transition-colors duration-500`}>
      <ThemeProvider>
        <LanguageProvider>
          <AdminShortcutListener />
          {children}
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}
