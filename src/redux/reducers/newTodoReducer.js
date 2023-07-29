import * as types from "../actions/types";

const initialState = "";

const newTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_NEW_TODO:
      return action.payload;
    default:
      return state;
  }
};

export default newTodoReducer;
