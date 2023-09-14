import React, { useState, useEffect } from 'react'
import axios from "axios"

const TableContent = ({ array, dayRefs, days, cell, weekNum, timeSlots, handleClick }) => {
  const [entries, setEntries] = useState([]);
  const [cellContent, setCellContent] = useState("");

  // Fetches all of the entries when the page is loaded & updated
  // async function getEntries() {
  //   try {
  //     const response = await fetch("https://debugthugsapi.onrender.com/timetable");
  //     const data = await response.json();
  //     const arr = data.entry;
  //     setEntries(arr);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // function populateTable() {
  //   // Find the matching entry for the current cell
  //   const matchedEntry = entries.find((entry) => {
  //     const cellTime = cell.time.split(" - ");
  //     const startTime = cellTime[0];
  //     const endTime = cellTime[1];
  
  //     return (
  //       entry.weekNum === weekNum &&
  //       entry.day === cell.day &&
  //       entry.time >= startTime &&
  //       entry.time <= endTime
  //     );
  //   });
  
  //   // Set the content for the cell
  //   if (matchedEntry) {
  //     setCellContent(matchedEntry.content);
  //   } else {
  //     setCellContent("");
  //   }

  // }

  // useEffect(() => {
  //   getEntries();
  // }, []);

  // useEffect(() => {
  //   populateTable()
  // }, [cell, weekNum, entries]);

  function getContent() {
    for(let entry in array){
      const el = array[entry]
      if(cell.day == el.day && cell.weekNum == el.weekNum){
        const cellTime = cell.time.split(" - ")
        if(cellTime[0] == el.time){
          cell.content = el.content
        }
      }
    }
  }

  useEffect(() => {
    getContent()
  },[cell])

  return (
    <div id="content">
      {days.map((day, dayIndex) => (
        <div key={dayIndex} className="row" ref={ el => dayRefs.current[dayIndex] = el}>
          {timeSlots().map((time, timeIndex) => {
            const content =
              cell.day === day &&
              cell.time === time &&
              cellContent !== "" ? cellContent : "";

            return (
              <div
                key={boxIndex}
                className={`box ${
                  cell.day === day && cell.time === time ? "selected-box" : ""
                }`}
                onClick={() => handleClick(day, time, weekNum)}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TableContent;
