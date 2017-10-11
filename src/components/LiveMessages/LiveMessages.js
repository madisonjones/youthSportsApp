import React from "react";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      imgs: [],
      messages: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3333/api/live/videos") // or whatever URL you want
      .then(response => response.json())
      .then(videos =>
        this.setState({
          videos: videos
        })
      );

    fetch("http://localhost:3333/api/live/images")
      .then(response => response.json())
      .then(imgs =>
        this.setState({
          imgs: imgs
        })
      );

    fetch("http://localhost:3333/api/live/messages")
      .then(response => response.json())
      .then(messages =>
        this.setState({
          messages: messages
        })
      );
  }

  render() {
    this.state.videos.push({
      link:
        "http://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png",
      comment: "This is a placeholder image and a placeholder message",
      createdAt: Date.now()
    });

    this.state.imgs.push({
      link:
        "http://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png",
      comment: "This is a placeholder image and a placeholder message",
      createdAt: Date.now()
    });

    this.state.messages.push({
      title: "The Title",
      comment: "The Message",
      createdAt: Date.now()
    });
    return (
      // const Messages = props => {

      <div>
        {this.state.videos.map(post => (
          <div className="card-block ">
            <div className="card customCard">
              <div className="card-block">
                <img
                  className="card-title rounded mx-auto d-block"
                  alt="Livefeed image"
                  src={post.link}
                />
                <h6 className="card-subtitle mb-2 text-muted">
                  {post.comment}
                </h6>
                <p className="card-text text-info">{post.createdAt}</p>
              </div>
            </div>
          </div>
        ))}

        {this.state.imgs.map(post => (
          <div className="card-block ">
            <div className="card customCard">
              <div className="card-block">
                <img
                  className="card-title rounded mx-auto d-block"
                  alt="Livefeed image"
                  src={post.link}
                />
                <h6 className="card-subtitle mb-2 text-muted">
                  {post.comment}
                </h6>
                <p className="card-text text-info">{post.createdAt}</p>
              </div>
            </div>
          </div>
        ))}

        {this.state.messages.map(post => (
          <div className="card-block ">
            <div className="card customCard">
              <div className="card-block">
                <h1 className="card-title">{post.title}</h1>
                <h6 className="card-subtitle mb-2 text-muted">
                  {post.comment}
                </h6>
                <p className="card-text text-info">{post.createdAt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Messages;
