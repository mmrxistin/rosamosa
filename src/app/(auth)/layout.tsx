// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin 
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illAllah 
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illAllah
// Bila Allah Azze ve Celle me ji sunneta Resulullah Muhammed (s.a.v) neqetine, amin rabbal alemin 
// Xeyni Allah tu Xweda tune,Allah yeke û tu şirîkê Allah tune, pesin de jî mulk de jî û spasî tenê Allah re tê kirin.



import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await validateRequest();

  if (user) redirect("/malper");

  return <>{children}</>;
}
