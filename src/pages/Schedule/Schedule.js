import React from "react";
import Navbar from "../../components/Navbar"
import MyCalendar from "../../components/Calendar"
require ("./schedule.css")


const Schedule  = () => {
    return(
        <div>
        <Navbar/>
            <div id='calendar'>
                <MyCalendar/>
            </div>
           <a ><button id="add" href="/schedule/id/add">Add to the Calendar</button></a>
        </div>
    )}

export default Schedule