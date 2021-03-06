import ItemDetail from '../ItemDetail';
import './style.sass';
import {removeTask, checkedTask} from '../../store/actions/tasks';
import { connect } from 'react-redux';
import { useState } from 'react';

interface ITaskItemProps {
    task: any,
    key: any,
    removeTask: any,
    checkedTask: any,
}

const ItemTask = ({task, removeTask, checkedTask}: ITaskItemProps) => {
    console.log(task);
    
    const [isDetail, setDetail] = useState(false);
    const handleRemoveTask = () => {
        removeTask(task); 
    }
    const changeIsDetail = () => {
        setDetail(!isDetail);
    }
    const toggleDetail = () => {
        setDetail(!isDetail);
    }
    const toggleChecked = () => {
        checkedTask(task);
    }
    return (
        <div className="">
            <div className="content-item">
                <label className="content-item__checkbox">
                    <input type="checkbox" checked={task.isChecked} onChange={toggleChecked}/>
                    <span style={{marginLeft:"0.5rem"}}>{task.title}</span>
                </label>
                <div className="content-item__btn">
                    <button className="btn-detail" onClick={toggleDetail}>
                        <span className="text-btn">Detail</span>
                    </button>
                    <button className="btn-remove" onClick={handleRemoveTask}>
                        <span className="text-btn">Remove</span>
                    </button>
                </div>
            </div>


            {isDetail && <ItemDetail task={task} changeIsDetail={changeIsDetail}/> }
            
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        bulk: state.bulk
    }
}
const mapDispatchToProps = {
    removeTask, checkedTask
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemTask);
