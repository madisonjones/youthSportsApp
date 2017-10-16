import React, { Component } from "react";
import PropTypes from "prop-types";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamOneScore: 0,
      teamTwoScore: 0,
      half: 1,
      halfLetter: "1st"
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
        teamTwoScore: self.state.teamTwoScore,
        halfLetter: self.state.halfLetter
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
    e.preventDefault();
    this.setState({
      teamOneScore: (this.state.teamOneScore += 1)
    });
  };

  onDecrementTeamOne = e => {
    e.preventDefault();
    if (this.state.teamOneScore >= 1) {
      this.setState({
        teamOneScore: (this.state.teamOneScore -= 1)
      });
    } else {
      this.state.teamOneScore === 0;
    }
  };

  onIncrementTeamTwo = e => {
    e.preventDefault();
    this.setState({
      teamTwoScore: (this.state.teamTwoScore += 1)
    });
  };

  onDecrementTeamTwo = e => {
    e.preventDefault();
    if (this.state.teamTwoScore >= 1) {
      this.setState({
        teamTwoScore: (this.state.teamTwoScore -= 1)
      });
    } else {
      this.state.teamTwoScore === 0;
    }
  };


  halfParser = (state) => {
    switch(this.state.half) {
      case 1: this.state.halfLetter = "1st";
      break;

      case 2: this.state.halfLetter = "2nd";
      break;

      case 3: this.state.halfLetter = "3rd";
      break;

      case 4: this.state.halfLetter = "4th";
      break;

      case 5: this.state.halfLetter = "5th";
      break;

      case 6: this.state.halfLetter = "6th";
      break;

      case 7: this.state.halfLetter = "7th";
      break;

      case 8: this.state.halfLetter = "8th";
      break;

      case 9: this.state.halfLetter = "9th";
      break;

      case 10: this.state.halfLetter = "10th";
      break;

      case 11: this.state.halfLetter = "11th";
      break;

      default: this.state.halfLetter = "12th";
      break;
  }
}

  onIncrementHalf = (e) => {
    e.preventDefault();
    this.setState({
      half: this.state.half += 1
    });
    this.halfParser(this.state.half);
    }
  

  onDecrementHalf = (e) => {
    e.preventDefault();
    if (this.state.half >= 1) {
      this.setState({
        half: (this.state.half -= 1)
      });
      this.halfParser(this.state.half);
    } else {
      this.state.half === 1;
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-between scoreContainer scoreBackground h-100 p-3">
        <div>
          <div className="d-flex flex-column">
            <h1 className="p-2 text-center customScore">Home</h1>
            <h1 className="p-2 text-center customScore">
              {this.state.teamOneScore}
            </h1>{" "}
            <button onClick={this.onIncrementTeamOne}>+</button>{" "}
            <button onClick={this.onDecrementTeamOne}>-</button>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-center flex-column">
            <h1 className="customScore p-2">{this.state.halfLetter}</h1>
            <button onClick={this.onIncrementHalf}>+</button>{" "}
            <button onClick={this.onDecrementHalf}>-</button>
            <input type="submit" value="Update" className="p-2 text-center btn btn-success updateBtn" onClick={this.handleSubmit} />
          </div>
        </div>

        <div>
          <div className="d-flex flex-column">
            <h1 className="p-2 text-center customScore">Away</h1>
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
