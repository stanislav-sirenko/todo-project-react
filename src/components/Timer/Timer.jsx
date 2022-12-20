import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './Timer.css'

const Timer = ({ min, sec }) => {
  const [paused, setPaused] = useState(false)
  const [[minutes, seconds], setTime] = useState([min, sec])

  const tick = () => {
    if (paused) return

    if (minutes === 0 && seconds === 0) {
      setPaused(true)
    } else if (seconds == 0) {
      setTime([minutes - 1, 59])
    } else {
      setTime([minutes, seconds - 1])
    }
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)
    return () => clearInterval(timerID)
  })

  return (
    <span className="description">
      <button type="button" className="icon icon-play" onClick={() => setPaused(false)} />
      <button type="button" className="icon icon-pause" onClick={() => setPaused(true)} />
      <span className="timer">
        {minutes.toString().padStart(2, '0')} min {seconds.toString().padStart(2, '0')} sec
      </span>
    </span>
  )
}

export default Timer

Timer.defaultProps = {
  update: () => {},
  startTimer: () => {},
  stopTimer: () => {},
}

Timer.propTypes = {
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  zero: PropTypes.bool,
  active: PropTypes.bool,
  update: PropTypes.func,
  startTimer: PropTypes.func,
  stopTimer: PropTypes.func,
}
