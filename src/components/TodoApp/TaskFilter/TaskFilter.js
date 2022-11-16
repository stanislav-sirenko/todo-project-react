import React, { Component } from "react";

import "./TaskFilter.css";

export default class TaskFilter extends Component {
  buttonsTodo = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "completed", label: "Completed" },
  ];

  render() {
    const { filter, onFilterChange, setClearComplitedTodo } = this.props;

    const buttons = this.buttonsTodo.map(({ name, label }) => {
      const isActive = name === filter;
      const classIsActive = isActive ? "selected" : "";

      return (
        <button type="button" key={name} className={classIsActive} onClick={() => onFilterChange(name)}>
          {label}
        </button>
      );
    });
    return (
      <ul className="filters">
        <li>{buttons}</li>
        <li>
          <button onClick={setClearComplitedTodo}>Clear completed</button>
        </li>
      </ul>
    );
  }
}
