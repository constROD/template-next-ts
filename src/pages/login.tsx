import Login from 'modules/Login';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';

const LoginPage: NextPage = () => {
  const { push: navigate } = useRouter();
  const signedIn = useUserStore(state => state.signedIn());

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    if (signedIn) navigate(ROUTES.HOME);
  }, [signedIn, navigate]);

  if (signedIn) return null;

  return <Login />;
};

export default LoginPage;
