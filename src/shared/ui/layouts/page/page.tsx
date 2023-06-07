import React from 'react';
import { Footer, Navbar } from 'shared/ui/partials';

export function PageLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <div className="content-main">{children}</div>
      <Footer />
    </div>
  );
}
