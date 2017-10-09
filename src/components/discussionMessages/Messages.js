import React from "react";
require("./Messages.css");

class DiscussionMessages extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3333/api/discussion') // or whatever URL you want
      .then((response) => response.json())
      .then((posts) => this.setState({
        posts: posts,
      }));
  }

  render() {
    return (
// const Messages = props => {
        <div className="container d-flex align-items-center " id="customWrapper">
        <div id="customContainer">
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

export default DiscussionMessages;