import React, { Fragment } from 'react';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (ingredientKey) => (
      <li>
        <strong>{ingredientKey}</strong>: {props.ingredients[ingredientKey]}
      </li>
    )
  );
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Proceed to order?</p>
    </Fragment>
  );
};

export default orderSummary;
