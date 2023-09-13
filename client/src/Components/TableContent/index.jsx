import React from 'react'

const TableContent = ({ days, cell, weekNum, timeSlots, handleClick }) => {
  return (
    <div id="content">
          {days.map((day, dayIndex) => (
            <div key={dayIndex} className="row">
              {timeSlots().map((time, timeIndex) => (
                <div
                  key={timeIndex}
                  className={`box ${cell.day === day && cell.time === time ? "selected-box" : ""}`}
                  onClick={() => handleClick(day, time,weekNum)}
                >
                  {cell.day === day && cell.time === time ? "box" : ""}
                </div>
              ))}
            </div>
          ))}
        </div>
  )
}

export default TableContent