import React from 'react';
import { Footer } from '../partials/footer';
import { Navbar } from '../partials/navbar';

export function PageLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <div className="content-main">{children}</div>
      <Footer />
    </div>
  );
}
