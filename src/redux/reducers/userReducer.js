import * as types from "../actions/Types";
const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case types.USER_SIGNUP_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
