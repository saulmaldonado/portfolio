import React, { FC } from 'react';

import './styles/IconsWithTag.css';

type Props = {
  tag: string;
};
const IconsWithTag: FC<Props> = ({ children, tag }) => {
  return (
    <div className='container'>
      {children}
      <span>{tag}</span>
    </div>
  );
};

export default IconsWithTag;
