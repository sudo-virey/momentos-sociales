import { Heart } from 'lucide-react'
import type { Invitation } from '@/types/invitation'
import { getInvitationDisplayName } from '@/lib/invitation-store'

interface InvitationFooterProps {
  invitation: Invitation
}

export function InvitationFooter({ invitation }: InvitationFooterProps) {
  const displayName = getInvitationDisplayName(invitation)
  
  return (
    <footer className="bg-primary py-12 text-primary-foreground">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="flex items-center justify-center gap-2 text-2xl font-light sm:text-3xl">
          <span>{displayName}</span>
          <Heart className="size-5 fill-current" />
        </p>
        <p className="mt-4 text-sm opacity-80">
          Gracias por ser parte de nuestra historia
        </p>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8">
          <p className="text-xs opacity-60">
            Invitacion digital creada con InvitaDigital
          </p>
        </div>
      </div>
    </footer>
  )
}
