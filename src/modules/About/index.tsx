import { AboutWrapper } from './index.styled';

import { useRouter } from 'next/router';
import React from 'react';
import { useAsyncFn } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';
import CommonUtil from 'shared/utils/Common';

const About: React.FC = () => {
  const { push: navigate } = useRouter();
  const logout = useUserStore(state => state.logout);

  // eslint-disable-next-line @typescript-eslint/require-await
  const [, logoutAsync] = useAsyncFn(async () => {
    const response = logout();

    if (!response) return navigate(ROUTES.LOGIN);

    CommonUtil.logger({
      path: 'components/About/About.tsx',
      event: 'loginAsync',
      log: response.error,
    });
  });

  return (
    <AboutWrapper>
      This is AboutPage. <button onClick={logoutAsync}>Logout</button>
    </AboutWrapper>
  );
};

export default About;
