import React from "react";
import Navbar from "../../components/Navbar"
import MyCalendar from "../../components/Calendar"
import Footer from "../../components/Footer"

require ("./schedule.css")


const Schedule  = () => {
    return(
        <div>
        <Navbar/>
            <div id='calendar'>
                <MyCalendar/>
            </div>
           <button id="add"><a href="schedule/:id/add">Add to the Calendar</a></button>
           <Footer/>
        </div>
    )}

export default Schedule