import React from "react";

class PostMessage extends React.Component {
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
        message: self.refs.message
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
                <img
                  src="https://photos-images.active.com/file/1/454/4546816/optimized/1e9e6153-eb0d-4a80-962c-a644d505caa3.jpg"
                  class="rounded mx-auto d-block"
                  alt="kid playing baseball"
                />
                <label for="exampleInputFile">File input</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleInputFile"
                  aria-describedby="fileHelp"
                />
                <small id="fileHelp" className="form-text text-muted">
                  Upload your favorite image, leave a comment then press submit
                </small>
              </div>
              <div className="form-group">
                <label for="exampleTextarea">Message</label>
                <textarea
                  className="form-control"
                  id="exampleTextarea"
                  rows="3"
                  ref="message"
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

export default PostMessage;
