'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import type { Invitation } from '@/types/invitation'

interface InvitationGalleryProps {
  invitation: Invitation
}

export function InvitationGallery({ invitation }: InvitationGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const galleryPhotos = (invitation.data.galleryPhotos as string[] | undefined) || []

  if (galleryPhotos.length === 0) {
    return null
  }

  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Nuestra Historia
          </p>
          <h2 className="text-3xl font-light sm:text-4xl">Galeria</h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryPhotos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(photo)}
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Image
                src={photo}
                alt={`Foto ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X className="size-6" />
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl">
            <Image
              src={selectedImage}
              alt="Foto ampliada"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
