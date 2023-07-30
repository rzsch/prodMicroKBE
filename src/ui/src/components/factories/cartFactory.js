import ItemList from './itemTemplates/itemList.js'
import './cartFactory.css';

function CartFactory(props) {

    let monitorsInCart = props.inCart

    let totalPrice = 0;
    let productsInCart = 0
    for(let index = 0; index < monitorsInCart.length; index++) {
        let priceTimesAmount = monitorsInCart[index].price * monitorsInCart[index].amount
        totalPrice += priceTimesAmount
        productsInCart += monitorsInCart[index].amount
    }

    return (
        <div>
            <div className="cart-title">
                Cart
            </div>
            {monitorsInCart.map(monitor=> <ItemList key={monitor.id} values={monitor} removeFromCart={props.removeFromCart} />)}
            <div className="cart-total">
                Total Items: {productsInCart}
                <button className="remove-all-from-cart" onClick={props.clearCart}>
                    remove all
                </button>
                <p className="cart-total-price">Total Price: {totalPrice} €</p>
            </div>
            <button className="buy-cart">
                to checkout
            </button>
        </div>
   );
}

export default CartFactory;