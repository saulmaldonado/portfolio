import React, { FC, ReactChildren } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, IconDefinition } from '@fortawesome/free-brands-svg-icons';

import './styles/Project.css';

type Props = {
  videoFile: string;
  title: string;
  desc: string;
  githubLink: string;
  liveLink: string;
};

const Project: FC<Props> = ({ videoFile, desc, githubLink, liveLink, title, children }) => {
  return (
    <div className='project-container'>
      <div className='project-details'>
        <div className='project-desc'>
          <h2 className='project-title'>{title}</h2>
          <p className='project-subtitle'>{desc}</p>
        </div>
        <div className='project-tech'>{children}</div>
        <div className='project-buttons'>
          <a href={githubLink} rel='noopener' target='_blank' className='project-github'>
            <span>Github</span>
            <FontAwesomeIcon icon={faGithubSquare} size='lg' />
          </a>
          <a href={liveLink} target='_blank' rel='noopener' className='project-live'>
            <span>Live Site</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>
      <div className='project-mockup'>
        <video autoPlay loop muted>
          <source src={videoFile} type='video/webm' />
        </video>
      </div>
    </div>
  );
};

export default Project;
