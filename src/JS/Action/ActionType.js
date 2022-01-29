import { ADD_TASK, DELETE_TASK, DONE_TASK } from "../Action Type/Task";

export const AddTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};

export const DeleteTask = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};

export const DoneTask = (payload) => {
  return {
    type: DONE_TASK,
    payload,
  };
};
