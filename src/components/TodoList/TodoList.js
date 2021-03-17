import React from 'react'
import './TodoList.css';
import ItemTask from './ItemTask/ItemTask';
import { connect } from 'react-redux';
import {removeTask} from '../../store/actions/tasks';
import {displayBulkAction} from '../../store/actions/bulk';
import {searchTask} from '../../store/actions/search';

const TodoList = ({tasks, bulk, search, removeTask, displayBulkAction, searchTask}) => {
    // if (search) {
    //     const length = search.length;
    //     tasks = tasks.filter(item => item.title.substr(0,length) === search);
    // }
    const handleRemoveTask = () => {
        removeTask(bulk.task);
        displayBulkAction();
    }
    const updateSearchTask = (e) => {
        searchTask(e.target.value);
    }
    return (
        <div className="list">
            <div className="content-list">
                <p className="title">To Do List</p>
                <div className="search-input">
                    <input type="text" placeholder="Search ..." onChange={updateSearchTask}/>
                </div>   
                <div>
                {   search ? 
                tasks = tasks.filter(item => item.title.substr(0,search.length) === search).map((task,key) => <ItemTask key={key} task={task} />) :
                tasks.map((task,key) => <ItemTask key={key} task={task} />)
                }
                </div>     
            </div>

            {
                bulk.isDisplay && 
                <div className="bottom-list">
                    <p className="title-bulk">Bulk Action:</p>
                    <div className="right-bottom">
                        <button className="btn-done-bottom">
                            <span className="text-btn-bottom">Done</span>
                        </button>
                        <button className="btn-remove-bottom" onClick={handleRemoveTask}>
                            <span  className="text-btn-bottom">Remove</span>
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        bulk: state.bulk,
        search:state.search
    }
}
const mapDispatchToProps = {
    removeTask,
    displayBulkAction,
    searchTask
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
