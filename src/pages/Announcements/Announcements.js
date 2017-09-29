import React from "react";

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

export default Announcements;
