import { AuthPage } from '@/components/auth/auth-page';

type LoginPageProps = {
  searchParams?: {
    mode?: string;
    plan?: string;
  };
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  return <AuthPage mode={searchParams?.mode === 'register' ? 'register' : 'login'} plan={searchParams?.plan} />;
}