import React from "react";
require("./Messages.css");

const Messages = props => {
    return (
        <div className="container d-flex align-items-center " id="customWrapper">
        <div id="customContainer">
          <div className="card card-inverse customBackground">
            <div className="card-block ">
              
              <div className="card customCard">
                <div className="card-block">
                  <h4 className="card-title text-info">{props.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{props.time}</h6>
                  <p className="card-text text-info">{props.message}</p>
                </div>
              </div>


              <div className="card customCard">
                <div className="card-block">
                  <h4 className="card-title text-info">{props.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{props.time}</h6>
                  <p className="card-text text-info">{props.message}</p>
                </div>
              </div>


              <div className="card customCard">
                <div className="card-block">
                  <h4 className="card-title text-info">{props.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{props.time}</h6>
                  <p className="card-text text-info">{props.message}</p>
                </div>
              </div>


              <div className="card customCard">
                <div className="card-block">
                  <h4 className="card-title text-info">{props.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{props.time}</h6>
                  <p className="card-text text-info">{props.message}</p>
                </div>
              </div>


              <div className="card customCard">
                <div className="card-block">
                  <h4 className="card-title text-info">{props.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{props.time}</h6>
                  <p className="card-text text-info">{props.message}</p>
                </div>
              </div>


              <div className="card customCard">
                <div className="card-block">
                  <h4 className="card-title text-info">{props.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{props.time}</h6>
                  <p className="card-text text-info">{props.message}</p>
                </div>
              </div>


            </div>
          </div>


        </div>
      </div>
    )
}

export default Messages;