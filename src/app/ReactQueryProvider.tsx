// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah
// Allahumme salli ala seyyidina Muhammedin
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illAllah, Allahu Ekber,
// SubhanAllah, Elhamdulillah, Allahu Ekber
// Estaxfurullah El Azim
// Allahu Ekber ve Lillahil Hamd



"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
// La îlahe îll Allah û vahdehû(Esma ul Husna) la şerîke leh, lehul-mülkü ve lehul-hamdü .

// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
// La îlahe îll Allah û vahdehû(Esma ul Husna) la şerîke leh, lehul-mülkü ve lehul-hamdü ,


// Yuhyî ve yumît
// Bîyadîhîl xayr
// ve hüve alâ külli şeyin kadîr
// ALLAH U EKBER VELİLLAHIL HAMD