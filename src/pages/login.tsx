import Login from 'modules/Login';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';

const LoginPage: NextPage = () => {
  const { push: navigate } = useRouter();
  const isSignedIn = useUserStore(state => state.computed.isSignedIn);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    if (isSignedIn) navigate(ROUTES.HOME);
  }, [isSignedIn, navigate]);

  if (isSignedIn) return null;

  return <Login />;
};

export default LoginPage;
