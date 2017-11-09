import React from 'react';
import HeroButtonRemove from './remove';

const HeroItem = ({ data }) => (
  <li>
    <HeroButtonRemove id={data.id}/>
    <span>{data.name}</span>
  </li>
);

export default HeroItem;