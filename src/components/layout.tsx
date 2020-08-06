import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './styles/layout.css';
import SideNav from './navigation/SideNav';
import IconWrapper from './IconWrapper';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query footer {
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

  const sidebarRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} sidebarRef={sidebarRef} />
      <div>
        <SideNav sidebarRef={sidebarRef} />
        <main>{children}</main>
        <footer>
          <span>
            Saul Maldonado <span>© {new Date().getFullYear()}</span>, Built with{' '}
            <a href='https://www.gatsbyjs.org'>Gatsby</a>
          </span>
          {/* <div className='footer-icons'>
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
          </div> */}
        </footer>
      </div>
    </>
  );
};

export default Layout;
