import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './NewTaskForm.css'

const NewTaskForm = ({ addItem }) => {
  const [label, setLabel] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  const onLabelChange = (event) => {
    if (event.target.value.charAt(0) === ' ') {
      setLabel('')
    } else {
      setLabel(event.target.value)
    }
  }

  const onMinChange = (event) => {
    setMin(event.target.value)
  }

  const onSecChange = (event) => {
    setSec(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    addItem(label, min, sec)
    setLabel('')
    setMin('')
    setSec('')
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form" onSubmit={onSubmit}>
        <input type="text" className="new-todo" onChange={onLabelChange} placeholder="Task" value={label} autoFocus />
        <input
          type="number"
          className="new-todo-form__timer"
          onChange={onMinChange}
          placeholder="Min"
          autoFocus
          value={min}
        />
        <input
          type="number"
          className="new-todo-form__timer"
          onChange={onSecChange}
          placeholder="Sec"
          autoFocus
          value={sec}
        />
        <input
          type="submit"
          className="new-todo-form-button"
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
          tabIndex="-1"
        />
      </form>
    </header>
  )
}

NewTaskForm.defaultProps = {
  onLabelChange: () => {},
  onSubmit: () => {},
}

NewTaskForm.propTypes = {
  onLabelChange: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default NewTaskForm
