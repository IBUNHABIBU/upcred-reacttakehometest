import actionTypes from '../constants';

export const loginFacebook = (response) => ({
  type: actionTypes.FB_LOGIN,
  payload: response,
});

export const loginGoogle = (response) => ({
  type: actionTypes.GOOGLE_LOGIN,
  payload: response,
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
});

export const setUser = (response) => ({
  type: actionTypes.SET_USER,
  payload: response,
});

export const addProducts = (products) => ({
  type: actionTypes.ADD_PRODUCTS,
  payload: products,
});

export const addToCart = (cart) => ({
  type: actionTypes.ADD_TO_CART,
  payload: cart,
});
