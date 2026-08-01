// Bismillahirrahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin
// SubhanAllah, Elhamdulillah, RAHIM-I Hamid Allahu Ekber
// La ilahe illAllah u vahdehu la sherike leh, lehul mulku ve lehul hamdu
// yuhyi ve yumit,biyadihil xayr  wa huwa 'ala kulli shay'in qadir
// Seyyidina Muhammeden Abduhu ve Resuluhu
// SubhanAllahi Hamidun Mecidi Ehed ve Bihamdihi, SubhanAllahil Azim
// Allahu Ekber, Allahu Ekber, Allahu Ekber Ve Lillahil Hamd, La ilahe illAllah
// Bila Allah Azze ve Celle me ji sunneta Resulullah Muhammed (s.a.v) neqetine, amin rabbal alemin 
// Xeyni Allah tu Xweda tune,Allah yeke u tu şırike Allah tune ,pesında ji mulkda ji u spasi tene Allah re te kırın.


import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { Google } from "arctic";
import { Lucia, Session, User } from "lucia";
import { cookies } from "next/headers";
import { cache } from "react";
import prisma from "./lib/prisma";
// SuphanAllahi Rabul Alemin, Elhamdulillahi Rabbil Alemin, Allahu Ekber, La ilahe illAllah u vahdehu la sherike leh, lehul mulku ve lehul hamdu yuhyi ve yumit,biyadihil xayr  wa huwa 'ala kulli shay'in qadir, Seyyidina Muhammeden Abduhu ve Resuluhu. SubhanAllahi Hamidun Mecidi Ehed ve Bihamdihi, SubhanAllahil Azim, Allahu Ekber, Allahu Ekber, Allahu Ekber Ve Lillahil Hamd, La ilahe illAllah
// Bila Allah Azze ve Celle me ji sunneta Resulullah Muhammed (s.a.v) neqetine dibe ku, amin rabbal alemin , Xeyni Allah tu Xweda tune,Allah yeke u tu şırike Allah tune ,pesında ji mulkda ji u spasi tene Allah re te kırın.
const adapter = new PrismaAdapter(prisma.session, prisma.user);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes(databaseUserAttributes) {
    return {
      id: databaseUserAttributes.id,
      username: databaseUserAttributes.username,
      displayName: databaseUserAttributes.displayName,
      avatarUrl: databaseUserAttributes.avatarUrl,
      googleId: databaseUserAttributes.googleId,
    };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    UserId: string;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  id: string;
  username: string;
  displayName: string;
  avatarUrl: string | null;
  googleId: string | null;
}

export const google = new Google(
  process.env.GOOGLE_CLIENT_ID!,
  process.env.GOOGLE_CLIENT_SECRET!,
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/google`,
);

export const validateRequest = cache(
  async (): Promise<
    { user: User; session: Session } | { user: null; session: null }
  > => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;

    if (!sessionId) {
      return {
        user: null,
        session: null,
      };
    }

    const result = await lucia.validateSession(sessionId);

    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id);
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        );
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        );
      }
    } catch {}

    return result;
  },
);
