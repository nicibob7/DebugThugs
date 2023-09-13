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

  const [weekInc,setWeekInc] = useState(0) // contains inc/dec of week number

  const [year, setYear] = useState(new Date().getFullYear()) // stores current year

  const [week,setWeek] = useState(Math.ceil(Math.floor(((new Date()) - (new Date(year,0,1))) / (24*60*60*1000)/7)+1)) // initalize week with current week number

  const [weekDates,setWeekDates] = useState([]) // stores dates of week

  const [date,setDate] = useState("")

  const [cell, setCell] = useState({ day: "", time: "", weekNum:"" });

  const [calls,setCalls] = useState(0)

  const handleClick = (day, time, weekNum) => {
    setCell({ day, time, weekNum });
  };

  const changeWeek = (incDec) => {
    setWeekInc(incDec)
  }

  const updateYear = () => {
    if(week<1){
      setWeek(52)
      setYear(year-1)
    }
    else if(week>52){
      setWeek(1)
      setYear(year+1)
    }
  }

  const resolveWeek = () => {
    console.log(week)
    if (week%52 == 0 && calls > 0){
      return 52
    }else{
      return week%52
    }
  }

  const getWeek = () => {

    const currDate = new Date()
    const startDate = new Date(year,0,1)

    const weekDays = []

    let weekNum = week;
    let newDate;

    weekNum += weekInc;
    

    let date = (1 + (weekNum - 1) * 7)
    for(let i=1;i<8;i++){
      newDate = new Date(year,0,date+i) // change year here

      weekDays.push(`${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`)
    }

    setWeek(weekNum)
    setWeekDates(weekDays)
    setDate(`${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`)
  }

  useEffect(() => {
    getWeek()
    setWeekInc(0)
    setCalls(calls+1)

  },[weekInc])

  useEffect(() => {
    updateYear()
  },[year])


  return (
    <div id="timetable" data-testid="timetable">
      <div className="week-nav">

        <button id="left" onClick={(() => changeWeek(-1))} >{"<"}</button>

        <p id="week-number">Week {resolveWeek()}</p>

        <button id="right" onClick={(() => {changeWeek(1)})} >{">"}</button>

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
