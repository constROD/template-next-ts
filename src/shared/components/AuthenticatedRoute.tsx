import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';

const AuthenticatedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { push: navigate } = useRouter();
  const signedIn = useUserStore(state => state.signedIn());

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    if (!signedIn) navigate(ROUTES.LOGIN);
  }, [signedIn, navigate]);

  if (!signedIn) return null;

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthenticatedRoute;
