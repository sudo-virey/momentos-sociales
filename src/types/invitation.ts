import type { GiftRegistryItem, DynamicFormData } from './template'

export type InvitationStatus = 'draft' | 'published'

// Legacy type - keeping for backwards compatibility
export interface GiftRegistry {
  id: string
  name: string
  url: string
  description?: string
}

// New flexible invitation structure
export interface Invitation {
  id: string
  templateId: string
  data: DynamicFormData
  status: InvitationStatus
  createdAt: string
  updatedAt: string
}

// Helper to get typed field from invitation data
export function getInvitationField<T = string>(invitation: Invitation, field: string): T | undefined {
  return invitation.data[field] as T | undefined
}

// Legacy form data - keeping for backwards compatibility
export interface InvitationFormData {
  brideFirstName: string
  brideLastName: string
  groomFirstName: string
  groomLastName: string
  title: string
  parentsMessage: string
  eventDate: string
  eventTime: string
  ceremonyLocation: string
  ceremonyAddress: string
  receptionLocation?: string
  receptionAddress?: string
  coverPhoto?: string
  galleryPhotos: string[]
  giftRegistries: GiftRegistry[]
  personalMessage: string
}
