import Home from 'components/Home/Home';
import { NextPage } from 'next';
import React from 'react';
import AuthenticatedRoute from 'shared/components/AuthenticatedRoute';
import PageLayout from 'shared/components/Layouts/PageLayout';

const HomePage: NextPage = () => {
  return (
    <AuthenticatedRoute>
      <PageLayout>
        <Home />
      </PageLayout>
    </AuthenticatedRoute>
  );
};

export default HomePage;
