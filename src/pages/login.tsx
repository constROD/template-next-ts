import Login from 'modules/Login';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffectOnce } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';

const LoginPage: NextPage = () => {
  const { push: navigate } = useRouter();
  const { isSignedIn } = useUserStore(state => state.computed);

  useEffectOnce(() => {
    if (isSignedIn) navigate(ROUTES.HOME);
  });

  if (isSignedIn) return null;

  return <Login />;
};

export default LoginPage;
