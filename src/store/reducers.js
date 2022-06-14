import { combineReducers } from "redux";

const initialState = { taskList: [] };

function tasks(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, taskList: [...state.taskList, action.newTask] };
    default:
      return { ...state };
  }
}

export default combineReducers({
  tasks,
});
