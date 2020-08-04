import React from 'react';

import './styles/header.css';
import Hamburger from './navigation/hamburger';

const Header = ({ siteTitle }) => (
  <header>
    <MenuButton className='menu-button' />
  </header>
);

const MenuButton: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={className}>
      <h3>Menu</h3>
      <Hamburger />
    </div>
  );
};

export default Header;
