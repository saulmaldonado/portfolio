import React, { FC } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import './styles/SideNavButtons.css';

type Props = {
  title: string;
  anchor: string;
  sidebarRef: React.MutableRefObject<HTMLDivElement>;
};

const SideNavButtons: FC<Props> = ({ title, anchor, sidebarRef }) => {
  const closeNav = () => sidebarRef.current.classList.remove('open');

  return (
    <AnchorLink to={`/#${anchor}`}>
      <div className='sidenav-btn' onClick={closeNav}>
        <h1>{title}</h1>
      </div>
    </AnchorLink>
  );
};

export default SideNavButtons;
