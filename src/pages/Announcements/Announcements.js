import React from "react";
import Navbar from "../../components/Navbar"


<<<<<<< HEAD
const Announcements = props => {
  <div className="container">
    <h1>Discussion</h1>
    <hr/>
    <div className="card">
      <div className="card-block">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">
          {props.message}
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">{props.time}</small>
      </div>
    </div>
  </div>;
};
=======
const Announcements = () => {
    return(
        <Navbar/>

    )}

>>>>>>> c19f7170e8ee145de7941eb775795af2ce39e99e

export default Announcements;
