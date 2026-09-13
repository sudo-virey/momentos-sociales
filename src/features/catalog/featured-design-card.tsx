import Image from 'next/image'
import Link from 'next/link'
import { Eye } from 'lucide-react'
import type { CatalogDesign } from '@/features/templates'

type FeaturedDesignCardProps = {
  design: CatalogDesign
}

export function FeaturedDesignCard({ design }: FeaturedDesignCardProps) {
  return (
    <Link
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
  )
}
