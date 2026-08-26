// Bismillahirahmanirahim
 // Elhamdulillahirrabbulalemin
 // Esselatu vesselamu ala seyyidina Muhammedin
 // Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
 // SubhanAllah, Elhamdulillah, Allahu Ekber
 // Allah u Ekber Ve Lillahil Hamd



// El Hamdu Lîllah ya Rabbi'l-Âlemîn, El Hamdu Lîllah yâ Rabbi'l-Âlemîn, El Hamdu Lîllah yâ Rabbi'l-Âlemîn
// La ilahe illALLAH u vahdehu la şerike leh, lehul-mulku ve lehul-hamdu
// Yuhyi ve yumit
// Biyadihil xayr
// ve huve ala kulli şey'in kadir
 import React from 'react'
 import ParvekirinaYek from './yek/parvekirin'
 import Parvekirinayekayeke from './yek/yek/parvekirin'
 import ParvekirinaTefsir from './yek/du/parvekirin'
 import Du from './du/parvekirin'
 import Rojnm from './rojname/ForYouFeed'
 import Dirok from './dirok/ForYouFeed'
 import Car from './car/ForYouFeed'
 import Penc from './penc/ForYouFeed'
 import Se from './se/parvekirin'
 import Xane from './xane/ForYouFeed'
 // El Hamdu Lîllah ya Rabbi'l-Âlemîn, El Hamdu Lîllah yâ Rabbi'l-Âlemîn, El Hamdu Lîllah yâ Rabbi'l-Âlemîn
 // La ilahe illALLAH u vahdehu la şerike leh, lehul-mulku ve lehul-hamdu.
 // Yuhyi ve yumit
 // Biyadihil xayr
 // ve huve ala kulli şey'in kadir

 // El Hamdu Lîllah ya Kerîm î Rezzaq î Vehhab î Ehed î Quddus î Heq bêdawîtî..
 function page() {
   return (
     <>
       <main className="bg-white text-[#1f1f1f]">
         <div className="container mx-auto px-4 py-8 max-w-7xl">

           {/* Beşa Perwerdehîya Îslamî */}
           <section className="mb-12">

             <div className="flex items-end justify-between border-b-4 border-[#b80000] pb-3 mb-6">
               <div>
                 <div className="flex items-center gap-2 mb-2">
                   <span className="size-3 bg-[#b80000]" />
                   <span className="text-sm font-bold uppercase tracking-wider text-[#b80000]">
                         Son Projeler
                       </span>
                     </div>

                     <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                       Yalçın İnşaat Güncel Projeleri
                     </h1>

                     <p className="text-gray-600 mt-2">
                       Tamamlanan ve devam eden projelerimiz
                 </p>
               </div>

               <a
                 href="/malper/yek"
                 className="hidden md:block text-[#b80000] font-bold hover:underline"
               >
                 Tüm Projeler →
               </a>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

               {/* Karta 1: */}
               <article className="lg:col-span-7 border-b border-gray-300 pb-6">
                 <div className="h-64 md:h-96 bg-gray-100 overflow-hidden mb-4">
                   <Dirok/>
                 </div>

                 <span className="text-xs font-black text-[#b80000] uppercase">
                     KONUT
                   </span>

                   <h2 className="text-3xl md:text-4xl font-black leading-tight mt-2 mb-3 transition-colors hover:text-[#b80000]">
                     Modern ve konforlu konut projelerimiz
                   </h2>

                   <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                     Deprem yönetmeliğine uygun, enerji verimli ve estetik konut projelerimizi keşfedin.
                   </p>

                 <a
                   href="/malper/du"
                   className="inline-block mt-4 text-[#b80000] font-bold hover:underline"
                 >
                       Haberin Detayları →
                     </a>
                   </article>

               <div className="lg:col-span-5 grid grid-cols-1 gap-5">

                 {/* Karta 1: Car */}
                 <article className="border-b border-gray-300 pb-5">
                   <div className="h-44 bg-gray-100 overflow-hidden mb-4">
                     <img
                       src="/images/haber-dunya.jpg"
                       alt="Ticari yapı projelerimiz"
                           className="w-full h-full object-cover"
                         />
                       </div>

                       <span className="text-xs font-black text-[#b80000]">
                         TİCARİ YAPILAR
                       </span>

                       <h3 className="text-2xl font-black mt-2 leading-tight transition-colors hover:text-[#b80000]">
                         İş merkezleri, plazalar ve ofis projeleri
                       </h3>

                       <p className="text-gray-600 mt-2">
                         İşletmenize değer katan modern ticari yapılar inşa ediyoruz.
                       </p>
                 </article>

                 {/* Karta 2: Fıkıh */}
                 <article className="border-b border-gray-300 pb-5">
                   <div className="h-44 bg-gray-100 overflow-hidden mb-4">
                     <Du/>
                   </div>

                   <span className="text-xs font-black text-[#b80000]">
                       ALTYAPI
                     </span>

                     <h3 className="text-2xl font-black mt-2 leading-tight transition-colors hover:text-[#b80000]">
                       Altyapı ve çevre düzenleme projeleri
                     </h3>

                     <p className="text-gray-600 mt-2">
                       Yol, su, kanalizasyon ve altyapı hizmetlerinde uzman ekibimizle yanınızdayız.
                     </p>

                     <a
                       href="/malper/se"
                       className="inline-block mt-3 text-[#b80000] font-bold hover:underline"
                     >
                       Altyapı Projeleri →
                     </a>
                 </article>

               </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-8 border-t border-gray-300">

               {/* Karta 3: Tarîxê Îslamî */}
               <article className="border-b md:border-b-0 md:border-r border-gray-300 py-6 md:pr-5">
                 <div className="h-44 bg-gray-100 overflow-hidden mb-4">
                   <img
                     src="/images/haber-spor.jpg"
                     alt="Tadilat ve renovasyon projeleri"
                     className="w-full h-full object-cover"
                   />
                 </div>

                 <span className="text-xs font-black text-[#b80000]">
                       TADİLAT & RENOVASYON
                   </span>

                   <h3 className="text-xl font-black mt-2">
                     Bina güçlendirme ve tadilat hizmetleri
                   </h3>

                   <p className="text-gray-600 mt-2">
                     Mevcut yapılarınızı yeniliyoruz, güçlendiriyoruz ve modernize ediyoruz.
                   </p>

                   <a
                     href="/malper/car"
                     className="inline-block mt-3 text-[#b80000] font-bold hover:underline"
                   >
                     Tadilat Hizmetleri →
                   </a>
               </article>

               {/* Karta 3: Tarîxê Îslamî */}
               <article className="border-b md:border-b-0 md:border-r border-gray-300 py-6 md:px-5">
                 <div className="h-44 bg-gray-100 overflow-hidden mb-4">
                   <img
                     src="/images/haber-kultur.jpg"
                     alt="Anahtar teslim proje örnekleri"
                     className="w-full h-full object-cover"
                   />
                 </div>

                 <span className="text-xs font-black text-[#b80000]">
                       PROJE YÖNETİMİ
                   </span>

                   <h3 className="text-xl font-black mt-2">
                     Anahtar teslim proje yönetimi
                   </h3>

                   <p className="text-gray-600 mt-2">
                     Projeden teslime kadar tüm süreci planlıyor, yönetiyor ve zamanında teslim ediyoruz.
                   </p>

                   <a
                     href="/malper/xane"
                     className="inline-block mt-3 text-[#b80000] font-bold hover:underline"
                   >
                     Proje Yönetimi →
                   </a>
               </article>

               <article className="py-6 md:pl-5">
                 <div className="h-44 bg-gray-100 overflow-hidden mb-4">
                   <ParvekirinaYek/>
                 </div>

                 <span className="text-xs font-black text-[#b80000]">
                   TEKNOLOJİ
                 </span>

                 <h3 className="text-xl font-black mt-2">
                   Teknoloji ve malzeme kalitesinde yeni standartlar
                 </h3>

                 <p className="text-gray-600 mt-2">
                     Projelerimizde kullandığımız modern yapı teknolojileri ve kaliteli malzemeler.
                   </p>

                   <a
                     href="/malper/penc"
                     className="inline-block mt-3 text-[#b80000] font-bold hover:underline"
                   >
                     Detaylı Bilgi →
                   </a>
               </article>

             </div>
           </section>

           {/* Beşa Nûvekirinên Perwerdehî */}
           <section className="mt-12">

             <div className="border-b-4 border-[#1f1f1f] pb-3 mb-6">
               <div className="flex items-center gap-2 mb-2">
                 <span className="size-3 bg-[#b80000]" />
                 <span className="text-sm font-bold text-[#b80000] uppercase">
                       Devam Eden Projeler
                   </span>
               </div>

               <h2 className="text-2xl md:text-3xl font-black">
                 Güncel Projelerimiz
               </h2>

               <p className="text-gray-600 mt-1">
                 Şantiyelerimizdeki son durum ve tamamlanan projeler
               </p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

               <div className="lg:col-span-8">
                 <div className="space-y-0">

                   <article className="border-b border-gray-300 py-6 first:pt-0">
                     <div className="flex flex-col md:flex-row gap-5">

                       <div className="w-full md:w-60 h-40 bg-gray-100 overflow-hidden shrink-0">
                         <Parvekirinayekayeke/>
                       </div>

                       <div>
                         <span className="text-xs text-[#b80000] font-black">
                             DEVAM EDİYOR
                           </span>

                           <h3 className="text-2xl font-black mt-2 mb-2 leading-tight transition-colors hover:text-[#b80000]">
                             Yeni konut kompleksi inşaatımız sürüyor
                           </h3>

                           <p className="text-gray-600 leading-relaxed">
                             Şantiyemizde çalışmalar planlandığı gibi ilerliyor, teslim tarihi korunuyor.
                         </p>

                         <a
                           href="/malper/penc"
                           className="inline-block mt-3 text-[#b80000] font-bold hover:underline"
                         >
                           Devamını Oku →
                         </a>
                       </div>

                     </div>
                   </article>

                   <article className="border-b border-gray-300 py-6">
                     <div className="flex flex-col md:flex-row gap-5">

                       <div className="w-full md:w-60 h-40 bg-gray-100 overflow-hidden shrink-0">
                         <img
                           src="/images/haber-2.jpg"
                           alt="Konut projesi"
                           className="w-full h-full object-cover"
                         />
                       </div>

                       <div>
                         <span className="text-xs text-[#b80000] font-black">
                             KONUT
                           </span>

                           <h3 className="text-2xl font-black mt-2 mb-2 leading-tight transition-colors hover:text-[#b80000]">
                             Villa ve müstakil ev projelerimiz
                           </h3>

                           <p className="text-gray-600 leading-relaxed">
                             Özel tasarım villa ve müstakil evlerde yaşam alanı standartlarını yükseltiyoruz.
                         </p>

                         <Car/>

                         <a
                           href="/malper/rojname"
                           className="inline-block mt-3 text-[#b80000] font-bold hover:underline"
                         >
                           Devamını Oku →
                         </a>
                       </div>

                     </div>
                   </article>

                   <article className="border-b border-gray-300 py-6">
                     <div className="flex flex-col md:flex-row gap-5">

                       <div className="w-full md:w-60 h-40 bg-gray-100 overflow-hidden shrink-0">
                         <ParvekirinaTefsir/>
                       </div>

                       <div>
                         <span className="text-xs text-[#b80000] font-black">
                             TİCARİ
                           </span>

                           <h3 className="text-2xl font-black mt-2 mb-2 leading-tight transition-colors hover:text-[#b80000]">
                             Yeni iş merkezi projemiz tamamlandı
                           </h3>

                           <p className="text-gray-600 leading-relaxed">
                             Modern ofis ve ticari alanlarla yeni iş merkezimiz hizmete açıldı.
                         </p>

                         <Rojnm/>

                         <a
                           href="/haberler/dunya"
                           className="inline-block mt-3 text-[#b80000] font-bold hover:underline"
                         >
                           Devamını Oku →
                         </a>
                       </div>

                     </div>
                   </article>

                 </div>
               </div>

               <aside className="lg:col-span-4">

                 <div className="bg-[#f3f3f3] border-t-4 border-[#b80000] p-6">

                   <h2 className="text-xl font-black mb-5 border-b border-gray-300 pb-3">
                     Öne Çıkan Projeler
                   </h2>

                   <div className="space-y-0">

                     <a
                       href="/haberler/1"
                       className="flex gap-4 group py-4 border-b border-gray-300"
                     >
                       <span className="text-3xl font-black text-gray-400 transition-colors group-hover:text-[#b80000]">
                         01
                       </span>

                       <div>
                         <h3 className="font-bold transition-colors group-hover:text-[#b80000]">
                             En çok ilgi gören konut projemiz
                           </h3>

                         <span className="text-xs text-gray-500">
                           5 dakika önce
                         </span>
                       </div>
                     </a>

                     <Penc/>

                     <a
                       href="/haberler/2"
                       className="flex gap-4 group py-4 border-b border-gray-300"
                     >
                       <span className="text-3xl font-black text-gray-400 transition-colors group-hover:text-[#b80000]">
                         02
                       </span>

                       <div>
                         <h3 className="font-bold transition-colors group-hover:text-[#b80000]">
                             Yeni başlayan büyük ölçekli şantiyemiz
                           </h3>

                         <span className="text-xs text-gray-500">
                           15 dakika önce
                         </span>
                       </div>
                     </a>

                     <a
                       href="/haberler/3"
                       className="flex gap-4 group py-4 border-b border-gray-300"
                     >
                       <span className="text-3xl font-black text-gray-400 transition-colors group-hover:text-[#b80000]">
                         03
                       </span>

                       <div>
                         <h3 className="font-bold transition-colors group-hover:text-[#b80000]">
                             Ticari yapı yatırımlarımız ve yeni projeler
                           </h3>

                         <span className="text-xs text-gray-500">
                           30 dakika önce
                         </span>
                       </div>
                     </a>

                     <a
                       href="/haberler/4"
                       className="flex gap-4 group py-4"
                     >
                       <span className="text-3xl font-black text-gray-400 transition-colors group-hover:text-[#b80000]">
                         04
                       </span>

                       <div>
                         <h3 className="font-bold transition-colors group-hover:text-[#b80000]">
                             Altyapı çalışmalarında son durum
                           </h3>

                         <span className="text-xs text-gray-500">
                           45 dakika önce
                         </span>
                       </div>
                     </a>

                   </div>
                 </div>

               </aside>

             </div>
           </section>

           <section className="mt-12">

             <div className="border-b-4 border-[#1f1f1f] pb-3 mb-6">
               <h2 className="text-2xl font-black">
                 Hizmet Alanlarımız
               </h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-300">

               <div className="bg-[#b80000] text-white p-6 transition-colors hover:bg-[#990000]">
                 <span className="text-xs font-bold opacity-80">
                     KONUT
                   </span>

                   <h3 className="text-2xl font-black mt-2">
                     Konut İnşaatı
                   </h3>

                   <a
                     href="/haberler/gundem"
                     className="inline-block mt-6 font-bold underline"
                   >
                     Projeleri Gör →
                 </a>
               </div>

               <div className="bg-[#f3f3f3] text-[#1f1f1f] border-t md:border-t-0 md:border-l border-gray-300 p-6 transition-colors hover:bg-gray-200">
                 <span className="text-xs font-bold text-[#b80000]">
                     ALTYAPI
                   </span>

                   <h3 className="text-2xl font-black mt-2">
                     Altyapı Projeleri
                   </h3>

                   <a
                     href="/haberler/ekonomi"
                     className="inline-block mt-6 text-[#b80000] font-bold underline"
                   >
                     Projeleri Gör →
                 </a>
               </div>

               <div className="bg-[#f3f3f3] text-[#1f1f1f] border-t md:border-t-0 md:border-l border-gray-300 p-6 transition-colors hover:bg-gray-200">
                 <span className="text-xs font-bold text-[#b80000]">
                     TADİLAT
                   </span>

                   <h3 className="text-2xl font-black mt-2">
                     Tadilat ve Renovasyon
                   </h3>

                 <Se/>

                 <a
                   href="/haberler/spor"
                   className="inline-block mt-6 text-[#b80000] font-bold underline"
                 >
                   Projeleri Gör →
                 </a>
               </div>

               <div className="bg-[#f3f3f3] text-[#1f1f1f] border-t md:border-t-0 md:border-l border-gray-300 p-6 transition-colors hover:bg-gray-200">
                 <span className="text-xs font-bold text-[#b80000]">
                     TİCARİ YAPILAR
                   </span>

                   <h3 className="text-2xl font-black mt-2">
                     Ticari Yapı Projeleri
                   </h3>

                 <Xane/>

                 <a
                   href="/haberler/dunya"
                   className="inline-block mt-6 text-[#b80000] font-bold underline"
                 >
                   Projeleri Gör →
                 </a>
               </div>

             </div>
           </section>

         </div>
       </main>
     </>
   )
 }

 export default page
 // Elhamdulillah Elhamdulillah Elhamdulillah
 // Elhamdulillahirabbilalemin

 // La ilahe illALLAH u vahdehu la şerike leh, lehul-mulku ve lehul-hamdu
 // Yuhyi ve yumit
 // Biyadihil xayr
 // ve huve ala kulli şey'in kadir