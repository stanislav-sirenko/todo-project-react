import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './NewTaskForm.css'

export default class NewTaskForm extends Component {
  state = {
    label: '',
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

  onSubmit = (event) => {
    const { addItem } = this.props
    const { label } = this.state
    event.preventDefault()
    addItem(label)
    this.setState({
      label: '',
    })
  }

  render() {
    const { label } = this.state
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            <input
              type="text"
              className="new-todo"
              onChange={this.onLabelChange}
              placeholder="What needs to be done?"
              value={label}
              autoFocus
            />
          </label>
        </form>
      </header>
    )
  }
}
