import React from 'react'

const Times = ({ timeSlots, cell }) => {
  return (
    <div id="times">
          {timeSlots().map((time, timeIndex) => (
            <div
              key={timeIndex}
              className={`time ${cell.time === time ? "selected-time" : ""}`}
            >
              {time}
            </div>
        ))}
    </div>
  )
}

export default Times