import React from 'react';
import { connect } from 'react-redux';
import { remove as removeHero } from '../../actions/hero';
import Button from '../button';

const HeroButtonRemove = ({ id, dispatch }) => (
  <Button
    symbol={"-"}
    onClick={() => dispatch(removeHero(id))}
    color={"red"}
  />
);

export default connect()(HeroButtonRemove);