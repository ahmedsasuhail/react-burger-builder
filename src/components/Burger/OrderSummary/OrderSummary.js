import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (ingredientKey) =>
      props.ingredients[ingredientKey] !== 0 && (
        <li key={ingredientKey}>
          <strong>{ingredientKey}</strong>: {props.ingredients[ingredientKey]}
        </li>
      )
  );
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price : {props.price}</strong>
      </p>
      <p>Proceed to order?</p>
      <Button btnType='Danger' clicked={props.purchaseCancelled}>
        Cancel
      </Button>
      <Button btnType='Success' clicked={props.purchaseContinued}>
        Continue
      </Button>
    </Fragment>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  purchaseCancelled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
};

export default orderSummary;
