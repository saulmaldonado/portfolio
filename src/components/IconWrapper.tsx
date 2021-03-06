import React, { FC } from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import '../components/styles/IconWrapper.css';

const IconWrapper: FC<FontAwesomeIconProps & { handle?: string; link?: string }> = ({
  link,
  handle,
  ...props
}) => {
  return (
    <a href={link} rel='noopener' target='_blank'>
      <div className='icon-with-title'>
        <div className='icon-wrapper'>
          <FontAwesomeIcon {...props} />
        </div>
        {handle && <span className='icon-title'>{handle}</span>}
      </div>
    </a>
  );
};

export default IconWrapper;
