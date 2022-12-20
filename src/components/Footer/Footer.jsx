import React from 'react'
import PropTypes from 'prop-types'

import TaskFilter from '../TaskFilter'

import './Footer.css'

const Footer = ({ filterName, todoCount, onFilterChange, setClearComplitedTodo }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <TaskFilter
        filterName={filterName}
        onFilterChange={onFilterChange}
        setClearComplitedTodo={() => {
          setClearComplitedTodo()
        }}
      />
    </footer>
  )
}

Footer.defaultProps = {
  filterName: 'all',
  onFilterChange: () => {},
  setClearComplitedTodo: () => {},
}

Footer.propTypes = {
  todoCount: PropTypes.number,
  filterName: PropTypes.string,
  onFilterChange: PropTypes.func,
  setClearComplitedTodo: PropTypes.func,
}

export default Footer
