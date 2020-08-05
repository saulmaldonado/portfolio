import React, { FC } from 'react';

import './styles/header.css';

type Props = {
  siteTitle: string;
  sidebarRef: React.MutableRefObject<HTMLDivElement>;
};
const Header: FC<Props> = ({ siteTitle, sidebarRef }) => (
  <header className='main-header'>
    <MenuButton sidebarRef={sidebarRef} />
  </header>
);

const MenuButton: FC<{
  sidebarRef: React.MutableRefObject<HTMLDivElement>;
}> = ({ sidebarRef }) => {
  return (
    <div className='menu-button' onClick={() => sidebarRef.current.classList.add('open')}>
      <h4>Menu</h4>
      <div className='menu-btn'>
        <div className='menu-btn-burger'></div>
      </div>
    </div>
  );
};

export default Header;
