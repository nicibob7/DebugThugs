import React, { useState, useEffect } from "react";
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

  const [week, setWeek] = useState(0)
  const [weekInc,setWeekInc] = useState(0)

  const [weekDates,setWeekDates] = useState([])

  const [date,setDate] = useState("")

  const [cell, setCell] = useState({ day: "", time: "" });

  const handleClick = (day, time, weekNum) => {
    setCell({ day, time, weekNum });
  };

  const changeWeek =(incDec) => {
    setWeekInc(incDec)
  }

  const getWeek = () => {
    const currDate = new Date()
    const year = new Date().getFullYear()
    const startDate = new Date(year,0,1)

    const weekDays = []

    let weekNum = week;
    let newDate;

    if(!week){
      let days = Math.floor((currDate - startDate) / (24*60*60*1000))
      weekNum = Math.ceil(days/7)
    }

    let date = (1 + (weekNum - 1) * 7)
    for(let i=1;i<8;i++){
      newDate = new Date(year,0,date+i)
      weekDays.push(`${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`)
    }

    setWeek(weekNum)
    setWeekDates(weekDays)
    setDate(`${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`)
  }

  useEffect(() => {
    getWeek()

  },[week])

  console.log(cell)

  return (
    <div id="timetable" data-testid="timetable">
      <div className="week-nav">

        <button id="left"  >{"<"}</button>

        <p id="week-number">Week {week}</p>

        <button id="right">{">"}</button>

      </div>
      <Days days={days} week={week} date={date} weekDates={weekDates}/>
      <div id="table">
        <Times timeSlots={timeSlots} cell={cell} />
        <TableContent days={days} cell={cell} weekNum={week} timeSlots={timeSlots} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default TimeTable;
