import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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

orderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

export default orderSummary;
