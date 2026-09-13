'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ClipboardList,
  CreditCard,
  Eye,
  Gift,
  Gauge,
  LockKeyhole,
  MousePointer2,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { Button } from '@/components/button'
import { SiteFooter } from '@/components/site-footer'

const categories = [
  {
    name: 'Bodas',
    description: 'Diseños elegantes para ceremonia, recepción, mesa de regalos y RSVP.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
    href: '/demo/boda',
  },
  {
    name: 'XV años',
    description: 'Plantillas con galería, horarios de misa y fiesta, padrinos y dress code.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=900&auto=format&fit=crop',
    href: '/demo/xv-anos',
  },
  {
    name: 'Cena de gala',
    description: 'Invitaciones sobrias para eventos formales, horarios, ubicación y acceso.',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=900&auto=format&fit=crop',
    href: '/demo/gala',
  },
]

const workflow = [
  {
    icon: MousePointer2,
    title: 'Elige tu diseño',
    description: 'Explora invitaciones por tipo de evento y encuentra una que combine con tu celebración.',
  },
  {
    icon: CreditCard,
    title: 'Compra tu invitación',
    description: 'Selecciona el paquete que necesitas y paga de forma clara antes de personalizar.',
  },
  {
    icon: ClipboardList,
    title: 'Personaliza en minutos',
    description: 'Agrega nombres, fecha, horarios, ubicación, fotos, mesa de regalos y mensaje especial.',
  },
  {
    icon: Eye,
    title: 'Revisa y comparte',
    description: 'Mira cómo quedará, publica tu invitación y envía el enlace a tus invitados.',
  },
]

const capabilities = [
  'Diseños para bodas, XV años, baby shower y más',
  'Personalización guiada paso a paso',
  'Vista previa antes de publicar',
  'Enlace listo para compartir por WhatsApp',
  'Confirmación de asistencia para tus invitados',
  'Paquetes con más días y visitas disponibles',
]

const packages = [
  {
    name: 'Esencial',
    price: '$299',
    description: 'Para eventos pequeños que necesitan una invitación bonita y fácil de compartir.',
    features: ['30 días publicada', 'Hasta 150 visitas', 'Confirmación de asistencia', 'Ideal para celebraciones íntimas'],
  },
  {
    name: 'Premium',
    price: '$599',
    description: 'Para eventos con más invitados, galería y una experiencia más completa.',
    features: ['90 días publicada', 'Hasta 1,000 visitas', 'Sin publicidad', 'Galería y mesa de regalos'],
  },
]

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-[#f8f5ef] text-[#1d1b18]">
      <header className="sticky top-0 z-50 border-b border-[#ded6c7] bg-[#f8f5ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:h-28 sm:px-6 lg:px-8">
          <Link href="/marketing" className="flex items-center gap-3">
            <Image
              src="/logo-ms.png"
              alt="Momentos Sociales"
              width={440}
              height={108}
              className="h-20 w-auto object-contain sm:h-24"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[#5d574d] md:flex">
            <Link href="/catalogo" className="hover:text-[#1d1b18]">Catálogo</Link>
            <a href="#proceso" className="hover:text-[#1d1b18]">Proceso</a>
            <a href="#paquetes" className="hover:text-[#1d1b18]">Paquetes</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="hidden text-[#3f3a33] hover:bg-[#eee5d6] sm:inline-flex">
              <Link href="/login">Ingresar</Link>
            </Button>
            <Button asChild className="rounded-full bg-[#1d1b18] px-5 text-white hover:bg-[#3b342c]">
              <Link href="/register">Empezar</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-[#ded6c7]">
          <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-16">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9c8a5] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6424]">
                <Sparkles className="size-3.5" />
                Invitaciones digitales para momentos especiales
              </div>

              <h1 className="font-serif text-5xl leading-[1.03] text-[#181612] sm:text-6xl lg:text-7xl">
                Crea tu invitación digital en minutos
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#5d574d] sm:text-lg">
                Elige un diseño de nuestro catálogo, personalízalo con los datos de tu evento y compártelo con tus invitados desde un solo enlace.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 rounded-full bg-[#1d1b18] px-7 text-white hover:bg-[#3b342c]">
                  <Link href="/catalogo">
                    Explorar diseños
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-[#cfc2aa] bg-white/70 px-7 text-[#1d1b18] hover:bg-white">
                  <Link href="/demo/boda" target="_blank">
                    Vista previa
                    <Eye className="size-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                {[
                  ['+100', 'Diseños por categoría'],
                  ['5 min', 'Para personalizar'],
                  ['1 link', 'Para tus invitados'],
                ].map(([metric, label]) => (
                  <div key={metric} className="border-l border-[#d8cdbb] pl-4">
                    <p className="font-serif text-2xl text-[#1d1b18]">{metric}</p>
                    <p className="mt-1 text-xs leading-5 text-[#71695d]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="absolute -left-2 top-12 z-20 rounded-xl border border-[#d8cdbb] bg-white/95 p-4 shadow-xl sm:-left-5">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#e7f6ef] text-[#19734f]">
                    <BadgeCheck className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Diseño seleccionado</p>
                    <p className="text-xs text-[#71695d]">Listo para personalizar</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#d6c8b0] bg-[#211c17] p-3 shadow-2xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop"
                    alt="Invitación digital de boda en vista previa"
                    fill
                    sizes="(min-width: 1024px) 520px, 90vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#f4d58d]">Vista publicada</p>
                    <h2 className="mt-3 font-serif text-4xl">María & Carlos</h2>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/78">
                      RSVP, mapa, galería y mesa de regalos desde un solo enlace.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 right-2 z-20 rounded-xl border border-[#d8cdbb] bg-white/95 p-4 shadow-xl sm:right-8">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#fff4d8] text-[#9b6a09]">
                    <Users className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">128 invitados</p>
                    <p className="text-xs text-[#71695d]">Listos para recibir tu enlace</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="catalogo" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b6a09]">Catálogo por evento</p>
              <h2 className="mt-3 font-serif text-4xl text-[#181612] sm:text-5xl">Explora cómo verán tu invitación</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#655e53]">
              Estos ejemplos se abren como los verían tus invitados: con portada, fecha, ubicación, detalles del evento y confirmación de asistencia.
            </p>
            <Button asChild variant="outline" className="mt-5 rounded-full border-[#cfc2aa] bg-white/70 px-5 text-[#1d1b18] hover:bg-white">
              <Link href="/catalogo">
                Ver catálogo completo
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                target="_blank"
                className="group overflow-hidden rounded-xl border border-[#ded6c7] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={`Plantillas para ${category.name}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-2xl">{category.name}</h3>
                    <ArrowRight className="size-5 text-[#9b6a09] transition group-hover:translate-x-1" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#655e53]">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="proceso" className="border-y border-[#ded6c7] bg-[#eee5d6]">
          <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b6a09]">Así funciona</p>
                <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Tu invitación lista sin complicaciones</h2>
                <p className="mt-5 text-sm leading-7 text-[#655e53]">
                  Diseñamos el proceso para que no tengas que esperar a nadie: eliges, personalizas, revisas y compartes cuando todo esté perfecto.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {workflow.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[#d5c7ae] bg-[#f8f5ef] p-5">
                    <div className="mb-5 flex size-11 items-center justify-center rounded-full bg-[#1d1b18] text-white">
                      <item.icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#655e53]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-18 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="rounded-xl border border-[#ded6c7] bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-full bg-[#eef7f1] text-[#19734f]">
                <Gift className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#19734f]">Personalización guiada</p>
                <h2 className="font-serif text-3xl">Todo lo que necesitas para tu evento</h2>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'Nombres y mensaje principal',
                'Fecha, horarios y ubicaciones',
                'Fotos y galería del evento',
                'Mesa de regalos o lista de deseos',
                'Código de vestimenta',
                'Confirmación de asistencia',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-[#ded6c7] bg-[#f8f5ef] p-3">
                  <Check className="size-4 text-[#19734f]" />
                  <span className="text-sm text-[#3f3a33]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#ded6c7] bg-[#1d1b18] p-6 text-white shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f4d58d]">Pensado para ti</p>
            <h2 className="mt-3 font-serif text-3xl">Una invitación elegante, clara y fácil de enviar</h2>
            <div className="mt-7 grid gap-3">
              {capabilities.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/6 p-3">
                  <Check className="size-4 text-[#82d4a8]" />
                  <span className="text-sm text-white/82">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="paquetes" className="border-y border-[#ded6c7] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b6a09]">Paquetes</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Elige cuánto tiempo quieres compartirla</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {packages.map((pack) => (
                <div key={pack.name} className="rounded-xl border border-[#ded6c7] bg-[#f8f5ef] p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-serif text-3xl">{pack.name}</h3>
                      <p className="mt-3 max-w-md text-sm leading-7 text-[#655e53]">{pack.description}</p>
                    </div>
                    <p className="font-serif text-3xl text-[#9b6a09]">{pack.price}</p>
                  </div>
                  <div className="mt-7 grid gap-3">
                    {pack.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-[#3f3a33]">
                        <Check className="size-4 text-[#19734f]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { icon: ShieldCheck, title: 'Pago seguro', description: 'Compra tu diseño con claridad antes de personalizar.' },
              { icon: LockKeyhole, title: 'Panel privado', description: 'Edita la información de tu invitación cuando lo necesites.' },
              { icon: Gauge, title: 'Visitas incluidas', description: 'Elige un paquete según el tamaño de tu evento.' },
              { icon: CalendarDays, title: 'Disponible por días', description: 'Tu enlace permanece activo según el paquete elegido.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[#ded6c7] bg-white p-5">
                <item.icon className="size-6 text-[#9b6a09]" />
                <h3 className="mt-5 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#655e53]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#1d1b18] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <PartyPopper className="mb-5 size-9 text-[#f4d58d]" />
            <h2 className="max-w-3xl font-serif text-4xl sm:text-5xl">
              Tu invitación digital puede estar lista hoy
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68">
              Explora el catálogo, elige el diseño que va con tu evento y empieza a personalizarlo en minutos.
            </p>
            <Button asChild size="lg" className="mt-8 h-12 rounded-full bg-[#f4d58d] px-7 text-[#1d1b18] hover:bg-[#ffe6a6]">
              <Link href="/catalogo">
                Ver diseños
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
