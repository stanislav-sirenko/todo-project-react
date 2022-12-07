import React, { Component } from 'react'

import './Timer.css'

export default class Timer extends Component {
  state = {
    min: this.props.min,
    sec: this.props.sec,
  }

  tick = () => {
    this.setState((state) => ({
      sec: state.sec === 0 ? 60 - 1 : state.sec - 1,
      min: state.sec === 0 ? state.min - 1 : state.min,
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { min, sec } = this.state
    return (
      <>
        <button className="icon icon-play" onClick={console.log('hi')}></button>
        <button className="icon icon-pause"></button>
        <span className="total-time">
          {min}:{sec}
        </span>
      </>
    )
  }
}
