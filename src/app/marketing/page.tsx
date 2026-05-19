// src/app/(marketing)/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Share2, Palette, BellRing, PlayCircle } from 'lucide-react';
import { Button } from '@/components/button';
import { SiteFooter } from '@/components/site-footer';

export default function MarketingPage() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans overflow-hidden">

      {/* FONDO DE FIESTA INMERSIVO */}
      <div className="absolute inset-0 z-0 bg-[url('/background.png')] bg-cover bg-center md:bg-fixed">
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      {/* HEADER */}
      <header className="relative z-10 px-6 lg:px-12 h-20 flex items-center justify-between border-b border-white/10 bg-black/45 backdrop-blur-md">
        <Link className="flex items-center gap-2 hover:opacity-80 transition-opacity" href="/">
          <Image src="/logo.png" alt="Momentos Sociales" width={200} height={50} className="object-contain" priority />
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          <Link className="text-sm font-light text-white/90 hover:text-white transition-colors" href="/register?plan=esencial">Registrarse</Link>
          <Link href="/login?mode=login&plan=esencial" className="text-sm font-medium text-white hover:text-yellow-200">Iniciar Sesión</Link>
        </nav>
      </header>

      <main className="relative z-10 flex-1">

        {/* HERO SECTION UNIFICADO */}
        <div className="max-w-7xl mx-auto mt-4 md:mt-12 px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Columna Izquierda: Mensaje y Acción */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-6">

              {/* GANCHO PSICOLÓGICO DE PRECIO */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-200/20 bg-yellow-200/5 text-yellow-200 text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
                ✨ Pago único por evento • Desde $299 MXN
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                Crea invitaciones <span className="text-yellow-200">elegantes</span> en minutos
              </h1>
              <p className="text-base md:text-lg text-white/80 font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                Diseña la experiencia perfecta para tu evento. Personaliza cada detalle, gestiona confirmaciones en tiempo real y comparte tu celebración con estilo a través de un solo enlace.
              </p>

              <div className="pt-2 flex justify-center md:justify-start">
                <Button
                  variant="outline"
                  className="h-12 rounded-2xl border-0 bg-linear-to-r from-yellow-300 via-amber-300 to-yellow-400 px-8 text-base font-semibold text-slate-950 shadow-[0_18px_40px_rgba(250,204,21,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:from-yellow-200 hover:via-amber-200 hover:to-yellow-300"
                >
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Iniciar prueba gratuita
                </Button>
              </div>
            </div>

            {/* Columna Derecha: Mockup del Producto */}
            <div className="flex justify-center items-center">
              <div className="w-full max-w-[320px] md:max-w-100 relative animate-float">
                <Image
                  src="/celular-invitacion.png"
                  alt="Invitación digital en celular"
                  width={520}
                  height={920}
                  className="w-full h-auto object-contain drop-shadow-[0_15px_50px_rgba(250,204,21,0.15)]"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

        {/* SECCIÓN: ¿POR QUÉ NOSOTROS? */}
        <div id="caracteristicas" className="max-w-7xl mx-auto px-12 py-16 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-yellow-200 mb-1">¿Por qué elegir Momentos Sociales?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-yellow-200/20 rounded-full flex items-center justify-center mx-auto mb-6"><BellRing className="text-yellow-200 w-8 h-8" /></div>
              <h3 className="text-2xl text-white font-medium mb-4">Confirmación en Tiempo Real</h3>
              <p className="text-white/60 font-light">Gestiona tu lista de invitados y recibe notificaciones cuando confirmen su asistencia.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-yellow-200/20 rounded-full flex items-center justify-center mx-auto mb-6"><Share2 className="text-yellow-200 w-8 h-8" /></div>
              <h3 className="text-2xl text-white font-medium mb-4">Fácil de Compartir</h3>
              <p className="text-white/60 font-light">Envía tu invitación por WhatsApp o redes sociales con un solo enlace personalizado.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-yellow-200/20 rounded-full flex items-center justify-center mx-auto mb-6"><Palette className="text-yellow-200 w-8 h-8" /></div>
              <h3 className="text-2xl text-white font-medium mb-4">Diseño Personalizado</h3>
              <p className="text-white/60 font-light">Personaliza colores, fotos y detalles para que tu invitación sea tan única como tu evento.</p>
            </div>
          </div>
        </div>

        {/* SECCIÓN DE EJEMPLOS */}
        <section id="ejemplos" className="py-24 px-12 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-yellow-200 text-2xl font-bold tracking-[0.3em] uppercase">Nuestra Galería</span>
              <h2 className="text-4xl md:text-4xl font-serif text-white mt-4 mb-4">Diseños que enamoran</h2>
              <p className="text-white/80 font-light max-w-xl mx-auto text-lg italic">Haz clic en cualquier diseño para ver la demo interactiva.</p>
            </div>

            {/* Grid de Invitaciones */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Ejemplo 1: Boda */}
              <Link href="/demo/boda" target="_blank" className="group relative block cursor-pointer">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-1 rounded-4xl overflow-hidden transition-all duration-500 hover:border-yellow-200/50 hover:bg-white/15">
                  <div className="aspect-9/16 rounded-4xl overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600" alt="Boda Elegante" className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                      <p className="text-white font-serif text-2xl">Boda Real</p>
                      <p className="text-yellow-200 text-xs tracking-widest uppercase mt-2">Colección Luxury</p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Ejemplo 2: XV Años */}
              <Link href="/demo/xv-anos" target="_blank" className="group relative block cursor-pointer lg:mt-12">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-1 rounded-4xl overflow-hidden transition-all duration-500 hover:border-yellow-200/50 hover:bg-white/15 shadow-2xl">
                  <div className="aspect-9/16 rounded-4xl overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600" alt="XV Años Gala" className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                      <p className="text-white font-serif text-2xl">Gala XV Años</p>
                      <p className="text-yellow-200 text-xs tracking-widest uppercase mt-2">Colección Sparkle</p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Ejemplo 3: Gala */}
              <Link href="/demo/gala" target="_blank" className="group relative block cursor-pointer">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-1 rounded-4xl overflow-hidden transition-all duration-500 hover:border-yellow-200/50 hover:bg-white/15">
                  <div className="aspect-9/16 rounded-4xl overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600&auto=format&fit=crop" alt="Evento Especial" className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                      <p className="text-white font-serif text-2xl">Cena de Gala</p>
                      <p className="text-yellow-200 text-xs tracking-widest uppercase mt-2">Colección Modern</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SECCIÓN DE PRECIOS */}
        <section id="precios" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-4">Planes a la medida de tu evento</h2>
            <p className="text-white/60 font-light">Un solo pago por evento, sin mensualidades ni cargos ocultos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan Básico */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between backdrop-blur-sm">
              <div>
                <h3 className="text-xl text-white font-medium mb-2">Esencial</h3>
                <p className="text-white/50 text-sm mb-6">Ideal para reuniones íntimas o celebraciones sencillas.</p>
                <div className="text-3xl font-serif text-yellow-200 mb-6">$299 <span className="text-sm font-sans text-white/60">MXN</span></div>
                <ul className="space-y-3 text-white/70 text-sm font-light">
                  <li>✓ Invitación digital activa por 6 meses</li>
                  <li>✓ Ubicación interactiva (Google Maps)</li>
                  <li>✓ Confirmación directa a tu WhatsApp</li>
                </ul>
              </div>
              <Link href="/login?plan=esencial" className="w-full">
              <Button variant="outline" className="mt-8 w-full border-white/20 text-black hover:bg-white/10 transition-colors">Elegir Plan</Button>
              </Link>
            </div>

            {/* Plan Premium */}
            <div className="bg-linear-to-b from-amber-500/10 to-transparent border-2 border-yellow-200/50 p-8 rounded-3xl flex flex-col justify-between relative shadow-[0_20px_50px_rgba(250,204,21,0.05)] backdrop-blur-sm">
              <span className="absolute -top-3 right-6 bg-yellow-200 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Más Popular</span>
              <div>
                <h3 className="text-xl text-white font-medium mb-2">Premium Elegance</h3>
                <p className="text-white/50 text-sm mb-6">La experiencia completa, automatizada y exclusiva para tu gran día.</p>
                <div className="text-3xl font-serif text-yellow-200 mb-6">$599 <span className="text-sm font-sans text-white/60">MXN</span></div>
                <ul className="space-y-3 text-white/80 text-sm font-light">
                  <li>✓ Todo lo del plan Esencial</li>
                  <li>✓ Panel de confirmaciones en tiempo real</li>
                  <li>✓ Mesa de regalos integrada o CLABE Bancaria</li>
                  <li>✓ Reproductor de música de fondo</li>
                  <li>✓ Galería de fotos del festejo</li>
                </ul>
              </div>
              <Button className="mt-8 w-full bg-linear-to-r from-yellow-300 to-amber-400 text-slate-950 font-semibold hover:from-yellow-200 hover:to-amber-300 transition-all duration-300 shadow-[0_10px_30px_rgba(250,204,21,0.2)]">Empezar Ahora</Button>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}