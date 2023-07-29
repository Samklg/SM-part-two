import * as types from "../actions/types";

const initialState = false;

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SORT:
      return !state;
    default:
      return state;
  }
};

export default sortReducer;
