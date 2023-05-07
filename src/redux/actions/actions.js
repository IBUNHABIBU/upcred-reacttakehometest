import actionTypes from '../constants';

export const loginFacebook = (response) => ({
  type: actionTypes.FB_LOGIN,
  payload: response,
});

export const loginGoogle = (response) => ({
  type: actionTypes.GOOGLE_LOGIN,
  payload: response,
});

