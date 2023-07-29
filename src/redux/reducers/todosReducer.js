import * as types from "../actions/types";

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TODOS:
      return action.payload;
    case types.ADD_TODO:
      return [...state, action.payload];
    case types.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todosReducer;
