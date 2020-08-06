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
          socials {
            linkedin {
              username
              link
            }
            twitter {
              username
              link
            }
            stackoverflow {
              username
              link
            }
            github {
              username
              link
            }
            email {
              username
              link
            }
            resume {
              username
              link
            }
          }
        }
      }
    }
  `);
  const {
    linkedin,
    twitter,
    stackoverflow,
    github,
    email,
    resume,
  } = data.site.siteMetadata.socials;

  return (
    <main className='landing'>
      <div className='landing-mask-loading'>
        <div className='landing-mask'>
          <div className='title-section'>
            <h1 className='title'>{data.site.siteMetadata.title}</h1>
            <div className='subtitle'>
              <h4>{data.site.siteMetadata.description}</h4>
              <div className='icons-row'>
                <IconWrapper
                  handle={linkedin.username}
                  link={linkedin.link}
                  icon={faLinkedin}
                  color='white'
                  size='lg'
                />
                <IconWrapper
                  handle={github.username}
                  link={github.link}
                  icon={faGithub}
                  color='white'
                  size='lg'
                />
                <IconWrapper
                  handle={twitter.username}
                  link={twitter.link}
                  icon={faTwitter}
                  color='white'
                  size='lg'
                />
                <IconWrapper
                  handle={stackoverflow.username}
                  link={stackoverflow.link}
                  icon={faStackOverflow}
                  color='white'
                  size='lg'
                />
                <IconWrapper
                  handle={email.username}
                  link={email.link}
                  icon={faEnvelope}
                  color='white'
                  size='lg'
                />
                <IconWrapper
                  handle={resume.username}
                  link={resume.link}
                  icon={faFile}
                  color='white'
                  size='lg'
                />
              </div>
            </div>
            <button className='call-to-action'>
              <span>View my work</span>
              <div className='arrow'></div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingScreen;
