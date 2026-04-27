'use client'

import { useState } from 'react'
import { Mail, Check, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { FieldGroup, Field, FieldLabel } from '@/components/ui/field'
import type { Invitation } from '@/types/invitation'

interface InvitationRSVPProps {
  invitation: Invitation
}

export function InvitationRSVP({ invitation }: InvitationRSVPProps) {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: 'yes',
    guests: '1',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('RSVP submitted:', { invitationId: invitation.id, ...formData })
    setSubmitted(true)
    setIsLoading(false)
  }

  if (submitted) {
    return (
      <section className="bg-primary/5 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-6 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-green-100 p-4">
              <Check className="size-8 text-green-600" />
            </div>
          </div>
          <h2 className="mb-4 text-2xl font-light">Gracias por confirmar</h2>
          <p className="text-muted-foreground">
            Hemos recibido tu confirmacion. Nos vemos pronto.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-primary/5 py-16 sm:py-24">
      <div className="mx-auto max-w-lg px-6">
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Mail className="size-8 text-primary" />
            </div>
          </div>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Confirma tu Asistencia
          </p>
          <h2 className="text-3xl font-light sm:text-4xl">RSVP</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Por favor confirma tu asistencia antes de la fecha del evento.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border bg-card p-6 sm:p-8">
          <FieldGroup>
            <Field>
              <FieldLabel>Nombre Completo</FieldLabel>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Tu nombre"
                required
              />
            </Field>

            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu@email.com"
                required
              />
            </Field>

            <Field>
              <FieldLabel>Asistencia</FieldLabel>
              <RadioGroup
                value={formData.attendance}
                onValueChange={(value) => setFormData({ ...formData, attendance: value })}
                className="flex gap-4"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Confirmo asistencia</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">No podre asistir</Label>
                </div>
              </RadioGroup>
            </Field>

            {formData.attendance === 'yes' && (
              <Field>
                <FieldLabel>Numero de Invitados</FieldLabel>
                <Input
                  type="number"
                  min="1"
                  max="10"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-24"
                />
              </Field>
            )}

            <Field>
              <FieldLabel>Mensaje (Opcional)</FieldLabel>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Escribe un mensaje para los novios..."
                rows={3}
              />
            </Field>
          </FieldGroup>

          <Button type="submit" className="mt-6 w-full" disabled={isLoading}>
            {isLoading ? (
              'Enviando...'
            ) : (
              <>
                <Heart className="mr-2 size-4" />
                Confirmar Asistencia
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
