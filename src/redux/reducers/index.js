import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productsReducer from './productsReducer';
import cartsReducer from './cartsReducer';

const reducers = combineReducers({
  user: userReducer,
  products: productsReducer,
  carts: cartsReducer,
});

export default reducers;
