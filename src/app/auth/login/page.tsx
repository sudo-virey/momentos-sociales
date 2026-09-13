import { AuthPage } from '@/components/auth/auth-page'

type AuthLoginPageProps = {
  searchParams?: Promise<{
    mode?: string
    template?: string
  }>
}

export default async function AuthLoginPage({ searchParams }: AuthLoginPageProps) {
  const params = await searchParams

  return (
    <AuthPage
      mode={params?.mode === 'register' ? 'register' : 'login'}
      templateId={params?.template}
    />
  )
}
