import AuthenticatedRoute from '../AuthenticatedRoute';
import Footer from '../Partials/Footer';
import Navbar from '../Partials/Navbar';

import React, { ReactNode } from 'react';

const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AuthenticatedRoute>
      <div>
        <Navbar />
        <div className="content-main">{children}</div>
        <Footer />
      </div>
    </AuthenticatedRoute>
  );
};

export default PageLayout;
