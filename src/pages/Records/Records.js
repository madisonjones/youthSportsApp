import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
require("./Records.css");
class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3333/livefeed/media/api") // or whatever URL you want
      .then(response => response.json())
      .then(data => {
        let posts = data.response.map(pic => {
          return (
            <div key={pic.response}>
              <img
                src={pic.posts.img}
                class="rounded mx-auto d-block card-title"
                alt="team picture"
              />

              <p className="card-text text-info">{pic.posts.img}</p>
            </div>
          );
        });
        this.setState({
          posts: posts
        });
        console.log("state", this.state.posts);
      });
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="row h-100">
          <div className="col pt-2">
            <div
              className="container mainContainer d-flex align-items-center d-flex align-content-around flex-wrap"
              id="customWrapper"
            >
              {/* {this.state.posts.map(post =>  
             <div className="card card-inverse customBackground ">
              <div className="card-block ">
                <div className="card customCard">
                  <div className="card-block">
                    
                    {this.state.posts}
             
                    
                  </div>
                </div>
              </div>
              </div>)} */}

              <img
                className="d-block img-fluid rounded mx-auto d-block customImg w-50 p-3 h-100 p-3"
                src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/042005-3d-transparent-glass-icon-sports-hobbies-people-volleyball.png"
                alt="Third slide"
              />
              <img
                className="d-block img-fluid rounded mx-auto d-block customImg w-50 p-3 h-100 p-3"
                src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/042005-3d-transparent-glass-icon-sports-hobbies-people-volleyball.png"
                alt="Third slide"
              />
              <img
                className="d-block img-fluid rounded mx-auto d-block customImg w-50 p-3 h-100 p-3"
                src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/042005-3d-transparent-glass-icon-sports-hobbies-people-volleyball.png"
                alt="Third slide"
              />
              <img
                className="d-block img-fluid rounded mx-auto d-block customImg w-50 p-3 h-100 p-3"
                src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/042005-3d-transparent-glass-icon-sports-hobbies-people-volleyball.png"
                alt="Third slide"
              />
              <img
                className="d-block img-fluid rounded mx-auto d-block customImg w-50 p-3 h-100 p-3"
                src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/042005-3d-transparent-glass-icon-sports-hobbies-people-volleyball.png"
                alt="Third slide"
              />
              <img
                className="d-block img-fluid rounded mx-auto d-block customImg w-50 p-3 h-100 p-3"
                src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/042005-3d-transparent-glass-icon-sports-hobbies-people-volleyball.png"
                alt="Third slide"
              />
              <img
                className="d-block img-fluid rounded mx-auto d-block customImg w-50 p-3 h-100 p-3"
                src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/042005-3d-transparent-glass-icon-sports-hobbies-people-volleyball.png"
                alt="Third slide"
              />

              <img
                className="d-block img-fluid rounded mx-auto d-block customImg w-50 p-3 h-100 p-3"
                src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/042005-3d-transparent-glass-icon-sports-hobbies-people-volleyball.png"
                alt="Third slide"
              />
              <img
                className="d-block img-fluid rounded mx-auto d-block customImg w-50 p-3 h-100 p-3"
                src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/042005-3d-transparent-glass-icon-sports-hobbies-people-volleyball.png"
                alt="Third slide"
              />
              <img
                className="d-block img-fluid rounded mx-auto d-block customImg w-50 p-3 h-100 p-3"
                src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/042005-3d-transparent-glass-icon-sports-hobbies-people-volleyball.png"
                alt="Third slide"
              />
              <img
                className="d-block img-fluid rounded mx-auto d-block customImg w-50 p-3 h-100 p-3"
                src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/042005-3d-transparent-glass-icon-sports-hobbies-people-volleyball.png"
                alt="Third slide"
              />
              <img
                className="d-block img-fluid rounded mx-auto d-block customImg w-50 p-3 h-100 p-3"
                src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/042005-3d-transparent-glass-icon-sports-hobbies-people-volleyball.png"
                alt="Third slide"
              />
              <img
                className="d-block img-fluid rounded mx-auto d-block customImg w-50 p-3 h-100 p-3"
                src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/042005-3d-transparent-glass-icon-sports-hobbies-people-volleyball.png"
                alt="Third slide"
              />
              <img
                className="d-block img-fluid rounded mx-auto d-block customImg w-50 p-3 h-100 p-3"
                src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/042005-3d-transparent-glass-icon-sports-hobbies-people-volleyball.png"
                alt="Third slide"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      
    );
  }
}

export default Records;
