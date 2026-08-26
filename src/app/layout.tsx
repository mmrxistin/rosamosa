// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah
// Allahumme salli ala seyyidina Muhammedin
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illAllah, Allahu Ekber,
// SubhanAllah, Elhamdulillah, Allahu Ekber
// Estaxfurullah El Azim
// Allahu Ekber ve Lillahil Hamd
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { extractRouterConfig } from "uploadthing/server";
import { fileRouter } from "./api/uploadthing/core";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
// La îlahe îll Allah û vahdehû(Esma ul Husna) la şerîke leh, lehul-mülkü ve lehul-hamdü .



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Yalçın İnşaat",
    default: "Yalçın İnşaat",
  },
  description:
    "Yalçın İnşaat | Ana Sayfa · Projeler · Hizmetler · Konut · Ticari Yapı · Altyapı İnşaatı. Güvenilir ve kaliteli inşaat hizmetleri.",
  keywords: [
    "Yalçın İnşaat · İnşaat Firması · Konut Projeleri · Ticari Yapılar · Altyapı · Tadilat.",
  ],
};
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahi Rabbul Alemin
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}

          </ThemeProvider>
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}


// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin

//La ilahe illAllah Muhammeden abduhu ve resuluhu

// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin






export function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-16 bg-gray-800 text-white">
      <p className="text-sm">© {new Date().getFullYear()} Yalçın İnşaat. Tüm hakları saklıdır.</p>
    </footer>
  );

}
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
// La îlahe îll Allah û vahdehû(Esma ul Husna) la şerîke leh, lehul-mülkü ve lehul-hamdü ,


// Yuhyî ve yumît
// Bîyadîhîl xayr
// ve hüve alâ külli şeyin kadîr
// ALLAH U EKBER VELİLLAHIL HAMD