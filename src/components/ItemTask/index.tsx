import ItemDetail from '../ItemDetail';
import './style.sass';
import {removeTask} from '../../store/actions/tasks';
import {displayBulkAction} from '../../store/actions/bulk';
import { connect } from 'react-redux';

interface ITaskItemProps {
    task: any,
    key: any,
    removeTask: any
}

const ItemTask = ({task, removeTask}: ITaskItemProps) => {

    const handleRemoveTask = () => {
        removeTask(task); 
    }
    return (
        <div className="">
            <div className="content-item">
                <label className="content-item__checkbox">
                    <input type="checkbox" />
                    <span style={{marginLeft:"0.5rem"}}>{task.title}</span>
                </label>
                <div className="content-item__btn">
                    <button className="btn-detail" >
                        <span className="text-btn">Detail</span>
                    </button>
                    <button className="btn-remove" onClick={handleRemoveTask}>
                        <span className="text-btn">Remove</span>
                    </button>
                </div>
            </div>


            <ItemDetail />
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        bulk: state.bulk
    }
}
const mapDispatchToProps = {
    removeTask,
    displayBulkAction
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemTask);
