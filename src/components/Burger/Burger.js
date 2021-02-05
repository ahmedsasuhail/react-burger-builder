import React from 'react';
import PropTypes from 'prop-types';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const parsedIngredients = Object.keys(props.ingredients).map(
    (ingredientKey) => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return (
          <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        );
      });
    }
  );
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={'bread-top'} />
      {parsedIngredients}
      <BurgerIngredient type={'bread-bottom'} />
    </div>
  );
};

burger.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

export default burger;
