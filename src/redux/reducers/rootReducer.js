import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import newTodoReducer from "./newTodoReducer";
import searchQueryReducer from "./searchQueryReducer";
import sortReducer from "./sortReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  newTodo: newTodoReducer,
  searchQuery: searchQueryReducer,
  sort: sortReducer,
});

export default rootReducer;
