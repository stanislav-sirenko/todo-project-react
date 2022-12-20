import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import NewTaskForm from './NewTaskForm'
import TaskList from './TaskList'
import Footer from './Footer'

import './TodoApp.css'

const TodoApp = () => {
  const createTodoItem = (label, min = 0, sec = 0) => {
    return {
      label,
      min,
      sec,
      checked: false,
      id: uuidv4(),
      createDate: new Date(),
      editing: false,
    }
  }

  const [todoData, setTodoData] = useState([
    createTodoItem('learn HTML & CSS'),
    createTodoItem('learn JavaScript'),
    createTodoItem('learn React & TS'),
  ])

  const [filterName, setFilter] = useState('all')

  const addItem = (text, min, sec) => {
    if (text && (min || sec)) {
      const newTask = createTodoItem(text, Number(min), Number(sec))
      setTodoData((Data) => [...Data, newTask])
    }
  }

  const addEditingItem = (text, id) => {
    setTodoData((Data) =>
      Data.map((task) => (task.id === id ? { ...task, label: text ? text : task.label, editing: !task.editing } : task))
    )
  }

  const deleteItem = (id) => {
    setTodoData((Data) => Data.filter((task) => task.id !== id))
  }

  const itemProperty = (arr, id, PropName) => {
    return arr.map((task) => (task.id === id ? { ...task, [PropName]: !task[PropName] } : task))
  }

  const onCheckedItem = (id) => {
    setTodoData((Data) => itemProperty(Data, id, 'checked'))
  }

  const onEditingItem = (id) => {
    setTodoData((Data) => itemProperty(Data, id, 'editing'))
  }

  const setClearComplitedTodo = () => {
    setTodoData((Data) => Data.filter((task) => !task.checked))
  }

  const filterFunc = (todoData, filterName) => {
    if (filterName === 'active') {
      return todoData.filter((task) => !task.checked)
    }
    if (filterName === 'completed') {
      return todoData.filter((task) => task.checked)
    }
    return todoData
  }

  const onFilterChange = (filterName) => setFilter(filterName)

  const checkedCount = todoData.filter((task) => task.checked).length
  const todoCount = todoData.length - checkedCount
  const filterStatus = filterFunc(todoData, filterName)

  return (
    <section className="todoapp">
      <NewTaskForm addItem={addItem} />

      <section className="main">
        <TaskList
          todos={filterStatus}
          onEditingItem={(id) => {
            onEditingItem(id)
          }}
          onDeleted={(id) => {
            deleteItem(id)
          }}
          onCheckedItem={onCheckedItem}
          addEditingItem={addEditingItem}
        />
        <Footer
          todoCount={todoCount}
          filterName={filterName}
          onFilterChange={onFilterChange}
          setClearComplitedTodo={setClearComplitedTodo}
        />
      </section>
    </section>
  )
}

export default TodoApp
