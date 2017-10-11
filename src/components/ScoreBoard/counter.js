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
        })
      })
      .catch(error => {
        console.error(error);
      });
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
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="customScore p-2">1st</h1>
            <input
              type="submit"
              value="Update"
              className="p-2 text-center"
              onClick={this.handleSubmit}
            />
          </div>
        </div>

        <div>
          <div className="d-flex flex-column">
            <h1 className="p-2 text-center customScore">Team 1</h1>
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