import React from 'react';
import { connect } from 'react-redux';
import { load as loadHero } from '../../actions/hero';
import Button from '../button';

const onSubmit = (event, dispatch) => {
  event.preventDefault();
  dispatch(loadHero(5));
};

const LoadHero = ({ dispatch }) => {
  return (
    <div>
      <Button
        onClick={e => onSubmit(e, dispatch)}
        color={"lightgreen"}
        symbol={"+"}
      />
    </div>
  )
};

export default connect()(LoadHero);