import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Task from '../Task'

import './TaskList.css'

export default class TaskList extends Component {
  static defaultProps = {
    onDeleted: () => {},
    onEditingItem: () => {},
    onToggleDone: () => {},
    addEditingItem: () => {},
  }

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.number,
    label: PropTypes.string,
    onDeleted: PropTypes.func,
    onEditingItem: PropTypes.func,
    onToggleDone: PropTypes.func,
    addEditingItem: PropTypes.func,
    createDate: PropTypes.instanceOf(Date),
  }

  render() {
    const { todos, onDeleted, onEditingItem, onCheckedItem, createDate, addEditingItem } = this.props
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
}
