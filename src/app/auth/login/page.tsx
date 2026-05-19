"use client";

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/button';
import { SiteFooter } from '@/components/site-footer';

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  
  // Capturamos el plan que viene desde la landing (esencial o premium)
  const planSeleccionado = searchParams.get('plan') || 'esencial';

  const handleMockLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulamos un retraso de red de 1.5 segundos para que se sienta real
    setTimeout(() => {
      setIsLoading(false);
      // Redirigimos al dashboard arrastrando el plan seleccionado
      router.push(`/dashboard?plan=${planSeleccionado}`);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-center">
      {/* Logo */}
      <div className="mb-8 flex justify-center">
        <Link href="/">
          <Image src="/logo.png" alt="Momentos Sociales" width={180} height={45} className="object-contain" />
        </Link>
      </div>

      <h2 className="text-2xl font-serif text-white mb-2">¡Comencemos tu aventura!</h2>
      <p className="text-white/60 text-sm font-light mb-8">
        {planSeleccionado === 'premium' 
          ? 'Estás a un paso de crear tu Invitación Premium' 
          : 'Estás a un paso de crear tu Invitación Esencial'}
      </p>

      {/* Formulario Simulado */}
      <form onSubmit={handleMockLogin} className="space-y-4 text-left">
        <div>
          <label className="text-xs font-semibold text-yellow-200 uppercase tracking-wider block mb-2">Correo Electrónico</label>
          <input 
            type="email" 
            required
            placeholder="ejemplo@correo.com" 
            className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-white text-sm focus:outline-none focus:border-yellow-200/50 transition-colors"
          />
        </div>

        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full h-12 mt-6 bg-linear-to-r from-yellow-300 to-amber-400 text-slate-950 font-semibold rounded-xl hover:from-yellow-200 hover:to-amber-300 transition-all flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(250,204,21,0.15)]"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Iniciando sesión...
            </>
          ) : (
            'Entrar en Modo Simulado (MVP)'
          )}
        </Button>
      </form>

      {/* Botón de Google Simulado */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
        <div className="relative text-xs uppercase tracking-widest text-white/40 bg-transparent inline-block px-2">O bien</div>
      </div>

      <button 
        onClick={handleMockLogin}
        disabled={isLoading}
        className="w-full h-12 rounded-xl border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-3"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"/>
          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Continuar con Google
      </button>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#0B0B0C]">
      {/* Mantenemos el fondo elegante */}
      <div className="absolute inset-0 z-0 bg-[url('/background.png')] bg-cover bg-center opacity-40"></div>
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/50 to-black/80 z-0"></div>
      
      <div className="relative z-10 flex flex-1 w-full items-center justify-center px-6 py-12">
        <Suspense fallback={<Loader2 className="h-8 w-8 text-yellow-200 animate-spin" />}>
          <LoginContent />
        </Suspense>
      </div>

      <SiteFooter variant="auth" />
    </div>
  );
}