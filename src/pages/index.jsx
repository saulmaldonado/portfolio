import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LandingScreen from '../components/screens/LandingScreen';
import SkillsScreen from '../components/screens/SkillsScreen';
import WorksScreen from '../components/screens/WorksScreen';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <LandingScreen />
    <SkillsScreen />
    <WorksScreen />
    <Link to='/page-2/'>Go to page 2</Link> <br />
    <Link to='/using-typescript/'>Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
