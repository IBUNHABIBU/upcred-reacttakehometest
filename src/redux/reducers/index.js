import { combineReducers } from 'redux';

const reducers = combineReducers({
    user: userReducer,
    products: productsReducer,
})

export default reducers;