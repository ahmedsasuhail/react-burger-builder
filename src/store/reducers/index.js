import { combineReducers } from 'redux';

import burgerBuilderReducer from './burgerBuilder';
import orderReducer from './order';

const rootReducers = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
});

export default rootReducers;
