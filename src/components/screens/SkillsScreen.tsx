import React from 'react';
import {
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faReact,
  faAngular,
  faVuejs,
  faPython,
  faJava,
  faGitAlt,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';

import SkillsIcon from '../SkillsIcon';
import './styles/SkillsScreen.css';

const SkillsScreen = () => {
  return (
    <section id='about' className='skills-section'>
      <header className='skills-header'>
        <h2>About</h2>
      </header>
      <div className='about'>
        <p className='about-text'>
          A Dallas based full stack web developer with over 1,500+ collective hours of experience in
          coding, developing web applications and developing static sites. Former music arranger and
          educator. Devmoutain coding bootcamp graduate. Deep knowledge working with industry
          standard backend and frontend languages and frameworks such as JavaScript, TypeScript,
          React, Angular, NodeJS, GraphQL, HTML and CSS . Never-ending curiosity for learning the
          greatest and latest languages, frameworks and libraries for providing the best short and
          long term solutions for clients and an invaluable knowledge and perspective teams.
        </p>
      </div>
      <h2>Skills</h2>
      <p>Current favorite stack to work with:</p>
      <div className='skills'>
        <SkillsIcon title='Typescript' size='2x'>
          <img src='https://img.icons8.com/color/48/000000/typescript.png' alt='typescript-icon' />
        </SkillsIcon>
        <SkillsIcon icon={faReact} color='dodgerblue' title='React' size='2x' />
        <SkillsIcon title='GraphQL' size='2x'>
          <img src='https://img.icons8.com/color/48/000000/graphql.png' alt='graphql-icon' />
        </SkillsIcon>
        <SkillsIcon title='MongoDB'>
          <img src='https://img.icons8.com/color/48/000000/mongodb.png' alt='mongodb-icon' />
        </SkillsIcon>
      </div>
      <div className='skills-subtitle'>
        <p>Wide variety of other technologies and languages I've work with:</p>
      </div>
      <div className='skills'>
        <SkillsIcon icon={faHtml5} color='tomato' title='HTML5' size='2x' />
        <SkillsIcon icon={faCss3} color='dodgerblue' title='CSS3' size='2x' />
        <SkillsIcon icon={faJs} color='yellow' title='Javascript' size='2x' />
        <SkillsIcon title='React Native'>
          <img
            src='https://img.icons8.com/color/48/000000/react-native.png'
            alt='react-native-icon'
          />
        </SkillsIcon>
        <SkillsIcon title='Redux'>
          <img src='https://img.icons8.com/color/48/000000/redux.png' alt='redux-icon' />{' '}
        </SkillsIcon>
        <SkillsIcon icon={faAngular} color='red' title='Angular' size='2x' />
        <SkillsIcon icon={faVuejs} color='green' title='Vue' size='2x' />
        <SkillsIcon icon={faBootstrap} color='purple' title='Bootstrap' size='2x' />
        <SkillsIcon icon={faNodeJs} color='green' title='NodeJS' size='2x' />
        <SkillsIcon title='Apollo' size='2x'>
          <img src='https://img.icons8.com/color/48/000000/apollo.png' alt='apollo-icon' />
        </SkillsIcon>
        <SkillsIcon icon={faPython} color='dodgerblue' title='Python' size='2x' />
        <SkillsIcon title='Django'>
          <img src='https://img.icons8.com/color/48/000000/django.png' alt='django-icon' />
        </SkillsIcon>
        <SkillsIcon title='C#'>
          <img src='https://img.icons8.com/color/48/000000/c-sharp-logo.png' alt='csharp-icon' />
        </SkillsIcon>
        <SkillsIcon icon={faJava} color='tomato' title='Java' size='2x' />
        <SkillsIcon icon={faGitAlt} color='tomato' title='Git' size='2x' />
        <SkillsIcon title='PostgreSQL' size='2x'>
          <img src='https://img.icons8.com/color/48/000000/postgreesql.png' alt='postgresql-icon' />
        </SkillsIcon>
      </div>
    </section>
  );
};

export default SkillsScreen;
