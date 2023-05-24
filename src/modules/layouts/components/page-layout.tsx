import { Footer, Navbar } from 'modules/partials';
import React from 'react';

export function PageLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <div className="content-main">{children}</div>
      <Footer />
    </div>
  );
}
