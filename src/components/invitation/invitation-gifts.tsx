import { Gift, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Invitation } from '@/types/invitation'
import type { GiftRegistryItem } from '@/types/template'

interface InvitationGiftsProps {
  invitation: Invitation
}

export function InvitationGifts({ invitation }: InvitationGiftsProps) {
  const giftRegistries = (invitation.data.giftRegistries as GiftRegistryItem[] | undefined) || []

  if (giftRegistries.length === 0) {
    return null
  }

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Gift className="size-8 text-primary" />
            </div>
          </div>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Mesa de Regalos
          </p>
          <h2 className="text-3xl font-light sm:text-4xl">Nuestros Deseos</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Si deseas hacernos un regalo, hemos creado una lista de deseos en las siguientes tiendas.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {giftRegistries.map((registry) => (
            <div
              key={registry.id}
              className="flex flex-col items-center rounded-2xl border bg-card p-8 text-center"
            >
              <h3 className="mb-2 text-xl font-medium">{registry.name}</h3>
              {registry.description && (
                <p className="mb-4 text-sm text-muted-foreground">
                  {registry.description}
                </p>
              )}
              <Button asChild className="mt-auto">
                <a href={registry.url} target="_blank" rel="noopener noreferrer">
                  Ver Mesa de Regalos
                  <ExternalLink className="ml-2 size-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
