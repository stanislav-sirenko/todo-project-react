import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import Timer from '../Timer/Timer'

import './Task.css'

const Task = ({
  id,
  label,
  checked,
  onDeleted,
  onEditingItem,
  addEditingItem,
  editing,
  onCheckedItem,
  createDate,
  min,
  sec,
}) => {
  const [labelTask, setLabelTask] = useState('')

  const onLabelEditTask = (event) => {
    setLabelTask(event.target.value)
  }

  const onSubmitTask = (event) => {
    event.preventDefault()
    addEditingItem(labelTask)
    setLabelTask('')
  }

  const createTime = formatDistanceToNow(createDate, { includeSeconds: true })
  const classEdit = editing ? 'editing' : checked ? 'completed' : ''
  const editInput = (
    <form onSubmit={onSubmitTask}>
      <label>
        ToDo:
        <input type="text" className="edit" onChange={onLabelEditTask} defaultValue={label} autoFocus />
      </label>
    </form>
  )

  return (
    <li key={id} className={classEdit}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={checked}
          onChange={() => {
            onCheckedItem()
          }}
        />
        <label>
          <span
            className="title"
            onClick={() => {
              onCheckedItem()
            }}
          >
            {label}
          </span>
          <div className="wrap-description">
            <span className="description">
              <Timer min={min} sec={sec} />
            </span>
            <span className="created">created {createTime} ago</span>
          </div>
        </label>
        <button className="icon icon-edit" aria-label="edit" title="edit" onClick={onEditingItem} />
        <button className="icon icon-destroy" aria-label="destroy" title="destroy" onClick={onDeleted} />
      </div>
      {editing && editInput}
    </li>
  )
}

Task.defaultProps = {
  onDeleted: () => {},
  onEditingItem: () => {},
  onToggleDone: () => {},
  onSubmitTask: () => {},
  onLabelEditTask: () => {},
  createDate: () => {},
}

Task.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onDeleted: PropTypes.func,
  onEditingItem: PropTypes.func,
  editing: PropTypes.bool,
  onToggleDone: PropTypes.func,
  createDate: PropTypes.instanceOf(Date),
}

export default Task
