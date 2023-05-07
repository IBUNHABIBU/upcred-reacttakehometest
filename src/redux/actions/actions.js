import actionTypes from '../constants';

const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: user,
});

export default setUser;
