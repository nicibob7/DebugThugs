import React from 'react'

const Days = ({ days }) => {
  return (
    <div id="days">
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className="day">
            {day}
          </div>
        ))}
      </div>
  )
}

export default Days