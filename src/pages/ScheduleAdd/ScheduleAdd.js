import React from "react";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import DateTimePicker from "../../components/dateTimePicker"
require("./ScheduleAdd.css");

const ScheduleAdd = () => {
    return (
    <div>
        <Navbar/>
        <div className="formDiv">
       <h1>Add a New Event</h1>
       <form>
           <div className="form-group">
                <label for="title">Event Name</label>
                    <input type="title" className="form-control" id="title"/>
                <label for="startTime">Start Time</label>
               <DateTimePicker/>
                <label for="endTime">End Time</label>
                <DateTimePicker/>
                <label for="location">Location</label>
                    <input type="location" className="form-control" id="location"/>
                <label for="description">Details</label>
                    <input type="description" className="form-control" id="description"/>
            </div>
        
        
        </form>
        </div>
        <Footer/>
    </div>
    )
}


export default ScheduleAdd