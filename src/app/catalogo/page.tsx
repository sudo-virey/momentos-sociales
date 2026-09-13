'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  Check,
  Eye,
  Heart,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/button'
import { SiteFooter } from '@/components/site-footer'

const filters = [
  { id: 'todos', label: 'Todos' },
  { id: 'bodas', label: 'Bodas' },
  { id: 'xv', label: 'XV años' },
  { id: 'baby', label: 'Baby shower' },
  { id: 'cumpleanos', label: 'Cumpleaños' },
  { id: 'gala', label: 'Gala' },
]

const designs = [
  {
    id: 'wedding-classic',
    category: 'bodas',
    categoryLabel: 'Bodas',
    title: 'Romance clásico',
    description: 'Una invitación elegante para ceremonia, recepción, RSVP y mesa de regalos.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
    demoHref: '/demo/boda',
    price: 'Desde $299',
    tag: 'Más elegida',
  },
  {
    id: 'wedding-modern',
    category: 'bodas',
    categoryLabel: 'Bodas',
    title: 'Minimal dorado',
    description: 'Diseño limpio, moderno y cálido para compartir cada detalle de tu boda.',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=900&auto=format&fit=crop',
    demoHref: '/demo/boda',
    price: 'Desde $299',
    tag: 'Elegante',
  },
  {
    id: 'quinceanera',
    category: 'xv',
    categoryLabel: 'XV años',
    title: 'Noche de ensueño',
    description: 'Portada, misa, fiesta, padrinos, galería y confirmación en una sola experiencia.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=900&auto=format&fit=crop',
    demoHref: '/demo/xv-anos',
    price: 'Desde $299',
    tag: 'Festiva',
  },
  {
    id: 'quinceanera-royal',
    category: 'xv',
    categoryLabel: 'XV años',
    title: 'Royal rose',
    description: 'Una propuesta dulce y sofisticada para una celebración con estilo propio.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=900&auto=format&fit=crop',
    demoHref: '/demo/xv-anos',
    price: 'Desde $299',
    tag: 'Nuevo',
  },
  {
    id: 'baby-shower',
    category: 'baby',
    categoryLabel: 'Baby shower',
    title: 'Dulce espera',
    description: 'Ideal para compartir fecha, ubicación, mesa de regalos y un mensaje especial.',
    image: 'https://images.unsplash.com/photo-1546015720-b8b30df5aa27?q=80&w=900&auto=format&fit=crop',
    demoHref: '/demo/baby-shower',
    price: 'Desde $299',
    tag: 'Tierno',
  },
  {
    id: 'baby-shower-clouds',
    category: 'baby',
    categoryLabel: 'Baby shower',
    title: 'Nubes suaves',
    description: 'Un diseño delicado para reunir a familia y amigos antes de la llegada del bebé.',
    image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=900&auto=format&fit=crop',
    demoHref: '/demo/baby-shower',
    price: 'Desde $299',
    tag: 'Suave',
  },
  {
    id: 'birthday-stream',
    category: 'cumpleanos',
    categoryLabel: 'Cumpleaños',
    title: 'Stream party',
    description: 'Una invitación divertida para cumpleaños infantiles con personalidad y sorpresa.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=900&auto=format&fit=crop',
    demoHref: '/demo/chuymine',
    price: 'Desde $299',
    tag: 'Divertida',
  },
  {
    id: 'birthday-confetti',
    category: 'cumpleanos',
    categoryLabel: 'Cumpleaños',
    title: 'Confetti',
    description: 'Color, horarios, ubicación y confirmación de asistencia en un formato fácil de enviar.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=900&auto=format&fit=crop',
    demoHref: '/demo/chuymine',
    price: 'Desde $299',
    tag: 'Colorida',
  },
  {
    id: 'gala-onyx',
    category: 'gala',
    categoryLabel: 'Gala',
    title: 'Onyx black tie',
    description: 'Sobria y profesional para cenas formales, premiaciones y eventos especiales.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=900&auto=format&fit=crop',
    demoHref: '/demo/gala',
    price: 'Desde $599',
    tag: 'Formal',
  },
]

const benefits = [
  'Ejemplos visibles antes de elegir',
  'Diseños por tipo de evento',
  'Personalización guiada',
  'Enlace listo para compartir',
]

export default function CatalogPage() {
  const [activeFilter, setActiveFilter] = useState('todos')

  const visibleDesigns = useMemo(() => {
    if (activeFilter === 'todos') return designs
    return designs.filter((design) => design.category === activeFilter)
  }, [activeFilter])

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
            <Link href="/marketing" className="hover:text-[#1d1b18]">Inicio</Link>
            <Link href="/marketing#proceso" className="hover:text-[#1d1b18]">Proceso</Link>
            <Link href="/marketing#paquetes" className="hover:text-[#1d1b18]">Paquetes</Link>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ead8b8_0,transparent_34%),radial-gradient(circle_at_bottom_right,#ead1d9_0,transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-18">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9c8a5] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6424]">
                <Sparkles className="size-3.5" />
                Catálogo de invitaciones digitales
              </div>
              <h1 className="font-serif text-5xl leading-[1.04] text-[#181612] sm:text-6xl">
                Elige el diseño que va con tu celebración
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#5d574d] sm:text-lg">
                Mira ejemplos como invitado, compara estilos por categoría y cuando encuentres tu favorito empieza a personalizarlo en minutos.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 rounded-full border border-[#ded6c7] bg-white/70 px-4 py-3 text-sm text-[#3f3a33]">
                    <Check className="size-4 text-[#19734f]" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:pt-8">
              {designs.slice(0, 3).map((design) => (
                <Link
                  key={design.id}
                  href={design.demoHref}
                  target="_blank"
                  className="group relative aspect-[3/4] self-start overflow-hidden rounded-2xl border border-[#ded6c7] bg-[#1d1b18] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Image
                    src={design.image}
                    alt={design.title}
                    fill
                    sizes="(min-width: 1024px) 230px, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/72 via-black/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#f4d58d]">{design.categoryLabel}</p>
                    <h2 className="mt-2 font-serif text-2xl">{design.title}</h2>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/16 px-3 py-2 text-xs font-semibold backdrop-blur">
                      <Eye className="size-3.5" />
                      Ver ejemplo
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b6a09]">Diseños disponibles</p>
              <h2 className="mt-3 font-serif text-4xl text-[#181612] sm:text-5xl">Explora por categoría</h2>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-[#ded6c7] bg-white/75 px-4 py-3 text-sm text-[#655e53]">
              <Search className="size-4 text-[#9b6a09]" />
              {visibleDesigns.length} diseños para revisar
            </div>
          </div>

          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm font-medium transition ${
                  activeFilter === filter.id
                    ? 'border-[#1d1b18] bg-[#1d1b18] text-white'
                    : 'border-[#d8cdbb] bg-white/70 text-[#5d574d] hover:border-[#9b6a09] hover:text-[#1d1b18]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleDesigns.map((design) => (
              <article key={design.id} className="group overflow-hidden rounded-2xl border border-[#ded6c7] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={design.image}
                    alt={`Diseño ${design.title}`}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#8a6424] shadow-sm">
                    {design.tag}
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-[#f3eadc] px-3 py-1 text-xs font-semibold text-[#8a6424]">{design.categoryLabel}</span>
                    <span className="font-serif text-xl text-[#9b6a09]">{design.price}</span>
                  </div>
                  <h3 className="font-serif text-3xl text-[#181612]">{design.title}</h3>
                  <p className="mt-3 min-h-18 text-sm leading-6 text-[#655e53]">{design.description}</p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <Button asChild variant="outline" className="rounded-full border-[#cfc2aa] bg-white text-[#1d1b18] hover:bg-[#f8f5ef]">
                      <Link href={design.demoHref} target="_blank">
                        <Eye className="size-4" />
                        Ver ejemplo
                      </Link>
                    </Button>
                    <Button asChild className="rounded-full bg-[#1d1b18] text-white hover:bg-[#3b342c]">
                      <Link href={`/register?template=${design.id}`}>
                        Personalizar
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#ded6c7] bg-white">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
            {[
              { icon: Eye, title: 'Primero mira el ejemplo', description: 'Cada diseño se puede abrir como lo verán tus invitados.' },
              { icon: Heart, title: 'Después personaliza', description: 'Cuando elijas uno, crea tu cuenta y agrega los datos de tu evento.' },
              { icon: CalendarDays, title: 'Comparte tu enlace', description: 'Publica tu invitación y envíala por WhatsApp o redes sociales.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#ded6c7] bg-[#f8f5ef] p-6">
                <div className="mb-5 flex size-11 items-center justify-center rounded-full bg-[#1d1b18] text-white">
                  <item.icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#655e53]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-[#1d1b18] px-6 py-12 text-center text-white sm:px-10">
            <ShieldCheck className="mx-auto mb-5 size-9 text-[#f4d58d]" />
            <h2 className="font-serif text-4xl sm:text-5xl">¿Ya tienes un diseño favorito?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70">
              Crea tu cuenta, guarda tu selección y empieza a preparar una invitación digital lista para compartir con tus invitados.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full bg-[#f4d58d] px-7 text-[#1d1b18] hover:bg-[#ffe6a6]">
                <Link href="/register">
                  Empezar ahora
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-white/25 bg-transparent px-7 text-white hover:bg-white/10">
                <Link href="/marketing">Volver al inicio</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
