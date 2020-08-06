import React from 'react';

import Project from '../Project';
import mealthyme from '../../images/mealthyme.gif';
import simplestudio from '../../images/simplestudio.gif';
import grocerystrore from '../../images/grocery-store.gif';
import cryptotracker from '../../images/cryptotracker.gif';
import donewithit from '../../images/donewithit.gif';

import './styles/WorksScreen.css';

const WorksScreen = () => {
  return (
    <section className='works-section'>
      <header className='works-header'>
        <h2>Works</h2>
        <p>Projects I've worked on and am currently working on:</p>
      </header>
      <div className='works'>
        <Project
          title='Meal Thyme'
          desc=' 
A meal planning app where users are able to browes recipes from Spooacular’s API. Users are able to make their own recipes as well as schedule meals using an interactive calendar, create a shopping list, maintain a fridge and view analyze nutrition information.'
          githubLink='https://github.com/saulmaldonado/meal-planner'
          liveLink='https://mealthyme.xyz/'
          imageFile={mealthyme}
        />
        <Project
          title='Simple Studio'
          desc='A React web application designed for music teachers help manage their studio of music students for them. The application helps with scheduling, managing students personal information, making assignments and making invoices and handling payments through Stripe.'
          githubLink='https://github.com/saulmaldonado/SimpleStudio'
          liveLink='https://simplestudio.xyz/'
          imageFile={simplestudio}
        />
        <Project
          title='Grocery Store'
          desc='An Angular Firebase e-commerce store for ordering grocery items where users sign in using their Google account. Users are able to filter through products and save previous carts and orders to their account.'
          liveLink='https://grocery-shop-cd470.web.app/'
          githubLink='https://github.com/saulmaldonado/grocery-store'
          imageFile={grocerystrore}
        />
        <Project
          title='Crypto Tracker'
          desc='A React web that serves as a virtual cryptocurrency portfolio where users are able to buy and sell currencies in order to build their portfolio and analyse its change in value over time. The application uses CoinMarketCap’s API to get live market data and update it periodically.'
          liveLink='http://206.189.234.247:5051/'
          githubLink='https://github.com/saulmaldonado/CryptoTracker'
          imageFile={cryptotracker}
        />
        <Project
          title='Done With It'
          desc="A mobile React Native app for posting and selling items you don't need anymore. Users are able to post listings and and upload photos from the device's photo library."
          githubLink='https://github.com/saulmaldonado/grocery-store'
          liveLink='https://expo.io/@saulmaldonado/DoneWithIt'
          imageFile={donewithit}
        />
      </div>
    </section>
  );
};

export default WorksScreen;
