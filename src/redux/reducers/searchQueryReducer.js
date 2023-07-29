import * as types from "../actions/types";

const initialState = "";

const searchQueryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
};

export default searchQueryReducer;
