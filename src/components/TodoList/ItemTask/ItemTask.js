import React, { useState } from 'react'
import './ItemTask.css';
import {removeTask} from '../../../store/actions/tasks';
import {displayBulkAction} from '../../../store/actions/bulk';
import { connect } from 'react-redux';
import ItemDetail from './ItemDetail';

const ItemTask = ({task, bulk, removeTask, displayBulkAction}) => {
    const [checked, setChecked] = useState(false);
    const [isDetail, setDetail] = useState(false);
    const handleRemoveTask = () => {
        removeTask(task);
        // setChecked(false);
        if(bulk.isDisplay && bulk.task === task) {
            displayBulkAction();
        }
    }
    const handleChangeChecked = () => {
        setChecked(!checked);
        displayBulkAction(task);
    }
    const changeIsDetail = () => {
        setDetail(!isDetail);
    }
    return (
        <div className="container-item">
            <div className="content-item">
                <label className="checkbox">
                    <input type="checkbox" onChange={handleChangeChecked} checked={checked}/>
                    <span style={{marginLeft:"0.5rem"}}>{task.title}</span>
                </label>
                <div className="">
                    <button className="btn-detail" onClick={()=>setDetail(!isDetail)}>
                        <span className="text-btn">Detail</span>
                    </button>
                    <button className="btn-remove" onClick={handleRemoveTask}>
                        <span className="text-btn">Remove</span>
                    </button>
                </div>
            </div>
            { isDetail && <ItemDetail task={task} changeIsDetail={changeIsDetail}/> }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        bulk: state.bulk
    }
}
const mapDispatchToProps = {
    removeTask,
    displayBulkAction
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemTask);