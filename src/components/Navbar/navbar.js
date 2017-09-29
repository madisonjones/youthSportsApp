import React from "react";

const Navbar = () =>
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/Dashboard">My Team</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/Dashboard">Dashboard <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/Schedule">Schedule</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/Announcements">Coach's Announcements</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="../pages/Huddle">Team Huddle</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="../pages/Records">Our Records</a>
            </li>
        </ul>
         <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
    </div>
    </nav>

export default Navbar