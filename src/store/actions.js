export function addTask(newTask) {
  return {
    type: "ADD_TASK",
    newTask,
  };
}
