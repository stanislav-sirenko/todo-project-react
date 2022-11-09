import React from "react";

import Task from "../Task";

import "./TaskList.css";

const TaskList = ({ todos }) => {
  return (
    <ul className="todo-list">
      <Task todos={todos} />
    </ul>
  );
};

export default TaskList;
