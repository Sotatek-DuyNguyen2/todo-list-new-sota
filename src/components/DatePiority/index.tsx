import arrow from '../image/arrow.png';
import calendar from '../image/calendar.png';
import DatePicker from "react-datepicker";
import './style.sass'
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

interface IDatePiority {
    isDetail: boolean,
    setDate: any,
    setPiority: any
}

const DatePiority = ({isDetail, setDate, setPiority}:IDatePiority) => {

    const [startDate, setStartDate] = useState(isDetail ? new Date() : new Date());
    const [piority, changePiority] = useState(isDetail ? "" : 'Normal');

    const handleChangeDate = (date: any) => {
        setStartDate(date);
        setDate(date);
    }
    const handleChange = (value: string) => {
        changePiority(value);
        setPiority(value);
    }
    return (
        <div className="date-piority">
            <div className="date">
                <div className="date__title">Due Date</div>
                <div className="date__box">
                    <DatePicker dateFormat="dd MMM yyyy" 
                        className="date__box--picker" selected={startDate}
                        onChange={handleChangeDate}/>
                    <span className="date__box--icon">
                        <img src={calendar} alt="date-icon" />
                    </span>
                </div>
            </div>

            <div className="piority">
                <div className="piority__title">Piority</div>
                <div className="piority__drodown">
                    <div className="dropdown">
                        <div className="dropdown__content">
                            {piority} 
                            <span className="dropdown__content--icon">
                                <img src={arrow} alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="list-piority">
                        <ul className="content-piority">
                            <li className="item-piority" id="low" onClick={() => handleChange("Low")}>Low</li>
                            <li className="item-piority" id="normal" onClick={() => handleChange("Normal")}>Normal</li>
                            <li className="item-piority" id="high" onClick={() => handleChange("High")}>High</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatePiority
