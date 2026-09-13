import type { Invitation } from '@/types/invitation'
import type { DynamicFormData } from '@/types/template'

// Mock data store - ready to be replaced with database integration
const mockInvitations: Invitation[] = [
  {
    id: '1',
    templateId: 'wedding-classic',
    data: {
      brideFirstName: 'Maria',
      brideLastName: 'Garcia',
      groomFirstName: 'Carlos',
      groomLastName: 'Rodriguez',
      title: 'Nuestra Boda',
      brideParents: 'Sr. Juan Garcia y Sra. Ana Lopez de Garcia',
      groomParents: 'Sr. Pedro Rodriguez y Sra. Maria Sanchez de Rodriguez',
      parentsMessage: 'Con la bendicion de Dios y de nuestros padres, tenemos el honor de invitarles a nuestra boda.',
      eventDate: '2025-06-15',
      eventTime: '17:00',
      ceremonyLocation: 'Iglesia Santa Maria',
      ceremonyAddress: 'Calle Principal 123, Ciudad',
      receptionLocation: 'Jardin Los Olivos',
      receptionAddress: 'Av. de los Jardines 456, Ciudad',
      dressCode: 'formal',
      coverPhoto: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop',
      galleryPhotos: [
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop',
      ],
      giftRegistries: [
        {
          id: '1',
          name: 'Liverpool',
          url: 'https://liverpool.com.mx',
          description: 'Mesa de regalos Liverpool',
        },
        {
          id: '2',
          name: 'Amazon',
          url: 'https://amazon.com.mx',
          description: 'Lista de deseos Amazon',
        },
      ],
      personalMessage: 'Su presencia es el mejor regalo que podemos recibir. Esperamos celebrar este dia tan especial junto a ustedes.',
    },
    status: 'published',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T14:30:00Z',
  },
  {
    id: '2',
    templateId: 'wedding-modern',
    data: {
      partner1Name: 'Ana Martinez',
      partner2Name: 'Luis Hernandez',
      eventDate: '2025-08-20',
      eventTime: '18:00',
      venue: 'Hacienda San Miguel',
      venueAddress: 'Km 5 Carretera a la Costa',
      story: 'Nos conocimos en la universidad...',
      hashtag: '#AnaYLuis2025',
      galleryPhotos: [],
      giftRegistries: [],
    },
    status: 'draft',
    createdAt: '2024-02-01T09:00:00Z',
    updatedAt: '2024-02-01T09:00:00Z',
  },
  {
    id: '3',
    templateId: 'quinceanera',
    data: {
      name: 'Sofia Martinez',
      birthDate: '2010-03-15',
      parents: 'Sr. Roberto Martinez y Sra. Carmen de Martinez',
      godparents: 'Sr. Miguel Lopez y Sra. Rosa de Lopez',
      eventDate: '2025-03-15',
      massTime: '16:00',
      partyTime: '19:00',
      churchName: 'Parroquia San Jose',
      churchAddress: 'Calle Juarez 100, Centro',
      venueName: 'Salon Imperial',
      venueAddress: 'Blvd. Las Americas 500',
      partyTheme: 'Encanto',
      colorScheme: 'Rosa y Dorado',
      dressCode: 'formal',
      coverPhoto: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=800&fit=crop',
      galleryPhotos: [],
      giftRegistries: [],
      personalMessage: 'Los invito a celebrar conmigo este dia tan especial en mi vida.',
    },
    status: 'published',
    createdAt: '2024-02-10T10:00:00Z',
    updatedAt: '2024-02-15T14:30:00Z',
  },
]

// API functions - ready to be replaced with actual database calls
export async function getInvitations(): Promise<Invitation[]> {
  await new Promise(resolve => setTimeout(resolve, 100))
  return [...mockInvitations]
}

export async function getInvitationById(id: string): Promise<Invitation | null> {
  await new Promise(resolve => setTimeout(resolve, 100))
  return mockInvitations.find(inv => inv.id === id) || null
}

export async function createInvitation(templateId: string, data: DynamicFormData): Promise<Invitation> {
  await new Promise(resolve => setTimeout(resolve, 100))
  const newInvitation: Invitation = {
    id: Date.now().toString(),
    templateId,
    data,
    status: 'draft',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  mockInvitations.push(newInvitation)
  return newInvitation
}

export async function updateInvitation(id: string, data: DynamicFormData): Promise<Invitation | null> {
  await new Promise(resolve => setTimeout(resolve, 100))
  const index = mockInvitations.findIndex(inv => inv.id === id)
  if (index === -1) return null
  
  mockInvitations[index] = {
    ...mockInvitations[index],
    data: { ...mockInvitations[index].data, ...data },
    updatedAt: new Date().toISOString(),
  }
  return mockInvitations[index]
}

export async function publishInvitation(id: string): Promise<Invitation | null> {
  await new Promise(resolve => setTimeout(resolve, 100))
  const index = mockInvitations.findIndex(inv => inv.id === id)
  if (index === -1) return null
  
  mockInvitations[index] = {
    ...mockInvitations[index],
    status: 'published',
    updatedAt: new Date().toISOString(),
  }
  return mockInvitations[index]
}

export async function deleteInvitation(id: string): Promise<boolean> {
  await new Promise(resolve => setTimeout(resolve, 100))
  const index = mockInvitations.findIndex(inv => inv.id === id)
  if (index === -1) return false
  
  mockInvitations.splice(index, 1)
  return true
}

// Helper to get display name from invitation data
export function getInvitationDisplayName(invitation: Invitation): string {
  const data = invitation.data
  
  // Wedding classic
  if (data.brideFirstName && data.groomFirstName) {
    return `${data.brideFirstName} & ${data.groomFirstName}`
  }
  
  // Wedding modern
  if (data.partner1Name && data.partner2Name) {
    const name1 = (data.partner1Name as string).split(' ')[0]
    const name2 = (data.partner2Name as string).split(' ')[0]
    return `${name1} & ${name2}`
  }
  
  // Quinceanera / Birthday
  if (data.name) {
    return data.name as string
  }
  
  // Baby shower
  if (data.motherName) {
    return `Baby Shower de ${data.motherName}`
  }

  // Formal event / gala
  if (data.hostName && data.title) {
    return data.title as string
  }
  
  return 'Sin nombre'
}

// Helper to get template category label
export function getTemplateCategoryLabel(templateId: string): string {
  const categories: Record<string, string> = {
    'wedding-classic': 'Boda Clasica',
    'wedding-modern': 'Boda Moderna',
    'quinceanera': 'XV Anos',
    'quinceanera-royal': 'XV Anos',
    'baby-shower': 'Baby Shower',
    'baby-shower-clouds': 'Baby Shower',
    'birthday': 'Cumpleanos',
    'birthday-stream': 'Cumpleanos',
    'birthday-confetti': 'Cumpleanos',
    'gala-onyx': 'Gala',
  }
  return categories[templateId] || 'Evento'
}
