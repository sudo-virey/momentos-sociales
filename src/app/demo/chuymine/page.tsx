'use client';

import React, { useState } from 'react';

export default function YouTubeBirthdayInvite() {
  const [activeTab, setActiveTab] = useState('Principal');

  // Datos dinámicos para tu futura base de datos
  const EVENT_DATA = {
    kidName: "Cristian Manuel",
    age: 7,
    subs: "5.87 M",
    date: "19 de mayo de 2026",
    location: "Escuela Primaria Ignacio López Rayón",
    time: "16:00"
  };

  return (
    <>
      {/* Importación de fuentes de Google */}
      <link href="https://fonts.googleapis.com/css2?family=Anton&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      {/* Contenedor Principal */}
      <div 
        className="bg-[#131313] text-[#e5e2e1] min-h-screen pb-24 md:pb-0 md:pl-64 selection:bg-[#55ea4d] selection:text-[#003a03]"
        style={{ fontFamily: "'Rubik', sans-serif" }}
      >
        
        {/* SideNavBar (Desktop) */}
        <nav className="bg-[#603f33] text-[#55ea4d] font-bold text-sm uppercase border-r-[4px] border-black shadow-[8px_0px_0px_0px_rgba(0,0,0,1)] fixed left-0 top-0 h-full w-64 z-40 hidden md:flex flex-col">
          <div className="p-6 border-b-[4px] border-black flex items-center gap-4">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>videogame_asset</span>
            <span className="text-2xl tracking-wide" style={{ fontFamily: "'Anton', sans-serif" }}>ChuyMine B-Day</span>
          </div>
          
          <div className="flex flex-col flex-1 py-4">
            <a className="bg-[#55ea4d] text-[#003a03] border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m-2 p-4 flex items-center gap-4 hover:bg-[#32cd32] transition-colors active:scale-95" href="#">
              <span className="material-symbols-outlined">home</span>
              <span>Inicio</span>
            </a>
            <a className="text-[#d8ab9b] p-4 flex items-center gap-4 hover:bg-[#32cd32] hover:text-[#005105] transition-colors active:scale-95" href="#">
              <span className="material-symbols-outlined">map</span>
              <span>Mapa</span>
            </a>
            <a className="text-[#d8ab9b] p-4 flex items-center gap-4 hover:bg-[#32cd32] hover:text-[#005105] transition-colors active:scale-95" href="#">
              <span className="material-symbols-outlined">celebration</span>
              <span>Fiesta</span>
            </a>
            <a className="text-[#d8ab9b] p-4 flex items-center gap-4 hover:bg-[#32cd32] hover:text-[#005105] transition-colors active:scale-95" href="#">
              <span className="material-symbols-outlined">face</span>
              <span>Trajes</span>
            </a>
          </div>
          
          <div className="p-6 border-t-[4px] border-black">
            <button className="w-full bg-[#55ea4d] text-[#003a03] border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 p-3 font-bold uppercase transition-all">
              Unirse al Server
            </button>
          </div>
        </nav>

        {/* TopAppBar */}
        <header className="bg-[#131313] text-[#55ea4d] uppercase border-b-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sticky top-0 flex justify-between items-center px-4 h-16 w-full z-50">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-red-500 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            <span className="text-xl tracking-widest" style={{ fontFamily: "'Anton', sans-serif" }}>Stream B-Day</span>
          </div>
          <div className="flex gap-4">
            <button className="text-[#75ff68] hover:translate-y-1 transition-all">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="text-[#bccbb4] hover:translate-y-1 transition-all">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto md:p-4">
          
          {/* Banner */}
          <div className="w-full h-32 md:h-48 bg-[#2a2a2a] border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden my-4 md:my-0 mb-6">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop')" }}
            ></div>
          </div>

          {/* Channel Profile */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 px-4 md:px-0 mb-8">
            <img 
              alt="Profile" 
              className="w-24 h-24 rounded-full border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-cover bg-[#201f1f]" 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Cristian"
            />
            <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start gap-2">
              <h1 className="text-3xl md:text-4xl flex items-center gap-2" style={{ fontFamily: "'Anton', sans-serif" }}>
                {EVENT_DATA.kidName}
                <span className="material-symbols-outlined text-[#55ea4d] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </h1>
              <p className="text-[#bccbb4]">{EVENT_DATA.subs} de suscriptores • {EVENT_DATA.age} años</p>
              
              <button className="mt-4 w-full md:w-auto bg-[#55ea4d] text-[#003a03] border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 px-8 py-3 font-bold uppercase rounded-full flex items-center justify-center gap-2 transition-all">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
                Suscribirse
              </button>
            </div>
          </div>

          {/* Channel Nav (Tabs) */}
          <div className="flex overflow-x-auto gap-8 px-4 md:px-0 border-b-[2px] border-[#353535] mb-8 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {['Principal', 'Videos', 'Shorts', 'Playlists', 'Comunidad'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-bold uppercase whitespace-nowrap pb-2 transition-colors ${
                  activeTab === tab 
                    ? 'text-[#75ff68] border-b-[4px] border-[#55ea4d]' 
                    : 'text-[#bccbb4] hover:text-[#e5e2e1]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <h2 className="text-2xl px-4 md:px-0 mb-4 uppercase" style={{ fontFamily: "'Anton', sans-serif" }}>Para ti</h2>

          {/* Main Video Card (Player Stats) */}
          <div className="px-4 md:px-0 mb-8">
            <div className="bg-[#1c1b1b] border-[3px] border-black border-t-[8px] border-t-[#32cd32] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-pointer">
              <div 
                className="h-48 bg-cover bg-center relative" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop')" }}
              >
                <div className="absolute bottom-2 right-2 bg-black text-[#e5e2e1] font-bold text-xs px-2 py-1 rounded">
                  EN VIVO
                </div>
              </div>
              <div className="p-4 flex gap-4">
                <img alt="Avatar" className="w-10 h-10 rounded-full border border-[#353535] object-cover bg-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Cristian" />
                <div>
                  <h3 className="font-bold text-lg line-clamp-2 mb-1 text-[#e5e2e1]">MISION PRINCIPAL: FECHA Y LUGAR</h3>
                  <p className="text-[#bccbb4] text-sm">
                    {EVENT_DATA.kidName} • 1.5 M de vistas • Emitiendo ahora<br/>
                    <span className="text-[#55ea4d] font-semibold">{EVENT_DATA.date} | {EVENT_DATA.location}</span>
                  </p>
                </div>
                <button className="ml-auto text-[#bccbb4] self-start">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </div>
          </div>

          <h2 className="text-2xl px-4 md:px-0 mb-4 uppercase" style={{ fontFamily: "'Anton', sans-serif" }}>Botín Disponible</h2>

          {/* Suggested Videos (Loot) Horizontal Scroll */}
          <div className="flex overflow-x-auto gap-4 px-4 md:px-0 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              { title: "PASTEL ÉPICO DESBLOQUEADO", time: "10:00", views: "981 k", img: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=500&auto=format&fit=crop" },
              { title: "DULCES INFINITOS SIMULATOR", time: "05:30", views: "680 k", img: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=500&auto=format&fit=crop" },
              { title: "JUEGOS EXTREMOS (DIFICULTAD DIFÍCIL)", time: "20:00", views: "400 k", img: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=500&auto=format&fit=crop" }
            ].map((loot, idx) => (
              <div key={idx} className="min-w-[280px] bg-[#1c1b1b] border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative flex-shrink-0 cursor-pointer hover:bg-[#201f1f] transition-colors">
                <div className="h-32 bg-cover bg-center relative border-b-[3px] border-black" style={{ backgroundImage: `url('${loot.img}')` }}>
                  <div className="absolute bottom-2 right-2 bg-black text-[#e5e2e1] font-bold text-xs px-2 py-1 rounded">{loot.time}</div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-sm mb-1 line-clamp-2">{loot.title}</h3>
                  <p className="text-[#bccbb4] text-xs">{EVENT_DATA.kidName} • {loot.views} vistas</p>
                </div>
              </div>
            ))}
          </div>

          {/* Community Post (Map) */}
          <div className="px-4 md:px-0 mb-8">
            <div className="bg-[#353534] border-[3px] border-black p-4">
              <div className="flex items-center gap-3 mb-4">
                <img alt="Avatar" className="w-8 h-8 rounded-full border border-[#353535] object-cover bg-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Cristian" />
                <div className="text-[#e5e2e1]">
                  <span className="font-bold">{EVENT_DATA.kidName}</span>
                  <span className="text-[#bccbb4] text-sm ml-2">hace 2 días</span>
                </div>
              </div>
              <p className="text-[#e5e2e1] mb-3">
                ¡Atención jugadores! Aquí están las coordenadas exactas de la base secreta. ¡No falten a la misión! 🗺️📍
              </p>
              <div className="w-full border-[3px] border-black overflow-hidden bg-[#201f1f]">
                {/* Reemplaza esta imagen con un iframe real de Google Maps cuando lo programes */}
                <img 
                  alt="Map Location" 
                  className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity cursor-pointer" 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
                />
              </div>
              <div className="flex items-center gap-6 mt-4 text-[#bccbb4]">
                <button className="flex items-center gap-2 hover:text-[#55ea4d] transition-colors">
                  <span className="material-symbols-outlined">thumb_up</span>
                  <span className="text-sm">4.2k</span>
                </button>
                <button className="flex items-center gap-2 hover:text-[#55ea4d] transition-colors">
                  <span className="material-symbols-outlined">thumb_down</span>
                </button>
                <button className="flex items-center gap-2 hover:text-[#55ea4d] transition-colors">
                  <span className="material-symbols-outlined">chat_bubble_outline</span>
                  <span className="text-sm">128 RSVP</span>
                </button>
              </div>
            </div>
          </div>

        </main>

        {/* BottomNavBar (Mobile) */}
        <nav className="bg-[#353534] text-[#55ea4d] font-bold fixed bottom-0 w-full z-50 border-t-[4px] border-black flex justify-around items-center h-20 md:hidden pb-safe">
          <button className="flex flex-col items-center justify-center bg-[#55ea4d] text-[#003a03] border-x-[2px] border-black h-full px-4 w-1/4 hover:bg-[#32cd32] transition-colors">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
            <span className="text-[10px] mt-1">Inicio</span>
          </button>
          <button className="flex flex-col items-center justify-center text-[#bccbb4] hover:text-[#55ea4d] opacity-80 w-1/4 transition-colors">
            <span className="material-symbols-outlined">map</span>
            <span className="text-[10px] mt-1">Mapa</span>
          </button>
          <button className="flex flex-col items-center justify-center text-[#bccbb4] hover:text-[#55ea4d] opacity-80 w-1/4 transition-colors">
            <span className="material-symbols-outlined">celebration</span>
            <span className="text-[10px] mt-1">Fiesta</span>
          </button>
          <button className="flex flex-col items-center justify-center text-[#bccbb4] hover:text-[#55ea4d] opacity-80 w-1/4 transition-colors">
            <span className="material-symbols-outlined">face</span>
            <span className="text-[10px] mt-1">Trajes</span>
          </button>
        </nav>

      </div>
    </>
  );
}