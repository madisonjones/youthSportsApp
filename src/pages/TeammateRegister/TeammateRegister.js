import React from "react";
require ("./schedule.css")

const TeammateRegister  = () => {
    <div className="container d-flex align-items-center" id="wrapper">
		<div id="customContainer">
		<h1 className="text-center">Sign Up</h1>

	<div className="input-group customInput">
	<span className="input-group-addon" id="basic-addon1">
	<i className="fa fa-user-circle customIcon" aria-hidden="true"></i>
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
	<i className="fa fa-lock  fa-lg " aria-hidden="true"></i>
	</span>
	<input
	  type="text"
	  className="form-control"
	  placeholder="Password"
	  aria-describedby="basic-addon1"
	/>
  </div>

  <hr>

  <div className="input-group customInput">
	<span className="input-group-addon" id="basic-addon1">
	<i className="fa fa-key customIcon" aria-hidden="true"></i>
	</span>
	<input
	  type="text"
	  className="form-control"
	  placeholder="Access Key"
	  aria-describedby="basic-addon1"
	/>
  </div>

  
	<br/>
  <button type="button" className="btn btn-primary btn-lg rounded mx-auto d-block">Submit</button>
  </div>
</div>

}

export default TeammateRegister