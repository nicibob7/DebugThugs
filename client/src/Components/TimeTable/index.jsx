import React, { useState, useEffect, useRef } from "react";
import axios from "axios"
import { Days, Times, TableContent, InputForm } from "../export"
import axios from "axios"
import "./style.css";
import * as ReactDOM from "react-dom"

const TimeTable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const times = ["00:00","02:00","04:00","06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]
  
  const timeSlots = () => {
    const timeSlots = [];
    for (let hour = 0; hour < 24; hour += 2) {
      const startTime = `${hour.toString().padStart(2, "0")}:00`;
      const endTime = `${(hour + 2).toString().padStart(2, "0")}:00`;
      timeSlots.push(`${startTime} - ${endTime}`);
    }
    return timeSlots;
  };
  const [year, setYear] = useState(new Date().getFullYear()) // stores current year
  const [week,setWeek] = useState((Math.ceil(Math.floor(((new Date()) - (new Date(year,0,1))) / (24*60*60*1000)/7)+1))%52) // initalize week with current week number
  const [weekDates,setWeekDates] = useState([]) // stores dates of week
  const [date,setDate] = useState("")
  const [cell, setCell] = useState({ day: "", time: "", weekNum:"", content:"" });
  const [inputActive, setInputActive] = useState(false)
  const [array,setArray] = useState([])
  const dayRefs = useRef([])

  const [refresh,setRefresh] = useState(0)

  async function getTimetable() {
    const emptyArray = []
    axios.get("https://debugthugsapi.onrender.com/timetable")
    .then(resp => {
      const data = resp.data.entry
      const arr = data.filter(e => e.weekNum == week)
      setArray(arr)
    })
  }

  // Gets the cell information when user clicks and sets active cell
  const handleClick = (day, time, weekNum,content) => {
    
    setCell({ day, time, weekNum,content });
    setInputActive(true)
  };
  
  const resolveWeek = () => {
    if (week%52 == 0){
      return 52
    }else if(week%52 < 0){
      return 52+(week%52)
    }else{
      return week%52
    }
  }
  const getWeek = () => {
    const weekDays = []
    let weekNum = week;
    let newDate;
    let dateA = (1 + (weekNum - 1) * 7)
    // console.log(weekNum,year,dateA)

    for(let i=1;i<8;i++){
      newDate = new Date(year,0,dateA+i) // change year here
      weekDays.push(`${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`)
    }
    // console.log(weekNum)
    
    setWeek(weekNum)
    if(weekNum == 0){
      setWeek(52)
      setYear(year-1)
    }
    if(weekNum > 52){
      setWeek(1)
      setYear(year+1)
    }
    setWeekDates(weekDays)

    setDate(`${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`)
    try {
    } catch (error) {
      
    }
  }

  function pruneTable() {
    const dR = dayRefs.current
    for(let idx in dR){
      const row = dR[idx]
      for(let i=0;i<12;i++){
        const box = row.childNodes[i]
        if(box.textContent > 1){
          console.log(box)
        }
        box.textContent = null
        box.style.backgroundColor = "rgb(216, 216, 211)"
      }
    }
  }

  function loadEntries() {
    for(let entry in array){
      const e = array[entry]
      const dayNum = resolveDay(e)
      const idx = times.indexOf(e.time)
      if(times.includes(e.time)){
        dayRefs.current[dayNum].childNodes[idx].textContent = e.content
        dayRefs.current[dayNum].childNodes[idx].style.backgroundColor = "white"
        // console.log(dayRefs.current[dayNum].childNodes[idx])
      }
    }
  }

  const resolveDay = (entry) => {
    switch (entry.day) {
        case "Monday": 
            return 0
        case "Tuesday":
            return 1
        case "Wednesday":
            return 2
        case "Thursday":
            return 3
        case "Friday":
            return 4
        case "Saturday":
            return 5
        case "Sunday":
            return 6
        default:
            return 0
    }
  }

  useEffect(() => {
    getWeek()
    getTimeTable()
    displayEntries()
    loopEntries()
  },[week])

  useEffect(() => {
    getTimetable()
    pruneTable()
    loadEntries()
  },[week,refresh])
  // console.log(cell)
  console.log("Fetched Entries", displayEntries())

  return (
    <div id="timetable" data-testid="timetable">
      {inputActive && (
        <InputForm times={times} setInputActive={setInputActive} dates={weekDates} cell={cell}/>
      )}
      <div className="week-nav">
        <button id="left" onClick={(() => setWeek(week-1))} >{"<"}</button>
        <div className="week-year">
          <p>{year}</p>
          <p id="week-number">Week {resolveWeek()}</p>
        </div>
        <button id="right" onClick={(() => setWeek(week+1))} >{">"}</button>
        <button id="refresh" onClick={() => setRefresh(refresh+1)}>REFRESH</button>
      </div>
      <Days days={days} week={week} date={date} weekDates={weekDates}/>
      <div id="table">
        <Times timeSlots={timeSlots} cell={cell} />
        <TableContent array={array} dayRefs={dayRefs} days={days} cell={cell} weekNum={week} timeSlots={timeSlots} handleClick={handleClick} />
      </div>
    </div>
  );
};
export default TimeTable;
