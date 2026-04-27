import { Heart } from 'lucide-react'
import type { Invitation } from '@/types/invitation'
import { getInvitationDisplayName } from '@/lib/invitation-store'

interface InvitationMessageProps {
  invitation: Invitation
}

export function InvitationMessage({ invitation }: InvitationMessageProps) {
  const data = invitation.data
  const personalMessage = (data.personalMessage || data.story || data.giftMessage) as string | undefined
  const displayName = getInvitationDisplayName(invitation)

  if (!personalMessage) {
    return null
  }

  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Heart className="mx-auto mb-8 size-8 text-primary/60" />
        <blockquote className="text-xl font-light italic leading-relaxed text-foreground/80 sm:text-2xl">
          &ldquo;{personalMessage}&rdquo;
        </blockquote>
        <p className="mt-8 text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {displayName}
        </p>
      </div>
    </section>
  )
}
