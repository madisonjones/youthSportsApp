// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// class Increment extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       teamOneScore: 0,
//       teamTwoScore: 0
//     }
//   }

// onIncrementTeamOne = () => {
//     this.setState({
//       teamOneScore: this.state.teamOneScore += 1
//     })
//   }

//   onDecrementTeamOne = () => {
//     if (this.state.teamOneScore >= 1) {
//       this.setState({
//         teamOneScore: this.state.teamOneScore -= 1
//       })
//     } else {
//       this.state.teamOneScore === 0;
//     }
//   }


//   onIncrementTeamTwo = () => {
//     this.setState({
//       teamTwoScore: this.state.teamTwoScore += 1
//     })
//   }

//   onDecrementTeamTwo = () => {
//     if (this.state.teamTwoScore >= 1) {
//       this.setState({
//         teamTwoScore: this.state.teamTwoScore -= 1
//       })
//     } else {
//       this.state.teamTwoScore === 0;
//     }
//   }

//   render() {
    
//     return (
//       <div className="d-flex justify-content-between scoreContainer scoreBackground">
//       <div>
//         <div className="d-flex flex-column">
//           <h1 className="p-2 text-center customScore">Team 1</h1>
//           <h1 className="p-2 text-center customScore">{this.state.teamOneScore}</h1>
//           {' '}
//         <button onClick={this.onIncrementTeamOne}>
//           +
//         </button>
//         {' '}
//         <button onClick={this.onDecrementTeamOne}>
//           -
//         </button>
//         </div>
//       </div>

//       <div className="d-flex align-items-center">
//         <div className="d-flex justify-content-center">
//           <h1 className="customScore">1st</h1>
//         </div>
//       </div>

//       <div>
//         <div className="d-flex flex-column">
//           <h1 className="p-2 text-center customScore">Team 1</h1>
//           <h1 className="p-2 text-center customScore">{this.state.teamTwoScore}</h1>
//           {' '}
//         <button onClick={this.onIncrementTeamTwo}>
//           +
//         </button>
//         {' '}
//         <button onClick={this.onDecrementTeamTwo}>
//           -
//         </button>
//         </div>
//       </div>
//     </div>
      
//     )
//   }
// }