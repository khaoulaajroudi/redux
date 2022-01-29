import { TaskReducer } from "../Reducer/TaskReducer";
import { createStore } from "redux";

const store = createStore(
  TaskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
