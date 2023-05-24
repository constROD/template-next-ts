import { About } from 'modules/about';
import { PageLayout } from 'modules/layouts';
import { PrivateRoute } from 'modules/partials';

export default function AboutPage() {
  return (
    <PrivateRoute>
      <PageLayout>
        <About />
      </PageLayout>
    </PrivateRoute>
  );
}
