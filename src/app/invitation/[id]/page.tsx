import { notFound } from 'next/navigation'
import { getInvitationById } from '@/lib/invitation-store'
import { getTemplateById } from '@/lib/templates'
import { InvitationHero } from '@/components/invitation/invitation-hero'
import { InvitationDetails } from '@/components/invitation/invitation-details'
import { InvitationGallery } from '@/components/invitation/invitation-gallery'
import { InvitationMessage } from '@/components/invitation/invitation-message'
import { InvitationGifts } from '@/components/invitation/invitation-gifts'
import { InvitationRSVP } from '@/components/invitation/invitation-rsvp'
import { InvitationFooter } from '@/components/invitation/invitation-footer'
import { getInvitationDisplayName } from '@/lib/invitation-store'

interface InvitationPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: InvitationPageProps) {
  const { id } = await params
  const invitation = await getInvitationById(id)
  
  if (!invitation) {
    return {
      title: 'Invitacion no encontrada',
    }
  }

  const displayName = getInvitationDisplayName(invitation)
  const title = (invitation.data.title as string) || 'Invitacion'
  const coverPhoto = invitation.data.coverPhoto as string | undefined
  const parentsMessage = invitation.data.parentsMessage as string | undefined

  return {
    title: `${title} - ${displayName}`,
    description: parentsMessage || `Invitacion de ${displayName}`,
    openGraph: {
      title: `${title} - ${displayName}`,
      description: parentsMessage || `Invitacion de ${displayName}`,
      images: coverPhoto ? [coverPhoto] : [],
    },
  }
}

export default async function InvitationPage({ params }: InvitationPageProps) {
  const { id } = await params
  const invitation = await getInvitationById(id)
  
  if (!invitation) {
    notFound()
  }

  const template = getTemplateById(invitation.templateId)

  return (
    <div 
      className="min-h-screen bg-background"
      style={{
        '--invitation-primary': template?.theme.primaryColor || '#1a1a1a',
        '--invitation-accent': template?.theme.accentColor || '#d4af37',
      } as React.CSSProperties}
    >
      <InvitationHero invitation={invitation} />
      <InvitationDetails invitation={invitation} />
      <InvitationGallery invitation={invitation} />
      <InvitationMessage invitation={invitation} />
      <InvitationGifts invitation={invitation} />
      <InvitationRSVP invitation={invitation} />
      <InvitationFooter invitation={invitation} />
    </div>
  )
}
