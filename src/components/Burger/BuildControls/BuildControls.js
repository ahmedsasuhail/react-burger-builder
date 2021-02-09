import React from 'react';

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
      <button className={classes.OrderButton} disabled={!props.purchasable}>
        ORDER
      </button>
    </div>
  );
};

export default buildControls;
