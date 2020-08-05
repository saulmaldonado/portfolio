import React, { FC } from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

const IconWrapper: FC<FontAwesomeIconProps & { handle: string }> = ({ handle, ...props }) => {
  return (
    <div className='icon-wrapper'>
      <FontAwesomeIcon {...props} />
    </div>
  );
};

export default IconWrapper;
