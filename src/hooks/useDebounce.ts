// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin 
// La havle ve la kuvvete illa billahil Aliyyil Azim
// Allah u Ekber
// La ilahe illAllah Muhammedur Resulullah
// SubhanAllah, Elhamdulillah, Allahu Ekber, La ilahe illAllah
// Estağfirulllah El-Azim


import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number = 250): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
