import React, { Component } from "react";

import TaskFilter from "../TaskFilter";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    const { todoCount, filter, onFilterChange, setClearComplitedTodo } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{todoCount} items left</span>
        <TaskFilter
          filter={filter}
          onFilterChange={onFilterChange}
          setClearComplitedTodo={() => {
            setClearComplitedTodo();
          }}
        />
      </footer>
    );
  }
}
