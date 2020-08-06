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
          I am a Dallas based full stack developer with over a year of experience in developing web
          applications and static sites trying to break into the tech industry. Formerly known as a
          musician, I spent the past year self-teaching HTML, CSS and JS and in February 2020 I
          graduated from Devmoutain coding bootcamp. Currently, I am learning different languages
          and experimenting with newer frameworks and libraries to broaden my knowledge of software
          and web development.
        </p>
      </div>
      <h2>Skills</h2>
      <p>My current favorite stack to work with:</p>
      <div className='skills'>
        <SkillsIcon title='Typescript' size='2x'>
          <img src='https://img.icons8.com/color/48/000000/typescript.png' />
        </SkillsIcon>
        <SkillsIcon icon={faReact} color='dodgerblue' title='React' size='2x' />
        <SkillsIcon title='GraphQL' size='2x'>
          <img src='https://img.icons8.com/color/48/000000/graphql.png' />
        </SkillsIcon>
        <SkillsIcon title='MongoDB'>
          <img src='https://img.icons8.com/color/48/000000/mongodb.png' />
        </SkillsIcon>
      </div>
      <div className='skills-subtitle'>
        <p>I also have a wide variety of other technologies and languages I know and work:</p>
      </div>
      <div className='skills'>
        <SkillsIcon icon={faHtml5} color='tomato' title='HTML5' size='2x' />
        <SkillsIcon icon={faCss3} color='dodgerblue' title='CSS3' size='2x' />
        <SkillsIcon icon={faJs} color='yellow' title='Javascript' size='2x' />
        <SkillsIcon title='React Native'>
          <img src='https://img.icons8.com/color/48/000000/react-native.png' />
        </SkillsIcon>
        <SkillsIcon title='Redux'>
          <img src='https://img.icons8.com/color/48/000000/redux.png' />{' '}
        </SkillsIcon>
        <SkillsIcon icon={faAngular} color='red' title='Angular' size='2x' />
        <SkillsIcon icon={faVuejs} color='green' title='Vue' size='2x' />
        <SkillsIcon icon={faBootstrap} color='purple' title='Bootstrap' size='2x' />
        <SkillsIcon icon={faNodeJs} color='green' title='NodeJS' size='2x' />
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
        <SkillsIcon icon={faJava} color='tomato' title='Java' size='2x' />
        <SkillsIcon icon={faGitAlt} color='tomato' title='Git' size='2x' />
        <SkillsIcon title='PostgreSQL' size='2x'>
          <img src='https://img.icons8.com/color/48/000000/postgreesql.png' />
        </SkillsIcon>
      </div>
    </section>
  );
};

export default SkillsScreen;
