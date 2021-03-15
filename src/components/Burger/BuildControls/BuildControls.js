import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price : <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.type}
            label={control.label}
            added={() => props.ingredientsAdded(control.type)}
            removed={() => props.ingredientsRemoved(control.type)}
            disabled={props.disabled[control.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>
        {props.isAuthenticated ? 'ORDER NOW' : 'SIGN UP TO ORDER'}
      </button>
    </div>
  );
};

buildControls.propTypes = {
  price: PropTypes.number.isRequired,
  ingredientsAdded: PropTypes.func.isRequired,
  ingredientsRemoved: PropTypes.func.isRequired,
  disabled: PropTypes.object.isRequired,
  purchasable: PropTypes.bool.isRequired,
  ordered: PropTypes.func.isRequired,
};

export default buildControls;
