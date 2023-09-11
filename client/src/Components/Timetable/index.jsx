import React from 'react';
import './timetable.css';
import TimetableItem from '../TimetableItem';

const Timetable = () => {
    const task = {
        day: 2,
        start: 14,
        end: 17,
    };

    return (
        <div className="timetable-grid">
            <div className="timetable-grid-day">
                Monday
                <TimetableItem />
            </div>
            <div className="timetable-grid-day">Tuesday</div>
            <div className="timetable-grid-day">Wednesday</div>
            <div className="timetable-grid-day">Thursday</div>
            <div className="timetable-grid-day">Friday</div>
            <div className="timetable-grid-day">Saturday</div>
            <div className="timetable-grid-day">Sunday</div>
        </div>
    );
};

export default Timetable;
