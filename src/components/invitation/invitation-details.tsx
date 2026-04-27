import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Clock, MapPin, Church, PartyPopper, Shirt } from 'lucide-react'
import type { Invitation } from '@/types/invitation'

interface InvitationDetailsProps {
  invitation: Invitation
}

export function InvitationDetails({ invitation }: InvitationDetailsProps) {
  const data = invitation.data
  
  // Get event date from various possible field names
  const eventDateStr = (data.eventDate) as string | undefined
  if (!eventDateStr) return null
  
  const eventDate = new Date(eventDateStr)
  
  // Get event time(s)
  const eventTime = (data.eventTime || data.partyTime) as string | undefined
  const massTime = data.massTime as string | undefined
  
  // Get locations based on template type
  const ceremonyLocation = (data.ceremonyLocation || data.churchName) as string | undefined
  const ceremonyAddress = (data.ceremonyAddress || data.churchAddress) as string | undefined
  const receptionLocation = (data.receptionLocation || data.venueName || data.venue) as string | undefined
  const receptionAddress = (data.receptionAddress || data.venueAddress) as string | undefined
  
  // Get dress code
  const dressCode = data.dressCode as string | undefined
  const dressCodeLabels: Record<string, string> = {
    'formal': 'Formal',
    'semi-formal': 'Semi-formal',
    'casual': 'Casual Elegante',
    'beach': 'Playa',
    'garden': 'Jardin',
    'themed': 'Tematico',
  }

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Date Display */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Guardar la Fecha
          </p>
          <div className="flex items-center justify-center gap-4 text-4xl font-light sm:gap-6 sm:text-5xl lg:text-6xl">
            <span>{format(eventDate, 'd', { locale: es })}</span>
            <span className="text-2xl text-muted-foreground sm:text-3xl">/</span>
            <span>{format(eventDate, 'MM', { locale: es })}</span>
            <span className="text-2xl text-muted-foreground sm:text-3xl">/</span>
            <span>{format(eventDate, 'yyyy', { locale: es })}</span>
          </div>
          <p className="mt-4 text-lg capitalize text-muted-foreground">
            {format(eventDate, "EEEE", { locale: es })}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Ceremony / First Event */}
          {ceremonyLocation && (
            <div className="rounded-2xl border bg-card p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Church className="size-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-medium">
                {data.churchName ? 'Misa' : 'Ceremonia'}
              </h3>
              <div className="space-y-3 text-muted-foreground">
                {(massTime || eventTime) && (
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="size-4 shrink-0" />
                    <span>{massTime || eventTime} hrs</span>
                  </div>
                )}
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="size-4 shrink-0" />
                  <span>{ceremonyLocation}</span>
                </div>
                {ceremonyAddress && <p className="text-sm">{ceremonyAddress}</p>}
              </div>
              {ceremonyAddress && (
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(ceremonyAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Ver en Google Maps
                  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          )}

          {/* Reception / Second Event */}
          {receptionLocation && (
            <div className="rounded-2xl border bg-card p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <PartyPopper className="size-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-medium">
                {data.venueName ? 'Fiesta' : 'Recepcion'}
              </h3>
              <div className="space-y-3 text-muted-foreground">
                {(data.partyTime && data.partyTime !== massTime) && (
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="size-4 shrink-0" />
                    <span>{data.partyTime as string} hrs</span>
                  </div>
                )}
                {!data.partyTime && ceremonyLocation && (
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="size-4 shrink-0" />
                    <span>Despues de la ceremonia</span>
                  </div>
                )}
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="size-4 shrink-0" />
                  <span>{receptionLocation}</span>
                </div>
                {receptionAddress && <p className="text-sm">{receptionAddress}</p>}
              </div>
              {receptionAddress && (
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(receptionAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Ver en Google Maps
                  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          )}

          {/* Single venue when no ceremony */}
          {!ceremonyLocation && receptionLocation && (
            <div className="rounded-2xl border bg-card p-8 text-center md:col-span-2 md:mx-auto md:max-w-md">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <PartyPopper className="size-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-medium">Lugar del Evento</h3>
              <div className="space-y-3 text-muted-foreground">
                {eventTime && (
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="size-4 shrink-0" />
                    <span>{eventTime} hrs</span>
                  </div>
                )}
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="size-4 shrink-0" />
                  <span>{receptionLocation}</span>
                </div>
                {receptionAddress && <p className="text-sm">{receptionAddress}</p>}
              </div>
            </div>
          )}
        </div>

        {/* Dress Code */}
        {dressCode && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border bg-card px-6 py-3">
              <Shirt className="size-5 text-muted-foreground" />
              <span className="text-sm">
                Codigo de Vestimenta: <strong>{dressCodeLabels[dressCode] || dressCode}</strong>
              </span>
            </div>
          </div>
        )}

        {/* Countdown */}
        <div className="mt-16 text-center">
          <CountdownTimer targetDate={eventDate} />
        </div>
      </div>
    </section>
  )
}

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()
  
  if (diff <= 0) {
    return (
      <p className="text-xl font-light text-muted-foreground">
        El gran dia ha llegado
      </p>
    )
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  return (
    <div className="inline-flex items-center gap-4 rounded-2xl border bg-card px-8 py-6 sm:gap-8">
      <div className="text-center">
        <span className="block text-3xl font-light sm:text-4xl">{days}</span>
        <span className="text-xs uppercase tracking-wide text-muted-foreground">Dias</span>
      </div>
      <span className="text-2xl text-muted-foreground">:</span>
      <div className="text-center">
        <span className="block text-3xl font-light sm:text-4xl">{hours}</span>
        <span className="text-xs uppercase tracking-wide text-muted-foreground">Horas</span>
      </div>
      <span className="text-2xl text-muted-foreground">:</span>
      <div className="text-center">
        <span className="block text-3xl font-light sm:text-4xl">{minutes}</span>
        <span className="text-xs uppercase tracking-wide text-muted-foreground">Min</span>
      </div>
    </div>
  )
}
