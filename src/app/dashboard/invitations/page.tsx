import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { InvitationsList } from '@/components/dashboard/invitations-list'
import { getInvitations } from '@/lib/invitation-store'

export default async function InvitationsPage() {
  const invitations = await getInvitations()

  return (
    <div className="flex flex-1 flex-col">
      <DashboardHeader
        title="Mis Invitaciones"
        description="Administra tus invitaciones digitales"
      />
      
      <main className="flex-1 p-4 lg:p-6">
        <InvitationsList invitations={invitations} />
      </main>
    </div>
  )
}
