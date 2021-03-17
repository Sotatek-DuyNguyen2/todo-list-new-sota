import './style.sass';
import ItemTask from '../ItemTask';

const TodoList = () => {
    const updateSearchTask = () => {

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
                    <ItemTask /> 
                </div>
            </div>
        </div>
    )
}

export default TodoList
