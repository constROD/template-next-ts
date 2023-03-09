import About from 'modules/About';
import { type NextPage } from 'next';
import { PageLayout } from 'shared/components/Layouts';

const AboutPage: NextPage = () => {
  return (
    <PageLayout>
      <About />
    </PageLayout>
  );
};

export default AboutPage;
