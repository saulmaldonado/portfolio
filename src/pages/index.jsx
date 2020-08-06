import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LandingScreen from '../components/screens/LandingScreen';
import SkillsScreen from '../components/screens/SkillsScreen';
import WorksScreen from '../components/screens/WorksScreen';
import ContactScreen from '../components/screens/ContactScreen';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <LandingScreen />
    <SkillsScreen />
    <WorksScreen />
    <ContactScreen />
  </Layout>
);

export default IndexPage;
