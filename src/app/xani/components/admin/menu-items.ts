// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin 
// Suphanallah, Elhamdulillah, Allahu Ekber
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
// Allah u Ekber Ve Lillahil Hamd, Allah u Ekber, Allah u Ekber, La ilahe illAllah

import { Bookmark, Home, Mail, Settings2, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AdminMenuItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badgeKey?: string;
}

export const adminMenuItems: AdminMenuItem[] = [
  { label: "Ana Sayfa", href: "/xani", icon: Home },
  { label: "Kullanıcılar", href: "/xani/users", icon: Users },
  { label: "Haber Yükle", href: "/xani/admin/news", icon: Bookmark },
  { label: "Peyam", href: "/xani/peyam", icon: Mail, badgeKey: "messages" },
  { label: "Ayarlar", href: "/xani/miheng", icon: Settings2 },
];
