import React from 'react'

const Days = ({ days, week, date, weekDates}) => {

  return (
    <div id="days" data-testid="days">
        {/* <span id="datebox">{date}</span> */}
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className="day" data-testid="day" >
            <span>{day}</span>
            <span>{weekDates[dayIndex]}</span>
          </div>
        ))}
      </div>
  )
}

export default Days