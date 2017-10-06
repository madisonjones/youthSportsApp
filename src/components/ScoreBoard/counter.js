import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);
    
  }


  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div className="d-flex justify-content-between scoreContainer scoreBackground">
      <div>
        <div className="d-flex flex-column">
          <h1 className="p-2 text-center customScore">Team 1</h1>
          <h1 className="p-2 text-center customScore">{value}</h1>
          {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <div className="d-flex justify-content-center">
          <h1 className="customScore">1st</h1>
        </div>
      </div>

      <div>
        <div className="d-flex flex-column">
          <h1 className="p-2 text-center customScore">Team 1</h1>
          <h1 className="p-2 text-center customScore">{value}</h1>
        </div>
      </div>
    </div>
      
    )
  }
}




Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
