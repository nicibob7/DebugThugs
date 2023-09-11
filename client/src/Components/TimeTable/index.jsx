import React from 'react'
import "./style.css"

const TimeTable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const timeSlots = () => {
    const timeSlots = []
    for (let hour = 0; hour < 24; hour+= 2) {
      const startTime = `${hour.toString().padStart(2, '0')}:00`
      const endTime = `${(hour + 2).toString().padStart(2, '0')}:00`
      timeSlots.push(`${startTime} - ${endTime}`)
    }
    return timeSlots;
  }

  return (
    <div id="timetable">
      <div id="days">
        {days.map((day, index) => (
          <div key={index} className="day">{day}</div>
        ))}
      </div>
      <div id="times">
        {timeSlots().map((time, index) => (
          <div key={index} className="time">{time}</div>
        ))}
      </div>
    </div>
  )
}

export default TimeTable
