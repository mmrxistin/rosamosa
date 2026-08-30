// Bismillahirahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah
// La ilahe illAllahu vahdehu la sharika leh, lehu'l-mulku ve lehu'l-hamdu,
// yuhyi ve yumit
//  ve huve ala kulli şey'in kadir
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illAllah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd
import React from "react";
import Mmmnavbar from "./components/mmnav";

import Footer from "./components/mmbingeh";
import ContactForm from "./components/mmfrm";



// El Hamdu Lîllah ya Kerîm î Rezzaq î Vehhab î Ehed î Quddus î Heq bêdawîtî..
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/*
      <Alert variant="success" style={{ width: "100%", textAlign: "center" }}>
        اَشْهَدُ اَنْ لاَ اِلٰهَ اِلاَّ اللّٰهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
      </Alert>
      */}
      <Mmmnavbar />

      <main className="flex-1">
        {children}
      </main>

      <ContactForm />
      <Footer />

      <a
        href="tel:+905434955957"
        aria-label="Telefon ile ara"
        className="fixed bottom-4 left-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-700 active:scale-95 md:bottom-6 md:left-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h2.2a1 1 0 01.98.79l.6 3A1 1 0 0110 8h0a1 1 0 01-.27.66l-1.2 1.2a12.04 12.04 0 005.5 5.5l1.2-1.2A1 1 0 0116 14h0a1 1 0 01.46.2l3 .6a1 1 0 01.79.98V19a2 2 0 01-2 2H19A17 17 0 013 5z"
          />
        </svg>
      </a>

      <a
        href="https://wa.me/905434955957"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-700 active:scale-95 md:bottom-6 md:right-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.84 11.84 0 0012 .75C6.06.75 1.25 5.56 1.25 11.5c0 2.02.53 3.93 1.54 5.6L.5 23.5l6.63-2.01a11.7 11.7 0 004.37.83c5.94 0 10.75-4.81 10.75-10.75 0-3.03-1.18-5.86-3.33-7.59zM12 20c-1.33 0-2.63-.34-3.77-.98l-.27-.15-3.94 1.18 1.06-3.85-.18-.31A8.47 8.47 0 013.5 11.5C3.5 7 7.5 3.5 12 3.5S20.5 7 20.5 11.5 16.5 20 12 20z" />
          <path d="M17.1 14.1c-.28-.14-1.65-.82-1.9-.92-.25-.1-.43-.14-.62.14s-.71.92-.87 1.12c-.16.2-.32.23-.6.08-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.04-.35-.02-.49-.06-.14-.62-1.5-.85-2.06-.22-.54-.45-.47-.62-.48l-.53-.01c-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.2s.95 2.56 1.08 2.74c.13.18 1.86 2.86 4.5 3.9 1.4.6 2.49.96 3.35 1.22.9.27 1.72.23 2.37.14.72-.11 1.65-.67 1.88-1.31.23-.64.23-1.18.16-1.3-.07-.12-.25-.18-.53-.32z" />
        </svg>
      </a>
    </div>
  );
}
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
