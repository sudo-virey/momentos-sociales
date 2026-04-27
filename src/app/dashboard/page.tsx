import Link from 'next/link'
import { Plus, Mail, Users, Eye } from 'lucide-react'
import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getInvitations, getInvitationDisplayName, getTemplateCategoryLabel } from '@/lib/invitation-store'

export default async function DashboardPage() {
  const invitations = await getInvitations()
  
  const stats = {
    total: invitations.length,
    published: invitations.filter(i => i.status === 'published').length,
    drafts: invitations.filter(i => i.status === 'draft').length,
  }

  return (
    <div className="flex flex-1 flex-col">
      <DashboardHeader
        title="Dashboard"
        description="Bienvenido a tu panel de control"
      />
      
      <main className="flex-1 p-4 lg:p-6">
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Invitaciones
                </CardTitle>
                <Mail className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.total}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Publicadas
                </CardTitle>
                <Eye className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.published}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Borradores
                </CardTitle>
                <Mail className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.drafts}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Confirmaciones
                </CardTitle>
                <Users className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">Proximamente</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Acciones Rapidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/dashboard/invitations/new">
                    <Plus className="mr-2 size-4" />
                    Crear Nueva Invitacion
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/dashboard/invitations">
                    <Mail className="mr-2 size-4" />
                    Ver Mis Invitaciones
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Invitations Preview */}
          {invitations.length > 0 && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Invitaciones Recientes</CardTitle>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/dashboard/invitations">Ver todas</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {invitations.slice(0, 3).map((invitation) => (
                    <div
                      key={invitation.id}
                      className="flex items-center justify-between rounded-lg border p-3"
                    >
                      <div>
                        <p className="font-medium">
                          {getInvitationDisplayName(invitation)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {getTemplateCategoryLabel(invitation.templateId)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={invitation.status === 'published' ? 'default' : 'secondary'}>
                          {invitation.status === 'published' ? 'Publicada' : 'Borrador'}
                        </Badge>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/dashboard/invitations/${invitation.id}/edit`}>
                            Editar
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
