import { authActionTypes } from './';

export const getPosts = () => async dispatch => {
  try {
    dispatch({
      type: authActionTypes.AUTH,
      payload: {},
    });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = post => async dispatch => {
  try {
    dispatch({
      type: authActionTypes.LOGOUT,
      payload: {},
    });
  } catch (error) {
    console.log(error);
  }
};
