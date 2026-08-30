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

          {/* Reklam Bölümü: Alçı, Boya ve Montalama Hizmetleri */}
          <section className="mt-16 p-8 bg-gray-50 rounded-xl border-2 border-[#b80000]/10 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-[#b80000]" />
              <h2 className="text-3xl font-black tracking-tight text-[#1f1f1f]">
                Profesyonel Alçı, Boya ve Montalama Hizmetleri
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Yalçın İnşaat güvencesiyle, yaşam alanlarınıza estetik ve dayanıklılık katıyoruz. 
                  Yüksek kaliteli malzemeler ve uzman işçilikle yapılarınızın değerini artırıyoruz.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[#b80000] font-bold">✓</span>
                    <p><span className="font-bold">Kusursuz Alçı İşçiliği:</span> Saten alçı, kartonpiyer ve asma tavan uygulamalarında pürüzsüz çözümler.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#b80000] font-bold">✓</span>
                    <p><span className="font-bold">Dekoratif Boya Uygulamaları:</span> Trend renkler ve silinebilir, uzun ömürlü birinci sınıf boya markaları.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#b80000] font-bold">✓</span>
                    <p><span className="font-bold">Teknik Montalama & İzolasyon:</span> Dış cephe montalama ve iç mekan montaj hizmetleri ile maksimum koruma.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[#b80000]">Ücretsiz Keşif ve Teklif İçin</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center gap-2">
                    <span className="font-bold w-20">Telefon:</span> 05434955957
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-bold w-20">E-posta:</span> hakanmajans65@gmail.com
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-bold w-20">Adres:</span> Mustafa Kemal Mahallesi, 694/33 No:9 Buca/İzmir
                  </p>
                </div>
                <button className="w-full mt-6 bg-[#b80000] text-white font-bold py-3 rounded hover:bg-[#8e0000] transition-colors">
                  HEMEN BİZE ULAŞIN
                </button>
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