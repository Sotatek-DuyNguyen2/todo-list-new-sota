import './style.sass';
import ItemTask from '../ItemTask';
import { connect } from 'react-redux';
import {removeTask} from '../../store/actions/tasks';
import {searchTask} from '../../store/actions/search';

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
    const updateSearchTask = (e: any) => {
        searchTask(e.target.value);
    }
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
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        tasks: state.tasks,
        // bulk: state.bulk,
        search:state.search
    }
}
const mapDispatchToProps = {
    removeTask,
    searchTask
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
