import { useRouter } from 'next/router';
import React, { useEffect, type ReactNode } from 'react';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';

const AuthenticatedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { push: navigate } = useRouter();
  const isSignedIn = useUserStore(state => state.computed.isSignedIn);

  useEffect(() => {
    if (!isSignedIn) void navigate(ROUTES.LOGIN);
  }, [isSignedIn, navigate]);

  if (!isSignedIn) return null;

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthenticatedRoute;
