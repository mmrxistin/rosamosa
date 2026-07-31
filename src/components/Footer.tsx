import Link from 'next/link';
import React from 'react';
import { UIStrings, ContactContent } from '@/types/cms';
import { Instagram, Twitter, Youtube, Facebook, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  ui: UIStrings;
  contact: ContactContent;
  onOpenDonateModal: () => void;
}

export default function Footer({ ui, contact, onOpenDonateModal }: FooterProps): React.JSX.Element {
  return (
    <footer className="relative z-10 bg-gradient-to-b from-[#FAF8F5] to-white dark:from-[#0F0C12] dark:to-[#1A1520] border-t border-[#3D154B]/10 dark:border-white/10 pt-16 md:pt-24 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
        
        {/* Brand & Contact */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h4 className="font-serif font-black text-2xl text-[#6A4C93] dark:text-white tracking-tight">Rosa Kadın Derneği</h4>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-[#6A4C93] dark:text-[#B2AAC0]">
              <MapPin className="w-5 h-5 shrink-0 text-[#FF9A8B] mt-0.5" />
              <p className="leading-relaxed text-[13px]">{contact.address}</p>
            </div>
            <div className="flex items-center gap-3 text-[#6A4C93] dark:text-[#B2AAC0]">
              <Phone className="w-5 h-5 shrink-0 text-[#FF9A8B]" />
              <Link href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="text-[13px] font-bold hover:text-[#FF9A8B] transition-colors">
                {contact.phone}
              </Link>
            </div>
            <div className="flex items-center gap-3 text-[#6A4C93] dark:text-[#B2AAC0]">
              <Mail className="w-5 h-5 shrink-0 text-[#FF9A8B]" />
              <Link href={`mailto:bilgi@rosakadindernegi.org`} className="text-[13px] font-bold hover:text-[#FF9A8B] transition-colors">
                bilgi@rosakadindernegi.org
              </Link>
            </div>
          </div>

          <div className="pt-4">
            <h5 className="font-bold text-[11px] uppercase tracking-[0.15em] text-[#6A4C93] dark:text-[#B2AAC0] mb-3">Sosyal Medya Hesaplarımız</h5>
            <div className="flex flex-wrap gap-2.5">
              {/* Facebook */}
              <Link href="https://facebook.com/rosakadin" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-[0.85rem] flex items-center justify-center bg-white dark:bg-[#1A1520] shadow-sm border border-black/[0.04] dark:border-white/5 hover:-translate-y-1 hover:shadow-md transition-all group">
                <svg className="w-[22px] h-[22px] text-[#1877F2] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              {/* YouTube */}
              <Link href="https://youtube.com/@rosakadin" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-[0.85rem] flex items-center justify-center bg-white dark:bg-[#1A1520] shadow-sm border border-black/[0.04] dark:border-white/5 hover:-translate-y-1 hover:shadow-md transition-all group">
                <svg className="w-[22px] h-[22px] text-[#FF0000] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" clipRule="evenodd" />
                </svg>
              </Link>
              {/* Instagram */}
              <Link href="https://instagram.com/rosakadin" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-[0.85rem] flex items-center justify-center bg-white dark:bg-[#1A1520] shadow-sm border border-black/[0.04] dark:border-white/5 hover:-translate-y-1 hover:shadow-md transition-all group">
                <svg className="w-[22px] h-[22px] text-[#E4405F] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              {/* X / Twitter */}
              <Link href="https://twitter.com/rosakadin" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-[0.85rem] flex items-center justify-center bg-white dark:bg-[#1A1520] shadow-sm border border-black/[0.04] dark:border-white/5 hover:-translate-y-1 hover:shadow-md transition-all group">
                <svg className="w-[20px] h-[20px] text-black dark:text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              {/* Pinterest */}
              <Link href="https://pinterest.com/rosakadin" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-[0.85rem] flex items-center justify-center bg-white dark:bg-[#1A1520] shadow-sm border border-black/[0.04] dark:border-white/5 hover:-translate-y-1 hover:shadow-md transition-all group">
                <svg className="w-[22px] h-[22px] text-[#E60023] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.601 0 12.017 0z"/>
                </svg>
              </Link>
              {/* Telegram */}
              <Link href="https://t.me/rosakadin" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-[0.85rem] flex items-center justify-center bg-white dark:bg-[#1A1520] shadow-sm border border-black/[0.04] dark:border-white/5 hover:-translate-y-1 hover:shadow-md transition-all group">
                <svg className="w-[22px] h-[22px] text-[#0088cc] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.18-.08-.05-.19-.02-.27 0l-3.85 2.42c-.52.34-1.01.5-1.46.48-.48-.01-1.42-.27-2.12-.5-.85-.28-.96-.44-.9-.94.03-.23.18-.47.46-.72l8.28-3.19c.38-.15.75-.29 1.13-.29.25 0 .49.06.66.2.14.12.18.3.16.55z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Menu */}
        <div>
          <h5 className="font-bold text-[13px] uppercase tracking-widest text-[#6A4C93] dark:text-[#FF9A8B] mb-6">{ui.footerQuickMenu}</h5>
          <ul className="space-y-3">
            {[
              { label: ui.footerHome, href: '/' },
              { label: ui.footerAbout, href: '/hakkimizda' },
              { label: ui.footerWork, href: '/#dayanisma' },
              { label: ui.footerContact, href: '/#iletisim' }
            ].map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="text-[13px] text-[#6A4C93] dark:text-[#B2AAC0] hover:text-[#FF9A8B] dark:hover:text-[#FF9A8B] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6A4C93]/20 dark:bg-white/20 group-hover:bg-[#FF9A8B] animate-breathe group-hover:scale-150 transition-all"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contracts */}
        <div>
          <h5 className="font-bold text-[13px] uppercase tracking-widest text-[#6A4C93] dark:text-[#FF9A8B] mb-6">{ui.footerContracts}</h5>
          <ul className="space-y-3">
            {[
              { label: ui.footerKVKK, href: '/#iletisim' },
              { label: ui.footerTerms, href: '/#iletisim' },
              { label: ui.footerPrivacy, href: '/#iletisim' },
              { label: ui.footerCookies, href: '/#iletisim' }
            ].map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="text-[13px] text-[#6A4C93] dark:text-[#B2AAC0] hover:text-[#FF9A8B] dark:hover:text-[#FF9A8B] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6A4C93]/20 dark:bg-white/20 group-hover:bg-[#FF9A8B] animate-breathe group-hover:scale-150 transition-all"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bank Account */}
        <div>
          <h5 className="font-bold text-[13px] uppercase tracking-widest text-[#6A4C93] dark:text-[#FF9A8B] mb-6">{ui.footerBank}</h5>
          <div className="glass-panel p-5 rounded-3xl border border-[#6A4C93]/15 dark:border-white/5 bg-white/50 dark:bg-[#1A1520]/50 backdrop-blur-sm shadow-sm group hover:shadow-md hover:border-[#FF6B5B]/30 transition-all">
            <p className="font-black text-lg text-[#6A4C93] dark:text-white mb-3 group-hover:text-[#FF9A8B] transition-colors">{ui.bankName}</p>
            <div className="space-y-1 mb-4">
              <p className="text-[11px] uppercase tracking-wider text-gray-500 font-bold">{ui.accountHolderLabel}</p>
              <p className="text-[13px] font-medium text-[#6A4C93] dark:text-gray-300">{ui.accountHolderName}</p>
            </div>
            <button
              onClick={onOpenDonateModal}
              className="w-full text-center py-2 px-3 rounded-lg bg-[#6A4C93]/5 dark:bg-white/5 text-[12px] font-mono text-[#6A4C93] dark:text-white font-bold hover:bg-[#FF9A8B] animate-breathe hover:text-white transition-colors"
            >
              TR00 1111 2222 3333 4444 5555 66
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] leading-relaxed text-[#6A4C93] dark:text-[#B2AAC0] max-w-3xl text-center md:text-left">
            {ui.footer}
          </p>
        </div>
      </div>
    </footer>
  );
}
