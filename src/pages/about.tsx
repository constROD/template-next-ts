import About from 'modules/About';
import { NextPage } from 'next';
import PageLayout from 'shared/components/Layouts/PageLayout';

const AboutPage: NextPage = () => {
  return (
    <PageLayout>
      <About />
    </PageLayout>
  );
};

export default AboutPage;
