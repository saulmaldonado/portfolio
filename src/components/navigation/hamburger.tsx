import React, { useState } from 'react';

import './styles/hamburger.css';

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className='menu-btn'
      onClick={(e) => {
        if (!open) e.currentTarget.classList.add('open');
        else e.currentTarget.classList.remove('open');
        setOpen(!open);
      }}
    >
      <div className='menu-btn-burger'></div>
    </div>
  );
};

export default Hamburger;
