import actionTypes from "../constants";

const initialState = {};

const userReducer = (state=initialState, {type, payload}) => {
    switch(type) {
        case actionTypes.SET_USER:
            return { ...state, ...payload};
        default:
            return state;
    }
    }
}