import DatePiority from '../DatePiority';
import './style.sass';

const ItemDetail = () => {
    return (
        <div className="content-detail">
            <input className="title-task" type="text" name="title"
                />
            <div className="description">
                <label  className="title-label">Description</label>
                <textarea id="description-detail" name="description"
                       
                        />
            </div>
            {/* <DatePiority isDetail={true} 
                        date={setDate} piority={setPiority}
                        dateDetail={task.date} piorityDetail={task.piority}/> */}
            <button className="btn-update" >
                <span className="text-btn">Update</span>
            </button>
        </div>
    )
}

export default ItemDetail
