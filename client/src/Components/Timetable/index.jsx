import React, { useState } from "react";
import { Days, Times, TableContent } from "../export"
import axios from "axios"
import "./style.css";

const TimeTable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const timeSlots = () => {
    const timeSlots = [];
    for (let hour = 0; hour < 24; hour += 2) {
      const startTime = `${hour.toString().padStart(2, "0")}:00`;
      const endTime = `${(hour + 2).toString().padStart(2, "0")}:00`;
      timeSlots.push(`${startTime} - ${endTime}`);
    }
    return timeSlots;
  };

  const [cell, setCell] = useState({ day: "", time: "" });

  const handleClick = (day, time) => {
    setCell({ day, time });
  };
  console.log(cell)

  return (
    <div id="timetable" data-testid="timetable">
      <Days days={days}/>
      <div id="table">
        <Times timeSlots={timeSlots} cell={cell} />
        <TableContent days={days} cell={cell} timeSlots={timeSlots} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default TimeTable;
