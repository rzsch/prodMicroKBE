function ItemList(props) {
    let priceTimesAmount = props.values.price * props.values.amount
    return (
        <div className="cart-item">
            <div>{props.values.name}</div>
            <div className="cart-flex-container">
                <div className="cart-price">
                    Price: {props.values.amount} x {props.values.price} € = {priceTimesAmount} €<br/>
                    <a href={props.values.link}>More Details</a>
                </div>
                <button className="small-button remove-from-cart" onClick={() => props.removeFromCart(props.values.id)}>
                    -1
                </button>
            </div>
        </div>
    );
}

export default ItemList;