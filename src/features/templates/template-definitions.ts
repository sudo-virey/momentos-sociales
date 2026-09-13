import type { InvitationTemplate } from '@/types/template'

export const templates: InvitationTemplate[] = [
  {
    id: 'wedding-classic',
    name: 'Boda Clasica',
    description: 'Elegante y tradicional, perfecta para bodas formales con todos los detalles.',
    category: 'wedding',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
    previewImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    theme: {
      primaryColor: '#1a1a1a',
      accentColor: '#d4af37',
      fontFamily: 'Playfair Display',
    },
    fieldGroups: [
      {
        id: 'couple',
        title: 'Informacion de la Pareja',
        description: 'Datos de los novios',
        fields: [
          { id: 'brideFirstName', name: 'brideFirstName', label: 'Nombre de la Novia', type: 'text', placeholder: 'Maria', required: true },
          { id: 'brideLastName', name: 'brideLastName', label: 'Apellido de la Novia', type: 'text', placeholder: 'Garcia', required: true },
          { id: 'groomFirstName', name: 'groomFirstName', label: 'Nombre del Novio', type: 'text', placeholder: 'Carlos', required: true },
          { id: 'groomLastName', name: 'groomLastName', label: 'Apellido del Novio', type: 'text', placeholder: 'Rodriguez', required: true },
        ],
      },
      {
        id: 'parents',
        title: 'Padres de los Novios',
        description: 'Informacion de los padres (opcional)',
        fields: [
          { id: 'brideParents', name: 'brideParents', label: 'Padres de la Novia', type: 'textarea', placeholder: 'Sr. Juan Garcia y Sra. Ana Lopez de Garcia' },
          { id: 'groomParents', name: 'groomParents', label: 'Padres del Novio', type: 'textarea', placeholder: 'Sr. Pedro Rodriguez y Sra. Maria Sanchez de Rodriguez' },
          { id: 'parentsMessage', name: 'parentsMessage', label: 'Mensaje de los Padres', type: 'textarea', placeholder: 'Con la bendicion de Dios y de nuestros padres...' },
        ],
      },
      {
        id: 'event',
        title: 'Detalles del Evento',
        description: 'Fecha, hora y ubicacion',
        fields: [
          { id: 'title', name: 'title', label: 'Titulo de la Invitacion', type: 'text', placeholder: 'Nuestra Boda', required: true, defaultValue: 'Nuestra Boda' },
          { id: 'eventDate', name: 'eventDate', label: 'Fecha del Evento', type: 'date', required: true },
          { id: 'eventTime', name: 'eventTime', label: 'Hora del Evento', type: 'time', required: true },
          { id: 'ceremonyLocation', name: 'ceremonyLocation', label: 'Lugar de la Ceremonia', type: 'text', placeholder: 'Iglesia Santa Maria', required: true },
          { id: 'ceremonyAddress', name: 'ceremonyAddress', label: 'Direccion de la Ceremonia', type: 'text', placeholder: 'Calle Principal 123, Ciudad', required: true },
          { id: 'receptionLocation', name: 'receptionLocation', label: 'Lugar de la Recepcion', type: 'text', placeholder: 'Jardin Los Olivos' },
          { id: 'receptionAddress', name: 'receptionAddress', label: 'Direccion de la Recepcion', type: 'text', placeholder: 'Av. de los Jardines 456' },
        ],
      },
      {
        id: 'dressCode',
        title: 'Codigo de Vestimenta',
        fields: [
          { 
            id: 'dressCode', 
            name: 'dressCode', 
            label: 'Codigo de Vestimenta', 
            type: 'select',
            options: [
              { value: 'formal', label: 'Formal' },
              { value: 'semi-formal', label: 'Semi-formal' },
              { value: 'casual', label: 'Casual Elegante' },
              { value: 'beach', label: 'Playa' },
              { value: 'garden', label: 'Jardin' },
            ]
          },
        ],
      },
      {
        id: 'media',
        title: 'Fotos',
        description: 'Imagenes para tu invitacion',
        fields: [
          { id: 'coverPhoto', name: 'coverPhoto', label: 'Foto de Portada', type: 'url', placeholder: 'https://ejemplo.com/foto.jpg' },
          { id: 'galleryPhotos', name: 'galleryPhotos', label: 'Galeria de Fotos', type: 'gallery' },
        ],
      },
      {
        id: 'messages',
        title: 'Mensajes',
        fields: [
          { id: 'personalMessage', name: 'personalMessage', label: 'Mensaje Personal', type: 'textarea', placeholder: 'Queremos compartir este momento tan especial con ustedes...' },
        ],
      },
      {
        id: 'gifts',
        title: 'Mesa de Regalos',
        description: 'Enlaces a tus mesas de regalos',
        fields: [
          { id: 'giftRegistries', name: 'giftRegistries', label: 'Mesas de Regalos', type: 'gift-registry' },
        ],
      },
    ],
  },
  {
    id: 'wedding-modern',
    name: 'Boda Moderna',
    description: 'Diseno minimalista y contemporaneo para parejas modernas.',
    category: 'wedding',
    thumbnail: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop',
    previewImage: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop',
    theme: {
      primaryColor: '#2d3436',
      accentColor: '#74b9ff',
      fontFamily: 'Inter',
    },
    fieldGroups: [
      {
        id: 'couple',
        title: 'Los Novios',
        fields: [
          { id: 'partner1Name', name: 'partner1Name', label: 'Nombre Completo (Pareja 1)', type: 'text', placeholder: 'Maria Garcia', required: true },
          { id: 'partner2Name', name: 'partner2Name', label: 'Nombre Completo (Pareja 2)', type: 'text', placeholder: 'Carlos Rodriguez', required: true },
        ],
      },
      {
        id: 'event',
        title: 'El Evento',
        fields: [
          { id: 'eventDate', name: 'eventDate', label: 'Fecha', type: 'date', required: true },
          { id: 'eventTime', name: 'eventTime', label: 'Hora', type: 'time', required: true },
          { id: 'venue', name: 'venue', label: 'Lugar', type: 'text', placeholder: 'Nombre del venue', required: true },
          { id: 'venueAddress', name: 'venueAddress', label: 'Direccion', type: 'text', placeholder: 'Direccion completa', required: true },
          { id: 'venueMapUrl', name: 'venueMapUrl', label: 'Enlace Google Maps', type: 'url', placeholder: 'https://maps.google.com/...' },
        ],
      },
      {
        id: 'media',
        title: 'Multimedia',
        fields: [
          { id: 'coverPhoto', name: 'coverPhoto', label: 'Foto Principal', type: 'url' },
          { id: 'galleryPhotos', name: 'galleryPhotos', label: 'Galeria', type: 'gallery' },
        ],
      },
      {
        id: 'details',
        title: 'Detalles',
        fields: [
          { id: 'story', name: 'story', label: 'Nuestra Historia', type: 'textarea', placeholder: 'Cuentales como se conocieron...' },
          { id: 'hashtag', name: 'hashtag', label: 'Hashtag del Evento', type: 'text', placeholder: '#MariaYCarlos2024' },
        ],
      },
      {
        id: 'gifts',
        title: 'Regalos',
        fields: [
          { id: 'giftMessage', name: 'giftMessage', label: 'Mensaje sobre Regalos', type: 'textarea', placeholder: 'Su presencia es nuestro mejor regalo...' },
          { id: 'giftRegistries', name: 'giftRegistries', label: 'Mesas de Regalos', type: 'gift-registry' },
        ],
      },
    ],
  },
  {
    id: 'quinceanera',
    name: 'Quinceanera',
    description: 'Celebra los 15 anos con un diseno elegante y festivo.',
    category: 'quinceanera',
    thumbnail: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop',
    previewImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
    theme: {
      primaryColor: '#9b59b6',
      accentColor: '#f39c12',
      fontFamily: 'Playfair Display',
    },
    fieldGroups: [
      {
        id: 'quinceanera',
        title: 'La Quinceanera',
        fields: [
          { id: 'name', name: 'name', label: 'Nombre de la Quinceanera', type: 'text', placeholder: 'Sofia Martinez', required: true },
          { id: 'birthDate', name: 'birthDate', label: 'Fecha de Nacimiento', type: 'date' },
        ],
      },
      {
        id: 'parents',
        title: 'Padres y Padrinos',
        fields: [
          { id: 'parents', name: 'parents', label: 'Padres', type: 'textarea', placeholder: 'Sr. Roberto Martinez y Sra. Carmen de Martinez', required: true },
          { id: 'godparents', name: 'godparents', label: 'Padrinos', type: 'textarea', placeholder: 'Sr. Miguel Lopez y Sra. Rosa de Lopez' },
        ],
      },
      {
        id: 'event',
        title: 'Detalles del Evento',
        fields: [
          { id: 'eventDate', name: 'eventDate', label: 'Fecha de la Fiesta', type: 'date', required: true },
          { id: 'massTime', name: 'massTime', label: 'Hora de la Misa', type: 'time' },
          { id: 'partyTime', name: 'partyTime', label: 'Hora de la Fiesta', type: 'time', required: true },
          { id: 'churchName', name: 'churchName', label: 'Iglesia', type: 'text', placeholder: 'Parroquia San Jose' },
          { id: 'churchAddress', name: 'churchAddress', label: 'Direccion de la Iglesia', type: 'text' },
          { id: 'venueName', name: 'venueName', label: 'Salon de Fiestas', type: 'text', placeholder: 'Salon Imperial', required: true },
          { id: 'venueAddress', name: 'venueAddress', label: 'Direccion del Salon', type: 'text', required: true },
        ],
      },
      {
        id: 'theme',
        title: 'Tema y Codigo de Vestimenta',
        fields: [
          { id: 'partyTheme', name: 'partyTheme', label: 'Tema de la Fiesta', type: 'text', placeholder: 'Princesas Disney' },
          { id: 'colorScheme', name: 'colorScheme', label: 'Colores del Evento', type: 'text', placeholder: 'Rosa y Dorado' },
          { id: 'dressCode', name: 'dressCode', label: 'Codigo de Vestimenta', type: 'select', options: [
            { value: 'formal', label: 'Formal' },
            { value: 'semi-formal', label: 'Semi-formal' },
            { value: 'themed', label: 'Tematico' },
          ]},
        ],
      },
      {
        id: 'media',
        title: 'Fotos',
        fields: [
          { id: 'coverPhoto', name: 'coverPhoto', label: 'Foto Principal', type: 'url' },
          { id: 'galleryPhotos', name: 'galleryPhotos', label: 'Galeria de Fotos', type: 'gallery' },
        ],
      },
      {
        id: 'message',
        title: 'Mensaje',
        fields: [
          { id: 'personalMessage', name: 'personalMessage', label: 'Mensaje de la Quinceanera', type: 'textarea', placeholder: 'Los invito a celebrar conmigo este dia tan especial...' },
        ],
      },
      {
        id: 'gifts',
        title: 'Mesa de Regalos',
        fields: [
          { id: 'giftRegistries', name: 'giftRegistries', label: 'Mesas de Regalos', type: 'gift-registry' },
        ],
      },
    ],
  },
  {
    id: 'baby-shower',
    name: 'Baby Shower',
    description: 'Celebra la llegada del bebe con una invitacion tierna.',
    category: 'baby-shower',
    thumbnail: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop',
    previewImage: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=600&fit=crop',
    theme: {
      primaryColor: '#81ecec',
      accentColor: '#fdcb6e',
      fontFamily: 'Inter',
    },
    fieldGroups: [
      {
        id: 'parents',
        title: 'Los Papas',
        fields: [
          { id: 'motherName', name: 'motherName', label: 'Nombre de la Mama', type: 'text', placeholder: 'Ana Garcia', required: true },
          { id: 'fatherName', name: 'fatherName', label: 'Nombre del Papa', type: 'text', placeholder: 'Luis Rodriguez' },
        ],
      },
      {
        id: 'baby',
        title: 'El Bebe',
        fields: [
          { id: 'babyName', name: 'babyName', label: 'Nombre del Bebe', type: 'text', placeholder: 'Si ya lo saben...' },
          { id: 'babyGender', name: 'babyGender', label: 'Sexo del Bebe', type: 'select', options: [
            { value: 'boy', label: 'Nino' },
            { value: 'girl', label: 'Nina' },
            { value: 'surprise', label: 'Sorpresa' },
            { value: 'twins', label: 'Gemelos/Mellizos' },
          ]},
          { id: 'dueDate', name: 'dueDate', label: 'Fecha Probable de Nacimiento', type: 'date' },
        ],
      },
      {
        id: 'event',
        title: 'Detalles del Baby Shower',
        fields: [
          { id: 'eventDate', name: 'eventDate', label: 'Fecha', type: 'date', required: true },
          { id: 'eventTime', name: 'eventTime', label: 'Hora', type: 'time', required: true },
          { id: 'venue', name: 'venue', label: 'Lugar', type: 'text', placeholder: 'Casa de la abuela', required: true },
          { id: 'venueAddress', name: 'venueAddress', label: 'Direccion', type: 'text', required: true },
          { id: 'hostedBy', name: 'hostedBy', label: 'Organizado por', type: 'text', placeholder: 'Las amigas de Ana' },
        ],
      },
      {
        id: 'theme',
        title: 'Tema',
        fields: [
          { id: 'partyTheme', name: 'partyTheme', label: 'Tema de la Fiesta', type: 'text', placeholder: 'Safari, Nubes, etc.' },
          { id: 'colorScheme', name: 'colorScheme', label: 'Colores', type: 'text', placeholder: 'Azul y Blanco' },
        ],
      },
      {
        id: 'media',
        title: 'Fotos',
        fields: [
          { id: 'coverPhoto', name: 'coverPhoto', label: 'Foto Principal', type: 'url' },
        ],
      },
      {
        id: 'gifts',
        title: 'Lista de Regalos',
        fields: [
          { id: 'giftMessage', name: 'giftMessage', label: 'Mensaje sobre Regalos', type: 'textarea', placeholder: 'Preferimos ropa en talla 6-12 meses...' },
          { id: 'giftRegistries', name: 'giftRegistries', label: 'Listas de Regalos', type: 'gift-registry' },
        ],
      },
    ],
  },
  {
    id: 'birthday',
    name: 'Cumpleanos',
    description: 'Invitacion versatil para cualquier celebracion de cumpleanos.',
    category: 'birthday',
    thumbnail: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop',
    previewImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
    theme: {
      primaryColor: '#e17055',
      accentColor: '#00b894',
      fontFamily: 'Inter',
    },
    fieldGroups: [
      {
        id: 'birthday-person',
        title: 'El Festejado',
        fields: [
          { id: 'name', name: 'name', label: 'Nombre', type: 'text', placeholder: 'Juan Perez', required: true },
          { id: 'age', name: 'age', label: 'Edad que Cumple', type: 'number', placeholder: '30' },
        ],
      },
      {
        id: 'event',
        title: 'La Fiesta',
        fields: [
          { id: 'eventDate', name: 'eventDate', label: 'Fecha', type: 'date', required: true },
          { id: 'eventTime', name: 'eventTime', label: 'Hora', type: 'time', required: true },
          { id: 'venue', name: 'venue', label: 'Lugar', type: 'text', required: true },
          { id: 'venueAddress', name: 'venueAddress', label: 'Direccion', type: 'text', required: true },
        ],
      },
      {
        id: 'theme',
        title: 'Tema',
        fields: [
          { id: 'partyTheme', name: 'partyTheme', label: 'Tema de la Fiesta', type: 'text', placeholder: 'Decada de los 80s' },
          { id: 'dressCode', name: 'dressCode', label: 'Codigo de Vestimenta', type: 'text', placeholder: 'Casual' },
        ],
      },
      {
        id: 'media',
        title: 'Foto',
        fields: [
          { id: 'coverPhoto', name: 'coverPhoto', label: 'Foto', type: 'url' },
        ],
      },
      {
        id: 'message',
        title: 'Mensaje',
        fields: [
          { id: 'personalMessage', name: 'personalMessage', label: 'Mensaje', type: 'textarea', placeholder: 'Ven a celebrar conmigo...' },
        ],
      },
    ],
  },
]

export function getTemplateById(id: string): InvitationTemplate | undefined {
  return templates.find(t => t.id === id)
}

export function getTemplatesByCategory(category: InvitationTemplate['category']): InvitationTemplate[] {
  return templates.filter(t => t.category === category)
}
