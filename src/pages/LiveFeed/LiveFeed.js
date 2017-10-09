import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../../components/Navbar";
import SideNav from "../../components/SideNav";
import Messages from "../../components/Messages";
import { Link } from "react-router-dom";
import Upload from "../../cloud/uploadFile.js";
import { createStore } from "redux";
import Counter from "../../components/ScoreBoard/counter.js";
import counter from "../../reducers/index.js";
import PostImg from "../../components/postImg";
import PostMessage from "../../components/postMessage";
import PostVideo from "../../components/postVideo";
require("./LiveFeed.css");

const store = createStore(counter);

// const LiveFeed = () => ReactDOM.render(

const LiveFeed = () => {
  return (
    <div>
      <Navbar />
      {/* <Upload /> */}
      {/* <form action="/livefeed/:id/:time" method="POST">
        <input type="file" name="myPic" required />
        <input type="submit" value="Submit" />
      </form> */}


          <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({ type: "INCREMENT" })}
            onDecrement={() => store.dispatch({ type: "DECREMENT" })}
          />
          <div className="container-fluid mainContainer">
            <div
              className="container-fluid btn-group d-flex justify-content-between"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                className="btn btn-secondary w-100 p-3 customPostBtn"
                data-toggle="modal"
                data-target=".bd-example-modal-lgOne"
              >
                Post Image
              </button>
          
             <PostImg />

            




              <button
                type="button"
                className="btn btn-secondary w-100 p-3 customPostBtn"
                data-toggle="modal"
                data-target=".bd-example-modal-lgTwo"
              >
                Post Message
              </button>
              <PostMessage />




              

              <button
                type="button"
                className="btn btn-secondary w-100 p-3 customPostBtn"
                data-toggle="modal"
                data-target=".bd-example-modal-lgThree"
              >
                Post Video
              </button>
              <PostVideo />
              
            </div>

            <Messages />
          </div>
    </div>
  );
};

export default LiveFeed;
