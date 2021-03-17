import './style.sass';
import ItemTask from '../ItemTask';
import { connect } from 'react-redux';
import {removeTask} from '../../store/actions/tasks';
import {searchTask} from '../../store/actions/search';
import { useEffect, useState } from 'react';

interface ITodoListProps {
    tasks: any,
    search: any,
    removeTask: any,
    searchTask: any,
}
const TodoList = ({
    tasks, search,
    removeTask,
    searchTask
}: ITodoListProps) => {
    const [bulk, setBulk] = useState(false);
    const [taskRemove, setTaskRemove] = useState({});
    const updateSearchTask = (e: any) => {
        searchTask(e.target.value);
    }
    const handleRemoveTask = () => {
        removeTask(taskRemove)
    }
    useEffect(() => {
        const task = tasks.find((item:any) => item.isChecked === true);
        if (task){
            setBulk(true);
            setTaskRemove(task)
        } else {
            setBulk(false);
            setTaskRemove({})
        }
    }, [tasks]);
    return (
        <div className="todo-list">
            <div className="list">
                <p className="list__title">Todo List</p>
                <div className="list__search">
                <input type="text" 
                        placeholder="Search ..." 
                        onChange={updateSearchTask}/>
                </div>
                <div>
                {   search ? 
                    tasks = tasks.filter((item:any) => item.title.substr(0,search.length) === search).map((task:any,key:any) => <ItemTask key={key} task={task} />) :
                    tasks.map((task: any,key:any) => <ItemTask key={key} task={task} />)
                }
                </div>
            </div>
            {bulk && <div className="bulk">
                <p className="bulk__title">Bulk Action:</p>
                <div className="">
                    <button className="btn-done-bottom">
                        <span className="text-btn-bottom">Done</span>
                    </button>
                    <button className="btn-remove-bottom" onClick={handleRemoveTask}>
                        <span  className="text-btn-bottom">Remove</span>
                    </button>
                </div>
            </div>}
            
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        tasks: state.tasks,
        search:state.search
    }
}
const mapDispatchToProps = {
    removeTask,
    searchTask
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
