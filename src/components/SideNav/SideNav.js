import React from "react";
require("./SideNav.css");

const SideNav = () => {
    return (
        <div className="col-2 collapse d-md-flex bg-faded w-100 p-3" id="sidebar">
            <ul className="nav flex-column">  
              <li className="nav-item customMenuBtn"><h1> Menu</h1></li>
              <li className="nav-item"><a className="nav-link customNavBtn" href="/dashboard/id"><i className="fa fa-home" aria-hidden="true"></i> Home</a></li>
              <li className="nav-item"><a className="nav-link customNavBtn" href="/announcements/id"><i className="fa fa-bullhorn" aria-hidden="true"></i> Updates</a></li>
              <li className="nav-item"><a className="nav-link customNavBtn" href="/huddle/id"><i className="fa fa-comments-o" aria-hidden="true"></i> Discussion</a></li>
              <li className="nav-item"><a className="nav-link customNavBtn" href="records/id"><i className="fa fa-history" aria-hidden="true"></i> Highlights</a></li>
            
    
              {/* <li className="nav-item customNavBtn"><i className="fa fa-home" aria-hidden="true"></i> Home</li>
              
              <li className="nav-item customNavBtn"><i className="fa fa-bullhorn" aria-hidden="true"></i> Updates</li>
              
              <li className="nav-item customNavBtn"><i className="fa fa-comments-o" aria-hidden="true"></i> Discussion</li>
    
              <li className="nav-item customNavBtn"><i className="fa fa-history" aria-hidden="true"></i> Highlights</li> */}
            </ul>
</div>
    )
}

export default SideNav
