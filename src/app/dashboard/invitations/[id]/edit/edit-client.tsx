'use client'

import { useRouter } from 'next/navigation'
import { DynamicInvitationForm } from '@/components/dashboard/dynamic-invitation-form'
import { getTemplateById } from '@/lib/templates'
import type { Invitation } from '@/types/invitation'
import type { DynamicFormData, InvitationTemplate } from '@/types/template'

interface EditInvitationClientProps {
  invitation: Invitation
}

export function EditInvitationClient({ invitation }: EditInvitationClientProps) {
  const router = useRouter()
  const template = getTemplateById(invitation.templateId)

  const handleSave = async (_templateId: string, data: DynamicFormData) => {
    const response = await fetch(`/api/invitations/${invitation.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    
    if (response.ok) {
      router.refresh()
    }
  }

  const handlePublish = async (id: string) => {
    const response = await fetch(`/api/invitations/${id}/publish`, {
      method: 'POST',
    })
    
    if (response.ok) {
      router.refresh()
    }
  }

  // If template not found, show error
  if (!template) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h2 className="text-xl font-semibold">Plantilla no encontrada</h2>
        <p className="mt-2 text-muted-foreground">
          La plantilla utilizada para esta invitacion ya no esta disponible.
        </p>
      </div>
    )
  }

  return (
    <DynamicInvitationForm
      template={template}
      invitation={invitation}
      onSave={handleSave}
      onPublish={handlePublish}
    />
  )
}
