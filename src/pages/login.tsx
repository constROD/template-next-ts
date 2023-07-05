import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useEffectOnce } from 'react-use';
import { ROUTES } from 'shared/constants/commons';
import { useUserStore } from 'shared/store/user';
import { Login } from 'src/features/auth/components/login';

export default function LoginPage() {
  const { push: navigate } = useRouter();
  const isSignedIn = useUserStore(state => state.computed.isSignedIn);
  const verifySession = useUserStore(state => state.verifySession);

  useEffectOnce(() => {
    void verifySession();
  });

  useEffect(() => {
    if (isSignedIn) void navigate(ROUTES.ABOUT);
  }, [isSignedIn, navigate]);

  if (isSignedIn) return null;

  return <Login />;
}
