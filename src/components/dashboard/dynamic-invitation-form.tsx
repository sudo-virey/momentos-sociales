'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import {
  Save,
  Eye,
  Upload,
  Plus,
  Trash2,
  ExternalLink,
  ArrowLeft,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FieldGroup, Field, FieldLabel } from '@/components/ui/field'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { InvitationTemplate, TemplateField, DynamicFormData, GiftRegistryItem } from '@/types/template'
import type { Invitation } from '@/types/invitation'

interface DynamicInvitationFormProps {
  template: InvitationTemplate
  invitation?: Invitation
  onSave: (templateId: string, data: DynamicFormData) => Promise<void>
  onPublish?: (id: string) => Promise<void>
}

export function DynamicInvitationForm({ 
  template, 
  invitation, 
  onSave, 
  onPublish 
}: DynamicInvitationFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  
  // Initialize form data from invitation or defaults
  const getInitialData = (): DynamicFormData => {
    if (invitation?.data) {
      return invitation.data
    }
    
    const data: DynamicFormData = {}
    template.fieldGroups.forEach(group => {
      group.fields.forEach(field => {
        if (field.defaultValue) {
          data[field.name] = field.defaultValue
        } else if (field.type === 'gallery') {
          data[field.name] = []
        } else if (field.type === 'gift-registry') {
          data[field.name] = []
        } else {
          data[field.name] = ''
        }
      })
    })
    return data
  }

  const [formData, setFormData] = useState<DynamicFormData>(getInitialData)

  const updateField = (fieldName: string, value: string | string[] | GiftRegistryItem[]) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await onSave(template.id, formData)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePublish = async () => {
    if (!invitation?.id || !onPublish) return
    setIsLoading(true)
    try {
      await onPublish(invitation.id)
    } finally {
      setIsLoading(false)
    }
  }

  // Render individual field based on type
  const renderField = (field: TemplateField) => {
    const value = formData[field.name]

    switch (field.type) {
      case 'text':
      case 'url':
      case 'email':
      case 'tel':
      case 'number':
        return (
          <Field key={field.id}>
            <FieldLabel>{field.label}</FieldLabel>
            <Input
              type={field.type === 'number' ? 'number' : field.type === 'text' ? 'text' : field.type}
              value={(value as string) || ''}
              onChange={(e) => updateField(field.name, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
            />
            {field.description && (
              <p className="text-xs text-muted-foreground mt-1">{field.description}</p>
            )}
          </Field>
        )

      case 'textarea':
        return (
          <Field key={field.id}>
            <FieldLabel>{field.label}</FieldLabel>
            <Textarea
              value={(value as string) || ''}
              onChange={(e) => updateField(field.name, e.target.value)}
              placeholder={field.placeholder}
              rows={3}
            />
          </Field>
        )

      case 'date':
        return (
          <Field key={field.id}>
            <FieldLabel>{field.label}</FieldLabel>
            <Input
              type="date"
              value={(value as string) || ''}
              onChange={(e) => updateField(field.name, e.target.value)}
              required={field.required}
            />
          </Field>
        )

      case 'time':
        return (
          <Field key={field.id}>
            <FieldLabel>{field.label}</FieldLabel>
            <Input
              type="time"
              value={(value as string) || ''}
              onChange={(e) => updateField(field.name, e.target.value)}
              required={field.required}
            />
          </Field>
        )

      case 'select':
        return (
          <Field key={field.id}>
            <FieldLabel>{field.label}</FieldLabel>
            <Select
              value={(value as string) || ''}
              onValueChange={(val) => updateField(field.name, val)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar..." />
              </SelectTrigger>
              <SelectContent>
                {field.options?.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        )

      case 'gallery':
        return (
          <GalleryField
            key={field.id}
            field={field}
            value={(value as string[]) || []}
            onChange={(photos) => updateField(field.name, photos)}
          />
        )

      case 'gift-registry':
        return (
          <GiftRegistryField
            key={field.id}
            field={field}
            value={(value as GiftRegistryItem[]) || []}
            onChange={(registries) => updateField(field.name, registries)}
          />
        )

      default:
        return null
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Header Actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Button
            type="button"
            variant="ghost"
            onClick={() => router.back()}
            className="w-fit"
          >
            <ArrowLeft className="mr-2 size-4" />
            Volver
          </Button>
          <div>
            <h1 className="text-xl font-semibold">{template.name}</h1>
            <p className="text-sm text-muted-foreground">{template.description}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {invitation?.id && (
            <Button type="button" variant="outline" asChild>
              <a href={`/invitation/${invitation.id}`} target="_blank">
                <Eye className="mr-2 size-4" />
                Vista Previa
              </a>
            </Button>
          )}
          <Button type="submit" disabled={isLoading}>
            <Save className="mr-2 size-4" />
            {isLoading ? 'Guardando...' : 'Guardar'}
          </Button>
          {invitation?.id && invitation.status === 'draft' && onPublish && (
            <Button
              type="button"
              variant="default"
              onClick={handlePublish}
              disabled={isLoading}
              className="bg-green-600 hover:bg-green-700"
            >
              <ExternalLink className="mr-2 size-4" />
              Publicar
            </Button>
          )}
        </div>
      </div>

      {/* Dynamic Field Groups */}
      {template.fieldGroups.map(group => (
        <Card key={group.id}>
          <CardHeader>
            <CardTitle>{group.title}</CardTitle>
            {group.description && (
              <CardDescription>{group.description}</CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <FieldGroup>
              {group.fields.map(renderField)}
            </FieldGroup>
          </CardContent>
        </Card>
      ))}

      {/* Bottom Actions */}
      <div className="flex justify-end gap-2 border-t pt-6">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancelar
        </Button>
        <Button type="submit" disabled={isLoading}>
          <Save className="mr-2 size-4" />
          {isLoading ? 'Guardando...' : 'Guardar Invitacion'}
        </Button>
      </div>
    </form>
  )
}

// Gallery field component
interface GalleryFieldProps {
  field: TemplateField
  value: string[]
  onChange: (photos: string[]) => void
}

function GalleryField({ field, value, onChange }: GalleryFieldProps) {
  const addPhoto = () => {
    const url = prompt('Ingresa la URL de la imagen:')
    if (url) {
      onChange([...value, url])
    }
  }

  const removePhoto = (index: number) => {
    onChange(value.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-3">
      <FieldLabel>{field.label}</FieldLabel>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {value.map((photo, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-lg border"
          >
            <Image src={photo} alt={`Foto ${index + 1}`} fill className="object-cover" />
            <button
              type="button"
              onClick={() => removePhoto(index)}
              className="absolute right-2 top-2 rounded-full bg-destructive p-1.5 text-destructive-foreground opacity-0 transition-opacity group-hover:opacity-100"
            >
              <Trash2 className="size-3" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addPhoto}
          className="flex aspect-square flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-muted-foreground/25 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Upload className="size-6" />
          <span className="text-xs">Agregar Foto</span>
        </button>
      </div>
    </div>
  )
}

// Gift Registry field component
interface GiftRegistryFieldProps {
  field: TemplateField
  value: GiftRegistryItem[]
  onChange: (registries: GiftRegistryItem[]) => void
}

function GiftRegistryField({ field, value, onChange }: GiftRegistryFieldProps) {
  const addRegistry = () => {
    const newRegistry: GiftRegistryItem = {
      id: Date.now().toString(),
      name: '',
      url: '',
      description: '',
    }
    onChange([...value, newRegistry])
  }

  const updateRegistry = (id: string, key: keyof GiftRegistryItem, val: string) => {
    onChange(value.map(r => r.id === id ? { ...r, [key]: val } : r))
  }

  const removeRegistry = (id: string) => {
    onChange(value.filter(r => r.id !== id))
  }

  return (
    <div className="space-y-4">
      <FieldLabel>{field.label}</FieldLabel>
      {value.map(registry => (
        <div
          key={registry.id}
          className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-end"
        >
          <div className="grid flex-1 gap-4 sm:grid-cols-3">
            <Field>
              <FieldLabel>Tienda</FieldLabel>
              <Input
                value={registry.name}
                onChange={(e) => updateRegistry(registry.id, 'name', e.target.value)}
                placeholder="Liverpool"
              />
            </Field>
            <Field>
              <FieldLabel>URL</FieldLabel>
              <Input
                value={registry.url}
                onChange={(e) => updateRegistry(registry.id, 'url', e.target.value)}
                placeholder="https://..."
              />
            </Field>
            <Field>
              <FieldLabel>Descripcion</FieldLabel>
              <Input
                value={registry.description || ''}
                onChange={(e) => updateRegistry(registry.id, 'description', e.target.value)}
                placeholder="Mesa de regalos"
              />
            </Field>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => removeRegistry(registry.id)}
            className="shrink-0 text-destructive hover:text-destructive"
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      ))}
      <Button type="button" variant="outline" onClick={addRegistry}>
        <Plus className="mr-2 size-4" />
        Agregar Mesa de Regalos
      </Button>
    </div>
  )
}
