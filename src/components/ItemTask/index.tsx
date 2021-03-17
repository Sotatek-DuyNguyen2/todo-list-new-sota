import ItemDetail from '../ItemDetail';
import './style.sass';
const ItemTask = () => {
    return (
        <div className="container-item">
            <div className="content-item">
                <label className="checkbox">
                    <input type="checkbox" />
                    <span style={{marginLeft:"0.5rem"}}>dsaf</span>
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


            <ItemDetail />
        </div>
    )
}

export default ItemTask;
