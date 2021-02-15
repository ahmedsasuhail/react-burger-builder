import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import BackDrop from '../../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.show) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Fragment>
      <BackDrop show={props.show} changed={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.LogoOnSideDrawer}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

sideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
  closed: PropTypes.func.isRequired,
};

export default sideDrawer;
