import React from 'react'
import PropTypes from 'prop-types'

import './TaskFilter.css'

const TaskFilter = ({ filterName, onFilterChange, setClearComplitedTodo }) => {
  const buttonsTodo = [
    { buttonName: 'all', label: 'All' },
    { buttonName: 'active', label: 'Active' },
    { buttonName: 'completed', label: 'Completed' },
  ]

  const buttons = buttonsTodo.map(({ buttonName, label }) => {
    const isActive = filterName === buttonName
    const classIsActive = isActive ? 'selected' : ''

    return (
      <button
        type="button"
        key={buttonName}
        className={classIsActive}
        aria-label="filter"
        onClick={() => onFilterChange(buttonName)}
      >
        {label}
      </button>
    )
  })
  return (
    <ul className="filters">
      <li>{buttons}</li>
      <li>
        <button type="button" aria-label="clear complited" onClick={setClearComplitedTodo}>
          Clear completed
        </button>
      </li>
    </ul>
  )
}

TaskFilter.defaultProps = {
  filterName: 'all',
  onFilterChange: () => {},
  setClearComplitedTodo: () => {},
}

TaskFilter.propTypes = {
  filterName: PropTypes.string,
  onFilterChange: PropTypes.func,
  setClearComplitedTodo: PropTypes.func,
}

export default TaskFilter

// export default class TaskFilter extends Component {
//   static defaultProps = {
//     filter: 'all',
//     onFilterChange: () => {},
//     setClearComplitedTodo: () => {},
//   }

//   static propTypes = {
//     filter: PropTypes.string,
//     onFilterChange: PropTypes.func,
//     setClearComplitedTodo: PropTypes.func,
//   }

//   buttonsTodo = [
//     { name: 'all', label: 'All' },
//     { name: 'active', label: 'Active' },
//     { name: 'completed', label: 'Completed' },
//   ]

//   render() {
//     const { filter, onFilterChange, setClearComplitedTodo } = this.props

//     const buttons = this.buttonsTodo.map(({ name, label }) => {
//       const isActive = name === filter
//       const classIsActive = isActive ? 'selected' : ''

//       return (
//         <button
//           type="button"
//           key={name}
//           className={classIsActive}
//           aria-label="filter"
//           onClick={() => onFilterChange(name)}
//         >
//           {label}
//         </button>
//       )
//     })
//     return (
//       <ul className="filters">
//         <li>{buttons}</li>
//         <li>
//           <button type="button" aria-label="clear complited" onClick={setClearComplitedTodo}>
//             Clear completed
//           </button>
//         </li>
//       </ul>
//     )
//   }
// }
