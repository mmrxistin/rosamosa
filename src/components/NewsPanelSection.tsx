import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsItem, AnnouncementItem, UIStrings } from '@/types/cms';

interface NewsPanelSectionProps {
  newsItems: ReadonlyArray<NewsItem>;
  announcementItems: ReadonlyArray<AnnouncementItem>;
  questionItems: ReadonlyArray<AnnouncementItem>;
  ui: UIStrings;
}

export default function NewsPanelSection({
  newsItems,
  announcementItems,
  questionItems,
  ui
}: NewsPanelSectionProps): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<'announcements' | 'questions'>('announcements');
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);

  const activeNews = newsItems[activeNewsIndex];
  const activeList = activeTab === 'announcements' ? announcementItems : questionItems;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Side: News Slider */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="mb-6 border-b-2 border-transparent">
              <h3 className="text-2xl font-serif font-black text-[#6A4C93] dark:text-white inline-block pb-2 border-b-4 border-[#FF6B5B]">
                {ui.tabNews}
              </h3>
            </div>
            
            {activeNews && (
              <div className="relative w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-xl group flex flex-col justify-end border border-[#6A4C93]/15 dark:border-white/10">
                <Image 
                  src={activeNews.imgUrl} 
                  alt={activeNews.title} 
                  fill
                  unoptimized
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#18151A]/90 via-[#3D154B]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
                
                {/* News Content */}
                <div className="relative z-10 p-8 flex flex-col gap-4">
                  <span className="bg-[#FF9A8B] animate-breathe text-white text-[11px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full self-start">
                    {activeNews.date}
                  </span>
                  <Link href={activeNews.link || '#'} className="block">
                    <h4 className="text-2xl md:text-3xl font-black text-white hover:text-gray-200 transition-colors leading-snug">
                      {activeNews.title}
                    </h4>
                  </Link>
                </div>

                {/* Pagination Bar */}
                <div className="relative z-10 bg-[#6A4C93]/80 backdrop-blur-md border-t border-white/10 text-white p-4 flex items-center justify-between transition-colors duration-300 group-hover:bg-[#6A4C93]/95">
                  <div className="flex gap-2 items-center flex-wrap">
                    {newsItems.map((_, i) => {
                       // Show first 10
                      return (
                        <button 
                          key={i} 
                          onClick={() => setActiveNewsIndex(i)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all hover:bg-white/20 hover:scale-110 ${activeNewsIndex === i ? 'bg-[#FF9A8B] animate-breathe text-white shadow-md' : ''}`}
                        >
                          {i + 1}
                        </button>
                      );
                    })}
                  </div>
                  <Link href="/haberler" className="text-xs font-bold hover:underline whitespace-nowrap ml-4">
                    {ui.btnAllNews}
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Right Side: Announcements & Questions Tabs */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Tabs Header */}
            <div className="flex gap-8 mb-6 border-b border-[#6A4C93]/20 dark:border-white/10">
              <button 
                onClick={() => setActiveTab('announcements')}
                className={`pb-3 px-2 text-xl md:text-2xl font-serif font-black transition-all border-b-[3px] ${activeTab === 'announcements' ? 'text-[#6A4C93] dark:text-[#FF9A8B] border-[#FF6B5B]' : 'text-[#6A4C93] dark:text-[#B2AAC0] border-transparent hover:text-[#6A4C93] dark:hover:text-white'}`}
              >
                {ui.tabAnnouncements}
              </button>
              <button 
                onClick={() => setActiveTab('questions')}
                className={`pb-3 px-2 text-xl md:text-2xl font-serif font-black transition-all border-b-[3px] ${activeTab === 'questions' ? 'text-[#6A4C93] dark:text-[#FF9A8B] border-[#FF6B5B]' : 'text-[#6A4C93] dark:text-[#B2AAC0] border-transparent hover:text-[#6A4C93] dark:hover:text-white'}`}
              >
                {ui.tabQuestions}
              </button>
            </div>

            {/* List */}
            <div className="glass-panel p-6 md:p-8 rounded-[2rem] border border-[#6A4C93]/15 dark:border-white/5 bg-white/60 dark:bg-[#1A1520]/60 backdrop-blur-xl shadow-xl flex-1 flex flex-col max-h-[500px]">
              <div className="flex-1 overflow-y-auto pr-4 space-y-2 scrollbar-thin scrollbar-thumb-[#3D154B]/20 dark:scrollbar-thumb-white/20 scrollbar-track-transparent">
                {activeList.map((item) => (
                  <div key={item.id} className="group relative pl-5 p-4 rounded-full transition-all duration-300 hover:bg-white/50 dark:hover:bg-white/5 hover:shadow-sm">
                    <div className="absolute left-1 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-[#FF9A8B] animate-breathe rounded-full transition-all duration-300 group-hover:h-3/4"></div>
                    <Link href={item.link || '#'} className="block">
                      <h5 className="font-bold text-[#6A4C93] dark:text-gray-100 text-[15px] group-hover:text-[#FF9A8B] transition-colors leading-snug mb-1">
                        {item.title}
                      </h5>
                      <span className="text-[11px] text-[#6A4C93] dark:text-[#B2AAC0] font-medium">
                        {item.date}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 mt-4 border-t border-[#6A4C93]/15 dark:border-white/10 text-right">
                <Link href={activeTab === 'announcements' ? '/haberler' : '/sss'} className="inline-flex items-center gap-2 text-[13px] uppercase tracking-wider font-bold text-[#6A4C93] dark:text-[#B2AAC0] hover:text-[#FF9A8B] dark:hover:text-[#FF9A8B] transition-colors group/link">
                  {ui.btnAllAnnouncements}
                  <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
