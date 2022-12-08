import React, { Component } from 'react'

import NewTaskForm from './NewTaskForm'
import TaskList from './TaskList'
import Footer from './Footer'

import './TodoApp.css'

export default class TodoApp extends Component {
  maxId = 1

  state = {
    todoData: [
      this.createTodoItem('learn HTML & CSS'),
      this.createTodoItem('learn JavaScript'),
      this.createTodoItem('learn React & TS'),
    ],
  }

  createTodoItem(label, min = 0, sec = 0) {
    return {
      label,
      min,
      sec,
      checked: false,
      id: this.maxId++,
      filter: '',
      createDate: new Date(),
      editing: false,
    }
  }

  addItem = (text, min, sec) => {
    if (text && (min || sec)) {
      const newTask = this.createTodoItem(text, Number(min), Number(sec))
      this.setState(({ todoData }) => {
        const newArray = [...todoData, newTask]
        return {
          todoData: newArray,
        }
      })
    }
  }

  addEditingItem = (text, id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.map((task) => {
          return task.id === id ? { ...task, label: text ? text : task.label, editing: !task.editing } : task
        }),
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((task) => task.id !== id),
      }
    })
  }

  itemProperty = (arr, id, PropName) => {
    return arr.map((task) => (task.id === id ? { ...task, [PropName]: !task[PropName] } : task))
  }

  onCheckedItem = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.itemProperty(todoData, id, 'checked') }
    })
  }

  onEditingItem = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.itemProperty(todoData, id, 'editing') }
    })
  }

  setClearComplitedTodo = () => {
    this.setState(({ todoData }) => {
      return { todoData: todoData.filter((task) => !task.checked) }
    })
  }

  filterFunc(todoData, filter) {
    if (filter === 'active') {
      return todoData.filter((task) => !task.checked)
    }
    if (filter === 'completed') {
      return todoData.filter((task) => task.checked)
    }
    return todoData
  }

  onFilterChange = (filter) => this.setState({ filter })

  render() {
    const { todoData, filter, createDate, editing, min, sec } = this.state

    const checkedCount = todoData.filter((task) => task.checked).length
    const todoCount = todoData.length - checkedCount
    const filterStatus = this.filterFunc(todoData, filter)

    return (
      <section className="todoapp">
        <NewTaskForm addItem={this.addItem} />

        <section className="main">
          <TaskList
            todos={filterStatus}
            edit={editing}
            min={min}
            sec={sec}
            onEditingItem={(id) => {
              this.onEditingItem(id)
            }}
            onDeleted={(id) => {
              this.deleteItem(id)
            }}
            onCheckedItem={this.onCheckedItem}
            dataCreated={createDate}
            addEditingItem={this.addEditingItem}
          />
          <Footer
            todoCount={todoCount}
            filter={filter}
            onFilterChange={this.onFilterChange}
            setClearComplitedTodo={this.setClearComplitedTodo}
          />
        </section>
      </section>
    )
  }
}
