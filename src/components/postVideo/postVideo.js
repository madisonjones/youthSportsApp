import React from "react";

class PostImg extends React.Component {
  constructor() {
    super();
    this.state = { post: {} };
    this.onSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    // On submit of the form, send a POST request with the data to the server.
    fetch("/livefeed/:id/:time", {
      method: "POST",
      posts: {
        video: self.refs.img,
        comment: self.refs.comment
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(body) {
        console.log(body);
      });
  }

  render() {
    return (
      // const Messages = props => {

      <div
        className="modal fade bd-example-modal-lgThree"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content customPopup">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <iframe
                  className="rounded mx-auto d-block"
                  width="250"
                  height="304"
                  src="https://www.youtube.com/embed/Q-AGJMym830"
                  frameborder="0"
                  allowfullscreen
                />
                <label for="exampleInputFile">File input</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleInputFile"
                  aria-describedby="fileHelp"
                  ref="video"
                />
                <small id="fileHelp" className="form-text text-muted">
                  Upload your favorite image, leave a comment then press submit
                </small>
              </div>
              <div className="form-group">
                <label for="exampleTextarea">Comment</label>
                <textarea
                  className="form-control"
                  id="exampleTextarea"
                  rows="3"
                  ref="comment"
                />
              </div>
              <button type="submit" class="btn btn-primary btn-lg btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PostImg;
