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

  componentDidMount = function() {
    fetch("http://localhost:3333/livefeed/media/api")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          teamOneScore: responseJson.teamOneScore,
          teamTwoScore: responseJson.teamTwoScore
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleGameOver = e => {
    fetch("http://localhost:3333/livefeed/final", {
      method: "POST",
      body: {
        teamOneScore: this.state.teamOneScore,
        teamTwoScore: this.state.teamTwoScore
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(body) {
        console.log(body);
        this.setState({
          teamOneScore: 0,
          teamTwoScore: 0
        });
      });
  };

  render() {
    return (
      <div className="d-flex justify-content-between scoreContainer scoreBackground h-100 p-3">
        <div>
          <div className="d-flex flex-column customContainer">
            <h1 className="p-2 text-center customScore">Home</h1>
            <h1 className="p-2 text-center customScore">
              {this.state.teamOneScore}
            </h1>{" "}
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="customScore p-2 text-center">1st</h1>
            <input
              type="submit"
              value="Game Over"
              className="p-2 text-center"
              onClick={this.handleGameOver}
            />
          </div>
        </div>

        <div>
          <div className="d-flex flex-column customContainer">
            <h1 className="p-2 text-center customScore">Away</h1>
            <h1 className="p-2 text-center customScore">
              {this.state.teamTwoScore}
            </h1>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
