// Bismillahirrahmanirrahim
// Elhamdu lillahi rabbil alamin
// Esselatu vesselamu ala rasulillah 
// La ilahe illAllahu vahdehu la sharike leh, lehul mulku ve lehul hamdu
// SubhanAllahi ve bihamdi, subhanAllahil Azim.
// SubhanAllah, Elhamdulillah, Allahu Ekber
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Allah u Ekber Ve Lillahil Hamd, Allah u Ekber, Allah u Ekber,
//  La ilahe illallah u vahdehu la şerike leh, lehul-mulku ve lehul-hamdu
//  yuhyi ve yumit ve biyadihil xayr 
//  ve huve ala kulli şey'in kadir
// Allah u Ekber Ve Lillahil Hamd

import PostEditor from "@/components/dirok/editor/PostEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ForYouFeed from "./ForYouFeed";

import SearchField from "@/components/xane/SearchField";
import { Alert } from "react-bootstrap";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5 p-">
      <div className="w-full min-w-0 space-y-5">

      <Alert variant="success"> </Alert>
        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="for-you">Paylaşılanlar</TabsTrigger>
            <TabsTrigger value="mm">Yeni</TabsTrigger>

          </TabsList>
          <TabsContent value="for-you">
            <ForYouFeed />
          </TabsContent>
          <TabsContent value="following">

      <SearchField/>
          </TabsContent>
    





        <TabsContent value="mm">

  <PostEditor />

    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
