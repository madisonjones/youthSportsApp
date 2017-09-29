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

        </div>
    )}

export default Schedule