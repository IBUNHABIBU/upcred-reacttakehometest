import actionTypes from "../constants"

const setUser = (user) => {
    return {
        type: actionTypes.SET_USER,
        payload: user
    }
}

export default setUser;