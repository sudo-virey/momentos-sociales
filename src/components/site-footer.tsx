"use client";

import Link from 'next/link';
import Image from 'next/image';
import { BellRing, Palette, Share2 } from 'lucide-react';

type SiteFooterProps = {
  className?: string;
  variant?: 'marketing' | 'auth';
};

export function SiteFooter({ className, variant = 'marketing' }: SiteFooterProps) {
  const platformHref = variant === 'auth'
    ? '/marketing#caracteristicas'
    : '#caracteristicas';
  const examplesHref = variant === 'auth'
    ? '/marketing#ejemplos'
    : '#ejemplos';
  const pricingHref = variant === 'auth'
    ? '/marketing#precios'
    : '#precios';

  return (
   
      <footer className="relative z-10 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pt-16 sm:pt-24"> <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        <div className="space-y-4">
          <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
            <Image
              src="/logo-icono.png"
              alt="Momentos Sociales"
              width={180}
              height={45}
              className="object-contain"
            />
          </Link>
          <p className="text-white/50 text-sm font-light leading-relaxed max-w-xs">
            Elevando tus celebraciones con invitaciones digitales exclusivas, confirmación en tiempo real y elegancia sin esfuerzo.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="text-white/40 hover:text-yellow-200 transition-colors duration-300">
              <Share2 className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/40 hover:text-yellow-200 transition-colors duration-300">
              <Palette className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/40 hover:text-yellow-200 transition-colors duration-300">
              <BellRing className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-yellow-200 text-lg font-medium mb-4 tracking-wide">Plataforma</h4>
          <ul className="space-y-2.5">
            <li>
              <Link href={platformHref} className="text-white/60 hover:text-yellow-200 text-sm font-light transition-colors duration-300">
                Características
              </Link>
            </li>
            <li>
              <Link href={examplesHref} className="text-white/60 hover:text-yellow-200 text-sm font-light transition-colors duration-300">
                Galería de Diseños
              </Link>
            </li>
            <li>
              <Link href={pricingHref} className="text-white/60 hover:text-yellow-200 text-sm font-light transition-colors duration-300">
                Planes y Precios
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-yellow-200 text-lg font-medium mb-4 tracking-wide">Colecciones</h4>
          <ul className="space-y-2.5">
            <li>
              <Link href="/demo/boda" target="_blank" className="text-white/60 hover:text-yellow-200 text-sm font-light transition-colors duration-300">
                Boda Luxury
              </Link>
            </li>
            <li>
              <Link href="/demo/xv-anos" target="_blank" className="text-white/60 hover:text-yellow-200 text-sm font-light transition-colors duration-300">
                Gala XV Años
              </Link>
            </li>
            <li>
              <Link href="/demo/gala" target="_blank" className="text-white/60 hover:text-yellow-200 text-sm font-light transition-colors duration-300">
                Cena de Gala
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-yellow-200 text-lg font-medium mb-4 tracking-wide">Soporte</h4>
          <ul className="space-y-2.5">
            <li>
              <Link href="/faqs" className="text-white/60 hover:text-yellow-200 text-sm font-light transition-colors duration-300">
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="text-white/60 hover:text-yellow-200 text-sm font-light transition-colors duration-300">
                Aviso de Privacidad
              </Link>
            </li>
            <li>
              <Link href="/terminos" className="text-white/60 hover:text-yellow-200 text-sm font-light transition-colors duration-300">
                Términos de Servicio
              </Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest text-white/40 uppercase">
        <p>© 2026 Momentos Sociales • Todos los derechos reservados.</p>
        
      </div>
    </footer>
  );
}