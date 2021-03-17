import arrow from '../image/arrow.png';
import calendar from '../image/calendar.png';
import DatePicker from "react-datepicker";
import './style.sass'
import "react-datepicker/dist/react-datepicker.css";

const DatePiority = () => {

    const handleChangeDate = () => {

    }
    return (
        <div className="date-piority">
            <div className="date">
                <div className="date__title">Due Date</div>
                <div className="date__box">
                    <DatePicker className="date__box--picker"
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
                            low 
                            <span className="dropdown__content--icon">
                                <img src={arrow} alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="list-piority">
                        <ul className="content-piority">
                            <li className="item-piority" id="low">Low</li>
                            <li className="item-piority" id="normal">Normal</li>
                            <li className="item-piority" id="high">High</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatePiority
