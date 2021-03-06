import './style.sass';
import DatePiority from '../DatePiority';
import { useCallback, useMemo, useState } from 'react';
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
    const handleChange = useCallback((e:any)=> {
        setTask({...task, [e.target.name]:e.target.value})
    }, [task]); 

    const setDate = useCallback((date:any) => {
        setTask({...task, date});
    },[task])
    
    const setPiority = useCallback((piority: string) => {
        setTask({...task, piority});
    }, [task]);

    const addNewTask = useCallback(()=>{
        if (task.title !== "") {
            addTaskAction(task)
            setTask({
                ...task,
                title: "",
                description: "",
                date: new Date(),
                piority: "Normal",
            })
        } else {
            alert("Title is required!");
        }      
    },[task])
    return useMemo(() => (
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
            <DatePiority dateDetail={task.date} piorityDetail={task.piority} isDetail={false} setDate={setDate} setPiority={setPiority} />
            <button className="task__btn" onClick={addNewTask}>
                <span className="task__btn--text">Add</span>
            </button>
        </div>
    ), [task, addTaskAction])
}

const mapDispatchToProps =  {
    addTaskAction: addTask
}
export default connect(null, mapDispatchToProps)(NewTask);
