import React, { FC } from 'react';

import './styles/SideNavButtons.css';

type Props = {
  title: string;
};

const SideNavButtons: FC<Props> = ({ title }) => {
  return (
    <div className='sidenav-btn'>
      <h1>{title}</h1>
    </div>
  );
};

export default SideNavButtons;
