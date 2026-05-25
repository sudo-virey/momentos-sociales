import { AuthPage } from '@/components/auth/auth-page';

type RegisterPageProps = {
  searchParams?: {
    plan?: string;
  };
};

export default function RegisterPage({ searchParams }: RegisterPageProps) {
  return <AuthPage mode="register" plan={searchParams?.plan} />;
}