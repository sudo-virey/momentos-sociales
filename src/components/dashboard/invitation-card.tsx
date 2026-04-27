'use client'

import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import {
  Calendar,
  Clock,
  MapPin,
  MoreVertical,
  Eye,
  Pencil,
  Trash2,
  ExternalLink,
  Tag,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { getInvitationDisplayName, getTemplateCategoryLabel } from '@/lib/invitation-store'
import type { Invitation } from '@/types/invitation'

interface InvitationCardProps {
  invitation: Invitation
  onDelete?: (id: string) => void
}

export function InvitationCard({ invitation, onDelete }: InvitationCardProps) {
  const displayName = getInvitationDisplayName(invitation)
  const categoryLabel = getTemplateCategoryLabel(invitation.templateId)
  const data = invitation.data
  
  // Get cover photo from data
  const coverPhoto = data.coverPhoto as string | undefined
  
  // Get event date - different templates may have different field names
  const eventDate = data.eventDate as string | undefined
  const eventTime = (data.eventTime || data.partyTime) as string | undefined
  
  // Get location - different templates have different field names
  const location = (data.ceremonyLocation || data.venue || data.venueName) as string | undefined
  
  // Get initials for placeholder
  const getInitials = (): string => {
    if (data.brideFirstName && data.groomFirstName) {
      return `${(data.brideFirstName as string)[0]}${(data.groomFirstName as string)[0]}`
    }
    if (data.partner1Name && data.partner2Name) {
      return `${(data.partner1Name as string)[0]}${(data.partner2Name as string)[0]}`
    }
    if (data.name) {
      return (data.name as string).slice(0, 2).toUpperCase()
    }
    if (data.motherName) {
      return (data.motherName as string).slice(0, 2).toUpperCase()
    }
    return 'IN'
  }

  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-md">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {coverPhoto ? (
          <Image
            src={coverPhoto}
            alt={displayName}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-muted to-muted/50">
            <span className="text-4xl font-light text-muted-foreground/50">
              {getInitials()}
            </span>
          </div>
        )}
        <div className="absolute right-2 top-2 flex gap-2">
          <Badge
            variant={invitation.status === 'published' ? 'default' : 'secondary'}
            className="capitalize"
          >
            {invitation.status === 'published' ? 'Publicada' : 'Borrador'}
          </Badge>
        </div>
        <div className="absolute bottom-2 left-2">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
            <Tag className="mr-1 size-3" />
            {categoryLabel}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="line-clamp-1 text-lg">{displayName}</CardTitle>
            <CardDescription className="line-clamp-1">
              {(data.title as string) || categoryLabel}
            </CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8 shrink-0">
                <MoreVertical className="size-4" />
                <span className="sr-only">Acciones</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={`/invitation/${invitation.id}`}>
                  <Eye className="mr-2 size-4" />
                  Ver Invitacion
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/invitations/${invitation.id}/edit`}>
                  <Pencil className="mr-2 size-4" />
                  Editar
                </Link>
              </DropdownMenuItem>
              {invitation.status === 'published' && (
                <DropdownMenuItem asChild>
                  <Link href={`/invitation/${invitation.id}`} target="_blank">
                    <ExternalLink className="mr-2 size-4" />
                    Abrir en nueva pestana
                  </Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-destructive focus:text-destructive"
                onClick={() => onDelete?.(invitation.id)}
              >
                <Trash2 className="mr-2 size-4" />
                Eliminar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-2 text-sm text-muted-foreground">
          {eventDate && (
            <div className="flex items-center gap-2">
              <Calendar className="size-4 shrink-0" />
              <span>{format(new Date(eventDate), "d 'de' MMMM, yyyy", { locale: es })}</span>
            </div>
          )}
          {eventTime && (
            <div className="flex items-center gap-2">
              <Clock className="size-4 shrink-0" />
              <span>{eventTime} hrs</span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" />
              <span className="line-clamp-1">{location}</span>
            </div>
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <Button asChild variant="outline" className="flex-1">
            <Link href={`/dashboard/invitations/${invitation.id}/edit`}>
              <Pencil className="mr-2 size-4" />
              Editar
            </Link>
          </Button>
          <Button asChild className="flex-1">
            <Link href={`/invitation/${invitation.id}`}>
              <Eye className="mr-2 size-4" />
              Ver
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
