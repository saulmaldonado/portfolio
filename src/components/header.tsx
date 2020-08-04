import React, { FC, useState, useRef } from 'react';

import './styles/header.css';

type Props = {
  siteTitle: string;
  sidebarRef: React.MutableRefObject<HTMLDivElement>;
};
const Header: FC<Props> = ({ siteTitle, sidebarRef }) => (
  <header>
    <MenuButton className='menu-button' sidebarRef={sidebarRef} />
  </header>
);

const MenuButton: FC<{
  className: string;
  sidebarRef: React.MutableRefObject<HTMLDivElement>;
}> = ({ className, sidebarRef }) => {
  return (
    <div className={className} onClick={() => sidebarRef.current.classList.add('open')}>
      <h4>Menu</h4>
      <div className='menu-btn'>
        <div className='menu-btn-burger'></div>
      </div>
    </div>
  );
};

export default Header;
