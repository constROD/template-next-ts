import About from 'components/About/About';
import { NextPage } from 'next';
import React from 'react';
import AuthenticatedRoute from 'shared/components/AuthenticatedRoute';
import PageLayout from 'shared/components/Layouts/PageLayout';

const AboutPage: NextPage = () => {
  return (
    <AuthenticatedRoute>
      <PageLayout>
        <About />
      </PageLayout>
    </AuthenticatedRoute>
  );
};

export default AboutPage;
