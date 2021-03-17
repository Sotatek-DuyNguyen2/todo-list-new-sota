import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from '../../image/calendar.png';
import arrow from '../../image/arrow.png';
import './DatePiority.css';

const DatePiority = (props) => {
    const [startDate, setStartDate] = useState(props.isDetail ? new Date(props.dateDetail) : new Date());
    const [piority, setPiority] = useState(props.isDetail ? props.piorityDetail : 'Normal');
    const handleChangeDate = (date) => {
        setStartDate(date);
        props.date(date);
    }
    const changePiority = (value) => {
        setPiority(value);
        props.piority(value);
    }
    return (
        <div className="date-piority">
            <div className="date">
                <label className="title-label">Due Date</label>
                <div className="date-icon">
                    <DatePicker dateFormat="dd MMM yyyy"
                        selected={startDate} onChange={handleChangeDate} />
                    <span className="box-icon">
                        <img className="icon-calendar" alt="" src={calendar} />
                    </span>
                </div>
            </div>
            <div className="piority">
                <label className="title-label">Piority</label>
                <div className="dropdown-piority">
                    <div className="piority-icon">
                        <div className="choose">
                            <p className="text-choose"> {piority}
                                <span className="icon-piority">
                                    <img className="icon-dropdown" src={arrow} alt="" />
                                </span>
                            </p>
                        </div>
                        <div className="list-piority">
                            <ul className="content-piority">
                                <li className="item-piority" id="low" onClick={() => changePiority("Low")}>Low</li>
                                <li className="item-piority" id="normal" onClick={() => changePiority("Normal")}>Normal</li>
                                <li className="item-piority" id="high" onClick={() => changePiority("High")}>High</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default DatePiority
