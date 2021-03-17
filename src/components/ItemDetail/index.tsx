import DatePiority from '../DatePiority';
import './style.sass';
import {updateTask} from '../../store/actions/tasks';
import { connect } from 'react-redux';
import { useState } from 'react';

interface IDetailItemProps {
    task: any,
    updateTask: any,
    changeIsDetail: any
}

const ItemDetail = ({task, updateTask, changeIsDetail}: IDetailItemProps) => {
    const [newTask, setTask] = useState({
        title: task.title || "",
        description: task.description || "",
        date: new Date(task.date),
        piority: task.piority
    });
    const handleChange = (e: any) => {
        setTask({...newTask, [e.target.name]:e.target.value})
    } 
    const setDate = (date: any) => {
        setTask({...newTask, date});
    }
    const setPiority = (piority: any) => {
        setTask({...newTask, piority});
    }
    const handleUpdateTask = () => {
        console.log(newTask);
        if (newTask.title === "") {
            alert("Title is required!")
        } else {
            updateTask({
                oldTask: task,
                newTask
            })
            alert("Update task successfully!")
            changeIsDetail();
        }
        
        
    }
    return (
        <div className="detail">
            <input className="detail__title" onChange={handleChange}
                    value={newTask.title} type="text" name="title" />
            <div className="detail__description">
                <div  className="detail__description--label">Description</div>
                <textarea id="detail__description--input" onChange={handleChange}
                            value={newTask.description} name="description" />
            </div>
            <DatePiority isDetail={true} 
                        setDate={setDate} setPiority={setPiority}
                        dateDetail={task.date} piorityDetail={task.piority}/>
            <button className="detail__btn" onClick={handleUpdateTask}>
                <span className="detail__btn--text">Update</span>
            </button>
        </div>
    )
}

const mapDispatchToProps =  {
    updateTask,
}
export default connect(null, mapDispatchToProps)(ItemDetail);
