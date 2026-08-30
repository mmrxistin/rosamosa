// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
// SubhanAllah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// Allah u Ekber Ve Lillahil Hamd
"use client"

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Mmmnavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="w-full bg-[#121212] text-white border-b border-[#222222]">
      {/* BBC Style Top Header Bar */}
      <div className="border-b border-[#2a2a2a] py-2 px-4 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Iconic BBC Block Branding */}
            <a href="/malper" className="flex items-center gap-1 group no-underline">
              <span className="bg-[#bb1919] text-white font-black text-lg px-2 py-0.5 tracking-tighter">İ</span>
              <span className="bg-black border border-zinc-700 text-white font-black text-lg px-2 py-0.5 tracking-tighter">N</span>
              <span className="font-extrabold text-xl text-white ml-2 tracking-tight transition-colors group-hover:text-red-500">
                YALÇIN DEKORASYON
              </span>
            </a>
          </div>

         
        </div>
      </div>

      {/* Main Navigation Menu */}
      <Navbar expand="lg" expanded={expanded} onToggle={(isOpen) => setExpanded(isOpen)} className="py-0 border-b border-zinc-800 bg-[#121212] navbar-dark">
        <Container className="max-w-7xl px-4">
          <Navbar.Toggle aria-controls="bbc-navbar-nav" className="my-2 border-zinc-700 focus:outline-none" />
          <Navbar.Collapse id="bbc-navbar-nav">
            <Nav className="w-full flex items-center justify-between text-sm font-bold uppercase tracking-wider">
              <Nav.Link href="/malper" className="py-3 px-3 text-white border-b-2 border-transparent transition-all hover:border-[#bb1919] hover:text-white">
                Ana Sayfa
              </Nav.Link>
            
              <Nav.Link href="#" className="py-3 px-3 text-zinc-300 border-b-2 border-transparent transition-all hover:border-[#bb1919] hover:text-white">
                İletişim
              </Nav.Link>
            
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* BBC Live / Son Dakika Ticker Bar */}
      <div className="bg-[#1a1a1a] border-b border-zinc-800 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="flex items-center gap-1.5 shrink-0 bg-[#bb1919] text-white px-2 py-0.5 font-bold uppercase tracking-wider">
            <span className="size-2 rounded-full bg-white animate-pulse" />
            GÜNCEL PROJELER
          </span>
          <div className="truncate font-medium text-zinc-300">
            Yalçın İnşaat ile sağlam temeller, modern projeler ve zamanında teslim — yeni konut ve ticari projelerimizi keşfedin.
          </div>
        </div>
      </div>
    </header>
  );
}

export default Mmmnavbar;
//SubhanAllahi Rahmanir Rahim ve Bihamdihi
//  SubhanAllah i Ehed ve Bihamdihi
// SubhanAllah i Samed i Azim ve Bihamdihi
// Suphan Allahi Kerim i Vehhab ve Bihamdihi
//  SubhanAllahi Azim ve Bihamdihi
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
// La ilahe illAllah Muhammden abduhu ve resuluhu
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
// La ilahe illAllahu vahdehu la sharika leh, lehu'l-mulku ve lehu'l-hamd.
// yuhyi ve yumit
// Biyadihil xayr
// ve huve ala kulli şey'in kadir