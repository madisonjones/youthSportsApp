import React from "react";
require("./navbar.css");

const Navbar = () =>
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded customNav">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/livefeed/:id/:time">My Team</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/dashboard/id">Dashboard <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/schedule/id">Schedule</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/announcements/id">Coach's Announcements</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/huddle/id">Team Huddle</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/records/id">Our Records</a>
            </li>
        </ul>
         <ul className="nav navbar-nav navbar-right">
            <li><a href="/teammate/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
    </div>
    </nav>

export default Navbar