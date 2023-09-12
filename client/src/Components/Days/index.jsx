import React from 'react'

const Days = ({ days }) => {
  return (
    <div id="days" data-testid="days">
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className="day" data-testid="day">
            {day}
          </div>
        ))}
      </div>
  )
}

export default Days