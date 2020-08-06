import React, { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import './styles/Project.css';

type Props = {
  imageFile: string;
  title: string;
  desc: string;
  githubLink: string;
  liveLink: string;
};

const Project: FC<Props> = ({ imageFile, desc, githubLink, liveLink, title }) => {
  return (
    <div className='project-container'>
      <div className='project-details'>
        <div className='project-desc'>
          <h3 className='project-title'>{title}</h3>
          <p className='project-subtitle'>{desc}</p>
          {/* <div className='project-tech'></div> */}
        </div>
        <div className='project-buttons'>
          <a href={githubLink} target='_blank' className='project-github'>
            <span>Github</span>
            <FontAwesomeIcon icon={faGithubSquare} size='lg' />
          </a>
          <a href={liveLink} target='_blank' className='project-live'>
            <span>Live Site</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>
      <div className='project-mockup'>
        <img src={imageFile} alt='project-demo' />
      </div>
    </div>
  );
};

export default Project;
