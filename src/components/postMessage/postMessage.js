import React from "react";
import Carousel from "../../components/Carousel";
import Increment from "../ScoreBoard/increment.js";
import { createStore } from "redux";
import counter from "../../reducers/index.js";

const store = createStore(counter);

class PostMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      title: "",
      comment: ""
    };
    // this.onSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // handleTitleChange = e => {
  //   this.setState({
  //     title: e.target.value
  //   });
  // };

  // handleCommentChange = e => {
  //   this.setState({
  //     comment: e.target.value
  //   });
  // };

  handleSubmit = e => {
    console.log("One log");
    e.preventDefault();
    var self = this;
    // On submit of the form, send a POST request with the data to the server.
    let body = {
      title: this.state.title,
      comment: this.state.comment
    };
    console.log(body);
    fetch("http://localhost:3333/api/live/messages", {
      method: "POST",
      body: body
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(body) {
        console.log(body);
      });
  };

  render() {
    return (
      // const Messages = props => {

      <div
        className="modal fade bd-example-modal-lgTwo"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content customPopup">
            <form>
              <div className="form-group">
                <h1 className="text-center">Update Game</h1>
                <Increment
                  ref="score"
                  value={store.getState()}
                  onIncrement={() => store.dispatch({ type: "INCREMENT" })}
                  onDecrement={() => store.dispatch({ type: "DECREMENT" })}
                />
              </div>
              <div className="form-group">
                <label for="exampleTextarea">Title</label>
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  onChange={this.handleInputChange}
                  value={this.state.title}
                />
              </div>
              <div className="form-group">
                <label for="exampleTextarea">Message</label>
                <textarea
                  className="form-control"
                  id="exampleTextarea"
                  rows="3"
                  name="comment"
                  onChange={this.handleInputChange}
                  value={this.state.comment}
                />
              </div>

              <button
                type="submit"
                class="btn btn-primary btn-lg btn-block"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PostMessage;
