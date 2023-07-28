import './ItemList.css';

function ItemList(props) {
    return (
        <div className="Basket-item">
            <div>{props.values.name}</div>
            <div className="Flex-container">
                <div className="Price-and-details">
                    Price: {props.values.price} €<br/>
                    <a href={props.values.link}>More Details</a>
                </div>
                <button className="Monitor-remove-from-basket">
                    remove
                </button>
            </div>
        </div>
    );
}

export default ItemList;