import ItemDetail from '../ItemDetail';
import './style.sass';

interface ITaskItemProps {
    task: any,
    key: any
}

const ItemTask = ({task}: ITaskItemProps) => {
    return (
        <div className="container-item">
            <div className="content-item">
                <label className="checkbox">
                    <input type="checkbox" />
                    <span style={{marginLeft:"0.5rem"}}>{task.title}</span>
                </label>
                <div className="">
                    <button className="btn-detail" >
                        <span className="text-btn">Detail</span>
                    </button>
                    <button className="btn-remove" >
                        <span className="text-btn">Remove</span>
                    </button>
                </div>
            </div>


            {/* <ItemDetail /> */}
        </div>
    )
}

export default ItemTask;
