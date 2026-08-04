// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin 
// Suphanallah, Elhamdulillah ve La ilahe illAllahu Allahu Ekber
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
//  Suphan Allah i Afu i Vehhab i Rahmanir Rahim i Xaliq i Mumin i Ferdi Hamidun Mecid i Ehed i Alim ve Bihamdihi
// La ilahe illAllahu vahdehu la sharike leh, lehul mulku ve lehul hamdu
// yuhyi ve yumit ve biyadihil xayr
// huve ala kulli şey'in kadir
// SubhanAllahi ve bihamdi, subhanAllahil Azim.
// Seyyidina Muhammeden Abduhu ve Rasuluhu
// ALLAH U EKBER VE LILLAHIL HAMD
// La ilahe illAllahu vahdehu la sharike leh, lehul mulku ve lehul hamdu
// yuhyi ve yumit ve biyadihil xayr
// huve ala kulli şey'in kadir
// Allah u Ekber Ve Lillahil Hamd, Allah u Ekber, Allah u Ekber, La ilahe illAllah

import { Bookmark, Home, Mail, Settings2, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AdminMenuItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badgeKey?: string;
}
// Suphan Allah ul Azim ve Bihamdihi
export const adminMenuItems: AdminMenuItem[] = [
  { label: "Ana Sayfa", href: "/xani", icon: Home },
  { label: "Kullanıcılar", href: "/xani/users", icon: Users },
  { label: "Haber Yükle", href: "/xani/admin/news", icon: Bookmark },
  { label: "Peyam", href: "/xani/peyam", icon: Mail, badgeKey: "messages" },
  { label: "Ayarlar", href: "/xani/miheng", icon: Settings2 },
];
