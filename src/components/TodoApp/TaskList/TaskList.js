import React from "react";

import Task from "../Task";

import "./TaskList.css";

const TaskList = ({ todos, onDeleted, onEditingItem, onToggleDone, createDate, addEditingItem }) => {
  const elements = todos.map((i) => {
    const { id, label, ...allProps } = i;

    return (
      <Task
        key={id}
        {...allProps}
        label={label}
        onEditingItem={() => {
          onEditingItem(label);
        }}
        onDeleted={() => {
          onDeleted(id);
        }}
        onToggleDone={() => onToggleDone(id)}
        dataCreated={createDate}
        addEditingItem={(text) => addEditingItem(text, id)}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
