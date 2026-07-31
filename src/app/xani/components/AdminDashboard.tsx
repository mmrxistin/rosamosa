// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin 
// Suphanallah, Elhamdulillah, Allahu Ekber
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Allah u Ekber Ve Lillahil Hamd, Allah u Ekber, Allah u Ekber,
//  La ilahe illallah u vahdehu la şerike leh, lehul-mulku ve lehul-hamdu
//  yuhyi ve yumit ve biyadihil xayr 
//  ve huve ala kulli şey'in kadir
// Allah u Ekber Ve Lillahil Hamd
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Home, MessageCircle, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const dashboardCards = [
  {
    title: "Haberler",
    description: "Admin panel genel bakışı, hızlı erişim ve yönetim araçları.",
    href: "/xani/rojname",
    icon: Home,
  },

  {
    title: "Mesajlar",
    description: "Gelen mesajları, bildirimleri ve geri bildirimleri denetleyin.",
    href: "/xani/peyam",
    icon: MessageCircle,
  },
  {
    title: "İletişim",
    description: "İletişim ve banka bilgilerini düzenle ve güncelleyin.",
    href: "/xani/dirok",
    icon: FileText,
  },
  {
    title: "Raporlar",
    description: "Sistem performansı, kullanım ve site raporlarına ulaşın.",
    href: "/xani/reports",
    icon: ShieldCheck,
  },
  {
    title: "Site Yönetimi",
    description: "Site ana sayfasını ve yönlendirmeleri hızlıca kontrol edin.",
    href: "/malper",
    icon: BookOpen,
  },
];

export default function AdminDashboard() {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Admin Kontrol Paneli</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">Yönetim Merkezi</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              `src/app/(main)` klasörü artık tek bir yönetim kabuğu ile tanımlı. Navbar, sidebar ve içerik bölümleri ayrı bileşenlerde organize edildi.
            </p>
          </div>
          <Button asChild variant="secondary" size="lg">
            <Link href="/users">Hızlı Kullanıcı Yönetimi</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {dashboardCards.map((card) => (
          <Link key={card.title} href={card.href} className="group block rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
              <card.icon className="h-6 w-6" />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-slate-900">{card.title}</h2>
            <p className="mb-5 text-sm leading-6 text-slate-600">{card.description}</p>
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              Devam Et
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
