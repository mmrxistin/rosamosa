// Bismillahirahmanirahim 
// ElHAMDULİLLAHİRABBULALEMİN
// Es-selatu ve Es-selamu ala Resulina Muhammedin 
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// SubhanAllah, Elhamdulillah, Allahu Ekber
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Subhanallah , Elhamdulillah, Allahu Ekber
// Hasbunallahu ve ni'mel vekil
// La havle ve la kuvvete illa billahil aliyyil azim ve huwe ala kulli şeyin kadir
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin

import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "./SessionProvider";
import Navbar from "./Navbar";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/malper");

  return <SessionProvider value={session}>{children}</SessionProvider>;
}






function Footer() {


  
  return (<main>
<Navbar />




    <footer className="flex items-center justify-center w-full h-16 bg-gray-800 text-white">
      <p className="text-sm">
        © {new Date().getFullYear()} Yekazad Software Center. All rights reserved.
      </p>
      <span className="mx-2">|</span>
      <p className="text-xs text-gray-400">
        Admin Panel &mdash; Empowering your management experience.
      </p>
    </footer></main>
  );
  
}  // Bismillahirahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin 
// La ilahe illAllahu vahdehu la şerike leh, lehul mulku ve lehul hamdu ,yuhyi ve yumit,biyadihil xayr ve huve ala kulli şeyin kadir
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// La havle ve la kuvvete illa billahil aliyyil azim
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// SubhanAllah, Elhamdulillah, Allahu Ekber
// Allah u Ekber Ve Lillahil Hamd, Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah