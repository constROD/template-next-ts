import { useRouter } from 'next/router';
import React from 'react';
import { useEffectOnce } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';

const AuthenticatedRoute: React.FC<{ children: any }> = ({ children }) => {
  const { push: navigate } = useRouter();
  const { isSignedIn } = useUserStore(state => state.computed);

  useEffectOnce(() => {
    if (!isSignedIn) navigate(ROUTES.LOGIN);
  });

  if (!isSignedIn) return null;

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthenticatedRoute;
