import React from "react";

const ManagerRegister = () => {
    return (
        <div className="container">
            <h1 className="text-center">Log In</h1>

        <div className="input-group">
        <span className="input-group-addon" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group">
        <span className="input-group-addon" id="basic-addon1">
        <i class="fa fa-lock" aria-hidden="true"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Password"
          aria-describedby="basic-addon1"
        />
      </div>

      <hr />

      <div className="input-group">
        <span className="input-group-addon" id="basic-addon1">
        <i class="fa fa-user-circle" aria-hidden="true"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="User Name"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group">
        <span className="input-group-addon" id="basic-addon1">
        <i class="fa fa-users" aria-hidden="true"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Team Name"
          aria-describedby="basic-addon1"
        />
      </div>

      {/* <div className="input-group">
        <span className="input-group-addon" id="basic-addon1">
        Example of map-marker fa-map-marker
<i class="fa fa-map-marker" aria-hidden="true"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="City"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group">
        <span className="input-group-addon" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="State"
          aria-describedby="basic-addon1"
        />
      </div> */}

      <div className="row">
  <div className="col-lg-6">
    <div className="input-group">
    <span className="input-group-addon" id="basic-addon1">
<i class="fa fa-map-marker" aria-hidden="true"></i>
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
    )
}

export default ManagerRegister