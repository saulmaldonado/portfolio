import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LandingScreen from '../components/screens/LandingScreen';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <LandingScreen />
    <Link to='/page-2/'>Go to page 2</Link> <br />
    <Link to='/using-typescript/'>Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
