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
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { FieldGroup, Field, FieldLabel } from '@/components/ui/field'
import type { Invitation, InvitationFormData, GiftRegistry } from '@/types/invitation'

interface InvitationFormProps {
  invitation?: Invitation
  onSave: (data: InvitationFormData) => Promise<void>
  onPublish?: (id: string) => Promise<void>
}

export function InvitationForm({ invitation, onSave, onPublish }: InvitationFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<InvitationFormData>({
    brideFirstName: invitation?.brideFirstName || '',
    brideLastName: invitation?.brideLastName || '',
    groomFirstName: invitation?.groomFirstName || '',
    groomLastName: invitation?.groomLastName || '',
    title: invitation?.title || 'Nuestra Boda',
    parentsMessage: invitation?.parentsMessage || '',
    eventDate: invitation?.eventDate || '',
    eventTime: invitation?.eventTime || '',
    ceremonyLocation: invitation?.ceremonyLocation || '',
    ceremonyAddress: invitation?.ceremonyAddress || '',
    receptionLocation: invitation?.receptionLocation || '',
    receptionAddress: invitation?.receptionAddress || '',
    coverPhoto: invitation?.coverPhoto || '',
    galleryPhotos: invitation?.galleryPhotos || [],
    giftRegistries: invitation?.giftRegistries || [],
    personalMessage: invitation?.personalMessage || '',
  })

  const updateField = <K extends keyof InvitationFormData>(
    field: K,
    value: InvitationFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const addGiftRegistry = () => {
    const newRegistry: GiftRegistry = {
      id: Date.now().toString(),
      name: '',
      url: '',
      description: '',
    }
    updateField('giftRegistries', [...formData.giftRegistries, newRegistry])
  }

  const updateGiftRegistry = (id: string, field: keyof GiftRegistry, value: string) => {
    const updated = formData.giftRegistries.map((registry) =>
      registry.id === id ? { ...registry, [field]: value } : registry
    )
    updateField('giftRegistries', updated)
  }

  const removeGiftRegistry = (id: string) => {
    updateField(
      'giftRegistries',
      formData.giftRegistries.filter((r) => r.id !== id)
    )
  }

  const addGalleryPhoto = () => {
    const url = prompt('Ingresa la URL de la imagen:')
    if (url) {
      updateField('galleryPhotos', [...formData.galleryPhotos, url])
    }
  }

  const removeGalleryPhoto = (index: number) => {
    updateField(
      'galleryPhotos',
      formData.galleryPhotos.filter((_, i) => i !== index)
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await onSave(formData)
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

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Header Actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="button"
          variant="ghost"
          onClick={() => router.back()}
          className="w-fit"
        >
          <ArrowLeft className="mr-2 size-4" />
          Volver
        </Button>
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

      {/* Couple Information */}
      <Card>
        <CardHeader>
          <CardTitle>Informacion de la Pareja</CardTitle>
          <CardDescription>
            Ingresa los nombres de los novios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2">
            <FieldGroup>
              <Field>
                <FieldLabel>Nombre de la Novia</FieldLabel>
                <Input
                  value={formData.brideFirstName}
                  onChange={(e) => updateField('brideFirstName', e.target.value)}
                  placeholder="Maria"
                  required
                />
              </Field>
              <Field>
                <FieldLabel>Apellido de la Novia</FieldLabel>
                <Input
                  value={formData.brideLastName}
                  onChange={(e) => updateField('brideLastName', e.target.value)}
                  placeholder="Garcia"
                  required
                />
              </Field>
            </FieldGroup>
            <FieldGroup>
              <Field>
                <FieldLabel>Nombre del Novio</FieldLabel>
                <Input
                  value={formData.groomFirstName}
                  onChange={(e) => updateField('groomFirstName', e.target.value)}
                  placeholder="Carlos"
                  required
                />
              </Field>
              <Field>
                <FieldLabel>Apellido del Novio</FieldLabel>
                <Input
                  value={formData.groomLastName}
                  onChange={(e) => updateField('groomLastName', e.target.value)}
                  placeholder="Rodriguez"
                  required
                />
              </Field>
            </FieldGroup>
          </div>
        </CardContent>
      </Card>

      {/* Event Details */}
      <Card>
        <CardHeader>
          <CardTitle>Detalles del Evento</CardTitle>
          <CardDescription>
            Configura la fecha, hora y ubicacion de tu evento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel>Titulo de la Invitacion</FieldLabel>
              <Input
                value={formData.title}
                onChange={(e) => updateField('title', e.target.value)}
                placeholder="Nuestra Boda"
                required
              />
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel>Fecha del Evento</FieldLabel>
                <Input
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => updateField('eventDate', e.target.value)}
                  required
                />
              </Field>
              <Field>
                <FieldLabel>Hora del Evento</FieldLabel>
                <Input
                  type="time"
                  value={formData.eventTime}
                  onChange={(e) => updateField('eventTime', e.target.value)}
                  required
                />
              </Field>
            </div>

            <Separator className="my-4" />

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-medium">Ceremonia</h4>
                <Field>
                  <FieldLabel>Nombre del Lugar</FieldLabel>
                  <Input
                    value={formData.ceremonyLocation}
                    onChange={(e) => updateField('ceremonyLocation', e.target.value)}
                    placeholder="Iglesia Santa Maria"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel>Direccion</FieldLabel>
                  <Input
                    value={formData.ceremonyAddress}
                    onChange={(e) => updateField('ceremonyAddress', e.target.value)}
                    placeholder="Calle Principal 123, Ciudad"
                    required
                  />
                </Field>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Recepcion (Opcional)</h4>
                <Field>
                  <FieldLabel>Nombre del Lugar</FieldLabel>
                  <Input
                    value={formData.receptionLocation || ''}
                    onChange={(e) => updateField('receptionLocation', e.target.value)}
                    placeholder="Jardin Los Olivos"
                  />
                </Field>
                <Field>
                  <FieldLabel>Direccion</FieldLabel>
                  <Input
                    value={formData.receptionAddress || ''}
                    onChange={(e) => updateField('receptionAddress', e.target.value)}
                    placeholder="Av. de los Jardines 456, Ciudad"
                  />
                </Field>
              </div>
            </div>
          </FieldGroup>
        </CardContent>
      </Card>

      {/* Messages */}
      <Card>
        <CardHeader>
          <CardTitle>Mensajes</CardTitle>
          <CardDescription>
            Agrega mensajes especiales para tus invitados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel>Mensaje de los Padres</FieldLabel>
              <Textarea
                value={formData.parentsMessage}
                onChange={(e) => updateField('parentsMessage', e.target.value)}
                placeholder="Con la bendicion de Dios y de nuestros padres..."
                rows={3}
              />
            </Field>
            <Field>
              <FieldLabel>Mensaje Personal</FieldLabel>
              <Textarea
                value={formData.personalMessage}
                onChange={(e) => updateField('personalMessage', e.target.value)}
                placeholder="Su presencia es el mejor regalo..."
                rows={3}
              />
            </Field>
          </FieldGroup>
        </CardContent>
      </Card>

      {/* Cover Photo */}
      <Card>
        <CardHeader>
          <CardTitle>Foto de Portada</CardTitle>
          <CardDescription>
            Esta imagen aparecera en la seccion principal de tu invitacion
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Field>
            <FieldLabel>URL de la Imagen</FieldLabel>
            <Input
              value={formData.coverPhoto || ''}
              onChange={(e) => updateField('coverPhoto', e.target.value)}
              placeholder="https://ejemplo.com/mi-foto.jpg"
            />
          </Field>
          {formData.coverPhoto && (
            <div className="mt-4 relative aspect-video w-full max-w-md overflow-hidden rounded-lg border">
              <Image
                src={formData.coverPhoto}
                alt="Preview"
                fill
                className="object-cover"
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Gallery */}
      <Card>
        <CardHeader>
          <CardTitle>Galeria de Fotos</CardTitle>
          <CardDescription>
            Agrega fotos para mostrar en tu invitacion
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {formData.galleryPhotos.map((photo, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg border"
              >
                <Image src={photo} alt={`Foto ${index + 1}`} fill className="object-cover" />
                <button
                  type="button"
                  onClick={() => removeGalleryPhoto(index)}
                  className="absolute right-2 top-2 rounded-full bg-destructive p-1.5 text-destructive-foreground opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <Trash2 className="size-3" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addGalleryPhoto}
              className="flex aspect-square flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-muted-foreground/25 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Upload className="size-6" />
              <span className="text-xs">Agregar Foto</span>
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Gift Registry */}
      <Card>
        <CardHeader>
          <CardTitle>Mesa de Regalos</CardTitle>
          <CardDescription>
            Agrega los enlaces a tus mesas de regalos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {formData.giftRegistries.map((registry) => (
              <div
                key={registry.id}
                className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-end"
              >
                <div className="grid flex-1 gap-4 sm:grid-cols-3">
                  <Field>
                    <FieldLabel>Tienda</FieldLabel>
                    <Input
                      value={registry.name}
                      onChange={(e) =>
                        updateGiftRegistry(registry.id, 'name', e.target.value)
                      }
                      placeholder="Liverpool"
                    />
                  </Field>
                  <Field>
                    <FieldLabel>URL</FieldLabel>
                    <Input
                      value={registry.url}
                      onChange={(e) =>
                        updateGiftRegistry(registry.id, 'url', e.target.value)
                      }
                      placeholder="https://..."
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Descripcion</FieldLabel>
                    <Input
                      value={registry.description || ''}
                      onChange={(e) =>
                        updateGiftRegistry(registry.id, 'description', e.target.value)
                      }
                      placeholder="Mesa de regalos"
                    />
                  </Field>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeGiftRegistry(registry.id)}
                  className="shrink-0 text-destructive hover:text-destructive"
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addGiftRegistry}>
              <Plus className="mr-2 size-4" />
              Agregar Mesa de Regalos
            </Button>
          </div>
        </CardContent>
      </Card>

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
