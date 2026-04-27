import Image from 'next/image'
import Link from 'next/link'
import { Heart, ArrowRight, Mail, Palette, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-ms-li.png" alt="Momentos Sociales" width={36} height={36} className="h-9 w-auto" priority />
            <span className="text-lg font-semibold">Momentos Sociales</span>
          </Link>
          <Button asChild>
            <Link href="/dashboard">
              Ir al Dashboard
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
            Crea invitaciones digitales
            <span className="block text-primary">para tu boda</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Disena invitaciones elegantes y personalizadas para el dia mas especial de tu vida.
            Comparte facilmente con tus seres queridos.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/dashboard/invitations/new">
                Crear Mi Invitacion
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/invitation/1">Ver Ejemplo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-light sm:text-4xl">Todo lo que necesitas</h2>
            <p className="mt-4 text-muted-foreground">
              Funcionalidades pensadas para hacer tu invitacion perfecta
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border bg-card p-8 text-center">
              <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10">
                <Palette className="size-6 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-medium">Diseno Elegante</h3>
              <p className="text-sm text-muted-foreground">
                Plantillas modernas y minimalistas que se adaptan a tu estilo
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-8 text-center">
              <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10">
                <Mail className="size-6 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-medium">RSVP Integrado</h3>
              <p className="text-sm text-muted-foreground">
                Recibe confirmaciones de asistencia directamente en tu panel
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-8 text-center">
              <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10">
                <Share2 className="size-6 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-medium">Facil de Compartir</h3>
              <p className="text-sm text-muted-foreground">
                Comparte tu invitacion con un simple enlace por WhatsApp o redes sociales
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-primary/5 py-20 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Heart className="mx-auto mb-6 size-12 text-primary" />
          <h2 className="text-3xl font-light sm:text-4xl">Comienza a crear tu invitacion hoy</h2>
          <p className="mt-4 text-muted-foreground">Es facil, rapido y completamente personalizable</p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/dashboard/invitations/new">
              Crear Invitacion Gratis
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          <p>2025 InvitaDigital. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
