// Bismillahirahmanirahim 




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
