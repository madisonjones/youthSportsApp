import React from "react";
import ReactDOM from 'react-dom'
import Navbar from "../../components/Navbar";
import SideNav from "../../components/SideNav";
import Messages from "../../components/Messages";
import { Link } from "react-router-dom";
import Upload from "../../cloud/uploadFile.js";
import { createStore } from 'redux'
import Counter from '../../components/ScoreBoard/counter.js'
import counter from '../../reducers/index.js'
require("./LiveFeed.css");



const store = createStore(counter)

// const LiveFeed = () => ReactDOM.render(

const LiveFeed = () => {
  return (
<div>
      <Navbar />
      {/* <Upload /> */}
      <form action="/livefeed/:id/:time" method="POST">
    <input type="file" name="myPic" required />
    <input type="submit" value="Submit" />
</form>
      <div className="container-fluid mainContainer">
        <div className="row h-100">
          <div
            className="col-2 collapse d-md-flex bg-faded w-100 p-3"
            id="sidebar"
          >

            <ul className="nav flex-column">
              <li className="nav-item customMenuBtn">
                <button
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                >
                Upload Message
                </button>

                <div
                  class="modal fade bd-example-modal-lg"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content"><p>Message</p></div>
                  </div>
                </div>
              </li>


              <li className="nav-item customMenuBtn">
                <button
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                >
                Upload Image
                </button>

                <div
                  class="modal fade bd-example-modal-lg"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <input type="file" onChange={this.handleFileUpload} />
                    </div>
                  </div>
                </div>
              </li>


              <li className="nav-item customMenuBtn">
                <button
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                >
                Upload Video
                </button>

                <div
                  class="modal fade bd-example-modal-lg"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content"><p>Video</p></div>
                  </div>
                </div>
              </li>

            </ul>
          </div>

          <div className="col pt-2">
          <Counter
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />

            <Messages />
          </div>
        </div>
      </div>
    </div>

        )
    }
  
  
    
  



export default LiveFeed;