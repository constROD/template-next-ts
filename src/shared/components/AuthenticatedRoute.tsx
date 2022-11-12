import { useRouter } from 'next/router';
import React from 'react';
import { useEffectOnce } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';

const AuthenticatedRoute: React.FC<{ children: any }> = ({ children }) => {
  const { push: navigate } = useRouter();
  const { computed } = useUserStore(state => state);

  useEffectOnce(() => {
    if (!computed.isSignedIn) navigate(ROUTES.LOGIN);
  });

  if (!computed.isSignedIn) return null;

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthenticatedRoute;
