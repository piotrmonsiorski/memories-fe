import { actionTypes } from '../actions';

const initialState = [];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL:
      return action.payload;
    case actionTypes.CREATE:
      return [...state, action.payload];
    case actionTypes.UPDATE:
      return state.map(post =>
        post._id === action.payload._id ? action.payload : post
      );
    case actionTypes.DELETE:
      return state.filter(post => post._id !== action.payload);
    default:
      return state;
  }
};

export default postsReducer;
