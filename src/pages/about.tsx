import About from 'modules/aboutss';
import { PageLayout } from 'modules/layoutss';
import { PrivateRoute } from 'modules/partialss';
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
