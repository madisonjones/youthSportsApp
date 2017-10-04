import React from "react";
import Navbar from "../../components/Navbar";
import SideNav from "../../components/SideNav";
import Messages from "../../components/Messages";
import { Link } from 'react-router-dom';
require("./Announcements.css"); 


const Announcements = props => {
  return (
    <div>
    <Navbar />
    <div className="container-fluid mainContainer">
    <div className="row h-100">
      <SideNav />
      
      <div className="col pt-2 mainBackground">
        <h1 className="customColor text-center customCategory">Announcements</h1>
        <a href="" data-target="#sidebar" data-toggle="collapse" className="hidden-md-up"><i className="fa fa-bars"></i></a>
        <Messages />

      </div>
    </div>
<<<<<<< HEAD
    </div>
    </div>


=======
  </div>
  </div>
>>>>>>> a3f1998af8f0b52d72e296dc2f094a4b7d0e7635
    )
};


export default Announcements;
  