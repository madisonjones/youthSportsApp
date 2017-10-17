import React from "react";
import Carousel from "../Carousel"
require("./Messages.css");

class Messages extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      posts: [],
      title: "",
      comment: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3333/api/announcements') // or whatever URL you want
      .then((response) => response.json())
      .then((posts) => this.setState({
        posts: posts,
      }));
  }



  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }



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
    fetch("http://localhost:3333/api/announcements", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
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
<div className="container d-flex align-items-center " id="customWrapper">
        <div id="customContainer"><button
            type="button"
            className="btn btn-secondary w-100 p-3 customPostBtn"
            data-toggle="modal"
            data-target=".bd-example-modal-lgTwo"
          >
            Post Message
          </button>
          {/* <PostMessage /> */}
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
                <Carousel />
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
          <div className="card card-inverse customBackground">

          {this.state.posts.map(post =>  
            <div className="card-block ">
              <div className="card customCard">
                <div className="card-block">
                  <h2 className="card-title text-info">{post.title}</h2>
                   <h6 className="card-subtitle mb-2 text-muted">{post.comment}</h6>
                  <p className="card-text text-info">{post.createdAt}</p>
                </div>
              </div>
            </div>)}


              {/* <div className="card customCard">
                <div className="card-block">
                  <h4 className="card-title text-info">{props.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{props.time}</h6>
                  <p className="card-text text-info">{props.message}</p>
                </div>
              </div>


              <div className="card customCard">
                <div className="card-block">
                  <h4 className="card-title text-info">{props.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{props.time}</h6>
                  <p className="card-text text-info">{props.message}</p>
                </div>
              </div>


              <div className="card customCard">
                <div className="card-block">
                  <h4 className="card-title text-info">{props.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{props.time}</h6>
                  <p className="card-text text-info">{props.message}</p>
                </div>
              </div>


              <div className="card customCard">
                <div className="card-block">
                  <h4 className="card-title text-info">{props.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{props.time}</h6>
                  <p className="card-text text-info">{props.message}</p>
                </div>
              </div>


              <div className="card customCard">
                <div className="card-block">
                  <h4 className="card-title text-info">{props.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{props.time}</h6>
                  <p className="card-text text-info">{props.message}</p>
                </div>
              </div> */}



          </div>


        </div>
      </div>
    )
}}

export default Messages;