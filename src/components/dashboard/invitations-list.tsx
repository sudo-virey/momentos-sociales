'use client'

import Link from 'next/link'
import { Plus, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Empty } from '@/components/ui/empty'
import { InvitationCard } from './invitation-card'
import type { Invitation } from '@/types/invitation'

interface InvitationsListProps {
  invitations: Invitation[]
  onDelete?: (id: string) => void
}

export function InvitationsList({ invitations, onDelete }: InvitationsListProps) {
  if (invitations.length === 0) {
    return (
      <Empty>
        <Empty.Icon>
          <Mail className="size-10" />
        </Empty.Icon>
        <Empty.Title>No tienes invitaciones</Empty.Title>
        <Empty.Description>
          Crea tu primera invitacion digital y comparte este momento especial con tus seres queridos.
        </Empty.Description>
        <Empty.Actions>
          <Button asChild>
            <Link href="/dashboard/invitations/new">
              <Plus className="mr-2 size-4" />
              Crear Invitacion
            </Link>
          </Button>
        </Empty.Actions>
      </Empty>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            {invitations.length} {invitations.length === 1 ? 'invitacion' : 'invitaciones'}
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/invitations/new">
            <Plus className="mr-2 size-4" />
            Nueva Invitacion
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {invitations.map((invitation) => (
          <InvitationCard
            key={invitation.id}
            invitation={invitation}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  )
}
