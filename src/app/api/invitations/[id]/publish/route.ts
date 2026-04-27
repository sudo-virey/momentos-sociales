import { NextResponse } from 'next/server'
import { publishInvitation } from '@/lib/invitation-store'

interface RouteParams {
  params: Promise<{ id: string }>
}

export async function POST(request: Request, { params }: RouteParams) {
  const { id } = await params
  const invitation = await publishInvitation(id)
  
  if (!invitation) {
    return NextResponse.json({ error: 'Invitation not found' }, { status: 404 })
  }
  
  return NextResponse.json(invitation)
}
