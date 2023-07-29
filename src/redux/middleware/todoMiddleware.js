import { setTodos } from "../actions/todoActions";

export const fetchTodos = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/todos")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setTodos(data));
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  };
};
