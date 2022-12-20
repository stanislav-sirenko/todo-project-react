import React from 'react'
import PropTypes from 'prop-types'

import Task from '../Task'

import './TaskList.css'

const TaskList = ({ todos, onDeleted, onEditingItem, onCheckedItem, createDate, addEditingItem }) => {
  const elements = todos.map((task) => {
    const { id, label, ...allProps } = task

    return (
      <Task
        key={id}
        {...allProps}
        label={label}
        onEditingItem={() => {
          onEditingItem(id)
        }}
        onDeleted={() => {
          onDeleted(id)
        }}
        onCheckedItem={() => onCheckedItem(id)}
        dataCreated={createDate}
        addEditingItem={(text) => addEditingItem(text, id)}
      />
    )
  })

  return <ul className="todo-list">{elements}</ul>
}

TaskList.defaultProps = {
  onDeleted: () => {},
  onEditingItem: () => {},
  onToggleDone: () => {},
  addEditingItem: () => {},
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number,
  label: PropTypes.string,
  onDeleted: PropTypes.func,
  onEditingItem: PropTypes.func,
  onToggleDone: PropTypes.func,
  addEditingItem: PropTypes.func,
  createDate: PropTypes.instanceOf(Date),
}

export default TaskList
