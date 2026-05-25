// src/components/auth/auth-page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Sparkles, ArrowLeft, Mail, Lock, User, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/button';
import { SiteFooter } from '../site-footer';

type AuthPageProps = {
  mode: 'login' | 'register';
  plan?: string;
};

export function AuthPage({ mode }: AuthPageProps) {
  const searchParams = useSearchParams();
  
  // Capturamos contextualmente qué le interesó al usuario en la Landing Page
  const templateId = searchParams.get('template');
  const planId = searchParams.get('plan');

  const isRegister = mode === 'register';

  // Formateo visual amigable del contexto de compra
  const nombreTemplate = templateId 
    ? templateId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') 
    : null;

  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-slate-950 text-white overflow-x-hidden justify-between">
      
      {/* BACKGROUND ELEMENTS - Identidad visual exacta de la Landing Page */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center opacity-65 md:bg-fixed"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/80"></div>
        
        {/* Luces decorativas sutiles */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] sm:w-[50%] h-[50%] bg-yellow-500/15 blur-[100px] sm:blur-[145px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] sm:w-[40%] h-[40%] bg-amber-600/15 blur-[100px] sm:blur-[145px] rounded-full"></div>
      </div>

      {/* HEADER MINI - Regresar de forma segura */}
      <header className="relative z-10 px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent">
        <Link className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/60 hover:text-yellow-200 transition-colors group" href="/">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Volver al inicio
        </Link>
        <Link href="/">
          <Image src="/logo.png" alt="Momentos Sociales" width={140} height={35} className="object-contain h-7 sm:h-8" priority />
        </Link>
      </header>

      {/* CUERPO CENTRAL DE AUTENTICACIÓN */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 my-4">
        <div className="w-full max-w-md flex flex-col space-y-6">
          
          {/* BANNER CONTEXTUAL: Si viene de elegir una invitación, le recordamos su selección */}
          {isRegister && nombreTemplate && (
            <div className="w-full p-3.5 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 backdrop-blur-md flex items-center gap-3 animate-float">
              <div className="w-8 h-8 rounded-xl bg-yellow-400/20 flex items-center justify-center text-yellow-300 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-widest text-yellow-200/70 font-bold leading-none">Diseño Seleccionado</p>
                <p className="text-sm font-serif text-white mt-1">Listo para personalizar: <span className="text-yellow-300 font-sans font-semibold">{nombreTemplate}</span></p>
              </div>
            </div>
          )}

          {/* TARJETA GLASSMORPHIC DEL FORMULARIO */}
          <div className="bg-slate-950/40 backdrop-blur-xl border border-white/10 p-6 sm:p-10 rounded-[2rem] shadow-2xl space-y-6 text-center">
            
            {/* Encabezado del Formulario */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-yellow-200 text-[10px] font-bold tracking-wider uppercase mx-auto">
                <Sparkles className="w-3 h-3" /> {isRegister ? 'Paso 1 de 2' : 'Bienvenido de vuelta'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-white">
                {isRegister ? 'Crea tu cuenta' : 'Ingresa a tu panel'}
              </h2>
              <p className="text-xs sm:text-sm text-white/50 font-light">
                {isRegister 
                  ? 'Estás a unos clics de maquetar tu gran evento.' 
                  : 'Gestiona tus invitados y cambios de último minuto.'}
              </p>
            </div>

            {/* Formulario de Entrada */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              
              {/* Campo Nombre completo (Solo visible en Registro) */}
              {isRegister && (
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-medium text-white/60 px-1">Nombre Completo</label>
                  <div className="relative flex items-center">
                    <User className="absolute left-4 w-4 h-4 text-white/40" />
                    <input 
                      type="text" 
                      placeholder="Ej. Luis Villasana" 
                      className="w-full h-11 pl-11 pr-4 bg-slate-900/60 border border-white/10 rounded-xl text-sm placeholder:text-white/30 text-white focus:outline-none focus:border-yellow-400/40 focus:ring-1 focus:ring-yellow-400/20 transition-all font-light"
                    />
                  </div>
                </div>
              )}

              {/* Campo Email */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-medium text-white/60 px-1">Correo Electrónico</label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-4 w-4 h-4 text-white/40" />
                  <input 
                    type="email" 
                    placeholder="tu@correo.com" 
                    className="w-full h-11 pl-11 pr-4 bg-slate-900/60 border border-white/10 rounded-xl text-sm placeholder:text-white/30 text-white focus:outline-none focus:border-yellow-400/40 focus:ring-1 focus:ring-yellow-400/20 transition-all font-light"
                  />
                </div>
              </div>

              {/* Campo Contraseña */}
              <div className="space-y-1.5 text-left">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-medium text-white/60">Contraseña</label>
                  {!isRegister && (
                    <Link href="/forgot-password" className="text-[11px] text-yellow-200/60 hover:text-yellow-200 transition-colors">
                      ¿La olvidaste?
                    </Link>
                  )}
                </div>
                <div className="relative flex items-center">
                  <Lock className="absolute left-4 w-4 h-4 text-white/40" />
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full h-11 pl-11 pr-4 bg-slate-900/60 border border-white/10 rounded-xl text-sm placeholder:text-white/30 text-white focus:outline-none focus:border-yellow-400/40 focus:ring-1 focus:ring-yellow-400/20 transition-all font-light"
                  />
                </div>
              </div>

              {/* Botón de Envío Principal */}
              <Button className="w-full h-12 bg-gradient-to-r from-yellow-300 to-amber-500 text-slate-950 font-black text-sm rounded-xl mt-2 shadow-[0_15px_25px_rgba(245,158,11,0.2)] hover:scale-[1.01] transition-transform">
                {isRegister ? 'Registrarme y Continuar' : 'Acceder a mi Cuenta'}
              </Button>
            </form>

            {/* Divisor Alternativo */}
            <div className="text-xs text-white/40 font-light pt-2">
              {isRegister ? '¿Ya tienes una cuenta?' : '¿Eres nuevo en la plataforma?'} {' '}
              <Link 
                href={isRegister ? `/login?mode=login${templateId ? `&template=${templateId}` : ''}` : '/register'} 
                className="text-yellow-200 font-semibold hover:underline ml-1"
              >
                {isRegister ? 'Inicia Sesión' : 'Regístrate aquí'}
              </Link>
            </div>

          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pt-16 sm:pt-24">
        <SiteFooter />
      </footer>
    </div>
  );
}