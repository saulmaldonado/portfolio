import React, { FC, ReactHTMLElement, ReactNode, ReactPortal, ReactNodeArray } from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import './styles/SkillsIcon.css';

type Props = Partial<FontAwesomeIconProps> & {
  title: string;
  children?: ReactNode;
};

const SkillsIcon: FC<Props> = ({ title, icon, children, ...props }) => {
  return (
    <div className='skills-icon'>
      <span>{title}</span>
      {icon ? <FontAwesomeIcon icon={icon} {...props} /> : children}
    </div>
  );
};

export default SkillsIcon;
