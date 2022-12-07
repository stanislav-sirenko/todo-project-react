import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './NewTaskForm.css'

export default class NewTaskForm extends Component {
  state = {
    label: '',
    min: '',
    sec: '',
  }

  static defaultProps = {
    onLabelChange: () => {},
    onSubmit: () => {},
  }

  static propTypes = {
    onLabelChange: PropTypes.func,
    onSubmit: PropTypes.func,
  }

  onLabelChange = (event) => {
    if (event.target.value.charAt(0) === ' ') {
      this.setState({
        label: '',
      })
    } else {
      this.setState({
        label: event.target.value,
      })
    }
  }

  onMinChange = (event) => {
    this.setState({
      min: event.target.value,
    })
  }

  onSecChange = (event) => {
    this.setState({
      sec: event.target.value,
    })
  }

  onSubmit = (event) => {
    const { addItem } = this.props
    const { label, min, sec } = this.state
    event.preventDefault()
    addItem(label, min, sec)
    this.setState({
      label: '',
      min: '',
      sec: '',
    })
  }

  render() {
    const { label, min, sec } = this.state
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="new-todo"
            onChange={this.onLabelChange}
            placeholder="Task"
            value={label}
            autoFocus
          />
          <input
            type="number"
            className="new-todo-form__timer"
            onChange={this.onMinChange}
            placeholder="Min"
            autoFocus
            value={min}
          />
          <input
            type="number"
            className="new-todo-form__timer"
            onChange={this.onSecChange}
            placeholder="Sec"
            autoFocus
            value={sec}
          />
          <input type="submit" className="new-todo-form-button" />
        </form>
      </header>
    )
  }
}
