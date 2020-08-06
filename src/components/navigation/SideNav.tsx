import React, { FC } from 'react';

import './styles/SideNav.css';
import SideNavButtons from './SideNavButtons';

type Props = {
  sidebarRef: React.MutableRefObject<HTMLDivElement>;
};

const SideNav: FC<Props> = ({ sidebarRef }) => {
  const closeNav = () => sidebarRef.current.classList.remove('open');
  return (
    <div className='sidenav' ref={sidebarRef}>
      <div className='exit-btn' onClick={closeNav}>
        <div className='exit-btn-x'></div>
      </div>
      <div className='sidenav-menu'>
        <SideNavButtons title='Home' anchor='home' sidebarRef={sidebarRef} />
        <SideNavButtons title='Skills' anchor='about' sidebarRef={sidebarRef} />
        <SideNavButtons title='Projects' anchor='works' sidebarRef={sidebarRef} />
        <SideNavButtons title='Contact' anchor='contact' sidebarRef={sidebarRef} />
      </div>
    </div>
  );
};

export default SideNav;
