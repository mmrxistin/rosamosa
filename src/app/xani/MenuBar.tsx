// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin 
// Suphanallah, Elhamdulillah, Allahu Ekber
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah

import { validateRequest } from "@/auth";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { adminMenuItems } from "./components/admin/menu-items";

interface MenuBarProps {
  className?: string;
}

export default async function MenuBar({ className }: MenuBarProps) {
  const { user } = await validateRequest();

  if (!user) return null;

  let messageCount = 0;
  try {
    const clientAny = prisma as any;
    if (clientAny.mmmpeyam && typeof clientAny.mmmpeyam.count === "function") {
      messageCount = await clientAny.mmmpeyam.count();
    } else if (clientAny.peyam && typeof clientAny.peyam.count === "function") {
      messageCount = await clientAny.peyam.count();
    } else if (clientAny.message && typeof clientAny.message.count === "function") {
      messageCount = await clientAny.message.count();
    }
  } catch {
    messageCount = 0;
  }

  return (
    <div className={className}>
      <div className="mb-5 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        <p className="font-semibold text-slate-900">{user.displayName ?? user.username ?? "Admin"}</p>
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Yönetim Paneli</p>
      </div>

      <div className="space-y-2">
        {adminMenuItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            className="w-full justify-between rounded-3xl px-4 py-3 text-left"
            asChild
          >
            <Link href={item.href} className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 text-sm text-slate-700">
                <item.icon className="h-5 w-5" />
                {item.label}
              </span>
              {item.badgeKey === "messages" && messageCount > 0 ? (
                <span className="rounded-full bg-rose-500 px-2 py-0.5 text-[11px] font-semibold text-white">
                  {messageCount}
                </span>
              ) : (
                <span className="text-xs text-slate-400">Git</span>
              )}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
