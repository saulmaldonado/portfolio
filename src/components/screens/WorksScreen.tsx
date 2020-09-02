import React from 'react';
import {
  faReact,
  faNodeJs,
  faJs,
  faSass,
  faAngular,
  faBootstrap,
  faVuejs,
  faNode,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Project from '../Project';
import mealthyme from '../../videos/mealthyme.webm';
import simplestudio from '../../videos/simplestudio.webm';
import grocerystrore from '../../videos/grocerystore.webm';
import cryptotracker from '../../videos/cryptoTracker.webm';
import donewithit from '../../videos/donewithit.webm';
import shareThisPage from '../../videos/share-this-page.webm';
import chatApp from '../../videos/chat-app.webm';
import redux from '../../images/redux.png';
import postgresql from '../../images/postgresql.png';
import stripe from '../../images/stripe.png';
import typescript from '../../images/typescript.png';
import firebase from '../../images/firebase.png';
import reactnative from '../../images/react-native.png';
import mongodb from '../../images/mongodb.png';
import redis from '../../images/redis.png';

import './styles/WorksScreen.css';
import IconsWithTag from '../IconsWithTag';

const WorksScreen = () => {
  return (
    <section className='works-section' id='works'>
      <header className='works-header'>
        <h2>Works</h2>
        <p>Projects I've worked on: </p>
      </header>
      <div className='works'>
        <Project
          title='Meal Thyme'
          desc=' 
A meal planning app where users are able to browse recipes from Spoonacular’s API. Users are able to post their own recipes as well as schedule meals using an interactive calendar, build ingredient shopping lists, manage fridges and visualize nutritional information.'
          githubLink='https://github.com/saulmaldonado/meal-planner'
          liveLink='https://mealthyme.xyz/'
          videoFile={mealthyme}
        >
          <IconsWithTag tag='Javascript'>
            <FontAwesomeIcon icon={faJs} size='lg' />
          </IconsWithTag>
          <IconsWithTag tag='React'>
            <FontAwesomeIcon icon={faReact} size='lg' />
          </IconsWithTag>
          <IconsWithTag tag='Sass'>
            <FontAwesomeIcon icon={faSass} size='lg' />
          </IconsWithTag>
          <IconsWithTag tag='NodeJS'>
            <FontAwesomeIcon icon={faNodeJs} size='lg' />
          </IconsWithTag>
          <IconsWithTag tag='Redux'>
            <img src={redux} alt='redux-icon' />
          </IconsWithTag>
          <IconsWithTag tag='PostgreSQL'>
            <img src={postgresql} alt='postgresql-icon' />
          </IconsWithTag>
        </Project>
        <Project
          title='Simple Studio'
          desc='A React web application designed for music teachers help manage their studio of music students. The application assists with scheduling, managing students personal information, creating assignments, sending invoices and handling payments through Stripe.'
          githubLink='https://github.com/saulmaldonado/SimpleStudio'
          liveLink='https://simplestudio.xyz/'
          videoFile={simplestudio}
        >
          <IconsWithTag tag='Javascript'>
            <FontAwesomeIcon icon={faJs} size='lg' />
          </IconsWithTag>
          <IconsWithTag tag='React'>
            <FontAwesomeIcon icon={faReact} size='lg' />
          </IconsWithTag>
          <IconsWithTag tag='NodeJS'>
            <FontAwesomeIcon icon={faNodeJs} size='lg' />
          </IconsWithTag>
          <IconsWithTag tag='Redux'>
            <img src={redux} alt='redux-icon' />
          </IconsWithTag>
          <IconsWithTag tag='PostgreSQL'>
            <img src={postgresql} alt='postgresql-icon' />
          </IconsWithTag>{' '}
          <IconsWithTag tag='Stripe'>
            <img src={stripe} alt='stripe-icon' />
          </IconsWithTag>
        </Project>
        <Project
          title='Grocery Store'
          desc='An Angular Firebase e-commerce store for ordering grocery items where users sign in using firebase Google authentication. Users are able to browse and filter products, purchase products and review past orders. Admins are able create and manage store products and review customers transactions.'
          liveLink='https://grocery-shop-cd470.web.app/'
          githubLink='https://github.com/saulmaldonado/grocery-store'
          videoFile={grocerystrore}
        >
          <IconsWithTag tag='TypeScript'>
            <img src={typescript} alt='typescript-icon' />
          </IconsWithTag>
          <IconsWithTag tag='Angular'>
            <FontAwesomeIcon icon={faAngular} size='lg' />
          </IconsWithTag>
          <IconsWithTag tag='Boostrap'>
            <FontAwesomeIcon icon={faBootstrap} size='lg' />
          </IconsWithTag>
          <IconsWithTag tag='Firebase'>
            <img src={firebase} alt='firebase-icon' />
          </IconsWithTag>
        </Project>
        <Project
          title='Crypto Tracker'
          desc="A React web that serves as a virtual cryptocurrency portfolio where users are able to buy and sell currencies in order to build their portfolio and analyze its change in value over time. The application uses CoinMarketCap’s API to retrieve live market data and update it portfolios' periodically."
          liveLink='https://saulmaldonado.xyz/crypto-tracker/'
          githubLink='https://github.com/saulmaldonado/CryptoTracker'
          videoFile={cryptotracker}
        >
          <IconsWithTag tag='Javascript'>
            <FontAwesomeIcon icon={faJs} size='lg' />
          </IconsWithTag>
          <IconsWithTag tag='React'>
            <FontAwesomeIcon icon={faReact} size='lg' />
          </IconsWithTag>
          <IconsWithTag tag='NodeJS'>
            <FontAwesomeIcon icon={faNodeJs} size='lg' />
          </IconsWithTag>
          <IconsWithTag tag='MongoDB'>
            <img src={mongodb} alt='mongodb-icon' />
          </IconsWithTag>
        </Project>
        <Project
          title='Done With It'
          desc="A mobile React Native app for posting and selling items you don't need anymore. Users are able to post listings and and upload photos from the device's photo library. Backend is built using Deno and the oak framework"
          githubLink='https://github.com/saulmaldonado/grocery-store'
          liveLink='https://expo.io/@saulmaldonado/DoneWithIt'
          videoFile={donewithit}
        >
          <IconsWithTag tag='TypeScript'>
            <img src={typescript} alt='typescript-icon' />
          </IconsWithTag>
          <IconsWithTag tag='React Native'>
            <img src={reactnative} alt='react-native-icon' />
          </IconsWithTag>
          <IconsWithTag tag='MongoDB'>
            <img src={mongodb} alt='mongodb-icon' />
          </IconsWithTag>
        </Project>
        <Project
          title='Chat App'
          desc="A functional chat application inspired from Frontend Mentors' Chat app illustration challenge. Wrapped in a Vue component plugin"
          githubLink='https://github.com/saulmaldonado/chat-app'
          liveLink='https://saulmaldonado.github.io/chat-app/'
          videoFile={chatApp}
        >
          <IconsWithTag tag='Vue'>
            <FontAwesomeIcon icon={faVuejs} size='lg' />
          </IconsWithTag>
          <IconsWithTag tag='NodeJS'>
            <FontAwesomeIcon icon={faNodeJs} size='lg' />
          </IconsWithTag>
        </Project>
        <Project
          title='Share This Page'
          desc='A zero-configuration React component library for generating social media sharing links to the current web page'
          githubLink='https://github.com/saulmaldonado/share-this-page'
          liveLink='https://saulmaldonado.github.io/share-this-page/'
          videoFile={shareThisPage}
        >
          <IconsWithTag tag='React'>
            <FontAwesomeIcon icon={faReact} size='lg' />
          </IconsWithTag>
          <IconsWithTag tag='NodeJS'>
            <FontAwesomeIcon icon={faNodeJs} size='lg' />
          </IconsWithTag>
          <IconsWithTag tag='Redis'>
            <img src={redis} alt='redis-icon' />
          </IconsWithTag>
        </Project>
      </div>
    </section>
  );
};

export default WorksScreen;
