// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin 
// Suphanallah, Elhamdulillah, Allahu Ekber
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah




import AdminNavbar from "./AdminNavbar";
import MenuBar from "../MenuBar";
import AdminFooter from "./AdminFooter";

interface AdminShellProps {
  children: React.ReactNode;
}

export default function AdminShell({ children }: AdminShellProps) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <AdminNavbar />

      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1440px] gap-5 px-4 py-5 lg:px-6">
        <aside className="hidden w-72 shrink-0 lg:block">
          <div className="sticky top-5 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Yönetim Menüsü
            </h2>
        
          </div>
        </aside>

        <main className="flex-1 space-y-6">{children}</main>
      </div>

      <AdminFooter />
    </div>
  );
}
