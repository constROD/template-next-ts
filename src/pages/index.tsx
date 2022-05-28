import AuthenticatedRoute from 'components/AuthenticatedRoute';
import Home from 'components/Home/Home';
import Layout from 'components/Layout';
import { NextPage } from 'next';
import React from 'react';

const HomePage: NextPage = () => {
  return (
    <AuthenticatedRoute>
      <Layout>
        <Home />
      </Layout>
    </AuthenticatedRoute>
  );
};

export default HomePage;
