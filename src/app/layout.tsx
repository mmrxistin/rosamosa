// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
//        اَشْهَدُ اَنْ لاَ اِلٰهَ اِلاَّ اللّٰهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
// Esselatu vesselamu ala rasulillah 
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber ve lillahi'l-hamd
// Subhanallah, Elhamdulillah, Allahu Ekber

import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { extractRouterConfig } from "uploadthing/server";
import { fileRouter } from "./api/uploadthing/core";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactQueryProvider from "./ReactQueryProvider";

export const metadata: Metadata = {
  title: {
    template: "%s | Rosa Kadın Derneği",
    default: "Rosa Kadın Derneği - Kadınların güçlenmesi için birlikte",
  },
  description: "Rosa Kadın Derneği, kadınların güçlenmesini, eğitimini ve toplumsal dayanışmasını destekleyen sivil toplum kuruluşudur.",
  keywords: ["Rosa Kadın Derneği", "kadın", "kadın hakları", "toplumsal dayanışma", "kadın eğitimi", "kadın sağlığı", "sivil toplum", "toplumsal cinsiyet", "örgüt", "yardımlaşma"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
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

// Allahumme salli ala seyyidina Muhammedin 

// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
// La ilahe illAllahu vahdehu la şerike leh, lehul mulku ve lehul hamdu 
// yuhyi ve yumit,biyadihil xayr ve huve ala kulli şeyin kadir
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
// SubhanAllah, Elhamdulillah, Allahu Ekber
//La ilahe illAllah Muhammeden abduhu ve resuluhu

// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin






export function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-16 bg-gray-800 text-white">
        <p className="text-sm">© {new Date().getFullYear()} Rosa Kadın Derneği</p>
      </footer>
  );
  
}