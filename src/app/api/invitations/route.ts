import { NextResponse } from 'next/server'
import { createInvitation, getInvitations } from '@/lib/invitation-store'
import type { DynamicFormData } from '@/types/template'

export async function GET() {
  const invitations = await getInvitations()
  return NextResponse.json(invitations)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { templateId, data } = body as { templateId: string; data: DynamicFormData }
  const invitation = await createInvitation(templateId, data)
  return NextResponse.json(invitation, { status: 201 })
}
