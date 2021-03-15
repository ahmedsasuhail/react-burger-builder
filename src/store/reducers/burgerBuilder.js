import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

const addIngredient = (state, action) => {
  const updatedIngredient_add = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients_add = updateObject(
    state.ingredients,
    updatedIngredient_add
  );
  const updatedState_add = {
    ingredients: updatedIngredients_add,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updateObject(state, updatedState_add);
};

const removeIngredient = (state, action) => {
  const updatedIngredient_remove = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedIngredients_remove = updateObject(
    state.ingredients,
    updatedIngredient_remove
  );
  const updatedState_remove = {
    ingredients: updatedIngredients_remove,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updateObject(state, updatedState_remove);
};

const setIngredient = (state, action) => {
  return updateObject(state, {
    ingredients: action.ingredients,
    error: false,
    totalPrice: 4,
    building: false,
  });
};

const setIngredientFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredient(state, action);
    case actionTypes.SET_INGREDIENTS_FAILED:
      return setIngredientFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
