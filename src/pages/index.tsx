import Home from 'modules/Home';
import { type NextPage } from 'next';
import { PageLayout } from 'shared/components/Layouts';

const HomePage: NextPage = () => {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
};

export default HomePage;
