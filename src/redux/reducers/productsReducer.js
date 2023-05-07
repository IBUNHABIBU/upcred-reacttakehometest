import actionTypes from '../constants';

const initialState = [];

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_PRODUCTS:
      return [...payload];
    default:
      return state;
  }
};

export default productsReducer;
