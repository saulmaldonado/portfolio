import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './styles/layout.css';
import SideNav from './navigation/SideNav';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
