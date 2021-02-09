import React from 'react';
import PropTypes from 'prop-types';

import classes from './Backdrop.module.css';

const backdrop = (props) => {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.changed}></div>
  ) : null;
};

backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  changed: PropTypes.func.isRequired,
};

export default backdrop;
