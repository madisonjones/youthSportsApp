import React from "react"
import BigCalendar from "react-big-calendar"
import moment from "moment"
import events from "./events.js"
require('./calendar.css')
require('react-big-calendar/lib/css/react-big-calendar.css');



let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);


class MyCalendar extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      events: events
    };
  }

  // componentDidMount() {
  //   fetch('http://localhost:3333/api/schedule') // or whatever URL you want
  //     .then((response) => response.json())
  //     .then((events) => this.setState({
  //       events: events,
  //     }));
  // }


render() {    console.log(this.state.events)

    // this.state.events.push({
    // title: "game",
    // location: "Field 2",
    // start: "Date(2017, 10, 15, 0, 0, 0)",
    // end: "Date(2017, 10, 15, 2, 0, 0)", 
    // details: "We're going over drills"

    // })
  console.log(this.state.events)
  return(

    <div>
      <BigCalendar
        selectable
        events={this.state.events}
        startAccessor={(event) => { return moment(event.start) }}
        endAccessor={(event) => { return moment(event.end) }}
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
    }}

export default MyCalendar