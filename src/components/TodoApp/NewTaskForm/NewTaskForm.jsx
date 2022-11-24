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

  onLabelChange = (e) => {
    if (e.target.value.charAt(0) === ' ') {
      this.setState({
        label: '',
      })
    } else {
      this.setState({
        label: e.target.value,
      })
    }
  }

  onSubmit = (e) => {
    const { addItem } = this.props
    const { label } = this.state
    e.preventDefault()
    addItem(label)
    this.setState({
      label: '',
    })
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="new-todo"
            onChange={this.onLabelChange}
            placeholder="What needs to be done?"
            value={this.state.label}
            autoFocus
          />
        </form>
      </header>
    )
  }
}
