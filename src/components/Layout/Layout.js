import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import classes from './Layout.module.css';

const layout = (props) => (
  <Fragment>
    <div>Toolbar, Sidebar and Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Fragment>
);

layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default layout;
