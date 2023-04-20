import { useRouter } from 'next/router';
import React, { useEffect, type ReactNode } from 'react';
import { useEffectOnce } from 'react-use';
import { ROUTES } from 'shared/constants/commons';
import { useUserStore } from 'shared/store';

export const PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { push: navigate } = useRouter();
  const isSignedIn = useUserStore(state => state.computed.isSignedIn);
  const verifySession = useUserStore(state => state.verifySession);

  useEffectOnce(() => {
    verifySession();
  });

  useEffect(() => {
    if (!isSignedIn) void navigate(ROUTES.LOGIN);
  }, [isSignedIn, navigate]);

  if (!isSignedIn) return null;

  return <React.Fragment>{children}</React.Fragment>;
};
