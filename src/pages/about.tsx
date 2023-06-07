import { About } from 'modules/about';
import { PrivateRoute } from 'modules/auth';
import { PageLayout } from 'modules/layouts';

export default function AboutPage() {
  return (
    <PrivateRoute>
      <PageLayout>
        <About />
      </PageLayout>
    </PrivateRoute>
  );
}
