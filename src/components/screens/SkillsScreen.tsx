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
  faGit,
  faGitAlt,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';

import SkillsIcon from '../SkillsIcon';
import './styles/SkillsScreen.css';
import { faFlask } from '@fortawesome/free-solid-svg-icons';

const SkillsScreen = () => {
  return (
    <section className='skills-section'>
      <header className='skills-header'>
        <h3>Skills</h3>
      </header>
      <div className='skills-subtitle'>
        <p>Languages and technologies I have experience using for creating products: </p>
      </div>
      <div className='skills'>
        <SkillsIcon icon={faHtml5} color='orange' title='HTML5' size='2x' />
        <SkillsIcon icon={faCss3} color='dodgerblue' title='CSS3' size='2x' />
        <SkillsIcon icon={faJs} color='yellow' title='Javascript' size='2x' />
        <SkillsIcon title='Typescript' size='2x'>
          <img src='https://img.icons8.com/color/48/000000/typescript.png' />
        </SkillsIcon>
        <SkillsIcon title='React Native'>
          <img src='https://img.icons8.com/color/48/000000/react-native.png' />
        </SkillsIcon>
        <SkillsIcon icon={faReact} color='dodgerblue' title='React' size='2x' />
        <SkillsIcon icon={faAngular} color='red' title='Angular' size='2x' />
        <SkillsIcon icon={faVuejs} color='green' title='Vue' size='2x' />
        <SkillsIcon icon={faBootstrap} color='purple' title='Bootstrap' size='2x' />
        <SkillsIcon icon={faNodeJs} color='green' title='NodeJS' size='2x' />
        <SkillsIcon title='GraphQL' size='2x'>
          <img src='https://img.icons8.com/color/48/000000/graphql.png' />
        </SkillsIcon>
        <SkillsIcon title='Apollo' size='2x'>
          <img src='https://img.icons8.com/color/48/000000/apollo.png' />
        </SkillsIcon>
        <SkillsIcon icon={faPython} color='dodgerblue' title='Python' size='2x' />
        <SkillsIcon title='Django'>
          <img src='https://img.icons8.com/color/48/000000/django.png' />
        </SkillsIcon>
        <SkillsIcon title='C#'>
          <img src='https://img.icons8.com/color/48/000000/c-sharp-logo.png' />
        </SkillsIcon>
        <SkillsIcon icon={faJava} color='white' title='Java' size='2x' />
        <SkillsIcon icon={faGitAlt} color='tomato' title='Git' size='2x' />
        <SkillsIcon title='PostgreSQL' size='2x'>
          <img src='https://img.icons8.com/color/48/000000/postgreesql.png' />
        </SkillsIcon>
        <SkillsIcon title='MongoDB'>
          <img src='https://img.icons8.com/color/48/000000/mongodb.png' />
        </SkillsIcon>
      </div>
    </section>
  );
};

export default SkillsScreen;
