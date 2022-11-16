import React, { Component } from "react";

import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Footer from "./Footer";

import "./TodoApp.css";

export default class TodoApp extends Component {
  maxId = 1;

  state = {
    filter: "",
    todoData: [this.createTodoItem("Completed task"), this.createTodoItem("Editing task"), this.createTodoItem("Active task")],
  };

  createTodoItem(label) {
    return {
      label,
      checked: false,
      id: this.maxId++,
    };
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, checked: !oldItem.checked };
      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  setClearComplitedTodo = () => {
    this.setState(({ todoData }) => {
      return { todoData: todoData.filter((el) => !el.checked) };
    });
  };

  filterFunc(todoData, filter) {
    if (filter === "active") {
      return todoData.filter((el) => !el.checked);
    }
    if (filter === "completed") {
      return todoData.filter((el) => el.checked);
    }
    return todoData;
  }

  onFilterChange = (filter) => this.setState({ filter });

  render() {
    const { todoData, filter } = this.state;

    const checkedCount = todoData.filter((el) => el.checked).length;
    const todoCount = todoData.length - checkedCount;
    const filterStatus = this.filterFunc(todoData, filter);

    return (
      <section className="todoapp">
        <NewTaskForm addItem={this.addItem} />

        <section className="main">
          <TaskList
            todos={filterStatus}
            onDeleted={(id) => {
              this.deleteItem(id);
            }}
            onToggleDone={this.onToggleDone}
          />
          <Footer todoCount={todoCount} filter={filter} onFilterChange={this.onFilterChange} setClearComplitedTodo={this.setClearComplitedTodo} />
        </section>
      </section>
    );
  }
}
