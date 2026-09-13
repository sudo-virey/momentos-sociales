import { AuthPage } from '@/components/auth/auth-page';

type LoginPageProps = {
  searchParams?: Promise<{
    mode?: string;
    template?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;

  return (
    <AuthPage
      mode={params?.mode === 'register' ? 'register' : 'login'}
      templateId={params?.template}
    />
  );
}
