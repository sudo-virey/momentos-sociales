'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, Eye, Lock, Mail, PartyPopper, Sparkles, User } from 'lucide-react'
import { Button } from '@/components/button'
import { SiteFooter } from '../site-footer'

type AuthPageProps = {
  mode: 'login' | 'register'
  templateId?: string
}

const selectedDesignNames: Record<string, string> = {
  'wedding-classic': 'Romance clásico',
  'wedding-modern': 'Minimal dorado',
  quinceanera: 'Noche de ensueño',
  'quinceanera-royal': 'Royal rose',
  'baby-shower': 'Dulce espera',
  'baby-shower-clouds': 'Nubes suaves',
  'birthday-stream': 'Stream party',
  'birthday-confetti': 'Confetti',
  'gala-onyx': 'Onyx black tie',
}

const highlights = [
  'Guarda tu diseño favorito',
  'Personaliza los datos de tu evento',
  'Revisa la vista previa antes de compartir',
]

function getDesignName(templateId?: string) {
  if (!templateId) return null

  return selectedDesignNames[templateId] ?? templateId
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function AuthPage({ mode, templateId }: AuthPageProps) {
  const isRegister = mode === 'register'
  const designName = getDesignName(templateId)

  return (
    <div className="min-h-screen bg-[#f8f5ef] text-[#1d1b18]">
      <header className="border-b border-[#ded6c7] bg-[#f8f5ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8">
          <Link href="/marketing" className="inline-flex items-center gap-2 text-sm font-medium text-[#5d574d] transition hover:text-[#1d1b18]">
            <ArrowLeft className="size-4" />
            Inicio
          </Link>

          <Link href="/marketing" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/logo-ms.png"
              alt="Momentos Sociales"
              width={440}
              height={108}
              className="h-12 w-auto object-contain sm:h-14"
              priority
            />
          </Link>

          <Button asChild variant="ghost" className="hidden text-[#3f3a33] hover:bg-[#eee5d6] sm:inline-flex">
            <Link href={isRegister ? '/login' : '/register'}>{isRegister ? 'Ingresar' : 'Crear cuenta'}</Link>
          </Button>
        </div>
      </header>

      <main className="relative overflow-hidden border-b border-[#ded6c7]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ead8b8_0,transparent_36%),radial-gradient(circle_at_bottom_right,#ead1d9_0,transparent_32%)]" />
        <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-14">
          <section className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9c8a5] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6424]">
              <Sparkles className="size-3.5" />
              {isRegister ? 'Comienza tu invitación' : 'Bienvenido de vuelta'}
            </div>

            <h1 className="font-serif text-5xl leading-[1.04] text-[#181612] sm:text-6xl">
              {isRegister ? 'Tu invitación digital empieza aquí' : 'Continúa preparando tu evento'}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#5d574d] sm:text-lg">
              {isRegister
                ? 'Crea tu cuenta para guardar tu diseño, personalizarlo con los datos de tu evento y compartirlo cuando esté listo.'
                : 'Ingresa para editar tus invitaciones, revisar vistas previas y mantener listos los detalles de tu celebración.'}
            </p>

            {designName && (
              <div className="mt-8 rounded-2xl border border-[#ded6c7] bg-white/75 p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#fff4d8] text-[#9b6a09]">
                    <PartyPopper className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b6a09]">Diseño seleccionado</p>
                    <h2 className="mt-2 font-serif text-3xl text-[#181612]">{designName}</h2>
                    <p className="mt-2 text-sm leading-6 text-[#655e53]">
                      Lo guardaremos para que puedas personalizarlo después de crear tu cuenta.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 grid gap-3">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 text-sm text-[#3f3a33]">
                  <span className="flex size-7 items-center justify-center rounded-full bg-[#e7f6ef] text-[#19734f]">
                    <Check className="size-4" />
                  </span>
                  {highlight}
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-md">
            <div className="rounded-[2rem] border border-[#ded6c7] bg-white/88 p-6 shadow-2xl shadow-[#96714c]/10 backdrop-blur sm:p-8">
              <div className="text-center">
                <div className="mx-auto mb-5 flex size-12 items-center justify-center rounded-full bg-[#1d1b18] text-white">
                  {isRegister ? <User className="size-5" /> : <Lock className="size-5" />}
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9b6a09]">
                  {isRegister ? 'Crear cuenta' : 'Acceso privado'}
                </p>
                <h2 className="mt-3 font-serif text-4xl text-[#181612]">
                  {isRegister ? 'Empieza en minutos' : 'Ingresa a tu panel'}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#655e53]">
                  {isRegister
                    ? 'Solo necesitamos tus datos para guardar tu invitación.'
                    : 'Accede para continuar editando tus diseños.'}
                </p>
              </div>

              <form className="mt-8 space-y-4" onSubmit={(event) => event.preventDefault()}>
                {isRegister && (
                  <label className="block text-left">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#71695d]">Nombre completo</span>
                    <span className="relative block">
                      <User className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#9b6a09]" />
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        className="h-12 w-full rounded-full border border-[#d8cdbb] bg-[#f8f5ef] pl-11 pr-4 text-sm text-[#1d1b18] outline-none transition placeholder:text-[#9a9184] focus:border-[#9b6a09] focus:bg-white focus:ring-4 focus:ring-[#ead8b8]/45"
                      />
                    </span>
                  </label>
                )}

                <label className="block text-left">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#71695d]">Correo electrónico</span>
                  <span className="relative block">
                    <Mail className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#9b6a09]" />
                    <input
                      type="email"
                      placeholder="tu@correo.com"
                      className="h-12 w-full rounded-full border border-[#d8cdbb] bg-[#f8f5ef] pl-11 pr-4 text-sm text-[#1d1b18] outline-none transition placeholder:text-[#9a9184] focus:border-[#9b6a09] focus:bg-white focus:ring-4 focus:ring-[#ead8b8]/45"
                    />
                  </span>
                </label>

                <label className="block text-left">
                  <span className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-[#71695d]">
                    Contraseña
                    {!isRegister && <span className="normal-case tracking-normal text-[#9b6a09]">¿La olvidaste?</span>}
                  </span>
                  <span className="relative block">
                    <Lock className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#9b6a09]" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="h-12 w-full rounded-full border border-[#d8cdbb] bg-[#f8f5ef] pl-11 pr-4 text-sm text-[#1d1b18] outline-none transition placeholder:text-[#9a9184] focus:border-[#9b6a09] focus:bg-white focus:ring-4 focus:ring-[#ead8b8]/45"
                    />
                  </span>
                </label>

                <Button className="h-12 w-full rounded-full bg-[#1d1b18] text-white hover:bg-[#3b342c]">
                  {isRegister ? 'Crear cuenta y continuar' : 'Ingresar'}
                  <ArrowRight className="size-4" />
                </Button>
              </form>

              <div className="mt-6 rounded-2xl bg-[#f8f5ef] p-4 text-center text-sm text-[#655e53]">
                {isRegister ? '¿Ya tienes una cuenta?' : '¿Todavía no tienes cuenta?'}{' '}
                <Link
                  href={isRegister ? `/login${templateId ? `?template=${templateId}` : ''}` : '/register'}
                  className="font-semibold text-[#1d1b18] underline-offset-4 hover:underline"
                >
                  {isRegister ? 'Ingresa aquí' : 'Crea una aquí'}
                </Link>
              </div>
            </div>

            <Link
              href="/catalogo"
              className="mt-5 flex items-center justify-center gap-2 rounded-full border border-[#ded6c7] bg-white/70 px-5 py-3 text-sm font-medium text-[#5d574d] transition hover:bg-white hover:text-[#1d1b18]"
            >
              <Eye className="size-4" />
              Ver más diseños antes de continuar
            </Link>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
