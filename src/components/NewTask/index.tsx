import './style.sass';
import DatePiority from '../DatePiority';

const NewTask = () => {
    return (
        <div className="task">
            <p className="task__title">New Task</p>
            <div className="task__input">
                <input type="text" name="title" placeholder="Add new task" />
            </div>
            <div className="task__description">
                <div className="task__description--label">Description</div>
                <textarea  name="description" placeholder="Add description" />
            </div>
            <DatePiority />
            <button className="task__btn">
                <span className="task__btn--text">Add</span>
            </button>
        </div>
    )
}

export default NewTask
