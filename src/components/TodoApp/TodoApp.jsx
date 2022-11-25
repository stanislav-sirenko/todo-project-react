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

  createTodoItem(label) {
    return {
      label,
      checked: false,
      id: this.maxId++,
      filter: '',
      createDate: new Date(),
      editing: false,
    }
  }

  addItem = (text) => {
    if (text) {
      const newTask = this.createTodoItem(text)
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
        todoData: todoData.filter((el) => el.id !== id),
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
      return { todoData: todoData.filter((el) => !el.checked) }
    })
  }

  filterFunc(todoData, filter) {
    if (filter === 'active') {
      return todoData.filter((el) => !el.checked)
    }
    if (filter === 'completed') {
      return todoData.filter((el) => el.checked)
    }
    return todoData
  }

  onFilterChange = (filter) => this.setState({ filter })

  render() {
    const { todoData, filter, createDate, editing } = this.state

    const checkedCount = todoData.filter((el) => el.checked).length
    const todoCount = todoData.length - checkedCount
    const filterStatus = this.filterFunc(todoData, filter)

    return (
      <section className="todoapp">
        <NewTaskForm addItem={this.addItem} />

        <section className="main">
          <TaskList
            todos={filterStatus}
            edit={editing}
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
