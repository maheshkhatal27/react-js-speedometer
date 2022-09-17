import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increaseSpeed = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({
        speed: prevState.speed + 10,
      }))
    }
  }

  decreaseSpeed = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="speedometer-container">
        <h1 className="main-heading">SPEEDOMTER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer-img"
          alt="speedometer"
        />
        <div className="speedometer-container">
          <h1 className="heading">Speed is {speed}mph</h1>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        </div>
        <div className="button-container">
          <button
            className="button accelerate-button"
            onClick={this.increaseSpeed}
          >
            Accelerate
          </button>
          <button className="button apply-button" onClick={this.decreaseSpeed}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
