import React from 'react';
import PropTypes from 'prop-types';

import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
  <div onClick={props.clicked} className={classes.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

drawerToggle.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default drawerToggle;
