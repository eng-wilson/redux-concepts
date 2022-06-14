import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTask } from "../../store/actions";

import "./styles.css";

function Home() {
  const { taskList } = useSelector((state) => state.tasks);
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    if (newTask !== "") {
      dispatch(addTask(newTask));
    }

    e.preventDefault();
  };

  return (
    <main className="container">
      <h1>TASKER</h1>
      <div className="content">
        <form className="form-wrapper" action="">
          <input
            type="text"
            name="task"
            placeholder="Qual a próxima tarefa?"
            onChange={(e) => setNewTask(e.target.value)}
          />

          <button onClick={(e) => handleAddTask(e)}>+</button>
        </form>

        <span>Minhas tarefas - {taskList.length}</span>

        {taskList.length > 0 && (
          <ul>
            {taskList.map((task) => (
              <li>{task}</li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

export default Home;
