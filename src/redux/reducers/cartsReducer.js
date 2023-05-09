import actionTypes from '../constants';

const initialState = {};

const cartsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      return { ...payload };
    default:
      return state;
  }
};

export default cartsReducer;
