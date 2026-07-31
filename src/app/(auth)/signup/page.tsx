// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah 
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illAllah
// Bila Allah Azze ve Celle me ji sunneta Resulullah Muhammed (s.a.v) neqetine, amin rabbal alemin 
// Xeyni Allah tu Xweda tune, Allah yeke û tu şirîkê Allah tune, pesin de jî mulk de jî û spasî tenê Allah re tê kirin.
// Hz Mıhemed ji qûl u resûlê wi ye
// Elhamdulillah Ya Kerim, Ya Rahim, Ya Samed, Ya Vehhab, Ya Quddus, Ya Erhamer Rahimin, Ya Gafur, Ya Rahim, Ya Halim, Ya Azim, Ya Aziz, Ya Hakim, Ya Latif, Ya Hafiz, Ya Kadir, Ya Muheymin, Ya Ehed, Ya Alim, Ya Basir, Ya Sami, Ya Halim, Ya Gani


import signupImage from "@/assets/signup-image.svg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Üye Ol",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Admin Kayıt Ol</h1>

          </div>
          <div className="space-y-5">
            <SignUpForm />
            <Link href="/login" className="block text-center hover:underline">
              Zaten bir hesabınız var mı? Giriş Yap
            </Link>
          </div>
        </div>
        <Image
          src={signupImage}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
