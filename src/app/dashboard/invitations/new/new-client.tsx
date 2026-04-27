'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TemplateSelector } from '@/components/dashboard/template-selector'
import { DynamicInvitationForm } from '@/components/dashboard/dynamic-invitation-form'
import { getTemplateById } from '@/lib/templates'
import type { DynamicFormData } from '@/types/template'

export function NewInvitationClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const templateId = searchParams.get('template')
  const template = templateId ? getTemplateById(templateId) : null

  const handleSave = async (selectedTemplateId: string, data: DynamicFormData) => {
    const response = await fetch('/api/invitations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ templateId: selectedTemplateId, data }),
    })
    
    if (response.ok) {
      const invitation = await response.json()
      router.push(`/dashboard/invitations/${invitation.id}/edit`)
    }
  }

  // If no template selected, show template selector
  if (!template) {
    return (
      <div className="mx-auto max-w-6xl space-y-6">
        <div>
          <Button
            variant="ghost"
            onClick={() => router.push('/dashboard/invitations')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 size-4" />
            Volver
          </Button>
          <h1 className="text-2xl font-bold">Selecciona una Plantilla</h1>
          <p className="mt-1 text-muted-foreground">
            Elige la plantilla que mejor se adapte a tu evento. Cada una tiene campos personalizados.
          </p>
        </div>
        <TemplateSelector />
      </div>
    )
  }

  // Template selected, show form
  return (
    <div className="mx-auto max-w-4xl">
      <DynamicInvitationForm 
        template={template} 
        onSave={handleSave}
      />
    </div>
  )
}
