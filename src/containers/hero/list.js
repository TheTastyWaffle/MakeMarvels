import React from 'react';
import {connect} from 'react-redux';
import HeroItem from '../../components/hero/item';

const mapStateToProps = (state, ownProps) => ({
    hero: state.hero,
});

const HeroList = ({hero}) => (
    <ul style={{listStyle: 'none', padding: 0}}>
        {
            hero.map(h => <HeroItem key={h.id} data={h}/>)
        }
    </ul>
);

export default connect(mapStateToProps)(HeroList);