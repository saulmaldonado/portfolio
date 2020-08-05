import React, { FC } from 'react';

import './styles/SideNav.css';
import SideNavButtons from './SideNavButtons';

type Props = {
  sidebarRef: React.MutableRefObject<HTMLDivElement>;
};

const SideNav: FC<Props> = ({ sidebarRef }) => {
  return (
    <div className='sidenav' ref={sidebarRef}>
      <div className='exit-btn' onClick={() => sidebarRef.current.classList.remove('open')}>
        <div className='exit-btn-x'></div>
      </div>
      <div className='sidenav-menu'>
        <SideNavButtons title='Home' />
        <SideNavButtons title='Skills' />
        <SideNavButtons title='Projects' />
        <SideNavButtons title='Contact' />
      </div>
    </div>
  );
};

export default SideNav;
