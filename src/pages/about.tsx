import { PrivateRoute } from 'modules/auth';
import { PageLayout } from 'shared/ui/layouts';

export default function AboutPage() {
  return (
    <PrivateRoute>
      <PageLayout>
        <div className="flex h-full items-center justify-center">This is About Page</div>;
      </PageLayout>
    </PrivateRoute>
  );
}
