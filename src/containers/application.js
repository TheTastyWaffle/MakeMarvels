import React from 'react';
import { Provider } from 'react-redux';
import Store from '../store';
import HeroList from './hero/list';
import AddHero from '../components/hero/add';

const Application = () => (
  <div>
    <HeroList />
    <AddHero />
  </div>
);

export default Application;