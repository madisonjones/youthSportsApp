import React from "react";
import Navbar from "../../components/Navbar"
require("./Dashboard.css");


const Dashboard = () => {
    return(
        <Navbar/>
        <div className="container d-flex align-items-center" id="wrapper">
		<div id="customContainer">
			<div className="row customIconContainer">
				<div className="col-sm-6">
					<div className="card cardEffect">
						<div className="card-block d-flex flex-column">
							<i className="fa fa-bullhorn customIcon p-2 d-flex justify-content-center" aria-hidden="true"></i>
							<h3 className="p-2 text-center">Announcments</h3>
						</div>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="card cardEffect">
						<div className="card-block d-flex flex-column">
							<i className="fa fa-calendar customIcon p-2 d-flex justify-content-center" aria-hidden="true"></i>
							<h3 className="p-2 text-center">Schedule</h3>
						</div>
					</div>
				</div>
			</div>



			<div className="row customIconContainer">
				<div className="col-sm-6">
					<div className="card cardEffect">
						<div className="card-block d-flex flex-column">
							<i className="fa fa-comments-o customIcon p-2 d-flex justify-content-center" aria-hidden="true"></i>
							<h3 className="p-2 text-center">Discussion</h3>
						</div>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="card cardEffect">
						<div className="card-block d-flex flex-column">
							<i className="fa fa-history customIcon p-2 d-flex justify-content-center" aria-hidden="true"></i>
							<h3 className="p-2 text-center">Highlights</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )}
export default Dashboard