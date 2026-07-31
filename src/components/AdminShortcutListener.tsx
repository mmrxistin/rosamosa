// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
//        اَشْهَدُ اَنْ لاَ اِلٰهَ اِلاَّ اللّٰهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
// Esselatu vesselamu ala rasulillah 
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber ve lillahi'l-hamd
// Subhanallah, Elhamdulillah, Allahu Ekber

"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export function AdminShortcutListener() {
  const router = useRouter();
  const bufferRef = useRef<string>("");

  useEffect(() => {
    const TARGET = "admin";

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (event.key.length === 1 && !event.ctrlKey && !event.altKey && !event.metaKey) {
        bufferRef.current += event.key.toLowerCase();

        if (bufferRef.current.length > TARGET.length) {
          bufferRef.current = bufferRef.current.slice(-TARGET.length);
        }

        if (bufferRef.current === TARGET) {
          bufferRef.current = "";
          router.push("/login");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return null;
}
