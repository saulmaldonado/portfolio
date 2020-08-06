import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './styles/layout.css';
import SideNav from './navigation/SideNav';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query footer {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

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
        </footer>
      </div>
    </>
  );
};

export default Layout;
