"use client";

import React, { useState } from "react";
import { useSession } from "@/app/xani/SessionProvider";
import LoadingButton from "@/components/LoadingButton";

export default function NewsUploader() {
  const { user } = useSession();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function submit() {
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/malper/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, date, imgUrl, link, authorId: user?.id }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || "Error");

      setMessage("Haber eklendi.");
      setTitle("");
      setDate("");
      setImgUrl("");
      setLink("");
    } catch (err) {
      setMessage("Hata oluştu: " + (err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow">
      <h3 className="mb-4 text-lg font-semibold">Haber Yükle (Malper)</h3>
      <div className="space-y-3">
        <input placeholder="Başlık" className="w-full rounded border px-3 py-2" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="Tarih" className="w-full rounded border px-3 py-2" value={date} onChange={(e) => setDate(e.target.value)} />
        <input placeholder="Resim URL (opsiyonel)" className="w-full rounded border px-3 py-2" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
        <input placeholder="Link (opsiyonel)" className="w-full rounded border px-3 py-2" value={link} onChange={(e) => setLink(e.target.value)} />
        <div className="flex justify-end items-center gap-3">
          <LoadingButton onClick={submit} loading={loading}>Yükle</LoadingButton>
        </div>
        {message && <div className="text-sm text-muted-foreground">{message}</div>}
      </div>
    </div>
  );
}
