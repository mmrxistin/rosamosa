// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illAllah
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illAllah
// Bila Allah Azze ve Celle me ji sunneta Resulullah Muhammed (s.a.v) neqetine, amin rabbal alemin
// Xeyni Allah tu Xweda tune,Allah yeke û tu şirîkê Allah tune, pesin de jî mulk de jî û spasî tenê Allah re tê kirin.
// Hz Mıhemed ji qûl u resûlê wi ye
// Elhamdulillah Ya Kerim, Ya Rahim, Ya Samed, Ya Vehhab, Ya Quddus, Ya Erhamer Rahimin, Ya Gafur, Ya Rahim, Ya Halim, Ya Azim, Ya Aziz, Ya Hakim, Ya Latif, Ya Hafiz, Ya Kadir, Ya Muheymin, Ya Ehed, Ya Alim, Ya Basir, Ya Sami, Ya Halim, Ya Gani

import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await validateRequest();

  if (user) redirect("/xani");

  return <>{children}</>;
}
