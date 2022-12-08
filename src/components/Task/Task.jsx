import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import Timer from '../Timer/Timer'

import './Task.css'

export default class Task extends Component {
  state = {
    label: '',
  }

  static defaultProps = {
    onDeleted: () => {},
    onEditingItem: () => {},
    onToggleDone: () => {},
    onSubmitTask: () => {},
    onLabelEditTask: () => {},
    createDate: () => {},
  }

  static propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    onDeleted: PropTypes.func,
    onEditingItem: PropTypes.func,
    editing: PropTypes.bool,
    onToggleDone: PropTypes.func,
    createDate: PropTypes.instanceOf(Date),
  }

  onLabelEditTask = (event) => {
    this.setState({
      label: event.target.value,
    })
  }

  onSubmitTask = (event) => {
    event.preventDefault()
    this.props.addEditingItem(this.state.label)
    this.setState({
      label: '',
    })
  }

  render() {
    const { id, label, checked, onDeleted, onEditingItem, editing, onCheckedItem, createDate, min, sec } = this.props

    const createTime = formatDistanceToNow(createDate, { includeSeconds: true })
    const classEdit = editing ? 'editing' : checked ? 'completed' : ''
    const editInput = (
      <form onSubmit={this.onSubmitTask}>
        <label>
          ToDo:
          <input type="text" className="edit" onChange={this.onLabelEditTask} defaultValue={label} autoFocus />
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
                <Timer key={id} min={min} sec={sec} />
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
}
