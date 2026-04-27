import Image from 'next/image'
import type { Invitation } from '@/types/invitation'
import { getInvitationDisplayName } from '@/lib/invitation-store'

interface InvitationHeroProps {
  invitation: Invitation
}

export function InvitationHero({ invitation }: InvitationHeroProps) {
  const data = invitation.data
  const displayName = getInvitationDisplayName(invitation)
  
  // Get names based on template type
  const getName1 = (): string => {
    if (data.brideFirstName) return data.brideFirstName as string
    if (data.partner1Name) return (data.partner1Name as string).split(' ')[0]
    if (data.name) return data.name as string
    if (data.motherName) return data.motherName as string
    return ''
  }
  
  const getName2 = (): string | null => {
    if (data.groomFirstName) return data.groomFirstName as string
    if (data.partner2Name) return (data.partner2Name as string).split(' ')[0]
    return null
  }
  
  const name1 = getName1()
  const name2 = getName2()
  const coverPhoto = data.coverPhoto as string | undefined
  const title = (data.title as string) || 'Te Invitamos'
  const parentsMessage = data.parentsMessage as string | undefined

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background Image */}
      {coverPhoto ? (
        <Image
          src={coverPhoto}
          alt={displayName}
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-300" />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 px-6 text-center text-white">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] opacity-90">
          {title}
        </p>
        
        <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">{name1}</span>
          {name2 && (
            <>
              <span className="my-2 block text-2xl font-light italic sm:text-3xl">&</span>
              <span className="block">{name2}</span>
            </>
          )}
        </h1>
        
        {parentsMessage && (
          <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed opacity-90 sm:text-base">
            {parentsMessage}
          </p>
        )}
        
        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <svg
            className="mx-auto size-6 opacity-70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
