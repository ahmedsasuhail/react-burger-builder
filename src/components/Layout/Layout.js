import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import classes from './Layout.module.css';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <Fragment>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Fragment>
);

layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default layout;
