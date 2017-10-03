import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from 'react-router-dom';
require("./Announcements.css"); 


const Announcements = props => {
  return (
    <div>
    <Navbar />
    <div className="container-fluid h-100">
    <div className="row h-100">
      <div className="col-2 collapse d-md-flex bg-faded pt-2 h-100" id="sidebar">
        <ul className="nav flex-column">
          <li className="nav-item"><a className="nav-link customNavBtn" href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link customNavBtn" href="/announcements/id">Announcements</a></li>
          <li className="nav-item"><a className="nav-link customNavBtn" href="/huddle/id">Discussion</a></li>
          <li className="nav-item"><a className="nav-link customNavBtn" href="records/id">Highlights</a></li>
          <li className="nav-item customMenuBtn"><h1>Menu</h1></li>

          <li className="nav-item customNavBtn"><i className="fa fa-home" aria-hidden="true"></i> Home</li>
          
          <li className="nav-item customNavBtn"><i className="fa fa-bullhorn" aria-hidden="true"></i> Updates</li>
          
          <li className="nav-item customNavBtn"><i className="fa fa-comments-o" aria-hidden="true"></i> Discussion</li>

          <li className="nav-item customNavBtn"><i className="fa fa-history" aria-hidden="true"></i> Highlights</li>
        </ul>
      </div>
      
      <div className="col pt-2 mainBackground">
        <h1 className="customColor text-center customCategory">Announcements</h1>
        <a href="" data-target="#sidebar" data-toggle="collapse" className="hidden-md-up"><i className="fa fa-bars"></i></a>
        <div className="container d-flex align-items-center " id="wrapper">
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
      </div>
    </div>
  </div>
    )
};


export default Announcements;
  