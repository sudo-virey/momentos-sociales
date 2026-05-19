import { redirect } from 'next/navigation';

type RegisterPageProps = {
  searchParams?: {
    plan?: string;
  };
};

export default function RegisterPage({ searchParams }: RegisterPageProps) {
  const plan = searchParams?.plan?.trim();
  const target = plan ? `/login?mode=register&plan=${encodeURIComponent(plan)}` : '/login?mode=register';

  redirect(target);
}