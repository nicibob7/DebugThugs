import React from 'react'

const TableContent = ({ days, cell, weekNum, timeSlots, handleClick, entries}) => {
  return (
    <div id="content">
          {days.map((day, dayIndex) => (
            <div key={dayIndex} className="row">
              {timeSlots().map((time, timeIndex) => {
                const matchedEntry = entries.find(e => (
                  e.day === day && e.time === time && e.weekNum === weekNum
                ))

                return (
                <div
                  key={timeIndex}
                  className={`box ${cell.day === day && cell.time === time ? "selected-box" : ""}`}
                  onClick={() => handleClick(day, time, weekNum)}
                >
                  {matchedEntry ? matchedEntry.content : (cell.day === day && cell.time == time ? "box" : "")}
                </div>
                )
              })}
            </div>
          ))}
    </div>
  )
}

export default TableContent
