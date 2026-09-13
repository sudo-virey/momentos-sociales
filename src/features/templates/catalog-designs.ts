export type CatalogFilterId = 'todos' | 'bodas' | 'xv' | 'baby' | 'cumpleanos' | 'gala'

export type CatalogDesign = {
  id: string
  category: Exclude<CatalogFilterId, 'todos'>
  categoryLabel: string
  title: string
  description: string
  image: string
  demoHref: string
  price: string
  tag: string
}

export const catalogFilters: { id: CatalogFilterId; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'bodas', label: 'Bodas' },
  { id: 'xv', label: 'XV años' },
  { id: 'baby', label: 'Baby shower' },
  { id: 'cumpleanos', label: 'Cumpleaños' },
  { id: 'gala', label: 'Gala' },
]

export const catalogDesigns: CatalogDesign[] = [
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

export const selectedDesignNames = Object.fromEntries(
  catalogDesigns.map((design) => [design.id, design.title]),
) as Record<string, string>
