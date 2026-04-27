import { notFound } from 'next/navigation'
import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { EditInvitationClient } from './edit-client'
import { getInvitationById, getInvitationDisplayName } from '@/lib/invitation-store'

interface EditInvitationPageProps {
  params: Promise<{ id: string }>
}

export default async function EditInvitationPage({ params }: EditInvitationPageProps) {
  const { id } = await params
  const invitation = await getInvitationById(id)
  
  if (!invitation) {
    notFound()
  }

  return (
    <div className="flex flex-1 flex-col">
      <DashboardHeader
        title="Editar Invitacion"
        description={getInvitationDisplayName(invitation)}
      />
      
      <main className="flex-1 p-4 lg:p-6">
        <EditInvitationClient invitation={invitation} />
      </main>
    </div>
  )
}
