import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4 text-center p-5 bg-background text-foreground">
      <h1 className="text-6xl font-extrabold text-primary">404</h1>
      <h2 className="text-2xl font-bold">Sayfa Bulunamadı</h2>
      <p className="text-muted-foreground max-w-md">
        Aradığınız sayfa mevcut değil, kaldırılmış veya ismi değiştirilmiş olabilir.
      </p>
      <Link
        href="/malper"
        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        Ana Sayfaya Dön
      </Link>
    </main>
  );
}
// Elhamdulillahirabbilalemin
// Elhamdulillah ya Samed i Gani i Kerim i Vehhab i Erhamer Rahimin i Quddus i Baqi i Haq i Ferd i Hamidun Mecid i Ehed  