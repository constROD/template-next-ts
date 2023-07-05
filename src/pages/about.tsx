import { PageLayout } from 'shared/components/layouts/page';
import { PrivateRoute } from 'src/features/auth/components/private-route';

export default function AboutPage() {
  return (
    <PrivateRoute>
      <PageLayout>
        <div className="flex h-full items-center justify-center">This is About Page</div>
      </PageLayout>
    </PrivateRoute>
  );
}
