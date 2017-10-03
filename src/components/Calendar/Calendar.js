import React from "react"
import BigCalendar from "react-big-calendar"
import events from "./events.js"
import moment from "moment"
require('./calendar.css')
require('react-big-calendar/lib/css/react-big-calendar.css');



let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

BigCalendar.momentLocalizer(moment)

let MyCalendar = () => {  
  return(
    <div {...this.props}>
      <BigCalendar
        selectable
        events={events}
        views={allViews}
        step= {60}
        defaultDate = {new Date (2017, 9, 29)}
        onSelectEvent={event => alert(event.title + event.start + event.end + event.location + event.desc)}
          onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}`
          )}
      />
      </div>
    )
    }
export default MyCalendar