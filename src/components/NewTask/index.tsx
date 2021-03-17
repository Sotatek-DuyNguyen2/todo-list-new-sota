import './style.sass';
import DatePiority from '../DatePiority';
import { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../store/actions/tasks';

interface INewTaskProps {
    addTaskAction: any
}

const NewTask = ({addTaskAction}: INewTaskProps) => {
    const [task, setTask] = useState({
        title: "",
        description: "",
        date: new Date(),
        piority: "Normal",
        isChecked: false,
    })
    const handleChange = (e: any) => {
        setTask({...task, [e.target.name]:e.target.value})
    } 
    const setDate = (date: any) => {
        setTask({...task, date});
    }
    const setPiority = (piority: string) => {
        setTask({...task, piority});
    }
    const addNewTask = () => {
        if (task.title !== "") {
            addTaskAction(task)
            setTask({
                ...task,
                title: "",
                description: "",
            })
        } else {
            alert("Title is required!");
        }      
    }
    return (
        <div className="task">
            <p className="task__title">New Task</p>
            <div className="task__input">
                <input type="text" name="title" value={task.title}
                        onChange={handleChange} 
                        placeholder="Add new task" />
            </div>
            <div className="task__description">
                <div className="task__description--label">Description</div>
                <textarea  name="description" value={task.description} 
                            onChange={handleChange}  placeholder="Add description" />
            </div>
            <DatePiority dateDetail={""} piorityDetail={""} isDetail={false} setDate={setDate} setPiority={setPiority} />
            <button className="task__btn" onClick={addNewTask}>
                <span className="task__btn--text">Add</span>
            </button>
        </div>
    )
}

const mapDispatchToProps =  {
    addTaskAction: addTask
}
export default connect(null, mapDispatchToProps)(NewTask);
