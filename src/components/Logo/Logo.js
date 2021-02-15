import React from 'react';
import PropTypes from 'prop-types';

import classes from './Logo.module.css';
import BurgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={BurgerLogo} alt='MyBurgerLogo' />
  </div>
);

logo.propTypes = {
  height: PropTypes.string,
};

export default logo;
