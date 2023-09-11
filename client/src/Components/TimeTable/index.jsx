import React, { useState } from 'react';
import './style.css';

const TimeTable = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const timeSlots = () => {
    const timeSlots = [];
    for (let hour = 0; hour < 24; hour += 2) {
      const startTime = `${hour.toString().padStart(2, '0')}:00`;
      const endTime = `${(hour + 2).toString().padStart(2, '0')}:00`;
      timeSlots.push(`${startTime} - ${endTime}`);
    }
    return timeSlots;
  };

  const [selectedCell, setSelectedCell] = useState({ day: null, time: null });

  const handleCellClick = (day, time) => {
    setSelectedCell({ day, time });
  };
  console.log(selectedCell)

  return (
    <div id="timetable">
      <div id="days">
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className="day">
            {day}
          </div>
        ))}
      </div>
      <div id="table">
        <div id="times">
          {timeSlots().map((time, timeIndex) => (
            <div
              key={timeIndex}
              className={`time ${selectedCell.time === time ? 'selected-time' : ''}`}
            >
              {time}
            </div>
          ))}
        </div>
        <div id="content">
          {days.map((day, dayIndex) => (
            <div key={dayIndex} className="row">
              {timeSlots().map((time, timeIndex) => (
                <div
                  key={timeIndex}
                  className={`box ${selectedCell.day === day && selectedCell.time === time ? 'selected-box' : ''}`}
                  onClick={() => handleCellClick(day, time)}
                >
                  {selectedCell.day === day && selectedCell.time === time ? 'box' : ''}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeTable;
