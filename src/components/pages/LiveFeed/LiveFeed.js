import React from "react";
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar";
import SideNav from "../../components/SideNav";
import Messages from "../../components/Messages";
import { Link } from "react-router-dom";
require("./LiveFeed.css");

const LiveFeed = () => {
  return (
    <div>
      <Navbar />
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
                    <div class="modal-content"><p>Image</p></div>
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

              {/* <li className="nav-item customNavBtn"><i className="fa fa-home" aria-hidden="true"></i> Home</li>
              
              <li className="nav-item customNavBtn"><i className="fa fa-bullhorn" aria-hidden="true"></i> Updates</li>
              
              <li className="nav-item customNavBtn"><i className="fa fa-comments-o" aria-hidden="true"></i> Discussion</li>
    
              <li className="nav-item customNavBtn"><i className="fa fa-history" aria-hidden="true"></i> Highlights</li> */}
            </ul>
          </div>

          <div className="col pt-2">
            <div className="d-flex justify-content-between scoreContainer scoreBackground">
              <div>
                <div className="d-flex flex-column">
                  <h1 className="p-2 text-center customScore">Team 1</h1>
                  <h1 className="p-2 text-center customScore">18</h1>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="d-flex justify-content-center">
                  <h1 className="customScore">1st</h1>
                </div>
              </div>

              <div>
                <div className="d-flex flex-column">
                  <h1 className="p-2 text-center customScore">Team 1</h1>
                  <h1 className="p-2 text-center customScore">20</h1>
                </div>
              </div>
            </div>
            {/* <h1 className="customColor text-center customCategory">LiveFeed</h1>
            <a href="" data-target="#sidebar" data-toggle="collapse" className="hidden-md-up"><i className="fa fa-bars"></i></a> */}
            <Messages />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default LiveFeed;
