import React from 'react';
import {
  faReact,
  faNodeJs,
  faJs,
  faHtml5,
  faSass,
  faAngular,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Project from '../Project';
import mealthyme from '../../images/mealthyme.gif';
import simplestudio from '../../images/simplestudio.gif';
import grocerystrore from '../../images/grocery-store.gif';
import cryptotracker from '../../images/cryptotracker.gif';
import donewithit from '../../images/donewithit.gif';
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
A meal planning app where users are able to browse recipes from Spooacular’s API. Users are able to post their own recipes as well as schedule meals using an interactive calendar, build ingredient shopping lists, manage fridges and visualize nutritional information.'
          githubLink='https://github.com/saulmaldonado/meal-planner'
          liveLink='https://mealthyme.xyz/'
          imageFile={mealthyme}
        >
          <FontAwesomeIcon icon={faJs} size='lg' />
          <FontAwesomeIcon icon={faReact} size='lg' />
          <FontAwesomeIcon icon={faSass} size='lg' />
          <FontAwesomeIcon icon={faNodeJs} size='lg' />
          <img src={redux} />
          <img src={postgresql} />
        </Project>
        <Project
          title='Simple Studio'
          desc='A React web application designed for music teachers help manage their studio of music students. The application assists with scheduling, managing students personal information, creating assignments, sending invoices and handling payments through Stripe.'
          githubLink='https://github.com/saulmaldonado/SimpleStudio'
          liveLink='https://simplestudio.xyz/'
          imageFile={simplestudio}
        >
          <FontAwesomeIcon icon={faJs} size='lg' />
          <FontAwesomeIcon icon={faReact} size='lg' />
          <FontAwesomeIcon icon={faNodeJs} size='lg' />
          <img src={redux} />
          <img src={postgresql} />
          <img src={stripe} />
        </Project>
        <Project
          title='Grocery Store'
          desc='An Angular Firebase e-commerce store for ordering grocery items where users sign in using firebase Google authentication. Users are able to browse and filter products, purchase products and review past orders. Admins are able create and manage store products and review customers transactions.'
          liveLink='https://grocery-shop-cd470.web.app/'
          githubLink='https://github.com/saulmaldonado/grocery-store'
          imageFile={grocerystrore}
        >
          <img src={typescript} />
          <FontAwesomeIcon icon={faAngular} size='lg' />
          <FontAwesomeIcon icon={faBootstrap} size='lg' />
          <img src={firebase} />
        </Project>
        <Project
          title='Crypto Tracker'
          desc="A React web that serves as a virtual cryptocurrency portfolio where users are able to buy and sell currencies in order to build their portfolio and analyze its change in value over time. The application uses CoinMarketCap’s API to retrieve live market data and update it portfolios' periodically."
          liveLink='http://206.189.234.247:5051/'
          githubLink='https://github.com/saulmaldonado/CryptoTracker'
          imageFile={cryptotracker}
        >
          <FontAwesomeIcon icon={faJs} size='lg' />
          <FontAwesomeIcon icon={faReact} size='lg' />
          <FontAwesomeIcon icon={faNodeJs} size='lg' />
          <img src={mongodb} />
        </Project>
        <Project
          title='Done With It'
          desc="A mobile React Native app for posting and selling items you don't need anymore. Users are able to post listings and and upload photos from the device's photo library. Backend is built using Deno and the oak framework"
          githubLink='https://github.com/saulmaldonado/grocery-store'
          liveLink='https://expo.io/@saulmaldonado/DoneWithIt'
          imageFile={donewithit}
        >
          <img src={typescript} />
          <img src={reactnative} />
          <img src={mongodb} />
        </Project>
      </div>
    </section>
  );
};

export default WorksScreen;
