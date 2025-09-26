import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io"; 
import { MdDeleteForever } from "react-icons/md"; 
import "./todo.css";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!inputValue) return;

    // Prevent duplicate tasks
    if (tasks.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTasks([...tasks, inputValue]);
    setInputValue("");
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleCheck = (index) => {
    // Toggle completed class using DOM (simple approach)
    const element = document.getElementById(`task-${index}`);
    element.classList.toggle("completed");
  };

  return (
    <section className="todo-container">
      <header>
        <h1>TODO LIST</h1>
      </header>

      <section>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
          />
          <button type="submit" className="todo-btn">
            ADD TASK
          </button>
        </form>
      </section>

      <section className="myUnOrd-list">
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              id={`task-${index}`}
              className="todo-item"
            >
              <span>{task}</span>
              <button className="check-btn" onClick={() => handleCheck(index)}>
                <IoMdCheckmark />
              </button>
              <button className="delete-btn" onClick={() => handleDelete(index)}>
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
