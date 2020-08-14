import React from 'react';
import {
  faReact,
  faNodeJs,
  faJs,
  faSass,
  faAngular,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Project from '../Project';
import mealthyme from '../../videos/mealthyme.webm';
import simplestudio from '../../videos/simplestudio.webm';
import grocerystrore from '../../videos/grocerystore.webm';
import cryptotracker from '../../videos/cryptoTracker.webm';
import donewithit from '../../videos/donewithit.webm';
import redux from '../../images/redux.png';
import postgresql from '../../images/postgresql.png';
import stripe from '../../images/stripe.png';
import typescript from '../../images/typescript.png';
import firebase from '../../images/firebase.png';
import reactnative from '../../images/react-native.png';
import mongodb from '../../images/mongodb.png';

import './styles/WorksScreen.css';

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
          <FontAwesomeIcon icon={faJs} size='lg' />
          <FontAwesomeIcon icon={faReact} size='lg' />
          <FontAwesomeIcon icon={faSass} size='lg' />
          <FontAwesomeIcon icon={faNodeJs} size='lg' />
          <img src={redux} alt='redux-icon' />
          <img src={postgresql} alt='postgresql-icon' />
        </Project>
        <Project
          title='Simple Studio'
          desc='A React web application designed for music teachers help manage their studio of music students. The application assists with scheduling, managing students personal information, creating assignments, sending invoices and handling payments through Stripe.'
          githubLink='https://github.com/saulmaldonado/SimpleStudio'
          liveLink='https://simplestudio.xyz/'
          videoFile={simplestudio}
        >
          <FontAwesomeIcon icon={faJs} size='lg' />
          <FontAwesomeIcon icon={faReact} size='lg' />
          <FontAwesomeIcon icon={faNodeJs} size='lg' />
          <img src={redux} alt='redux-icon' />
          <img src={postgresql} alt='postgresql-icon' />
          <img src={stripe} alt='stripe-icon' />
        </Project>
        <Project
          title='Grocery Store'
          desc='An Angular Firebase e-commerce store for ordering grocery items where users sign in using firebase Google authentication. Users are able to browse and filter products, purchase products and review past orders. Admins are able create and manage store products and review customers transactions.'
          liveLink='https://grocery-shop-cd470.web.app/'
          githubLink='https://github.com/saulmaldonado/grocery-store'
          videoFile={grocerystrore}
        >
          <img src={typescript} alt='typescript-icon' />
          <FontAwesomeIcon icon={faAngular} size='lg' />
          <FontAwesomeIcon icon={faBootstrap} size='lg' />
          <img src={firebase} alt='firebase-icon' />
        </Project>
        <Project
          title='Crypto Tracker'
          desc="A React web that serves as a virtual cryptocurrency portfolio where users are able to buy and sell currencies in order to build their portfolio and analyze its change in value over time. The application uses CoinMarketCap’s API to retrieve live market data and update it portfolios' periodically."
          liveLink='http://206.189.234.247:5051/'
          githubLink='https://github.com/saulmaldonado/CryptoTracker'
          videoFile={cryptotracker}
        >
          <FontAwesomeIcon icon={faJs} size='lg' />
          <FontAwesomeIcon icon={faReact} size='lg' />
          <FontAwesomeIcon icon={faNodeJs} size='lg' />
          <img src={mongodb} alt='mongodb-icon' />
        </Project>
        <Project
          title='Done With It'
          desc="A mobile React Native app for posting and selling items you don't need anymore. Users are able to post listings and and upload photos from the device's photo library. Backend is built using Deno and the oak framework"
          githubLink='https://github.com/saulmaldonado/grocery-store'
          liveLink='https://expo.io/@saulmaldonado/DoneWithIt'
          videoFile={donewithit}
        >
          <img src={typescript} alt='typescript-icon' />
          <img src={reactnative} alt='react-native-icon' />
          <img src={mongodb} alt='mongodb-icon' />
        </Project>
      </div>
    </section>
  );
};

export default WorksScreen;
