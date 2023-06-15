import { PrivateRoute } from 'modules/auth/components/private-route';
import { PageLayout } from 'shared/components/layouts/page';

export default function AboutPage() {
  return (
    <PrivateRoute>
      <PageLayout>
        <div className="flex h-full items-center justify-center">This is About Page</div>
      </PageLayout>
    </PrivateRoute>
  );
}
