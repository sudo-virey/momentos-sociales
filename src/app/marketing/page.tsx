// src/app/(marketing)/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Share2, Palette, BellRing, Eye, 
  Sparkles, MousePointer2, CheckCircle2, ArrowRight,
  ChevronDown, HelpCircle, Users, Trophy
} from 'lucide-react';
import { Button } from '@/components/button';
import { SiteFooter } from '@/components/site-footer';

export default function MarketingPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Estado para controlar cuál FAQ está abierta (guarda el índice)
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categorias = [
    {
      id: "bodas",
      titulo: "Bodas Románticas & Elegantes",
      desc: "Diseños sofisticados y atemporales para el día más importante.",
      plantillas: [
        { id: "boda-real", nombre: "Boda Real", coleccion: "Luxury", precio: "$599", plan: "premium", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600" },
        { id: "boda-minimal", nombre: "Elegancia Pura", coleccion: "Minimal", precio: "$299", plan: "esencial", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600" },
        { id: "boda-vintage", nombre: "Boda Vintage", coleccion: "Classic", precio: "$599", plan: "premium", img: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=600" },
        { id: "boda-destino", nombre: "Atardecer Playa", coleccion: "Destino", precio: "$599", plan: "premium", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600" },
      ]
    },
    {
      id: "xv-anos",
      titulo: "Fiestas de XV Años",
      desc: "Diseños con brillo, magia y toda tu personalidad.",
      plantillas: [
        { id: "xv-gala", nombre: "Gala XV", coleccion: "Sparkle", precio: "$599", plan: "premium", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600" },
        { id: "xv-neon", nombre: "Neon Party", coleccion: "Modern", precio: "$299", plan: "esencial", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600" },
        { id: "xv-princess", nombre: "Princesa", coleccion: "Fantasy", precio: "$599", plan: "premium", img: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=600" },
        { id: "xv-glam", nombre: "Rose Gold Glam", coleccion: "Trendy", precio: "$399", plan: "premium", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600" },
      ]
    }
  ];

  const faqs = [
    { q: "¿Cómo funciona la personalización?", a: "Después de elegir tu plantilla, accedes a nuestro editor interactivo donde puedes cambiar textos, subir tus fotos, agregar tu música favorita e indicar las ubicaciones de Google Maps en minutos. No necesitas saber de programación ni diseño." },
    { q: "¿Cómo reciben la invitación los invitados?", a: "Tu invitación genera un enlace único y optimizado para móviles (ej. momentossociales.com/tu-evento). Puedes enviarlo masivamente por WhatsApp, Messenger, Telegram o redes sociales con un solo clic." },
    { q: "¿Los invitados necesitan descargar alguna app?", a: "Para nada. Tus invitados abren el enlace directamente desde cualquier navegador móvil. Solo ingresarán sus datos básicos cuando decidan confirmar su asistencia mediante el módulo RSVP." },
    { q: "¿Puedo corregir datos después de haber enviado el link?", a: "¡Claro! Puedes ingresar a tu panel de control y cambiar horarios, códigos de vestimenta o mesas de regalos en tiempo real. Los cambios se actualizan al instante sin necesidad de generar un nuevo enlace." }
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const contenedor = e.currentTarget;
    const scrollLeft = contenedor.scrollLeft;
    const itemWidth = contenedor.clientWidth;
    const indexActivo = Math.round(scrollLeft / itemWidth);
    if (indexActivo !== activeFeature) setActiveFeature(indexActivo);
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-slate-950 text-white overflow-x-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center opacity-65 md:bg-fixed"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/80"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[60%] sm:w-[50%] h-[50%] bg-yellow-500/15 blur-[100px] sm:blur-[145px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] sm:w-[40%] h-[40%] bg-amber-600/15 blur-[100px] sm:blur-[145px] rounded-full"></div>
      </div>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-12 h-16 sm:h-20 lg:h-24 flex items-center justify-between bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent backdrop-blur-xs">
        <Link className="flex items-center gap-2 max-w-[140px] sm:max-w-none" href="/">
          <Image src="/logo.png" alt="Momentos Sociales" width={160} height={40} className="object-contain w-auto h-8 sm:h-10" priority />
        </Link>
        <nav className="flex gap-3 sm:gap-6 items-center">
          <Link href="/login" className="text-xs sm:text-sm font-medium text-white/70 hover:text-yellow-200 transition-colors">
            Iniciar Sesión
          </Link>
          <Link href="/register">
            <Button className="bg-white text-slate-950 hover:bg-yellow-200 rounded-full font-bold px-3 sm:px-5 text-xs sm:text-sm h-8 sm:h-10 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              Registrarse
            </Button>
          </Link>
        </nav>
      </header>

      <main className="relative z-10 main-flow pt-16 sm:pt-20">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center py-10 sm:py-20 px-4 sm:px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left: Content */}
            <div className="flex flex-col space-y-6 sm:space-y-8 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-yellow-200 text-[10px] sm:text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                <Sparkles className="w-3 h-3" /> Invitaciones que inspiran
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.15] lg:leading-[1.1] tracking-tight drop-shadow-md">
                Tus momentos <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-400">
                  inolvidables
                </span>
              </h1>
              
              <p className="text-sm sm:text-lg md:text-xl text-white/90 font-light max-w-xl leading-relaxed drop-shadow-sm px-2 sm:px-0">
                Transforma tu evento en una experiencia digital única. Diseños de alta gama, confirmaciones en tiempo real y gestión inteligente en un solo lugar.
              </p>

              <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto px-4 sm:px-0">
                <Link href="/register" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 rounded-full bg-gradient-to-r from-yellow-300 to-amber-500 text-slate-950 font-black text-base sm:text-lg shadow-[0_15px_30px_rgba(245,158,11,0.3)] hover:scale-105 transition-transform">
                    Crear mi invitación
                  </Button>
                </Link>
                <a href="#catalogo" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 rounded-full border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md text-sm sm:text-base">
                    Ver Catálogo
                  </Button>
                </a>
              </div>

              {/* Stats */}
              <div className="pt-6 sm:pt-8 flex items-center gap-8 border-t border-white/10 w-full justify-center lg:justify-start">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-yellow-300/80 hidden sm:block" />
                  <div>
                    <p className="text-xl sm:text-2xl font-serif text-white">50K+</p>
                    <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest">Invitaciones creados</p>
                  </div>
                </div>
                <div className="w-px h-6 sm:h-8 bg-white/20"></div>
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-yellow-300/80 hidden sm:block" />
                  <div>
                    <p className="text-xl sm:text-2xl font-serif text-white">98%</p>
                    <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest">Casos de éxito</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Immersive Mockup Stack */}
            <div className="relative h-[380px] sm:h-[500px] md:h-[650px] flex items-center justify-center order-1 lg:order-2 mt-6 lg:mt-0">
              <div className="absolute w-[80%] h-[80%] bg-yellow-500/10 blur-[80px] sm:blur-[110px] rounded-full"></div>
              
              <div className="relative z-20 w-[170px] sm:w-[240px] md:w-[300px] aspect-[9/19] bg-slate-900 rounded-[2rem] sm:rounded-[3rem] border-[5px] sm:border-[8px] border-slate-800 shadow-2xl overflow-hidden transform -rotate-6 translate-x-2 lg:translate-x-0">
                <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600" className="w-full h-full object-cover" alt="Phone Mockup" />
              </div>

              <div className="absolute z-10 w-[150px] sm:w-[220px] md:w-[280px] aspect-[9/19] bg-slate-900 rounded-[2rem] sm:rounded-[3rem] border-[5px] sm:border-[8px] border-slate-800 shadow-2xl overflow-hidden transform rotate(12) translate-x-24 sm:translate-x-32 opacity-40">
                 <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600" className="w-full h-full object-cover" alt="Phone Mockup" />
              </div>

              <div className="absolute bottom-16 -left-4 md:-left-8 z-30 bg-slate-900/60 backdrop-blur-2xl border border-white/10 p-3 rounded-2xl shadow-2xl flex items-center gap-3 scale-80 sm:scale-100 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-9 h-9 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-white leading-tight">+12 Invitados</p>
                  <p className="text-[9px] text-white/50">Confirmados hoy</p>
                </div>
              </div>

              <div className="absolute top-10 sm:top-20 right-[-10px] md:right-0 z-30 bg-slate-950/70 backdrop-blur-2xl border border-white/20 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl flex items-center gap-3 sm:gap-4 scale-90 sm:scale-100 animate-float">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
                  <BellRing className="w-4 h-4 sm:w-5 h-5 text-slate-950" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] sm:text-xs font-bold text-white trailing-tight">¡Nueva Confirmación!</p>
                  <p className="text-[9px] sm:text-[10px] text-white/70">Familia García ha confirmado</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: STEPS */}
        <section className="py-14 sm:py-24 bg-slate-950/20 backdrop-blur-xs border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-yellow-200">
                  <MousePointer2 className="w-6 sm:w-8 h-6 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif">1. Elige un diseño</h3>
                <p className="text-xs sm:text-sm text-white/60 max-w-xs">Explora nuestro catálogo de plantillas premium diseñadas por expertos.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-yellow-200">
                  <Palette className="w-6 sm:w-8 h-6 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif">2. Personaliza</h3>
                <p className="text-xs sm:text-sm text-white/60 max-w-xs">Agrega tus fotos, música, ubicación y detalles en pocos minutos.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-yellow-200">
                  <Share2 className="w-6 sm:w-8 h-6 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif">3. Comparte</h3>
                <p className="text-xs sm:text-sm text-white/60 max-w-xs">Envía el enlace por WhatsApp y gestiona tus invitados al instante.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CATALOGO */}
        <section id="catalogo" className="py-16 sm:py-24 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-12 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white flex items-center gap-3 sm:gap-4">
              Nuestro Catálogo <ArrowRight className="text-yellow-400 w-6 sm:w-8 h-6 sm:h-8" />
            </h2>
          </div>

          <div className="space-y-12 sm:space-y-20">
            {categorias.map((cat) => (
              <div key={cat.id} className="flex flex-col">
                <div className="px-4 sm:px-12 mb-4 max-w-7xl mx-auto w-full">
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-serif text-white">{cat.titulo}</h3>
                  <p className="text-white/50 text-xs sm:text-sm md:text-base font-light">{cat.desc}</p>
                </div>

                <div className="w-full overflow-x-auto pb-6 pt-2 px-4 sm:px-12 scrollbar-none snap-x snap-mandatory">
                  <div className="flex flex-nowrap gap-4 sm:gap-6 max-w-7xl mx-auto w-max md:w-full">
                    {cat.plantillas.map((item) => (
                      <div 
                        key={item.id} 
                        className="snap-start w-[200px] sm:w-[240px] md:w-[300px] shrink-0 group bg-slate-950/40 backdrop-blur-md border border-white/10 p-2.5 sm:p-3 rounded-[1.5rem] sm:rounded-[2rem] transition-all duration-500 hover:bg-slate-950/60"
                      >
                        <div className="aspect-[3/4] rounded-[1.2rem] sm:rounded-[1.5rem] overflow-hidden relative mb-3 sm:mb-4 bg-neutral-900">
                          <img src={item.img} alt={item.nombre} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center">
                            <Button variant="outline" className="bg-white text-slate-950 font-bold rounded-full">
                              Previsualizar
                            </Button>
                          </div>
                          <span className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 bg-slate-950/80 backdrop-blur-md px-2.5 py-0.5 sm:py-1 rounded-full text-yellow-200 text-[11px] sm:text-xs font-bold border border-white/10">
                            {item.precio}
                          </span>
                        </div>
                        
                        <div className="px-1.5 space-y-0.5 sm:space-y-1 mb-3 sm:mb-4 text-left">
                          <h4 className="text-base sm:text-xl font-serif text-white truncate max-w-[160px] sm:max-w-none">{item.nombre}</h4>
                          <p className="text-[10px] sm:text-xs text-yellow-200/60 uppercase tracking-widest">{item.coleccion}</p>
                        </div>

                        <div className="flex flex-col gap-1.5 w-full">
                          <Link href={`/demo/${item.id}`} target="_blank" className="md:hidden w-full text-center bg-white/5 border border-white/10 hover:bg-white/10 text-white text-[11px] font-medium py-1.5 rounded-xl transition-colors">
                            Ver Demo
                          </Link>
                          <Link href={`/register?template=${item.id}`} className="w-full">
                            <Button className="w-full h-9 sm:h-11 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:bg-yellow-400 hover:text-slate-950 transition-all text-[11px] sm:text-sm font-bold">
                              Personalizar
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: WHY US */}
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-20 space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif">Todo lo que necesitas</h2>
              <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto italic">Diseñamos tecnología para que tú solo te preocupes por disfrutar.</p>
            </div>
            
            <div className="block md:hidden w-full">
              <div 
                onScroll={handleScroll}
                className="w-full overflow-x-auto pb-2 pt-2 px-2 scrollbar-none snap-x snap-mandatory"
              >
                <div className="flex flex-nowrap gap-4 w-max">
                  <div className="snap-center w-[280px] shrink-0 p-6 rounded-2xl bg-slate-950/40 border border-white/10 flex flex-col items-center text-center backdrop-blur-sm">
                    <div className="w-12 h-12 bg-yellow-500/20 text-yellow-400 rounded-xl flex items-center justify-center mb-4">
                      <CheckCircle2 />
                    </div>
                    <h3 className="text-lg font-serif mb-2 text-white">Confirmación Automática</h3>
                    <p className="text-white/60 text-xs leading-relaxed font-light">Recibe confirmaciones de asistencia directo en tu panel sin complicaciones.</p>
                  </div>

                  <div className="snap-center w-[280px] shrink-0 p-6 rounded-2xl bg-slate-950/40 border border-white/10 flex flex-col items-center text-center backdrop-blur-sm">
                    <div className="w-12 h-12 bg-yellow-500/20 text-yellow-400 rounded-xl flex items-center justify-center mb-4">
                      <Sparkles />
                    </div>
                    <h3 className="text-lg font-serif mb-2 text-white">Música & Multimedia</h3>
                    <p className="text-white/60 text-xs leading-relaxed font-light">Ambienta tu invitación con tu canción favorita y hermosas galerías fotográficas.</p>
                  </div>

                  <div className="snap-center w-[280px] shrink-0 p-6 rounded-2xl bg-slate-950/40 border border-white/10 flex flex-col items-center text-center backdrop-blur-sm">
                    <div className="w-12 h-12 bg-yellow-500/20 text-yellow-400 rounded-xl flex items-center justify-center mb-4">
                      <Share2 />
                    </div>
                    <h3 className="text-lg font-serif mb-2 text-white">Compartir es Fácil</h3>
                    <p className="text-white/60 text-xs leading-relaxed font-light">Un solo link personalizado listo para enviar por WhatsApp y redes sociales.</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-4 w-full">
                {[0, 1, 2].map((index) => (
                  <span
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeFeature === index ? 'w-6 bg-yellow-400' : 'w-2 bg-white/25'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="hidden md:grid grid-cols-3 gap-8">
              {[
                { icon: <CheckCircle2 />, title: "Confirmación Automática", desc: "Recibe confirmaciones de asistencia directo en tu panel." },
                { icon: <Sparkles />, title: "Música & Multimedia", desc: "Ambienta tu invitación con tu canción favorita y galerías." },
                { icon: <Share2 />, title: "Compartir es Fácil", desc: "Un solo link personalizado para WhatsApp y redes." }
              ].map((feature, i) => (
                <div key={i} className="group p-10 rounded-[3rem] bg-slate-950/30 border border-white/10 hover:bg-slate-950/50 backdrop-blur-sm transition-all duration-500 flex flex-col items-start">
                  <div className="w-14 h-14 bg-yellow-500/20 text-yellow-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-serif mb-4 text-white">{feature.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION FAQ - Corregida de raíz para Next.js / React */}
        <section id="faq" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 relative z-30">
          <div className="text-center mb-12 space-y-3">
            <span className="text-yellow-200 text-xs sm:text-sm font-bold tracking-[0.3em] uppercase block">Dudas Comunes</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">Preguntas Frecuentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-slate-950/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex justify-between items-center p-5 text-left font-medium text-white hover:text-yellow-200 transition-colors gap-4"
                  >
                    <span className="text-sm sm:text-base flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-yellow-300/60 shrink-0" /> {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-white/50 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-yellow-400' : ''}`} />
                  </button>
                  
                  {/* Renderizado condicional seguro y nativo de React */}
                  {isOpen && (
                    <div className="border-t border-white/5 bg-slate-950/30">
                      <p className="p-5 text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* FOOTER */}
     <SiteFooter />
    </div>
  );
}