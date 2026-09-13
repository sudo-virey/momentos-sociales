import { AuthPage } from '@/components/auth/auth-page';

type RegisterPageProps = {
  searchParams?: Promise<{
    template?: string;
  }>;
};

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const params = await searchParams;

  return <AuthPage mode="register" templateId={params?.template} />;
}
