// Bismillahirahmanirahim 
// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin 
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illAllah u vahdehu la şerike leh, lehul-mülku ve lehul-hamdü
// yuhyi ve yumit ,biyadihil xayr
// ve hüve ala külli şeyin kadir
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illAllah
// Bila Allah Azze ve Celle me ji sunneta Resulullah Muhammed (s.a.v) neqetine, amin rabbal alemin 
// Xeyni Allah tu Xweda tune,Allah yeke û tu şirîkê Allah tune, pesin de jî mulk de jî û spasî tenê Allah re tê kirin.
// Hz Mıhemed ji qûl u resûlê wi ye 
// Elhamdulillah Ya Kerim, Ya Rahim, Ya Samed, Ya Vehhab, Ya Quddus, Ya Erhamer Rahimin, Ya Gafur, Ya Rahim, Ya Halim, Ya Azim, Ya Aziz, Ya Hakim, Ya Latif, Ya Hafiz, Ya Kadir, Ya Muheymin, Ya Ehed, Ya Alim, Ya Basir, Ya Sami, Ya Halim, Ya Gani




import loginImage from "@/assets/login-image.svg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import LoginForm from "./LoginForm";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Giriş Yap",
};

export default function Page() {
  return (
    <main className="auth-page flex h-screen items-center justify-center p-5">
      <div className="auth-card flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="auth-content w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <h1 className="auth-title text-center text-3xl font-bold">Admin Giriş</h1>
          <div className="space-y-5">
            <div className="auth-divider">
              <span>Giriş yaparak devam et</span>
            </div>
            <LoginForm />
          
          </div>
        </div>
    
      </div>
    </main>
  );
}
