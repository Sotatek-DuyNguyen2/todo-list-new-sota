import DatePiority from '../DatePiority';
import './style.sass';

const ItemDetail = () => {
    return (
        <div className="detail">
            <input className="detail__title" type="text" name="title" />
            <div className="detail__description">
                <div  className="detail__description--label">Description</div>
                <textarea id="detail__description--input" name="description" />
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
