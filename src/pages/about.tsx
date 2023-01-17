import About from 'modules/About';
import { GetServerSideProps, NextPage } from 'next';
import PageLayout from 'shared/components/Layouts/PageLayout';

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    `s-maxage=${60 * 60 * 24 * 365}, stale-while-revalidate=${60 * 60 * 24}`
  );

  return {
    props: {},
  };
};

const AboutPage: NextPage = () => {
  return (
    <PageLayout>
      <About />
    </PageLayout>
  );
};

export default AboutPage;
