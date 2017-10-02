import React from "react";
require ("./ManagerRegister.css")

const ManagerRegister = () => {
    return (
        <div className="container d-flex align-items-center" id="wrapper">
        <div id="customContainer">
        <h1 className="text-center" id="title">Sign Up</h1>
  
      <div className="input-group customInput">
      <span className="input-group-addon" id="basic-addon1">
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        aria-describedby="basic-addon1"
      />
      </div>
  
      <div className="input-group customInput">
      <span className="input-group-addon" id="basic-addon1">
      <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Password"
        aria-describedby="basic-addon1"
      />
      </div>
  
      <div className="input-group customInput">
      <span className="input-group-addon" id="basic-addon1">
      <i className="fa fa-user-circle" aria-hidden="true"></i>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="User Name"
        aria-describedby="basic-addon1"
      />
      </div>
  
      <div className="input-group customInput">
      <span className="input-group-addon" id="basic-addon1">
      <i className="fa fa-users" aria-hidden="true"></i>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Team Name"
        aria-describedby="basic-addon1"
      />
      </div>
  
  
      <div className="row">
    <div className="col-lg-6">
    <div className="input-group customInput">
    <span className="input-group-addon fa-2x" id="basic-addon1">
  <i className="fa fa-map-marker" aria-hidden="true"></i>
    </span>
    <input
      type="text"
      className="form-control"
      placeholder="City"
      aria-describedby="basic-addon1"
    />
    <input
      type="text"
      className="form-control"
      placeholder="State"
      aria-describedby="basic-addon1"
    />
    </div>
    </div>
    </div>
      <br/>
      <button type="button" className="btn btn-primary btn-lg rounded mx-auto d-block">Submit</button>
      </div>
      </div>
    )
}

export default ManagerRegister