import './itemList.css';

function ItemList(props) {
    return (
        <div className="cart-item">
            <div>{props.values.name}</div>
            <div className="flex-container">
                <div className="price-and-details">
                    Price: {props.values.price} €<br/>
                    <a href={props.values.link}>More Details</a>
                </div>
                <button className="remove-from-cart">
                    remove
                </button>
            </div>
        </div>
    );
}

export default ItemList;