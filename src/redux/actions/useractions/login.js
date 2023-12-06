import * as types from "../Types";

export const login = (data, navigation) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.ACTION_START });
    dispatch({ type: types.ACTION_SUCCESS });
  } catch (error) {
    dispatch({ type: types.ACTION_END });
  }
};
