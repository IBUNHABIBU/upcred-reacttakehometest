import actionTypes from '../constants';

const initialState = {
  isLogged: false,
  name: '',
  email: '',
  accessToken: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FB_LOGIN:
    case actionTypes.GOOGLE_LOGIN:
      return {
        ...state,
        accessToken: payload.accessToken,
        name: payload.name,
        email: payload.email,
        isLogged: true,
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        accessToken: null,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default userReducer;
