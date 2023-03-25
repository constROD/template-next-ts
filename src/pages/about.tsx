import About from 'modules/About';
import { PageLayout } from 'modules/Layouts';
import { PrivateRoute } from 'modules/Partials';
import { type NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <PrivateRoute>
      <PageLayout>
        <About />
      </PageLayout>
    </PrivateRoute>
  );
};

export default AboutPage;
