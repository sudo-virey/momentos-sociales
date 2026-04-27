// Field types that can be used in templates
export type FieldType = 
  | 'text' 
  | 'textarea' 
  | 'date' 
  | 'time' 
  | 'url' 
  | 'email'
  | 'tel'
  | 'number'
  | 'select'
  | 'gallery'
  | 'gift-registry'

export interface FieldOption {
  value: string
  label: string
}

export interface TemplateField {
  id: string
  name: string
  label: string
  type: FieldType
  placeholder?: string
  required?: boolean
  description?: string
  options?: FieldOption[] // For select fields
  group?: string // Group fields together visually
  defaultValue?: string | string[]
}

export interface TemplateFieldGroup {
  id: string
  title: string
  description?: string
  fields: TemplateField[]
}

export interface InvitationTemplate {
  id: string
  name: string
  description: string
  category: 'wedding' | 'quinceanera' | 'birthday' | 'baby-shower' | 'other'
  thumbnail: string
  previewImage: string
  fieldGroups: TemplateFieldGroup[]
  // Default styles/theme for the public view
  theme: {
    primaryColor: string
    accentColor: string
    fontFamily: string
  }
}

// Dynamic form data based on template fields
export type DynamicFormData = Record<string, string | string[] | GiftRegistryItem[]>

export interface GiftRegistryItem {
  id: string
  name: string
  url: string
  description?: string
}
