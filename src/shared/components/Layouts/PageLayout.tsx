import { PageLayoutWrapper } from './PageLayout.styled';

import AuthenticatedRoute from '../AuthenticatedRoute';

import React from 'react';

const PageLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <AuthenticatedRoute>
      <PageLayoutWrapper>
        <div className="content-main">{children}</div>
      </PageLayoutWrapper>
    </AuthenticatedRoute>
  );
};

export default PageLayout;
