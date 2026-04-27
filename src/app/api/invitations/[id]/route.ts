import { NextResponse } from 'next/server'
import { getInvitationById, updateInvitation, deleteInvitation } from '@/lib/invitation-store'
import type { DynamicFormData } from '@/types/template'

interface RouteParams {
  params: Promise<{ id: string }>
}

export async function GET(request: Request, { params }: RouteParams) {
  const { id } = await params
  const invitation = await getInvitationById(id)
  
  if (!invitation) {
    return NextResponse.json({ error: 'Invitation not found' }, { status: 404 })
  }
  
  return NextResponse.json(invitation)
}

export async function PUT(request: Request, { params }: RouteParams) {
  const { id } = await params
  const data: DynamicFormData = await request.json()
  const invitation = await updateInvitation(id, data)
  
  if (!invitation) {
    return NextResponse.json({ error: 'Invitation not found' }, { status: 404 })
  }
  
  return NextResponse.json(invitation)
}

export async function DELETE(request: Request, { params }: RouteParams) {
  const { id } = await params
  const success = await deleteInvitation(id)
  
  if (!success) {
    return NextResponse.json({ error: 'Invitation not found' }, { status: 404 })
  }
  
  return NextResponse.json({ success: true })
}
