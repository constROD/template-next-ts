import Home from 'modules/Home';
import { NextPage } from 'next';
import PageLayout from 'shared/components/Layouts/PageLayout';

const HomePage: NextPage = () => {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
};

export default HomePage;
