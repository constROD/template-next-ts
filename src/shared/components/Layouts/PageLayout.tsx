import { PageLayoutWrapper } from './PageLayout.styled';

import React from 'react';

const PageLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <PageLayoutWrapper>
      <div className="content-main">{children}</div>
    </PageLayoutWrapper>
  );
};

export default PageLayout;
