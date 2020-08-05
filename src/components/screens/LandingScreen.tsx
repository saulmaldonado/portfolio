import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

import './styles/LandingScreen.css';
import IconWrapper from '../IconWrapper';

const LandingScreen = () => {
  const data = useStaticQuery(graphql`
    query title {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <main className='landing'>
      <div className='landing-mask'>
        <div className='title-section'>
          <h1 className='title'>{data.site.siteMetadata.title}</h1>
          <div className='subtitle'>
            <h4>{data.site.siteMetadata.description}</h4>
            <IconWrapper icon={faLinkedin} color='white' size='lg' />
            <IconWrapper icon={faGithub} color='white' size='lg' />
            <IconWrapper icon={faTwitter} color='white' size='lg' />
            <IconWrapper icon={faStackOverflow} color='white' size='lg' />
            <IconWrapper icon={faEnvelope} color='white' size='lg' />
            <IconWrapper icon={faFile} color='white' size='lg' />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingScreen;
