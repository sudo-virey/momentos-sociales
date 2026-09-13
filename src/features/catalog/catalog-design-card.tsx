import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Eye } from 'lucide-react'
import { Button } from '@/components/button'
import type { CatalogDesign } from '@/features/templates'

type CatalogDesignCardProps = {
  design: CatalogDesign
}

export function CatalogDesignCard({ design }: CatalogDesignCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#ded6c7] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
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
  )
}
