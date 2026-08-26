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
    <div className="min-h-screen flex flex-col">
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
    </div>
  );
}
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin