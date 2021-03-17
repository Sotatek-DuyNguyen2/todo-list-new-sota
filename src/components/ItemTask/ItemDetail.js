import React, { useState } from 'react'
import './ItemDetail.css';
import DatePiority from '../../NewTask/DatePiority/DatePiority';
import {updateTask} from '../../../store/actions/tasks';
import { connect } from 'react-redux';

const ItemDetail = ({task, updateTask, changeIsDetail}) => {
    const [newTask, setTask] = useState({
        title: task.title,
        description: task.description,
        date: new Date(task.date),
        piority: task.piority
    });
    const handleChange = (e) => {
        setTask({...newTask, [e.target.name]:e.target.value})
    } 
    const setDate = (date) => {
        setTask({...newTask, date});
    }
    const setPiority = (piority) => {
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
        <div className="content-detail">
            <input className="title-task" type="text" name="title"
                value={newTask.title} onChange={handleChange}/>
            <div className="description">
                <label  className="title-label">Description</label>
                <textarea type="text" id="description-detail" name="description"
                        value={newTask.description} 
                        onChange={handleChange}/>
            </div>
            <DatePiority isDetail={true} 
                        date={setDate} piority={setPiority}
                        dateDetail={task.date} piorityDetail={task.piority}/>
            <button className="btn-update" onClick={handleUpdateTask}>
                <span className="text-btn">Update</span>
            </button>
        </div>
    )
}
const mapDispatchToProps =  {
    updateTask,
}
export default connect(null, mapDispatchToProps)(ItemDetail);
