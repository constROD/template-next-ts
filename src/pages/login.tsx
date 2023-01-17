import Login from 'modules/Login';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffectOnce } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    `s-maxage=${60 * 60 * 24 * 365}, stale-while-revalidate=${60 * 60 * 24}`
  );

  return {
    props: {},
  };
};

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
