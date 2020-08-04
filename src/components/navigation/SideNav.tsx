import React, { FC } from 'react';

import './styles/SideNav.css';

type Props = {
  sidebarRef: React.MutableRefObject<HTMLDivElement>;
};

const SideNav: FC<Props> = ({ sidebarRef }) => {
  return (
    <div className='sidenav' ref={sidebarRef}>
      <div className='exit-btn' onClick={() => sidebarRef.current.classList.remove('open')}>
        <div className='exit-btn-x'></div>
      </div>
    </div>
  );
};

export default SideNav;
