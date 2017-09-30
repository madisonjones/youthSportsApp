import React from "react"
import BigCalendar from "react-big-calendar"
import events from "./events"
import moment from "moment"
require('./calendar.css')
require('react-big-calendar/lib/css/react-big-calendar.css');



let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

BigCalendar.momentLocalizer(moment)

let Basic = () => {
    return(
      <BigCalendar
        {...this.props}
        events={events}
        views={allViews}
        step= {60}
        defaultDate = {new Date (2017, 9, 29)}
      />
    )
  }
export default Basic