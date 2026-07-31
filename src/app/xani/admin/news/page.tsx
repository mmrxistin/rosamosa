import AdminShell from "@/app/xani/components/AdminShell";
import NewsUploader from "@/app/xani/components/NewsUploader";

export default function AdminNewsPage() {
  return (
    <AdminShell>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Malper Haberleri Yönetimi</h1>
        <NewsUploader />
      </div>
    </AdminShell>
  );
}
