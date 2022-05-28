import About from 'components/About/About';
import AuthenticatedRoute from 'components/AuthenticatedRoute';
import Layout from 'components/Layout';
import { NextPage } from 'next';
import React from 'react';

const AboutPage: NextPage = () => {
  return (
    <AuthenticatedRoute>
      <Layout>
        <About />
      </Layout>
    </AuthenticatedRoute>
  );
};

export default AboutPage;
