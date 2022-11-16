import React from "react";

import Task from "../Task";

import "./TaskList.css";

const TaskList = ({ todos, onDeleted, onToggleDone }) => {
  const elements = todos.map((i) => {
    const { id, ...allProps } = i;

    return (
      <Task
        key={id}
        {...allProps}
        onDeleted={() => {
          onDeleted(id);
        }}
        onToggleDone={() => onToggleDone(id)}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
