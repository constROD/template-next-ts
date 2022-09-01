import { PageLayoutWrapper } from './PageLayout.styled';

import AuthenticatedRoute from '../AuthenticatedRoute';
import Footer from '../Partials/Footer';
import Navbar from '../Partials/Navbar';

import React from 'react';

const PageLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <AuthenticatedRoute>
      <PageLayoutWrapper>
        <Navbar />
        <div className="content-main">{children}</div>
        <Footer />
      </PageLayoutWrapper>
    </AuthenticatedRoute>
  );
};

export default PageLayout;
