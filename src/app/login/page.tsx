import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, LockKeyhole, Mail, Sparkles, UserRound } from 'lucide-react';

import { Button } from '@/components/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SiteFooter } from '@/components/site-footer';

type LoginPageProps = {
  searchParams?: {
    mode?: string;
    plan?: string;
  };
};

function buildModeHref(mode: 'login' | 'register', plan?: string) {
  const params = new URLSearchParams();

  params.set('mode', mode);

  if (plan) {
    params.set('plan', plan);
  }

  return `/login?${params.toString()}`;
}

export default function LoginPage({ searchParams }: LoginPageProps) {
  const isRegisterMode = searchParams?.mode === 'register';
  const selectedPlan = searchParams?.plan?.trim();
  const heading = isRegisterMode ? 'Crear tu cuenta' : 'Iniciar sesión';
  const description = isRegisterMode
    ? 'Abre tu cuenta y empieza a diseñar invitaciones con una sola suscripción por evento.'
    : 'Accede a tu panel para administrar invitaciones, confirmaciones y detalles del evento.';

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-zinc-950 via-stone-950 to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-between  px-6 py-5 backdrop-blur-md lg:px-12">
          <Link href="/marketing" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <Image src="/logo.png" alt="Momentos Sociales" width={180} height={48} className="h-15 w-auto object-contain" priority />
          </Link>
        </header>

        <main className="mx-auto grid w-full max-w-7xl flex-1 items-start gap-12 px-6 py-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-16">
          <section className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200/20 bg-yellow-200/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-yellow-200 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Acceso premium
            </div>

            <div className="space-y-4 max-w-xl">
              <h1 className="text-4xl font-serif leading-tight text-white md:text-5xl lg:text-6xl">
                {heading}
              </h1>
              <p className="text-base leading-relaxed text-white/75 md:text-lg">
                {description}
              </p>
            </div>
          </section>

          <section className="flex justify-center">
            <Card className="w-full max-w-md border-white/10 bg-black/45 text-white shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <CardHeader className="space-y-3 border-b border-white/10 pb-6">
                <CardTitle className="text-2xl font-serif text-yellow-200">{heading}</CardTitle>
                <CardDescription className="text-white/65">Usa tu correo para entrar o crear una cuenta nueva.</CardDescription>
                {selectedPlan ? (
                  <span className="inline-flex w-fit items-center rounded-full border border-yellow-200/20 bg-yellow-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-yellow-200">
                    Plan: {selectedPlan}
                  </span>
                ) : null}
              </CardHeader>

              <CardContent className="space-y-6 pt-6">
                <form className="space-y-4">
                  {isRegisterMode ? (
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <div className="relative">
                        <UserRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                        <Input id="name" name="name" type="text" placeholder="Tu nombre" className="h-12 border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/35" />
                      </div>
                    </div>
                  ) : null}

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                      <Input id="email" name="email" type="email" placeholder="tu@email.com" className="h-12 border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/35" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <div className="relative">
                      <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                      <Input id="password" name="password" type="password" placeholder="••••••••" className="h-12 border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/35" />
                    </div>
                  </div>

                  {isRegisterMode ? (
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                      <div className="relative">
                        <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                        <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Repite tu contraseña" className="h-12 border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/35" />
                      </div>
                    </div>
                  ) : null}

                  {!isRegisterMode ? (
                    <div className="flex items-center justify-between text-sm text-white/55">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="size-4 rounded border-white/20 bg-white/5 text-yellow-200 focus:ring-yellow-200/60" />
                        Recordarme
                      </label>
                      <a href="#" className="text-yellow-200 transition-colors hover:text-yellow-100">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
                  ) : null}

                  <Button
                    type="button"
                    className="h-12 w-full rounded-full border-0 bg-linear-to-r from-yellow-300 via-amber-300 to-yellow-400 text-base font-semibold text-slate-950 shadow-[0_18px_40px_rgba(250,204,21,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:from-yellow-200 hover:via-amber-200 hover:to-yellow-300"
                  >
                    {isRegisterMode ? 'Crear cuenta' : 'Entrar al panel'}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>

                <div className="flex items-center gap-3 text-sm text-white/55">
                  <span className="h-px flex-1 bg-white/10" />
                  o
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                <div className="space-y-3 text-center text-sm">
                  {isRegisterMode ? (
                    <p className="text-white/65">
                      ¿Ya tienes cuenta?{' '}
                      <Link href={buildModeHref('login', selectedPlan)} className="font-semibold text-yellow-200 transition-colors hover:text-yellow-100">
                        Inicia sesión
                      </Link>
                    </p>
                  ) : (
                    <p className="text-white/65">
                      ¿No tienes cuenta?{' '}
                      <Link href={buildModeHref('register', selectedPlan)} className="font-semibold text-yellow-200 transition-colors hover:text-yellow-100">
                        Crear cuenta
                      </Link>
                    </p>
                  )}

                </div>
              </CardContent>
            </Card>
          </section>
        </main>

        <SiteFooter variant="auth" />
      </div>
    </div>
  );
}