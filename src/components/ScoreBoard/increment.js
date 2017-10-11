import React, { Component } from "react";
import PropTypes from "prop-types";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamOneScore: 0,
      teamTwoScore: 0
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var self = this;
    // On submit of the form, send a POST request with the data to the server.
    fetch("http://localhost:3333/livefeed/media/api", {
      method: "POST",
      body: {
        teamOneScore: self.state.teamOneScore,
        teamTwoScore: self.state.teamTwoScore
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(body) {
        console.log(body);
      });
  }

  onIncrementTeamOne = e => {
    this.setState({
      teamOneScore: (this.state.teamOneScore += 1)
    });
  };

  onDecrementTeamOne = e => {
    if (this.state.teamOneScore >= 1) {
      this.setState({
        teamOneScore: (this.state.teamOneScore -= 1)
      });
    } else {
      this.state.teamOneScore === 0;
    }
  };

  onIncrementTeamTwo = e => {
    this.setState({
      teamTwoScore: (this.state.teamTwoScore += 1)
    });
  };

  onDecrementTeamTwo = e => {
    if (this.state.teamTwoScore >= 1) {
      this.setState({
        teamTwoScore: (this.state.teamTwoScore -= 1)
      });
    } else {
      this.state.teamTwoScore === 0;
    }
  };

  render() {
    return (
      <div className="d-flex justify-content-between scoreContainer scoreBackground h-100 p-3">
        <div>
          <div className="d-flex flex-column">
            <h1 className="p-2 text-center customScore">Team 1</h1>
            <h1 className="p-2 text-center customScore">
              {this.state.teamOneScore}
            </h1>{" "}
            <button onClick={this.onIncrementTeamOne}>+</button>{" "}
            <button onClick={this.onDecrementTeamOne}>-</button>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="customScore p-2">1st</h1>
            <input type="submit" value="Update" className="p-2 text-center" onClick={this.handleSubmit} />
          </div>
        </div>

        <div>
          <div className="d-flex flex-column">
            <h1 className="p-2 text-center customScore">Team 1</h1>
            <h1 className="p-2 text-center customScore">
              {this.state.teamTwoScore}
            </h1>{" "}
            <button onClick={this.onIncrementTeamTwo}>+</button>{" "}
            <button onClick={this.onDecrementTeamTwo}>-</button>
          </div>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Counter;
