import React from "react";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
require("./Dashboard.css");


const Dashboard = () => {
    return(
    	<div>
        <Navbar/>
		<div id="myCustomContainer">
    <div className="row customIconContainer">
      <div className="col-sm-6">
        <div className="card cardEffect">
          <div className="card-block d-flex flex-column">
          <a className="nav-link" href="/announcements/id">
            <i className="fa fa-bullhorn customIcon p-2 d-flex justify-content-center" aria-hidden="true"></i>
            <h3 className="p-2 text-center">Announcements</h3>
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card cardEffect">
          <div className="card-block d-flex flex-column">
          <a className="nav-link" href="/schedule/id">
            <i className="fa fa-calendar customIcon p-2 d-flex justify-content-center" aria-hidden="true"></i>
            <h3 className="p-2 text-center">Schedule</h3>
            </a>
          </div>
        </div>
      </div>
    </div>



    <div className="row customIconContainer">
      <div className="col-sm-6">
        <div className="card cardEffect">
          <div className="card-block d-flex flex-column">
          <a className="nav-link" href="/huddle/id">
            <i className="fa fa-comments-o customIcon p-2 d-flex justify-content-center" aria-hidden="true"></i>
            <h3 className="p-2 text-center">Discussion</h3>
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card cardEffect">
          <div className="card-block d-flex flex-column">
          <a className="nav-link" href="/record/:id">
            <i className="fa fa-history customIcon p-2 d-flex justify-content-center" aria-hidden="true"></i>
            <h3 className="p-2 text-center">Highlights</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>
	
    )}
export default Dashboard