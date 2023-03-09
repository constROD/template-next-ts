import AuthenticatedRoute from '../AuthenticatedRoute';

import React, { type ReactNode } from 'react';
import { Footer, Navbar } from '../Partials';

export const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
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
