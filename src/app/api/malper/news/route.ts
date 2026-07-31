import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, date, imgUrl, link, authorId } = body;

    if (!title || !date) {
      return NextResponse.json({ error: "missing title or date" }, { status: 400 });
    }

    const parsedDate = new Date(date);

    const created = await prisma.malperNews.create({
      data: {
        title,
        date: parsedDate,
        imgUrl: imgUrl || "/image_2.png",
        link: link || "/haberler",
        authorId: authorId || null,
      },
    });

    return NextResponse.json({ ok: true, item: created });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const items = await prisma.malperNews.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(items);
  } catch (err) {
    console.error(err);
    return NextResponse.json([], { status: 500 });
  }
}
