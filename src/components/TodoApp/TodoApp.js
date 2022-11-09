import React from "react";

import NewTaskForm from "./NewTaskForm";

import "./TodoApp.css";

const todoData = [
  { id: 1, label: "Completed task" },
  { id: 2, label: "Editing task" },
  { id: 3, label: "Active task" },
];

const TodoApp = () => {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus></input>
      </header>
      <NewTaskForm todos={todoData} />
    </section>
  );
};

export default TodoApp;
