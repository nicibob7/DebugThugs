import React, { useState, useEffect } from 'react'
import axios from "axios"

const TableContent = ({ days, cell, weekNum, timeSlots, handleClick }) => {
  const [entries, setEntries] = useState([])
  const [cellContent, setCellContent] = useState("")

  // Fetches all of the entries when the page is loaded & updated
  async function getEntries() {
    try {
      axios.get("http://localhost:3000/timetable")
        .then(response => {
          const data = response.data
          const arr = data.entry
          setEntries(arr)
        })
    } catch (error) {
      console.log(error.message)
    }
  }

  function populateTable() {
    console.log("Cell:", cell)

    // Find the matching entry for the current cell
    const matchedEntry = entries.find((entry) => {
      const cellTime = cell.time.split(" - ")
      const startTime = cellTime[0]
      const endTime = cellTime[1]

      return (
        entry.weekNum === weekNum &&
        entry.day === cell.day &&
        entry.time >= startTime &&
        entry.time <= endTime
      );
    });

    console.log("Matched Entry:", matchedEntry)

    // Set the content for the cell
    if (matchedEntry) { 
      setCellContent(matchedEntry.content)
    } else {
      setCellContent("")
    }
  }

  useEffect(() => {
    getEntries()
  }, [])

  useEffect(() => {
    populateTable()
  }, [cell, weekNum, entries])

  return (
    <div id="content">
      {days.map((day, dayIndex) => (
        <div key={dayIndex} className="row">
          {timeSlots().map((time, timeIndex) => {
          const content =
            cell.day === day &&
            cell.time === time &&
            cellContent !== "" ? cellContent : "";

            return (
              <div
                key={timeIndex}
                className={`box ${
                  cell.day === day && cell.time === time ? "selected-box" : ""
                }`}
                onClick={() => handleClick(day, time, weekNum)}
              >
                {content}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TableContent;
